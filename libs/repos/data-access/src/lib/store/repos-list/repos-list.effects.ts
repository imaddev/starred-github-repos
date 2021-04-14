import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import * as ReposListFeature from './repos-list.reducer';
import * as ReposListActions from './repos-list.actions';
import { ReposListService } from '../../../../../feature/list/src/lib/repos-list.service';

@Injectable()
export class ReposListEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReposListActions.init),
      fetch({
        run: (action) => {
          return this.reposListService.getAll().pipe(
            map(reposList => ReposListActions.loadReposListSuccess({ reposList }))
          );
        },

        onError: (action, error) => {
          console.error('Error', error);
          return ReposListActions.loadReposListFailure({ error });
        }
      })
    )
  );

  loadNextPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReposListActions.setPageNbr),
      fetch({
        run: (action) => {
          return this.reposListService.getAll(action.page).pipe(
            map(reposList => ReposListActions.loadNextReposListSuccess({ reposList }))
          );
        },

        onError: (action, error) => {
          console.error('Error', error);
          return ReposListActions.loadReposListFailure({ error });
        }
      })
    )
  );

  constructor(private actions$: Actions, private reposListService: ReposListService) {
  }
}
