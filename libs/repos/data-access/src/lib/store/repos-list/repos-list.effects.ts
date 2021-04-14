import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as ReposListFeature from './repos-list.reducer';
import * as ReposListActions from './repos-list.actions';

@Injectable()
export class ReposListEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReposListActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return ReposListActions.loadReposListSuccess({ reposList: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return ReposListActions.loadReposListFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
