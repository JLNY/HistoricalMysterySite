import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { ArticleService } from 'src/app/articleservice/article.service';
import { IArticle } from 'src/app/articleservice/article';

@Component({
  selector: 'hm-articlecontentviewer',
  templateUrl: './articlecontentviewer.component.html',
  styleUrls: ['./articlecontentviewer.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticlecontentviewerComponent implements OnInit {

  article: IArticle;
  
  constructor(private articleservice: ArticleService) { }

  ngOnInit() {
    this.article = this.articleservice.getSingleArticle();
  }

}

const Article = {
  articleid: 12,
  articletag: "Employment",
  articletitle: "How to Tell an Employee Their Work Isn't Good Enough",
  articlepreviewimg: "https://cdn-images-1.medium.com/focal/416/151/44/28/0*SV8mG0zMYdREioMg",
  articlefeatureimg: "https://cdn-images-1.medium.com/max/1600/0*SV8mG0zMYdREioMg",
  articleabstract: "A script fo routlining your expectations kindly, clearly, and firmly",
  articleauthor: "Rebecca Fishbein",
  articledate: "2019-06-25",
  articlereadduration: 5,
  articlebody:[
    {
      paragraphnum: 1,
      paragraphcontent: '<p class="graf graf--p graf--hasDropCapModel graf--hasDropCap graf--hasDropCapImage graf-after--figure"><span class="dropCap"><span class="aspectRatioPlaceholder"><img class="paragraphCapImage" src="https://cdn-images-1.medium.com/max/800/1*Rc8grmA2r8PeKj1Ts3m53w.png"></span></span> an employee is missing targets, blowing deadlines, or handing in shoddy work, it can be tempting to push off any conversation about it and hope that things get better on their own. But you’re not just doing yourself and your company a disservice by staying quiet. An employee who’s falling short deserves to know it so that they have the opportunity to self-correct before things get too dire. And having to fire someone is even more uncomfortable than stepping in earlier.</p>'
    },
    {
      paragraphnum: 2,
      paragraphcontent: '<p name="7220" id="7220" class="graf graf--p graf-after--p">Delivering the news effectively, though, is a delicate art.“It’s important to remember that this person has emotions and feelings attached to the information they’re receiving,” says industrial-organizational psychologist <a href="http://www.amycooperhakim.com/" data-href="http://www.amycooperhakim.com/" class="markup--anchor markup--p-anchor" rel="noopener" target="_blank">Amy Cooper Hakim</a>, author of <em class="markup--em markup--p-em">Working with Difficult People </em>and founder of the Cooper Strategic Group.</p>'
    }
  ]
}
