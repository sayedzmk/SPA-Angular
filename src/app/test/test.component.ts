import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {

  // String Interpolatin
  h1: string = 'Sayed Mohamed';
  disable: boolean = false;
  dis=false;
  serverOff="No server Created";
  myvalue;
  test='';
  data=[];
  date=new Date();
  w;
  h;
  m;
  bg;
  constructor() {
    setTimeout(() => {
      this.disable = true;
    }, 2000);
  }
  onServer(){
    this.serverOff="Server is Created";
  }
  print($event){
    this.myvalue=$event.target.value;
  }
  add(){
    this.data.push(this.myvalue);
  }
  remove(item){
    let index=this.data.indexOf(item);
    this.data.splice(index,1);
  }
  printt(username){
    console.log(username);
  }
  

}
