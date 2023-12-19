import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControlName,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  Component,
  OnInit,
  ViewChildren,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { GenericValidator } from '@app/shared/generic-validators';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [MessageService],
})
export class LoginPageComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements!: ElementRef[];

  public loginForm!: FormGroup;
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private messageService: MessageService
  ) {
    this.validationMessages = {
      email: {
        required: 'Required',
        email: 'This email is invalid',
      },
      password: {
        required: 'Required',
        minlength: 'The password length must be greater than or equal to 8',
      },
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  showSuccess(message : string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
    });
  }

  showError(message : string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
    });
  }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngAfterViewInit(): void {
    const controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );

    merge(this.loginForm.valueChanges, ...controlBlurs)
      .pipe(debounceTime(800))
      .subscribe((value) => {
        this.displayMessage = this.genericValidator.processMessages(
          this.loginForm
        );
      });
  }

  login() {
    this.http.get<any>('https://product-server-l5ha.onrender.com/signupUsersList')
    .subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          this.loginForm.reset();
          this.showSuccess("Login Successful");
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1000); 
        } else {
          this.showError("Something went wrong!!");
        }
      },
      (err) => {
        this.showError('Something went wrong');
      }
    );
  }
}
