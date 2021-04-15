import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReposListActions, ReposListSelectors } from '@bdev/repos/data-access';

@Component({
  selector: 'bdev-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnInit {
  reposList$ = this.store.select(ReposListSelectors.getAllReposList);
  loaded$ = this.store.select(ReposListSelectors.getReposListLoaded);
  error$ = this.store.select(ReposListSelectors.getReposListError);
  page = 1;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(ReposListActions.init());
  }

  onScroll(): void {
    this.store.dispatch(ReposListActions.setPageNbr({ page: ++this.page }));
  }

}
