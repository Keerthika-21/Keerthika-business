import { Injectable } from '@angular/core';
import {Student} from './model/Student ';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
    url :string;
    student : Student;
    studentArr :Student[];
  constructor(private http : HttpClient) { //predefined service for http
      this.url = "http://localhost:3005/employees";
      this.student = new Student();
      this.studentArr =[];
  }
  insertStudent(student : Student){
    this.http.post<Student>(this.url,student).subscribe(); //post-->update method is called by http client <Employee says where ii is saving
    return "Student Details Added"; //subscribe==>commit
  }
  updateStudent(student :Student){
    this.http.put<Student>(this.url+"/"+student.stuId,student).subscribe(); //post-->update method is called by http client <Employee says where ii is saving
    return "Student Details Updated"; //subscribe==>commit
  }
  deleteStudent(stuId : number){
    this.http.delete<Student>(this.url+"/"+stuId).subscribe(); //post-->update method is called by http client <Employee says where ii is saving
    return "Student Details Deleted";
  }
  
  findStudent(stuId : number){
    this.http.get<Student>(this.url+"/"+stuId).subscribe(data =>this.student=data); //post-->update method is called by http client <Employee says where ii is saving
     return this.student;
  }
  findAllStudent(){
    this.http.get<Student[]>(this.url).subscribe(data =>this.studentArr=data); 
    return this.studentArr;
  }
}
