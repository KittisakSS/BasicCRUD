import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  studentName: string = '';     // สำหรับเก็บค่าจาก input
  students: string[] = [];      // เก็บรายชื่อนักเรียนทั้งหมด

  addStudent() {
    if (this.studentName.trim()) {
      this.students.push(this.studentName.trim());
      this.studentName = '';   // เคลียร์ช่อง input
    }
  }

   removeStudent(index: number) {
    this.students.splice(index, 1);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
