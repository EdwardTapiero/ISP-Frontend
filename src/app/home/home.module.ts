
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';


@NgModule({
  exports:[
    LoginComponent
  ],
  declarations:[
    LoginComponent,
    NavbarComponent
  ],
 imports:[
    LoginComponent

  ]
})
export class HomeModule {}
