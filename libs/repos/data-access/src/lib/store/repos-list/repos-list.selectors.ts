import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  REPOS_LIST_FEATURE_KEY,
  State,
  ReposListPartialState,
  reposListAdapter,
} from './repos-list.reducer';

// Lookup the 'ReposList' feature state managed by NgRx
export const getReposListState = createFeatureSelector<
  ReposListPartialState,
  State
>(REPOS_LIST_FEATURE_KEY);

const { selectAll, selectEntities } = reposListAdapter.getSelectors();

export const getReposListLoaded = createSelector(
  getReposListState,
  (state: State) => state.loaded
);

export const getReposListError = createSelector(
  getReposListState,
  (state: State) => state.error
);

export const getAllReposList = createSelector(
  getReposListState,
  (state: State) => selectAll(state)
);

export const getReposListEntities = createSelector(
  getReposListState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getReposListState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getReposListEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
