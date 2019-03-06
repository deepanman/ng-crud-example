import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from '../services/tasks/task.model';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
export class Database implements InMemoryDbService {
    createDb() {
        const tasks: Task[] = [
            { id: 1,title:"My First task", description: "First task description" },
            { id: 2, title: "My Second task", description: "Second task description" }
        ]
        return {tasks};
    }
}