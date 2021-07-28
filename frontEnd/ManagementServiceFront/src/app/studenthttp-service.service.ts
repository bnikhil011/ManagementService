import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StudenthttpServiceService {

  constructor(private hc : HttpClient) { 

  }
  getAllStudents()
  {
    return this.hc.get('http://localhost:8080/students/getAll').subscribe((response)=>{console.log(response)});
  }
  getStudent(id:number)
  {
    return this.hc.get('http://localhost:8080/students/get/'+id).subscribe((response)=>{console.log(response)});
  }
  addStudent( student : Object)
  {
    return this.hc.get('http://localhost:8080/students/getAll').subscribe((response)=>{console.log(response)});
  }
  updateStudent(student : Object)
  {
    return this.hc.get('http://localhost:8080/students/getAll').subscribe((response)=>{console.log(response)});
  }

 
}
