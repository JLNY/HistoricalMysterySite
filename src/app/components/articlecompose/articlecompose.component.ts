import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block';
import { AuthService } from 'src/app/services/auth.service';
import { IArticle, IArticleCreateRequest } from 'src/app/types/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'hm-articlecompose',
  templateUrl: './articlecompose.component.html',
  styleUrls: ['./articlecompose.component.css']
})
export class ArticlecomposeComponent implements OnInit {

  TitleEditor = BalloonBlockEditor;
  BodyEditor = BalloonBlockEditor;

  articleId: number;

  titleEditorModel = {
    editorData: '<h2 style="color: blue">Article Title<h2>',
    editorConfig: {
      placeholder: 'Article Title',
      fillEmptyBlocks: false
    }
  };

  bodyEditorModel = {
    editorData: '<p style="color: blue">Tell your story...<p>',
    editorConfig: {
      placeholder: '<p>tell your story here...</p>',
    }
  };

  isDirty = true;

  constructor(private router: Router, private auth: AuthService, private articleService: ArticleService) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/dashboard']);
  }

  saveArticle() {
    var articleRequest: IArticleCreateRequest = {
      articleAuthorId: this.auth.currentUser.userId,
      articleCollectionId: 1,
      articleTag: 'Employment',
      articleDisplayTitle: new DOMParser().parseFromString(this.titleEditorModel.editorData, 'text/html').firstElementChild.children[1].firstElementChild.innerHTML,
      articleDisplaySubtitle: 'Abstract',
      articleFeatureImage: 'https://cdn-images-1.medium.com/max/1600/0*SV8mG0zMYdREioMg',
      articleUpdateTime: new Date(),
      articleReadTime: 7,
      articleContent: [
        {
          paragraphnum: 1,
          paragraphembedcontent: this.bodyEditorModel.editorData
        }
      ]
    }
    this.articleService.addArticle(articleRequest).subscribe(
      articleId => {
        console.log(articleRequest)
        console.log(articleId)
        this.articleId = articleId
        this.router.navigate(['article', articleId])
      }
    );
    this.isDirty = false;

  }

  isLoggedIn(): boolean{
    return this.auth.isAuthenticated();
  }
}
