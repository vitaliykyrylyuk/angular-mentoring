import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { CourseListComponent } from '@app/features/course-list/course-list.component';

@NgModule({
  declarations: [CourseListComponent],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
  ],
  exports: [CourseListComponent]
})
export class CourseListModule {}
