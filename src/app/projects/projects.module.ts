import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditProjectComponent } from './edit-project/edit-project.component';



@NgModule({
  declarations: [
    ProjectCardComponent,
    ProjectPageComponent,
    AddProjectComponent,
    EditProjectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ProjectCardComponent,
    ProjectPageComponent
  ]
})
export class ProjectsModule { }
