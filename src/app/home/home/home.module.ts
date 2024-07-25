import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page/page.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [
    PageLayoutComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule
  ]
})
export class HomeModule { }
