import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IArticle } from '../../types/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'hm-metabar',
  templateUrl: './metabar.component.html',
  styleUrls: ['./metabar.component.css']
})
export class MetabarComponent implements OnInit {
  searchTerm = '';
  foundArticles: IArticle[];
  constructor(private authService: AuthService, private articleService: ArticleService) { }

  ngOnInit() {
  }

  searchArticles(searchTerm) {
    this.articleService.searchArticle(searchTerm).subscribe(
      articles => {
        this.foundArticles = articles;
        console.log(articles);
      }
    );
  }

  isLoggedIn(){
    return this.authService.isAuthenticated();
  }

}
