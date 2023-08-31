import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from "@angular/router";
import { PagesRoutingModule } from './pages/pages.routing.module';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing.module';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
