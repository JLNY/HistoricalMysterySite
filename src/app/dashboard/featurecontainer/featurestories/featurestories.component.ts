import { Component, OnInit } from '@angular/core';

const FeatureStories = [
  {
    tag: `Based on your reading history`,
    title: `How To Update Visual Studio Asp.Net Core Angular Project To The Latest Version`,
    previewimg: `https://cdn-images-1.medium.com/max/800/0*syfFJWLOzLoNRUbF.`,
    abstract: `The udpated Angular project template provides a convenient starting point for
      ASP.NET Core apps using Angular and the Angular CLI to the latest version`,
    author: `Wael Kdouh`,
    date: `2019-04-02`,
    readduration: 4
  },
  {
    tag: `Vusial Design`,
    title: `I created the exact same app in React and Vue. Here are the differences.`,
    previewimg: `https://cdn-images-1.medium.com/fit/c/152/156/1*vVXicFhmOOyYASuzkM570w.jpeg`,
    abstract: `React vs Vue. Finally, a side-by-side code comparison between Vue and React!`,
    author: `Sunil Sandhu in JavaScript in Plain English`,
    date: `2018-07-24`,
    readduration: 12
  },
  {
    tag: `Leadership`,
    title: `Why You Delay Hard Decisions: Fear of the Bad Thing`,
    previewimg: `https://cdn-images-1.medium.com/fit/c/152/156/1*pWGJIKats-zuumA3RQNEWQ.jpeg`,
    abstract: `Changing the Status Quo is Scary, But It's Your Job`,
    author: `Joe Dunn`,
    date: `2019-06-29`,
    readduration: 7
  },
  {
    tag: `Cybersecurity`,
    title: `5 Easy Steps to understanding JSON Web Tokens(JWT)`,
    previewimg: `https://cdn-images-1.medium.com/fit/c/152/156/1*sxksghXlAI6HLtn1ZqREIg.png`,
    abstract: `In this articla, the fundamentals of what JSON Web Tokens (JWT) are,
      and why they are used will be explained. JWT are an important piece in the development`,
    author: `Mikey Stecky-Efantis in vandium software`,
    date: `2016-05-16`,
    readduration: 7
  }
];

@Component({
  selector: 'app-featurestories',
  templateUrl: './featurestories.component.html',
  styleUrls: ['./featurestories.component.css']
})
export class FeaturestoriesComponent implements OnInit {

  featurestories = FeatureStories;

  constructor() { }

  ngOnInit() { }
}
