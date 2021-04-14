import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposDataAccessModule } from '@bdev/repos/data-access';
import { ReposListComponent } from './repos-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReposDataAccessModule
  ],
  declarations: [ReposListComponent],
  exports: [ReposListComponent]
})
export class ReposListModule {}
