import { Directive, Inject, OnInit, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from '../services/jquery.service';

@Directive({
  selector: '[hmModaltrigger]'
})
export class ModaltriggerDirective implements OnInit {

  private el: HTMLElement;
  @Input('hmModaltrigger') modalId: string;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
   }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
