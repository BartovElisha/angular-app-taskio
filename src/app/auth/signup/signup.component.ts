import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm = new FormGroup({
      name: new FormControl('', {
          validators: [Validators.required, Validators.maxLength(10)]
      }),
      email: new FormControl('', {
          validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', {
          validators: [Validators.required, Validators.minLength(6)]
      })
  });

  getFieldControl(field: string): FormControl {
    return this.signupForm.get(field) as FormControl;
  }

  onSubmit() {
      if (this.signupForm.invalid) {
          return;
      }

      console.log(this.signupForm.value);
  }

}
