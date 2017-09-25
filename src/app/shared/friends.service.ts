import { Injectable } from '@angular/core';
import { Http, Headers, } from "@angular/http";
import { Observable, } from 'rxjs/Observable';
import { Friend, } from "./";
import 'rxjs/add/operator/map';

@Injectable()
export class FriendsService {

  constructor(private http: Http) { }

	getFriends(): Observable<Friend[]> {
    return this.http.get('http://localhost:3000/friends')
      .map(res => res.json());
  }
  saveFriend(friend){
  	return this.http.put(`http://localhost:3000/friends/${friend.id}`, friend, {
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }).map(res => res.json());
  }
}
