import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutComponent } from './page/page.component';

const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
  }]

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class ChargeRoutingModule { }
