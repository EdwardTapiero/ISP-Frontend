import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLayoutComponent } from './page/login.component';
import { LoginRoutingModule } from './login-rounting.module';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [
    LoginLayoutComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NavbarModule
  ],
})
export class LoginModule { }
