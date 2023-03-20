import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { LoggerService } from 'src/app/core/logger.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor(
    private logger: LoggerService,
    private api: ApiService,
    private router: Router
  ) {}

  @ViewChild('nameFieldRef') nameField!: ElementRef; 
 
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

  ngOnInit(): void {
    console.log('ngOnInit');        
  }

  ngAfterViewInit(): void {
    this.logger.log('ngAfterViewInit');
    // console.log('ngAfterViewInit');
    
    this.nameField.nativeElement.focus();
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');    
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');  
  }

  onSubmit() {
    if (this.signupForm.invalid) {
        return;
    }

    console.log(this.signupForm.value);

    this.api.signup(this.signupForm.value).subscribe({
        next: (data) => {
            this.router.navigate(['login']);
        },
        error: (err) => console.log(err)
    })
  }
}
