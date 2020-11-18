import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  providers:[
    ConfigService
  ]
})
export class HistoryPage implements OnInit {

  constructor(private service:ConfigService) { }

  ngOnInit() {
  }

}
