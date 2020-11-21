import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-history-items',
  templateUrl: './history-items.component.html',
  styleUrls: ['./history-items.component.scss'],
  providers:[
    ConfigService
  ]
})
export class HistoryItemsComponent implements OnInit {
  private listItems :any[] = []

  constructor(private historyItems:ConfigService) { }

  ngOnInit() {
    this.getItems();
    console.log(this.listItems)
  }

  private getItems():void{
    this.listItems = this.historyItems.getAllStorageHistory()
  }

}
