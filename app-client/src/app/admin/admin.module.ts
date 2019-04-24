import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from './admin.service';
import { SubjectComponent } from './subject.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LevelComponent } from './level.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { LevelFormComponent } from './level-form/level-form.component';
import { MatCardModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatDividerModule, MatListModule, MatIconModule, MatSelectModule, MatGridListModule } from '@angular/material';
import { tokenInterceptor } from '../token.interceptor';

@NgModule({
  declarations: [SubjectComponent, LevelComponent, SubjectFormComponent, LevelFormComponent],
  imports: [
    MatCardModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    MatGridListModule,

    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: SubjectComponent },
      { path: ':subjectId', component: LevelComponent }
    ])
  ],
  providers: [AdminService, { provide: HTTP_INTERCEPTORS, useClass: tokenInterceptor, multi: true}],
  bootstrap: [SubjectComponent]
})
export class AdminModule { }
