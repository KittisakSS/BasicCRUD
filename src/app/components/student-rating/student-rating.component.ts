import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-rating',
  templateUrl: './student-rating.component.html',
  styleUrls: ['./student-rating.component.css']
})
export class StudentRatingComponent {
  studentName: string = 'ชื่อนักเรียน';

  ratings = {
    behavior: 0,
    homework: 0,
    attendance: 0
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const name = params.get('name');
      if (name) {
        this.studentName = name;
      }
    });
  }

  setRating(category: string, value: number) {
    this.ratings[category] = value;
  }
}
