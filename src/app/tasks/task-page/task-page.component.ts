import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/app.component';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})

export class TaskPageComponent implements OnInit {

    tasks: Array<Task> = []

    addTaskForm = new FormGroup({
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
        })
    })

    constructor(private api: ApiService) { }

    getTasks() {
        this.api.getTasks().subscribe({
            next: (data: Array<Task>) => {
                this.tasks = data;
            },
            error: (err) => console.log(err)
        })
    }

    ngOnInit(): void {
        this.getTasks();
    }

    onSubmit() {
        if (this.addTaskForm.invalid) {
            return;
        }

        this.api.addTask(this.addTaskForm.value).subscribe({
            next: (data: Task) => {
                this.getTasks();
            },
            error: (err) => console.log(err)
        })
    }

    onDelete(task: Task) {
        if(!task._id) {
            return;
        }

        this.api.deleteTask(task._id).subscribe({
            next: (data: Task) => {
                this.getTasks();
            },
            error: (err) => console.log(err)
        });
    }
}
