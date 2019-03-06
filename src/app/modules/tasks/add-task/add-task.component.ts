import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskServiceService } from 'src/app/core/services/tasks/task-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  private mode;

  taskForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  })

  constructor(private route: ActivatedRoute,
              private taskService: TaskServiceService,
              private router: Router,
              private location: Location) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mode = this.route.snapshot.url[this.route.snapshot.url.length - 1].path;
    if (this.mode === 'edit') {
      this.getTask(id);
    }
  }

  getTask(id): void {
    this.taskService.getTask(id)
      .subscribe(task => this.taskForm.setValue(task));
  }

  saveTask() {
    if (this.mode === 'edit') {
      this.taskService.update(this.taskForm.value);
      this.router.navigate([`/tasks/${this.taskForm.value.id}`]);
    } else {
      this.taskService.addTask({title: this.taskForm.value.title, description: this.taskForm.value.description}).subscribe(
        task =>  this.router.navigate([`/tasks/${task.id}`])
      );
    }
  }

  cancel() {
    if (this.mode === 'edit') {
      this.router.navigate([`/tasks/${this.taskForm.value.id}`]);
    } else {
      this.location.back();
    }
  }

}
