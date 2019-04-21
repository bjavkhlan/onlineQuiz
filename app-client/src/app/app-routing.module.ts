import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path:'home',component: HomeComponent
}, {
  path:'register',component: RegisterComponent
}, {
  path:'login',component: LoginComponent
},
{ path: 'subjects', loadChildren: './modules/subjects.module#SubjectsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
