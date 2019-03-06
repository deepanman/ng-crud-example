import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskDetailComponent } from './modules/tasks/task-detail/task-detail.component';
import { AddTaskComponent } from './modules/tasks/add-task/add-task.component';
import { TaskContainerComponent } from './modules/tasks/task-container/task-container.component';


const appRoutes: Routes = [
  {path : '' , redirectTo:'tasks', pathMatch: 'full'},
  {path: 'task', component: AddTaskComponent},
  {
    path: 'tasks', component: TaskContainerComponent,
    children: [
      { path: ':id', component: TaskDetailComponent },
      { path: ':id/edit', component: AddTaskComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
