import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page/page.component';
import { ChargeRoutingModule } from './charge-routing.module';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    ChargeRoutingModule,
    NavbarModule
  ]
})

export class ChargeModule { }
