import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AdminGuard } from './guards/admin.guard';
import { SubjectGuard } from './guards/subject.guard';
import {UserQuizesComponent} from './components/userquizes/userquizes.component';

const routes: Routes = [{
  path:'' ,component: HomeComponent
}, {
  path:'home' ,component: HomeComponent
}, {
  path:'register',component: RegisterComponent
}, {
  path:'login',component: LoginComponent
}, {
  path: 'subjects', loadChildren: './modules/subjects.module#SubjectsModule',
  canActivate:[SubjectGuard] 
}, {
  path: 'admin', loadChildren: './admin/admin.module#AdminModule',
  canActivate:[AdminGuard]
}, {
  path: 'userquizes', component: UserQuizesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
