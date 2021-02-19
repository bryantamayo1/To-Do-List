import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { element } from 'protractor';

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
  modeChange: boolean = false;
  contMode : number = 0;
  modifiedClick : boolean = false;
  taskModified : Task[] = [{
    id:0,
    name:"0",
    check: false,
    date:"0"
  }];
  //detectScreen : boolean = true;


  constructor(){
    //this.x.addEventListener("resize",this.changeScreen);
    //$(window).resize(this.changeScreen);

  }

  ngOnInit(){

  }

  mode(){
    this.contMode++;
    if(this.contMode % 2 == 0){
      this.modeChange = false;
    }else{
      this.modeChange = true;
    }
  }

  addTask() {
    if(this.nameTask !== ""){
        let dateTask = new Date();
        let newDate : string = JSON.parse(JSON.stringify(dateTask.getDate())) + "/"+
        JSON.parse(JSON.stringify(dateTask.getMonth())) +1 +"/"+
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
        newTask.name = this.changeLetter(this.nameTask,",","-");
        this.bufferTask.push(newTask);
    }

    this.nameTask ="";
  }

  changeLetter(phrase, letter, cLetter) : string {
    let originalPhrase = phrase;
    let resultPhrase = "";
    let index = 0;
    let aux = false;

    while (index >= 0) {
      phrase = resultPhrase + phrase.substr(index);
      index = phrase.indexOf(letter, index);

      if (index == -1 && aux == false) {
        resultPhrase = originalPhrase;

      } else if (index == -1 && aux == true ) {
        if(resultPhrase.length != originalPhrase.length){
          resultPhrase = resultPhrase + originalPhrase.substr(originalPhrase.lastIndexOf(letter)+1);
        }


      } else if (index >= 0) {
        let findword = phrase.substr(0, index + 1);
        resultPhrase = findword.replace(letter, cLetter);

        index++;
        aux = true;

      }
    }

    return resultPhrase;
  }

  deleteTask(task : number){
    this.bufferTask = this.bufferTask.filter( element => element.id != task);

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

  exportTableToCSV(filename) {
    let csv = [];
    let rowHeader = document.getElementsByClassName("tableHeader");
    let rowHeaderDiv = rowHeader[0].getElementsByTagName("div");
    let stringRowHeader = [];

    for(let i = 0; i < rowHeaderDiv.length; i++){
      let colsHeader = (rowHeaderDiv[i] as HTMLElement).innerText;
      stringRowHeader.push(colsHeader);
    }
    csv.push(stringRowHeader.join(","));

    /*
    console.log("Esto es stringRowHeader: ", stringRowHeader);

    let rowTasks = document.getElementsByClassName("containerTasks");
    for(let i = 0; i < rowTasks.length; i++){
      let stringTask= [], rowTask = rowTasks[i].getElementsByTagName("div");

      for(let j = 0; j < rowTask.length - 1; j++ )
        stringTask.push( (rowTask[j] as HTMLElement).innerText);

      csv.push(stringTask.join(","));
    }
    */

    this.bufferTask.forEach( element => {
      let id = element.id;
      let name = element.name;
      let date = element.date;
      let check = element.check;
      let stringRow = id+","+name+","+date+","+check;
      csv.push(stringRow);
    });

    // Download CSV file
    this.downloadCSV(csv.join("\n"), filename);
}

    downloadCSV(csv, filename) {
    let csvFile;
    let downloadLink;

    // CSV file
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link window.matchMedia("(max-width: 1070px)"));
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = "none";

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    // Click download link
    downloadLink.click();
    }

    modifiedTask(id : number){
      this.taskModified = this.bufferTask.filter(element => element.id == id);
      let heightBodyContainer = $('.body-container').outerHeight();
      heightBodyContainer += (60+56);
      let divHeightBody = "--height-body-container: "+heightBodyContainer +"px;";
      $('body').attr({'style':divHeightBody});
      this.modifiedClick = true;
    }

    close(event : string){
      this.modifiedClick = false;
    }

    modifiedValUser(event: string){
      //Update buffer
      let index = this.bufferTask.findIndex( element => element.id == this.taskModified[0].id);
      this.bufferTask[index].name = event;

      let taskToModificate = document.getElementsByClassName("orderTask");
      for(let i=0; i < taskToModificate.length; i++){
        if((taskToModificate[i] as HTMLElement).innerHTML == String(this.taskModified[0].id)){
            let taskHTML = document.getElementsByClassName("nameTask");
            (taskHTML[i] as HTMLElement).innerHTML = event;
            break;
        }
      }
    }

    /*
    changeScreen(){
      let x = window.matchMedia("(max-width: 1070px)");
      console.log(x);
      if (x.matches) {
        this.detectScreen = false;
        console.log("Entra aki: ",x.matches);
        console.log("sss.. ",this.detectScreen);
      } else {
        console.log("Entra aki: ",x.matches);
        this.detectScreen = true;
      }
    }
    */


}
