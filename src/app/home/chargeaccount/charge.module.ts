import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page/page.component';
import { ChargeRoutingModule } from './charge-routing.module';

@NgModule({
  declarations: [
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    ChargeRoutingModule
  ]
})

export class ChargeModule { }
