import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hm-popularstories',
  templateUrl: './popularstories.component.html',
  styleUrls: ['./popularstories.component.css']
})
export class PopularstoriesComponent implements OnInit {

  popularStories = PopularStories;

  constructor() { }

  ngOnInit() {
  }

}

const PopularStories = [
  {
    tag: "Employment",
    title: "How to Tell an Employee Their Work Isn't Good Enough",
    previewimg: "https://cdn-images-1.medium.com/focal/416/151/44/28/0*SV8mG0zMYdREioMg",
    abstract: "A script fo routlining your expectations kindly, clearly, and firmly",
    author: "Rebecca Fishbein",
    date: "2019-06-25",
    readduration: 5
  },
  {
    tag: "Family Story",
    title: "We Shouldn't Be Surprised By the Drowning Deaths of a Father and Daughter in the Rio Grande",
    previewimg: "https://cdn-images-1.medium.com/focal/100/100/51/4/1*vH7cHbMLPjxJQBMZAdlEdQ.jpeg",
    abstract: "This is exactly what our immigrtion policy leads to",
    author: "John Washington",
    date: "2019-06-28",
    readduration: 5
  },
  {
    tag: "WildLife",
    title: "Why One Arctic Fox Took the Longest Migration in the Species' History",
    previewimg: "https://cdn-images-1.medium.com/focal/100/100/41/10/1*Tv3D4E97yKtOyh1wNpOsUg.jpeg",
    abstract: "The effects of climate change can be tracked in a single animal's record-breaking journey",
    author: "Adam Popescu",
    date: "2019-06-25",
    readduration: 5
  },
  {
    tag: "HealthyFood",
    title: "Inside the Race to Build the Netflix of Food",
    previewimg: "https://cdn-images-1.medium.com/focal/100/100/47/66/1*a5bn0Dx02hptAfcd0hWh5Q.jpeg",
    abstract: "Kraft-Heinz's Evolv is using the algorithmic analysis pioneered by tech companies to help us plan our meals",
    author: "Zander Nethercutt",
    date: "2019-06-26",
    readduration: 9
  },
  {
    tag: "Millennial",
    title: "Are Millennials Really Growing Horns From Using Their Phones",
    previewimg: "https://cdn-images-1.medium.com/fit/c/504/222/1*EzqSge-2VRH7tq-KimYNwA.jpeg",
    abstract: "Technology really is changing people, but beware of stories that seem too weird to be real",
    author: "Joyhn Hawks",
    date: "2019-06-24",
    readduration: 6
  }
]