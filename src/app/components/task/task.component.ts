import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() taskName : string;
  @Output() closeEevent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

close(){
  this.closeEevent.emit("close");
}

}
