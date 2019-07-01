import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hm-herostories',
  templateUrl: './herostories.component.html',
  styleUrls: ['./herostories.component.css']
})
export class HerostoriesComponent implements OnInit {

  leftherostory = HeroStories[0];
  midherostory = HeroStories.slice(1, 4);
  rightherostory = HeroStories[4];

  constructor() { }

  ngOnInit() {
  }

}

const HeroStories = [
  {
    articleid: 1,
    articletag: "Employment",
    articletitle: "How to Tell an Employee Their Work Isn't Good Enough",
    articlepreviewimg: "https://cdn-images-1.medium.com/focal/416/151/44/28/0*SV8mG0zMYdREioMg",
    articleabstract: "A script fo routlining your expectations kindly, clearly, and firmly",
    articleauthor: "Rebecca Fishbein",
    articledate: "2019-06-25",
    articlereadduration: 5
  },
  {
    articleid: 2,
    articletag: "Family Story",
    articletitle: "We Shouldn't Be Surprised By the Drowning Deaths of a Father and Daughter in the Rio Grande",
    articlepreviewimg: "https://cdn-images-1.medium.com/focal/100/100/51/4/1*vH7cHbMLPjxJQBMZAdlEdQ.jpeg",
    articleabstract: "This is exactly what our immigrtion policy leads to",
    articleauthor: "John Washington",
    articledate: "2019-06-28",
    articlereadduration: 5
  },
  {
    articleid: 3,
    articletag: "WildLife",
    articletitle: "Why One Arctic Fox Took the Longest Migration in the Species' History",
    articlepreviewimg: "https://cdn-images-1.medium.com/focal/100/100/41/10/1*Tv3D4E97yKtOyh1wNpOsUg.jpeg",
    articleabstract: "The effects of climate change can be tracked in a single animal's record-breaking journey",
    articleauthor: "Adam Popescu",
    articledate: "2019-06-25",
    articlereadduration: 5
  },
  {
    articleid: 4,
    articletag: "HealthyFood",
    articletitle: "Inside the Race to Build the Netflix of Food",
    articlepreviewimg: "https://cdn-images-1.medium.com/focal/100/100/47/66/1*a5bn0Dx02hptAfcd0hWh5Q.jpeg",
    articleabstract: "Kraft-Heinz's Evolv is using the algorithmic analysis pioneered by tech companies to help us plan our meals",
    articleauthor: "Zander Nethercutt",
    articledate: "2019-06-26",
    articlereadduration: 9
  },
  {
    articleid: 5,
    articletag: "Millennial",
    articletitle: "Are Millennials Really Growing Horns From Using Their Phones",
    articlepreviewimg: "https://cdn-images-1.medium.com/fit/c/504/222/1*EzqSge-2VRH7tq-KimYNwA.jpeg",
    articleabstract: "Technology really is changing people, but beware of stories that seem too weird to be real",
    articleauthor: "Joyhn Hawks",
    articledate: "2019-06-24",
    articlereadduration: 6
  }
]