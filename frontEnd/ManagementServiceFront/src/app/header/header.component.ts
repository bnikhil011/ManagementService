import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { StudenthttpServiceService } from '../studenthttp-service.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private studService:StudenthttpServiceService) { 

  }

  ngOnInit(): void {
  }

  addStudent(addForm:NgForm)
  {
    const btn = document.getElementById("studentmodelId");
       (this.studService.addStudent(addForm.value)).subscribe(()=>{console.log("added Sucessfully");});
    btn.click();
  }
}
