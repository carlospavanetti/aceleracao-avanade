import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  itemToAdd: string;

  @Input('tasks')
  tasks;

  constructor() {}

  itemClassFromTask(task) {
    return task.done ? 'item -done' : 'item';
  }

  addToList() {
    if (this.itemToAdd.length > 0) return;

    this.tasks.push({ description: this.itemToAdd, done: false });
  }

  toggleDone(task) {
    task.done = !task.done;
  }

  ngOnInit(): void {}
}
