import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'hm-metabar',
  templateUrl: './metabar.component.html',
  styleUrls: ['./metabar.component.css']
})
export class MetabarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
