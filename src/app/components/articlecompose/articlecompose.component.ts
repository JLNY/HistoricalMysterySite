import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block';
import { AuthService } from 'src/app/services/auth.service';
import { IArticle } from 'src/app/types/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'hm-articlecompose',
  templateUrl: './articlecompose.component.html',
  styleUrls: ['./articlecompose.component.css']
})
export class ArticlecomposeComponent implements OnInit {

  TitleEditor = BalloonBlockEditor;
  BodyEditor = BalloonBlockEditor;

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
    var article: IArticle = {
      articleid: 10,
      articletag: 'Employment',
      articletitle: this.titleEditorModel.editorData.replace('<h2>', '').replace('</h2>', ''),
      articlepreviewimg: 'https://cdn-images-1.medium.com/focal/416/151/44/28/0*SV8mG0zMYdREioMg',
      articlefeatureimg: 'https://cdn-images-1.medium.com/max/1600/0*SV8mG0zMYdREioMg',
      articleabstract: 'Abstract',
      articleauthor: this.auth.currentUser.firstName,
      articledate: new Date(),
      articlereadduration: 5,
      articlebody: [
        {
          paragraphnum: 1,
          paragraphcontent: this.bodyEditorModel.editorData
        }
      ],
      articleclapnum: 100,
    }
    this.articleService.addArticle(article);
    this.isDirty = false;
  }
}
