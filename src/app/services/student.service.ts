import { Injectable } from '@angular/core';
import { Student } from '../student';
import {FormGroup} from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
   
  students:Array<Student>=[]
  newform!:FormGroup
  tempid!:number
  constructor() { }
  addStudent(std:Student,form:FormGroup){
    this.students.push(std);
    this.newform = form
    console.log(this.newform);
    
  }
  Delete(id:number){

    this.students.splice(id, 1);

  }
  show():Array<Student>{
    return this.students;
  }
updateStudent(id:number){
  console.log(this.newform);
  this.newform.patchValue(this.students[id])
  this.tempid = id
  console.log(this.tempid)
}
updateData(newData:Student){
  console.log(newData)
  this.students[this.tempid]=newData;
}
}
