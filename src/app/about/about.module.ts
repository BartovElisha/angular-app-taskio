import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactInfoComponent } from './contact-info/contact-info.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    ContactInfoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AboutPageComponent
  ]
})
export class AboutModule { }
