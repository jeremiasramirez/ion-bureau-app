import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';
import { UsermodalComponent } from '../usermodal/usermodal.component';

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

  constructor(
    private menu:MenuController,
    private modalUser:ModalController,
    private historyItems:ConfigService) { }

  ngOnInit() {
    this.getItems();
  }
  ngOnDestroy(){
    this.listItems=[]
  }
  private getItems():void{
    
    this.listItems = this.historyItems.getAllStorageHistory()
   
  }

  private async getItem(history:{}):Promise<any>{
    this.menu.close("menu");
    
    const modal = await this.modalUser.create({
      component: UsermodalComponent,
      componentProps: {data:history}
    })
    modal.present();
  }

}
