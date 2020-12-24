import { Component, OnInit } from '@angular/core';

type Task = {
  id: number;
  name : string;
  check : boolean;
  date : string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  bufferTask: Task[]  = [];
  nameTask:string = "";
  showTask: boolean = true;
  testCheck:boolean = false;
  year = new Date().getFullYear();
  cont : number = 0;


  ngOnInit(){


  }

  addTask() {
    if(this.nameTask !== ""){
        let dateTask = new Date();
        let newDate : string = JSON.parse(JSON.stringify(dateTask.getDate())) + "/"+
        JSON.parse(JSON.stringify(dateTask.getMonth())) +"/"+
        JSON.parse(JSON.stringify(dateTask.getFullYear()))+" " +
        JSON.parse(JSON.stringify(dateTask.getHours())) +":"+
        JSON.parse(JSON.stringify(dateTask.getMinutes()))+":"+
        JSON.parse(JSON.stringify(dateTask.getSeconds()));

        this.cont++;

        let newTask :Task = {
          id: this.cont,
          name:"",
          check:false,
          date : newDate
        }
        newTask.name = this.nameTask;
        this.bufferTask.push(newTask);

    }
    this.nameTask ="";
  }

  deleteTask(task : string){
    this.bufferTask = this.bufferTask.filter( element => element.name != task);

  }

  hiddenComplete(){
    if(this.bufferTask.length != 0){
        if( this.bufferTask.some( element => element.check == true) ){
            this.showTask = false;
            this.testCheck = true;
        }

    }
  }

  showComplete(){
    this.showTask = true;
    this.testCheck = false;
  }

  clickCheck(event, task){
    //console.log(event.isTrusted);     //Always give true
    if( event.currentTarget.checked){
      task.check = true;
    }else{
      task.check = false;
    }
  }

}
