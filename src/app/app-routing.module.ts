import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { StudentRatingComponent } from './components/student-rating/student-rating.component';


const routes: Routes = [
   { path: '', component: StudentsComponent },                     // หน้าเริ่มต้น
  { path: 'evaluate/:name', component: StudentRatingComponent }   // หน้าให้คะแนน
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
