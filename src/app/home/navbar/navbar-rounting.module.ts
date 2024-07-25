import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarLayoutComponent } from './page/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarLayoutComponent,
  }]

  @NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ],
  })

export class NavbarRoutingModule { }
