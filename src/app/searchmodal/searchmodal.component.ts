import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from '../jqueryservice/jquery.service'

@Component({
  selector: 'hm-searchmodal',
  templateUrl: './searchmodal.component.html',
  styleUrls: ['./searchmodal.component.css']
})
export class SearchmodalComponent implements OnInit {
  @Input() title: string;
  @Input() elementId: string;
  @ViewChild('modalcontainer', {read: false, static: false}) containerEl: ElementRef;
  @Input() closeOnBodyClick: string;

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() {
  }

  closeModal(){
    if( this.closeOnBodyClick.toLocaleLowerCase() === "true" ){
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }
}
