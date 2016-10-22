import { Component } from '@angular/core';
import  { Teacher } from '../model/teacher';
import { Student } from '../model/student';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/product.html'
})
export class AppComponent implements OnInit {
    title: string = "student";
    student: Student[];
   
    title2: string = "teacher";
    teacher: Teacher[];
constructor(private studentService: StudentService, teacherService: TeacherService){}
    ngOnInit(){
        this.studentService.getStudent()
        .then(students => this.students = students)
        .catch(error => console.log(error));
        this.teacherService.getTeachers()
        .then(teachers => this.teachers = teachers)
        .catch(error => console.log(error));
    }
    }

}