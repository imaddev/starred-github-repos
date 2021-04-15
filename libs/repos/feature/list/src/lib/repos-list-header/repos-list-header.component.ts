import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReposListActions } from '@bdev/repos/data-access';

@Component({
  selector: 'bdev-repos-list-header',
  templateUrl: './repos-list-header.component.html',
  styleUrls: ['./repos-list-header.component.scss']
})
export class ReposListHeaderComponent implements OnInit {

  constructor(private store: Store) {
  }

  onRefresh(): void {
    this.store.dispatch(ReposListActions.init());
  }

  ngOnInit(): void {
  }

}
