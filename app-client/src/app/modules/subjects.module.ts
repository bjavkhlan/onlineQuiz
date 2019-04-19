

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { LevelsComponent } from '../components/levels/levels.component';
import { SubjectsComponent } from '../components/subjects/subjects.component';
import { UsersComponent } from '../components/users/users.component';

@NgModule({
  declarations: [SubjectsComponent,LevelsComponent, UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SubjectsComponent },
      { path: ':subjectid', component: LevelsComponent },

    ])
  ],
  bootstrap: [],
  providers: []
})
export class SubjectsModule { }
