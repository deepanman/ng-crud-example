import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/core/services/tasks/task.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TaskServiceService } from 'src/app/core/services/tasks/task-service.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent {


  @Output() edit: EventEmitter<Task> = new EventEmitter<Task>();
  private task$;

  constructor(private route: ActivatedRoute,
              private taskService: TaskServiceService,
              private router: Router,
              private location: Location) {

  }

  ngOnInit() {
    this.getTask();
  }

  getTask(): void {
    this.task$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.taskService.getTask(params.get('id')))
    );
  }

  onEdit(task) {
    this.router.navigate([`tasks/${task.id}/edit`]);
  }


  delete(task){
    console.log(task);
    this.taskService.delete(task).subscribe((response) => {
      console.log("task deleted..");
    });
  }

}
