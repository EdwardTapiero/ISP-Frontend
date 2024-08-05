import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home/home.module').then( m => m.HomeModule ),
  },
  {
    path: 'login',
    loadChildren: () => import('./home/login/login.module').then( m => m.LoginModule ),
  },
  {
    path: 'chargeaccount',
    loadChildren: () => import('./home/chargeaccount/charge.module').then( m => m.ChargeModule ),
  },
  {
    path: 'navbar',
    loadChildren: () => import('./home/navbar/navbar.module').then( m => m.NavbarModule ),
  },
  {
    path: 'ListAccount',
    loadChildren: () => import('./home/listAccount/listAccount.module').then( m => m.ListAccountModule ),
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

