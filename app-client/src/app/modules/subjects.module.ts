

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { LevelsComponent } from '../components/levels/levels.component';
import { SubjectsComponent } from '../components/subjects/subjects.component';
import { UsersComponent } from '../components/users/users.component';
import { QuestionsComponent } from '../components/questions/questions.component';

@NgModule({
  declarations: [SubjectsComponent,LevelsComponent, UsersComponent,QuestionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SubjectsComponent },
      { path: ':subjectid', component: LevelsComponent },
      { path: ':subjectid/:levelid', component:QuestionsComponent  }

    ])
  ],
  bootstrap: [],
  providers: []
})
export class SubjectsModule { }
