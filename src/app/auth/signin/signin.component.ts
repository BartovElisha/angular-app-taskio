import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  signinForm = new FormGroup({
      email: new FormControl('', {
          validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', {
          validators: [Validators.required, Validators.minLength(6)]
      })
  })

  getFieldControl(field: string): FormControl {
    return this.signinForm.get(field) as FormControl;
  }

  onSubmit() {
      if (this.signinForm.invalid) {
          return;
      }

      console.log(this.signinForm.value);
  }
}
