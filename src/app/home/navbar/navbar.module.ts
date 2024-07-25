import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarLayoutComponent } from './page/navbar.component';
import { NavbarRoutingModule } from './navbar-rounting.module';

@NgModule({
  declarations: [
    NavbarLayoutComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule
  ],
  exports:[
    NavbarLayoutComponent
  ]
})
export class NavbarModule { }
