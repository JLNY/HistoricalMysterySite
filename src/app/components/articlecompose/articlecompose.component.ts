import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hm-articlecompose',
  templateUrl: './articlecompose.component.html',
  styleUrls: ['./articlecompose.component.css']
})
export class ArticlecomposeComponent implements OnInit {

  isDirty = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/dashboard']);
  }
}
