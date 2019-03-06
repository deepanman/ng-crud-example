import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, BehaviorSubject, from } from 'rxjs';
import { Task } from './task.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private tasks$ = new BehaviorSubject<Task[]>([]);

  constructor(private http: HttpClient) {
    this.createTasks();
  }

  createTasks() {
    this.http.get<Task[]>('/api/tasks').subscribe((tasks) => this.tasks$.next(tasks))
  }

  searchTasks(searchText) {
    this.http.get<Task[]>(`/api/tasks?title=^${searchText}`).subscribe((tasks) => this.tasks$.next(tasks))
  }

  getTasks() {
    return this.tasks$.asObservable();
  }

  getTask(id) {
    return this.http.get<Task>(`/api/tasks/${id}`);
  }


  update(task) {
    return this.http.post(`/api/tasks/${task.id}`, task).subscribe(() => this.createTasks());
  }

  addTask(task: Task) {
   return this.http.post<Task>('/api/tasks', task).pipe(tap(() => this.createTasks()));
  }

  delete(task) {
    return this.http.delete(`/api/tasks/${task.id}`).pipe(tap(() => this.createTasks()));
  }
}
