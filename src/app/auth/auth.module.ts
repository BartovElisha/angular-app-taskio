import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { FieldErrorComponent } from './field-error/field-error.component';



@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    FieldErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SigninComponent,
    SignupComponent    
  ]
})
export class AuthModule { }
