

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { LevelsComponent } from '../components/levels/levels.component';
import { SubjectsComponent } from '../components/subjects/subjects.component';
import { UsersComponent } from '../components/users/users.component';
import { QuestionsComponent } from '../components/questions/questions.component';
import { IsvisibleDirective } from '../isvisible.directive';
import { MaterialModule } from '../material.module';
import {SubjectNotFoundComp} from '../components/notfound/subjectnotfoundcomp'
import {SubjectGuard} from '../guards/subject-guard';

@NgModule({
  declarations: [SubjectsComponent,LevelsComponent, UsersComponent,QuestionsComponent,IsvisibleDirective,SubjectNotFoundComp],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: SubjectsComponent },
      { path: ':subjectid', component: LevelsComponent,canActivate: [SubjectGuard] },
      { path: 'subject/notfound', component: SubjectNotFoundComp },
      { path: ':subjectid/:levelid', component:QuestionsComponent  }  

    ])
  ],
  bootstrap: [],
  providers: [SubjectGuard]
})
export class SubjectsModule { }
