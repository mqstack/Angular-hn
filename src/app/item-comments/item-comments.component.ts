import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.scss']
})
export class ItemCommentsComponent implements OnInit {

  sub: any;
  item;
  
  constructor(
    private _hackerNewsAPIService: HackernewsApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        let itemId = +params['id'];
        this._hackerNewsAPIService.fetchComments(itemId)
          .subscribe(
            data => {
              this.item = data;
            },
            error => console.log('Could not load item' + itemID));
      });
  }

}
