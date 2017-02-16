import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  sub: any;
  user;

  constructor(private _hackerNewsAPIService: HackernewsApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        let userId = params['id'];
        this._hackerNewsAPIService.fetchUser(userId).subscribe(
          data => {
            this.user = data;
          }, error => {
            console.log('Fetch user data error' + userId);
          });
      });
  }

}
