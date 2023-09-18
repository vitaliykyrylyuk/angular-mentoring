import {Component, Input} from '@angular/core';
import {Course} from '@shared/models/course.model';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent {
  @Input() course: Course | null = {} as Course;
}
