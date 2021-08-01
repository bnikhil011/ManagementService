import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student_model';

@Injectable({
  providedIn: 'root'
})
export class StudenthttpServiceService implements OnInit {
  students:Student[];
  constructor(private hc : HttpClient) { 
    
    
  }
  ngOnInit(): void {
    console.log("htpservice.ts ngoninit");
  }
  getAllStudents():Observable<Student[]>
  {console.log("http Service getAllCalled");
    return this.hc.get<Student[]>('http://localhost:8080/students/getAll');

  }
  
  addStudent( student : Student):Observable<Student>
  {
    console.log("Adding "+ student);
    return this.hc.post<Student>('http://localhost:8080/students/add',student);
  }
  updateStudent(student : Object):Observable<Student>
  {
    return this.hc.put<Student>('http://localhost:8080/students/getAll',student);
  }
  deleteStudent(student:Student):Observable<void>
  {
    console.log('http://localhost:8080/students/delete/'+ student.id)
    return this.hc.delete<void>('http://localhost:8080/students/delete/'+ student.id);

  }

 
}
