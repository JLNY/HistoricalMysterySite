import { Injectable } from '@angular/core';
import { IArticle } from './article';

const Articles: IArticle[] = [
  {
    articleid: 1,
    articletag: 'Employment',
    articletitle: `How to Tell an Employee Their Work Isn't Good Enough`,
    articlepreviewimg: 'https://cdn-images-1.medium.com/focal/416/151/44/28/0*SV8mG0zMYdREioMg',
    articlefeatureimg: 'https://cdn-images-1.medium.com/max/1600/0*SV8mG0zMYdREioMg',
    articleabstract: 'A script fo routlining your expectations kindly, clearly, and firmly',
    articleauthor: 'Rebecca Fishbein',
    articledate: new Date('2019-06-25'),
    articlereadduration: 5,
    articlebody: [
      {
        paragraphnum: 1,
        paragraphcontent: `<img class='article-content-img' src='https://cdn-images-1.medium.com/max/1600/0*SV8mG0zMYdREioMg'>`
      },
      {
        paragraphnum: 2,
        paragraphcontent:
          `<p class='graf graf--p graf--hasDropCapModel graf--hasDropCap graf--hasDropCapImage graf-after--figure'>
          <span class='dropCap'>
            <span class='aspectRatioPlaceholder'>
              <img class='paragraphCapImage' src='https://cdn-images-1.medium.com/max/800/1*Rc8grmA2r8PeKj1Ts3m53w.png'>
            </span>
          </span> an employee is missing targets, blowing deadlines, or handing in shoddy work, it can be tempting to push
          off any conversation about it and hope that things get better on their own. But you’re not just doing yourself
          and your company a disservice by staying quiet.An employee who’s falling short deserves to know it so that they
          have the opportunity to self-correct before things get too dire. And having to fire someone is even more
          uncomfortable than stepping in earlier.</p>`
      },
      {
        paragraphnum: 3,
        paragraphcontent: `<p name='7220' id='7220' class='graf graf--p graf - after--p'>
          Delivering the news effectively, though, is a delicate art.“It’s important to remember that this person has emotions
          and feelings attached to the information they’re receiving,” says industrial-organizational psychologist
          <a href='http://www.amycooperhakim.com/'data-href='http://www.amycooperhakim.com/' class='markup--anchor markup--p-anchor'
          rel='noopener' target='_blank'>Amy Cooper Hakim</a>, author of <em class='markup--em markup--p-em'>Working with Difficult People
          </em>and founder of the Cooper Strategic Group.</p>`
      }
    ]
  },
  {
    articleid: 2,
    articletag: 'Family Story',
    articletitle: `We Shouldn't Be Surprised By the Drowning Deaths of a Father and Daughter in the Rio Grande`,
    articlepreviewimg: 'https://cdn-images-1.medium.com/focal/100/100/51/4/1*vH7cHbMLPjxJQBMZAdlEdQ.jpeg',
    articlefeatureimg: 'https://cdn-images-1.medium.com/max/2400/1*vH7cHbMLPjxJQBMZAdlEdQ.jpeg',
    articleabstract: 'This is exactly what our immigrtion policy leads to',
    articleauthor: 'John Washington',
    articledate: new Date('2019-06-28'),
    articlereadduration: 5,
    articlebody: [
    ]
  },
  {
    articleid: 3,
    articletag: 'WildLife',
    articletitle: `Why One Arctic Fox Took the Longest Migration in the Species' History`,
    articlepreviewimg: `https://cdn-images-1.medium.com/focal/100/100/41/10/1*Tv3D4E97yKtOyh1wNpOsUg.jpeg`,
    articlefeatureimg: `https://cdn-images-1.medium.com/focal/2400/720/41/10/1*Tv3D4E97yKtOyh1wNpOsUg.jpeg`,
    articleabstract: `The effects of climate change can be tracked in a single animal's record - breaking journey`,
    articleauthor: 'Adam Popescu',
    articledate: new Date('2019-06-25'),
    articlereadduration: 5,
    articlebody: [

    ]
  },
  {
    articleid: 3,
    articletag: 'HealthyFood',
    articletitle: 'Inside the Race to Build the Netflix of Food',
    articlepreviewimg: 'https://cdn-images-1.medium.com/focal/100/100/47/66/1*a5bn0Dx02hptAfcd0hWh5Q.jpeg',
    articlefeatureimg: 'https://cdn-images-1.medium.com/focal/2400/720/47/66/1*a5bn0Dx02hptAfcd0hWh5Q.jpeg',
    articleabstract: `Kraft-Heinz's Evolv is using the algorithmic analysis pioneered by tech companies to help us plan our meals`,
    articleauthor: 'Zander Nethercutt',
    articledate: new Date('2019-06-26'),
    articlereadduration: 9,
    articlebody: [

    ]
  },
  {
    articleid: 4,
    articletag: 'Millennial',
    articletitle: 'Are Millennials Really Growing Horns From Using Their Phones',
    articlepreviewimg: 'https://cdn-images-1.medium.com/fit/c/504/222/1*EzqSge-2VRH7tq-KimYNwA.jpeg',
    articlefeatureimg: 'https://cdn-images-1.medium.com/focal/2400/720/47/66/1*EzqSge-2VRH7tq-KimYNwA.jpeg',
    articleabstract: 'Technology really is changing people, but beware of stories that seem too weird to be real',
    articleauthor: 'Joyhn Hawks',
    articledate: new Date('2019-06-24'),
    articlereadduration: 6,
    articlebody: []
  }
];

@Injectable()
export class ArticleService {
  getHeroStories() {
    return Articles.slice(0, 5);
  }

  getSingleArticle(): IArticle {
    return Articles[0];
  }
}
