import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tasks = [
    { description: 'Usar 4 componentes do Angular Material', done: true },
    { description: 'Criar 3 componentes', done: true },
  ];

  progress() {
    const total = this.tasks.length;
    if (total === 0) return 100;

    const done = this.tasks.filter((task) => task.done).length;
    return 100 * (done / total);
  }

  constructor() {}

  ngOnInit(): void {}
}
