import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project, ProjectStatus } from 'src/app/app.component';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent {
    addProjectForm = new FormGroup({
        title: new FormControl('', {
            validators: [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(256)
            ]
        }),
        description: new FormControl('', {
            validators: [
                Validators.minLength(2),
                Validators.maxLength(1024)
            ]
        }),
        status: new FormControl<ProjectStatus | null>('PLANNED', {
            validators: [
                Validators.required
            ]
        }),
        image: new FormControl('')
    })

    constructor(
        private api: ApiService,
        private router: Router
    ) { }

    onSubmit() {
        if (this.addProjectForm.invalid) {
            return;
        }

        this.api.addProject(this.addProjectForm.value).subscribe({
            next: (data: Project) => {
                this.router.navigate(['projects']);
            },
            error: (err) => console.log(err)

        })
    }
}
