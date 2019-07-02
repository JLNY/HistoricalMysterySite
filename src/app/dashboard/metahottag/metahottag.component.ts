import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hm-metahottag',
  templateUrl: './metahottag.component.html',
  styleUrls: ['./metahottag.component.css']
})
export class MetahottagComponent implements OnInit {

  hottags: any = [
    "Home",
    "OneZero",
    "Elemental",
    "Gen",
    "Startups",
    "Self",
    "Tech",
    "Heated",
    "Zora",
    "Design",
    "Culture",
    "Human Parts",
    "More"
    ]
  constructor() { }

  ngOnInit() {
  }

}
