import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskPageComponent } from './task-page/task-page.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TaskPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }
