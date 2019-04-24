    
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { tokenInterceptor } from './token.interceptor';
import { MatCardModule,MatChipsModule } from '@angular/material';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,   
    ReactiveFormsModule,
    MatCardModule,
    NgReduxModule ,
    FormsModule ,
    MatChipsModule
  ], 
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: tokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}