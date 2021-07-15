import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'IctakWeb';
   //faculty development programme counter variable
   facultydev:number = 0;
   fullstack:number =0;
   salesforce:number =0;
   microskills:number =0;
   internship:number =0;
   otherprog:number =0;
  constructor(private router:Router){}
  
   facultydevcountstop:any = setInterval(()=>{
     this.facultydev++;
     //stoping the count
     if(this.facultydev ==647 ){
       //stop the function
       clearInterval(this.facultydevcountstop);
     }
   },10)//every 10millisecond count will increase

   //fullstack count function
   fullstackcountstop:any = setInterval(()=>{
    this.fullstack++;
    //stoping the count
    if(this.fullstack ==310){
      //stop the function
      clearInterval(this.fullstackcountstop);
    }
  },10)

  //sales force count function
  salesforcecountstop:any = setInterval(()=>{
    this.salesforce++;
    //stoping the count
    if(this.salesforce ==562 ){
      //stop the function
      clearInterval(this.salesforcecountstop);
    }
  },10)

  //microskills count function
  microskillscountstop:any = setInterval(()=>{
    this.microskills++;
    //stoping the count
    if(this.microskills ==346 ){
      //stop the function
      clearInterval(this.microskillscountstop);
    }
  },10)

  //internship count function
  internshipcountstop:any = setInterval(()=>{
    this.internship++;
    //stoping the count
    if(this.internship ==143 ){
      //stop the function
      clearInterval(this.internshipcountstop);
    }
  },10)
  //otherprog count
  otherprogcountstop:any = setInterval(()=>{
    this.otherprog++;
    //stoping the count
    if(this.otherprog ==432 ){
      //stop the function
      clearInterval(this.otherprogcountstop);
    }
  },10)



}
