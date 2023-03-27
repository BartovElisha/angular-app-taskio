import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Project, ProjectStatus } from 'src/app/app.component';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
    project: Project | null = null;

    editProjectForm = new FormGroup({
        title: new FormControl<string | null>('', {
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
        private activeRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.activeRoute.paramMap.pipe(
            switchMap(params => {
                const id = params.get('id') as string;
                return this.api.getOneProject(id);
            })
        ).subscribe({
            next: (data: Project) => {
                this.project = data;
                const title = data.title || '';
                const description = data.description || '';
                const status = data.status || 'PLANNED';
                this.editProjectForm.get('title')?.setValue(title);
                this.editProjectForm.get('description')?.setValue(description);
                this.editProjectForm.get('status')?.setValue(status);
            },
            error: (err) => console.log(err)
        })
    }

    onSubmit() {
        if (this.editProjectForm.invalid || !this.project?._id) {
            return;
        }

        this.api.updateProject(this.project?._id, this.editProjectForm.value).subscribe({
            next: (data: Project) => {
                this.router.navigate(['projects']);
            },
            error: (err) => console.log(err)
        })
    }
}
