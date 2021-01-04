import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() taskName : string;
  @Output() closeEevent = new EventEmitter();
  @Output() valModified = new EventEmitter();

  countLetters : number = 0;

  constructor() {

   }

  ngOnInit(): void {
    this.countLetters  = this.taskName.length;
  }

close(){
  this.closeEevent.emit("close");
}

/*
onNameChange(val:string) {
  this.valModifiedSave = val;

}
*/

sendModified(){
    this.valModified.emit(this.taskName);
    this.closeEevent.emit("close");
}

countChars(event : any){
  //console.log("event: ",event.target.value.length );
  this.countLetters = event.target.value.length;

}

}
