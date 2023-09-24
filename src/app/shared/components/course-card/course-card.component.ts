import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '@shared/models/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() course: Course = {} as Course;
  @Input() isEditable: boolean = false;

  @Output() clickOnShow: EventEmitter<Course> = new EventEmitter<Course>();

  showCourseBtn: string = 'Show Course';
  showCourse() {
    this.clickOnShow.emit(this.course);
  }
}
