import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-task-progress',
  templateUrl: './task-progress.component.html',
  styleUrls: ['./task-progress.component.css'],
})
export class TaskProgressComponent implements OnInit {
  @Input('percentage')
  percentage = 0;

  constructor() {}

  ngOnInit(): void {}
}
