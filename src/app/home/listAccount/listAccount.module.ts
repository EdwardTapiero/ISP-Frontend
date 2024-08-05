import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { listLayoutComponent } from './page/page.component';
import { ListRoutingModule } from './listAccount-routing.module';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [
    listLayoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ListRoutingModule,
    NavbarModule
  ]
})
export class ListAccountModule { }
