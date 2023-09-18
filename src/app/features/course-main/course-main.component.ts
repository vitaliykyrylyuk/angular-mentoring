import {Component, Input, OnInit} from '@angular/core';
import {Course} from '@app/shared/models/course.model';
import {CoursesService} from '@app/services/courses.service';
import {from, map, mergeMap, toArray} from 'rxjs';

@Component({
  selector: 'app-course-main',
  templateUrl: './course-main.component.html',
  styleUrls: ['./course-main.component.scss']
})
export class CourseMainComponent implements OnInit {
  @Input() courses: Course[] = [];

  selectedCourse: Course | null = null;
  showCourseInfo: boolean = false;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.coursesService.getAll().subscribe((course: Course | any) => {
      this.courses.push(course);
      from(course.authors)
        .pipe(
          mergeMap((authorId: string | any) => this.coursesService.getAuthorById(authorId)),
          map((item: any) => item.name),
          toArray()
        )
        .subscribe(authors => {
          course.authors = authors;
        });
    });
  }

  backText: string = 'back'

  onShowCourse(course: Course) {
    this.selectedCourse = course;
    this.showCourseInfo = true;
  }

  onGoBack() {
    this.selectedCourse = null;
    this.showCourseInfo = false;
  }
}
