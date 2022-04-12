import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.fetchTasks();
    });
  }

  toggleTask(task: Task) {
    const updatedTask = { ...task, reminder: !task.reminder };
    this.taskService.toggleTaskReminder(updatedTask).subscribe(() => {
      this.fetchTasks();
    });
  }
}
