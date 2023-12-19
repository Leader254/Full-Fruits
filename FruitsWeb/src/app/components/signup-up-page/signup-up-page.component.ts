import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControlName, AbstractControl } from '@angular/forms';
import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GenericValidator } from '@app/shared/generic-validators';
import { PasswordMatcher } from '@app/shared/password-matcher';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-signup-up-page',
  templateUrl: './signup-up-page.component.html',
  styleUrls: ['./signup-up-page.component.css']
})
export class SignupUpPageComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements!: ElementRef[];

  public signUpForm!: FormGroup;
  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private genericValidator: GenericValidator;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router ,    private messageService: MessageService
    ) 
  { 
    this.genericValidator = new GenericValidator();
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validator: PasswordMatcher.match });
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


  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    // Merge the blur event observable with the valueChanges observable
    merge(this.signUpForm.valueChanges, ...controlBlurs).pipe(
      debounceTime(800)
    ).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.signUpForm);
    });
  }


  signUp() {
    this.http.post<any>("https://product-server-l5ha.onrender.com/signupUsersList", this.signUpForm.value)
      .subscribe(
        res => {
          this.signUpForm.reset();
          this.showSuccess("Registration Successful");
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1000); 
        },
        err => {
          this.showError('Something went wrong');
        }
      );
  }
}
