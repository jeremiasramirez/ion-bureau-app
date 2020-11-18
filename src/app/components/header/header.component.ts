import { Component, OnInit,Input } from '@angular/core';
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
 
  constructor(private service:ConfigService){
    
  }
  ngOnInit() {}
  private toHistory():void{
    this.service.to("/home/history")
  }

  private toHome():void{
    this.service.to("/home")
  }

 
}
