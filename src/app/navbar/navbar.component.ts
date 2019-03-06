import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../core/services/tasks/task-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private taskService: TaskServiceService) { }

  ngOnInit() {
  }

  onSearch(search) {
    this.taskService.searchTasks(search);
  }

}
