import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { IArticle } from '../articleservice/article';
import { ArticleService } from '../articleservice/article.service';

@Component({
  selector: 'hm-metabar',
  templateUrl: './metabar.component.html',
  styleUrls: ['./metabar.component.css']
})
export class MetabarComponent implements OnInit {
  searchTerm: string = "";
  foundArticles: IArticle[];
  constructor(private authService: AuthService, private articleService:ArticleService) { }

  ngOnInit() {
  }

  searchArticles(searchTerm){
    this.articleService.searchArticle(searchTerm).subscribe(
      articles => {
        this.foundArticles = articles;
        console.log(articles);
      }
    )
  }

}
