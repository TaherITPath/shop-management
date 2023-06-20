import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './area/admin/admin.module';
import { UserModule } from './area/user/user.module';
import { AdminLoginComponent } from './common/admin-login/admin-login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CustomInterceptor } from './services/custom.interceptor';

export function tokenGetter(){
  return localStorage.getItem("jwt");
}
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,    
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter
      }
    }),
    BrowserAnimationsModule,
    AdminModule,
    UserModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomInterceptor,
    multi: true
  },{
    provide:LocationStrategy, useClass:HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
