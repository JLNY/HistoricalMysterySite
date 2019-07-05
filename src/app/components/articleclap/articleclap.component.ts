import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hm-articleclap',
  templateUrl: './articleclap.component.html',
  styleUrls: ['./articleclap.component.css']
})
export class ArticleclapComponent implements OnInit {

  @Input() count: number;
  @Input() clapped: boolean;
  @Output() clap = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.clap.emit({});
  }
}
