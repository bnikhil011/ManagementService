import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { StudenthttpServiceService } from './studenthttp-service.service';
import { Student } from './student_model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  student:Student;
  allStudents:Student[];
  modelStudent:Student;
  
  title = 'ManagementServiceFront';
  constructor(private studService:StudenthttpServiceService)
  {
    console.log("Component.ts constructor");
  }
  ngOnInit(): void {
    console.log("Component.ts ngOninit");
    (this.studService.getAllStudents()).subscribe((response)=>{this.allStudents = response});
    setInterval(()=>{(this.studService.getAllStudents()).subscribe((response)=>{this.allStudents = response});},3000);
   
  }
 
  
  OpenModel(model:String , stu:Student)
  {
    const container = document.getElementById('main-container');
    const btn1 = document.createElement("button");
    btn1.type = "button";
    btn1.style.display = 'none';
    console.log("Inside OpenModel");
    btn1.setAttribute('data-toggle','modal');
    if(model==="delete")
    {
      btn1.setAttribute('data-target','#deleteEmployee');
    }
    container.appendChild(btn1);
    this.modelStudent = stu;
    
    btn1.click();

  }
  DeleteStudent():void
  {
    console.log('trying to delete' + this.modelStudent.id);
    this.studService.deleteStudent(this.modelStudent).subscribe(()=>{});
    (this.studService.getAllStudents()).subscribe((response)=>{this.allStudents = response;
    console.log(response);
    });
    console.log(this.allStudents);
    // window.location.reload();

  }
  

}
