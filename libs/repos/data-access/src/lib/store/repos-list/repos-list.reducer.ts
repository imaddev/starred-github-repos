import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ReposListActions from './repos-list.actions';
import { ReposListEntity } from './repos-list.models';

export const REPOS_LIST_FEATURE_KEY = 'reposList';

export interface State extends EntityState<ReposListEntity> {
  selectedId?: string | number; // which ReposList record has been selected
  loaded: boolean; // has the ReposList list been loaded
  error?: string | null; // last known error (if any)
}

export interface ReposListPartialState {
  readonly [REPOS_LIST_FEATURE_KEY]: State;
}

export const reposListAdapter: EntityAdapter<ReposListEntity> = createEntityAdapter<ReposListEntity>();

export const initialState: State = reposListAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const reposListReducer = createReducer(
  initialState,
  on(ReposListActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(ReposListActions.loadReposListSuccess, (state, { reposList }) =>
    reposListAdapter.setAll(reposList, { ...state, loaded: true })
  ),
  on(ReposListActions.loadReposListFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(ReposListActions.setPageNbr, (state, { page }) => ({
    ...state,
    page,
    loaded: false,
    error: null
  })),
  on(ReposListActions.loadNextReposListSuccess, (state, {reposList}) =>
    reposListAdapter.addMany(reposList, {...state, loaded: true})
  )
);

export function reducer(state: State | undefined, action: Action) {
  return reposListReducer(state, action);
}
