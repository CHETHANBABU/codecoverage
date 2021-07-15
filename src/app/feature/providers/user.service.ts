import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUserDetails() {
    const url = `https://reqres.in/api/users?page=1`;
    return this.http.get(url).pipe(map((res: any) => this.sortingUser(res.data)));
  }

  public getUserInfo(id: any) {
    const url = `https://reqres.in/api/users/${id}`;
    return this.http.get(url).pipe(map((res: any) => res));
  }

  public sortingUser(arr): any {
    return arr.sort((a, b) => b.first_name > a.first_name ? -1 : b.first_name < a.first_name ? 1 : 0);
  }
}
