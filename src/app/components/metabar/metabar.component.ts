import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IArticle } from '../../types/article';
import { ArticleService } from '../../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hm-metabar',
  templateUrl: './metabar.component.html',
  styleUrls: ['./metabar.component.css']
})
export class MetabarComponent implements OnInit {
  searchTerm = '';
  foundArticles: IArticle[];
  constructor(private authService: AuthService, private articleService: ArticleService, private router: Router) { }

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

  login(){
    this.authService.loginIdentity();
  }

  logout(){
    this.authService.logOutUser();
    this.router.navigate(['dashboard']);
  }

  isLoggedIn(){
    return this.authService.isAuthenticated();
  }

}
