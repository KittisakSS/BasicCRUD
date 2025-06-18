import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-rating',
  templateUrl: './student-rating.component.html',
  styleUrls: ['./student-rating.component.css']
})
export class StudentRatingComponent {
  @Input() studentName: string = 'ชื่อนักเรียน'; // รับจากภายนอกในอนาคต

  // คะแนนที่เลือกเก็บเป็น object ตามหัวข้อ
  ratings = {
    behavior: 0,
    homework: 0,
    attendance: 0
  };

  setRating(category: string, value: number) {
    this.ratings[category] = value;
  }
}
