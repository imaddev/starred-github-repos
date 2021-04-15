import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ReposDataAccessModule } from '@bdev/repos/data-access';
import { LoaderModule } from '@bdev/shared/ui/loader';
import { DatePipeModule } from '@bdev/shared/pipes/date';

import { ReposListComponent } from './repos-list.component';
import { ReposListHeaderComponent } from './repos-list-header/repos-list-header.component';

@NgModule({
  imports: [
    CommonModule,
    ReposDataAccessModule,
    LoaderModule,
    InfiniteScrollModule,
    DatePipeModule
  ],
  declarations: [ReposListComponent, ReposListHeaderComponent],
  exports: [ReposListComponent, ReposListHeaderComponent]
})
export class ReposListModule {}
