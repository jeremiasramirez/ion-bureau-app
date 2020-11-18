import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:[
    ConfigService
  ]
})
export class HomePage {

  constructor(private service:ConfigService) {}

}
