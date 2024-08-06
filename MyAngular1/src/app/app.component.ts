import { Component } from '@angular/core';
import { Student } from './model/Student ';
import { StudentService } from './student.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  student : Student;
  result : string;
  studentArr : Student[];
  flag : boolean;
  constructor(private service : StudentService){ //injecting own service
    this.student = new Student();
    this.result = "";
    this.studentArr = [];
    this.flag = false;
  }  //  memory allocation assigning 
  insertStudent(data : any){
    this.student.stuId=data.stuId; //taking value from text box model object
    this.student.stuName=data.stuName;
    this.student.stuMark2=data.stuMark2;
    
    alert(data.stuId+" "+data.stuName+" "+data.stuMark1+" "+data.stuMark2);
    this.result = this.service.insertStudent(this.student); // object as an arguement
     //employee service file 
  }
  updateStudent(data : any){
    this.student.stuId=data.stuId; //taking value from text box model object
    this.student.stuName=data.stuName;
    this.student.stuMark1=data.stuMark1;
    this.student.stuMark2=data.stuMark2;

    alert(data.stuId+" "+data.stuName+" "+data.stuMark1+" "+data.stuMark2);
    this.result = this.service.updateStudent(this.student); 
}
  deleteStudent(data : any){
    this.result = this.service.deleteStudent(data.stuId); 
  }
  findStudent(data : any){
    this.student = this.service.findStudent(data.stuId);
    this.result = this.student.stuId +" "+this.student.stuName+" "+this.student.stuMark1+" "+this.student.stuMark2;
  }
  findAllStudent(){
    this.studentArr = this.service.findAllStudent();
    this.flag = true;
    
  }
}