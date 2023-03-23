import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/app.component';
import { ApiService } from 'src/app/core/api.service';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  constructor(
        private api: ApiService,
        private router: Router,
        private auth: AuthService
  ) {  }

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

    this.api.login(this.signinForm.value).subscribe({
        next: (data: User) => {
            // console.log(data);
            if (data.token) this.api.setToken(data.token)
            this.router.navigate([this.auth.redirectUrl]);
        },
        error: (err) => console.log(err)
    })
  }
}
