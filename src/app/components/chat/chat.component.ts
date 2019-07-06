import { Component, OnInit } from '@angular/core';
import { ChatAdapter } from 'ng-chat';
import { OfflineBotAdapter } from './offlinebotadapter';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'hm-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  title = 'app';
  userId = 999;
  public adapter: ChatAdapter = new OfflineBotAdapter();

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
