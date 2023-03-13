import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
    contactForm = new FormGroup({
        name: new FormControl('', {
            validators: [Validators.required, Validators.minLength(2)]
        }),
        email: new FormControl('', {
            validators: [Validators.required, Validators.email]
        }),
        comment: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6)]
        })
    })

    getFieldControl(fieldName: string): FormControl {
        return this.contactForm.get(fieldName) as FormControl;
    }

    onSubmit() {
        if (this.contactForm.invalid) {
            return;
        }

        console.log(this.contactForm.value);
    }
}
