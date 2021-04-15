import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReposListModule } from '@bdev/repos/feature/list';
import { FooterModule } from '@bdev/shared/ui/footer';

import { HomeComponent } from './home.component';
import { NavbarModule } from '@bdev/shared/ui/navbar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ]),
    ReposListModule,
    FooterModule,
    NavbarModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}
