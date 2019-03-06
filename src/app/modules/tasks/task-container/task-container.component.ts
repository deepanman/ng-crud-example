import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskServiceService } from 'src/app/core/services/tasks/task-service.service';
import { Task } from 'src/app/core/services/tasks/task.model';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss']
})
export class TaskContainerComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private taskService: TaskServiceService,
              private router: Router,
              private cdr: ChangeDetectorRef) {
  }

  private taskList;

  ngOnInit() {
    this.taskList = this.taskService.getTasks();
    console.log(this.taskList);
  }

  goToAddTask(task: Task) {
    this.router.navigate(['/task']);
  }

  navigate(task) {
    this.router.navigate([`tasks/${task.id}`])
    this.cdr.markForCheck();
  }


  delete(task){
    console.log(task);
    this.taskService.delete(task).subscribe((response) => {
      this.router.navigate(['/tasks'])
    });
  }

}
