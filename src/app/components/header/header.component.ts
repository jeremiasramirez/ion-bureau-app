import { Component, OnInit,Input } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() private headerImageUrl :string = ''
  @Input() private headerTitle:string = 'Bureau'
  @Input() private options:boolean
  @Input() private back:boolean
  @Input() private backClose:boolean
  @Input() private color:string
  constructor(
    private menu:MenuController,
    private closeM:ModalController,
    private service:ConfigService){ }


  ngOnInit() {}
  private toHistory():void{
    this.menu.open("menu");
  }

  private async closeModal() :Promise<any>{
    this.closeM.dismiss()

  }
  private toHome():void{
    this.service.to("/home/")
  }

 
}
