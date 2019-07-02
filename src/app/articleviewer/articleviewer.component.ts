import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../articleservice/article.service';


@Component({
  selector: 'hm-articleviewer',
  templateUrl: './articleviewer.component.html',
  styleUrls: ['./articleviewer.component.css']
})
export class ArticleviewerComponent implements OnInit {
  articleid:number

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.articleid = this.route.snapshot.params['articleid'];
  }

}
