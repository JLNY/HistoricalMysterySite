import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';


@Component({
  selector: 'hm-articleviewer',
  templateUrl: './articleviewer.component.html',
  styleUrls: ['./articleviewer.component.css']
})
export class ArticleviewerComponent implements OnInit {
  articleid: number;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.articleid = params.articleid;
    });
    // this.articleid = this.route.snapshot.params['articleid'];
  }

}
