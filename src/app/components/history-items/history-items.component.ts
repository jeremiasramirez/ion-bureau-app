import { Component, Input, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { timer } from 'rxjs';
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
  public startItem: number = 0;
  public endItem: number = 20;
  @Input() inputValue:string; 
  public dataForSearchbar : string = "mi data";
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


  getForInfiniteScroll(event) : void{

    timer(800).subscribe(()=>{
      
      if(this.listItems.length) this.endItem+=10 
      event.target.disabled=true;

    });



  }




}
