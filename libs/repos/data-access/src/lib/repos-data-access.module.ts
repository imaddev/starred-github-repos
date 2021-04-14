import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromReposList from './store/repos-list/repos-list.reducer';
import { ReposListEffects } from './store/repos-list/repos-list.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromReposList.REPOS_LIST_FEATURE_KEY,
      fromReposList.reducer
    ),
    EffectsModule.forFeature([ReposListEffects]),
  ],
})
export class ReposDataAccessModule {}
