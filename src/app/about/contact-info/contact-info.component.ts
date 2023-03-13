import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent {
    @Input() formField?: FormControl<any>;

    fieldErr(): string {
        const control = this.formField;
        if (
            !control ||
            !control.errors ||
            !control.dirty ||
            !control.touched
        ) {
            return '';
        }

        if (control.getError('required')) {
            return 'This field is required';
        }

        const minlengthErr = control.getError('minlength');
        if (minlengthErr) {
            return `Value cannot be shorter than ${minlengthErr.requiredLength}`;
        }

        if (control.getError('email')) {
            return 'Email is not valid';
        }

        return '';
    }
}
