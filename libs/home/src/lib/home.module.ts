import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ReposListModule } from '@bdev/repos/feature/list';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ]),
    ReposListModule
  ],
  declarations: [
    HomeComponent
  ],
})
export class HomeModule {}
