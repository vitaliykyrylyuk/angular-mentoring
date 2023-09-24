import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { CourseInfoComponent } from '@app/features/course-info/course-info.component';

@NgModule({
  declarations: [CourseInfoComponent],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
  ],
  exports: [CourseInfoComponent]
})
export class CourseInfoModule {}
