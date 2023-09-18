import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { CoursesService } from '@app/services/courses.service';
import { CourseMainComponent } from '@app/features/course-main/course-main.component';
import { CourseListModule } from '@app/features/course-list/course-list.module';
import { CourseInfoModule } from '@app/features/course-info/course-info.module';

@NgModule({
  declarations: [CourseMainComponent],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    CourseListModule,
    CourseInfoModule
  ],
  providers: [CoursesService],
  exports: [CourseMainComponent]
})
export class CourseMainModule {}
