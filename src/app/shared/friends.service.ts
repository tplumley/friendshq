import { Injectable } from '@angular/core';
import { Http, Headers, } from "@angular/http";
import { Observable, } from 'rxjs/Observable';
import { Friend, } from "./";
import 'rxjs/add/operator/map';

const BASE_URL = 'http://localhost:3000';

@Injectable()
export class FriendsService {

  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  
  constructor(private http: Http) { }

	getFriends(): Observable<Friend[]> {
    return this.http.get('http://localhost:3000/friends')
      .map(res => res.json());
  }
  saveFriend(friend){
  	return this.http.put(`${BASE_URL}/friends/${friend.id}`, friend, {
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }).map(res => res.json());
  }
}
