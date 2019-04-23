import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [{
  path:'' ,component: HomeComponent
}, {
  path:'home' ,component: HomeComponent
}, {
  path:'register',component: RegisterComponent
}, {
  path:'login',component: LoginComponent
}, {
  path: 'subjects', loadChildren: './modules/subjects.module#SubjectsModule' 
}, {
  path: 'admin', loadChildren: './admin/admin.module#AdminModule',
  canActivate:[AdminGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
