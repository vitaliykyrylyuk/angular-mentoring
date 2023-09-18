import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@app/shared/models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  @Input() courses: Course[] = [];
  @Input() isEditable: boolean = true;

  @Output() showCourse: EventEmitter<Course> = new EventEmitter<Course>();
  @Output() editCourse: EventEmitter<Course> = new EventEmitter<Course>();
  @Output() deleteCourse: EventEmitter<Course> = new EventEmitter<Course>();

  onShowCourse(course: Course) {
    this.showCourse.emit(course);
  }

  onEdit(course: Course) {
    this.editCourse.emit(course);
  }

  onDelete(course: Course) {
    this.deleteCourse.emit(course);
  }
}
