import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page/page.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    PageLayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
