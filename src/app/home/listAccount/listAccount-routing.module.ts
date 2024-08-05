import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { listLayoutComponent } from './page/page.component';

const routes: Routes = [
  {
    path: '',
    component: listLayoutComponent,
  }]
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class ListRoutingModule { }
