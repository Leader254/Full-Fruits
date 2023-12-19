import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupUpPageComponent } from './components/signup-up-page/signup-up-page.component';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "landing", component: LandingComponent},
  { path: "product-details/:id",component: ProductDetailsComponent },
  { path: "login", component: LoginPageComponent, pathMatch: 'full' },
  { path: "signUp", component: SignupUpPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
