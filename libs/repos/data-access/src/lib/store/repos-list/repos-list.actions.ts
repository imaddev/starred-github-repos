import { createAction, props } from '@ngrx/store';
import { ReposListEntity } from './repos-list.models';

export const init = createAction('[ReposList Page] Init');

export const loadReposListSuccess = createAction(
  '[ReposList/API] Load ReposList Success',
  props<{ reposList: ReposListEntity[] }>()
);

export const loadReposListFailure = createAction(
  '[ReposList/API] Load ReposList Failure',
  props<{ error: any }>()
);

export const setPageNbr = createAction(
  '[ReposList/API] Set Page Number',
  props<{ page: number }>()
);

export const loadNextReposListSuccess = createAction(
  '[ReposList/API] Load Next ReposList Success',
  props<{ reposList: ReposListEntity[] }>()
);
