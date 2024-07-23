
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';



@NgModule({
  exports:[
    LoginComponent
  ],
  declarations:[
    LoginComponent,
   
  ],
 imports:[
    LoginComponent

  ]
})
export class HomeModule {}
