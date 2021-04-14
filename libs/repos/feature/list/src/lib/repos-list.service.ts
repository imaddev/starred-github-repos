import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReposListEntity } from '@bdev/repos/data-access';

@Injectable({
  providedIn: 'root'
})
export class ReposListService {
  constructor(private http: HttpClient) {
  }

  getAll(page = 1): Observable<ReposListEntity[]> {
    const today = new Date();
    today.setDate(today.getDate() - 30);
    const dateQuery = today.toISOString().split('T')[0];
    const url = `https://api.github.com/search/repositories?q=created:>${dateQuery}&sort=stars&order=desc&page=${page}`;

    return this.http
      .get<{ items: ReposListEntity[] }>(url)
      .pipe(
        map((data) => {
          return data.items;
        })
      );
  }
}
