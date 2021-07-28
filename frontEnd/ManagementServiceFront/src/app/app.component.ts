import { Component } from '@angular/core';
import { StudenthttpServiceService } from './studenthttp-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ManagementServiceFront';
  constructor(private studService:StudenthttpServiceService)
  {
    

  }
  getAllStudents()
  {
    const id = (<HTMLInputElement>document.getElementById('user-id')).value;
    if (id === "")
    {console.log(this.studService.getAllStudents());}
    else
    {
      console.log(this.studService.getStudent(+id));

    }
  }
  
  

}
