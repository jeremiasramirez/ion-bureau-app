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
  private resultUser={ok:false};
  private isLoader:boolean =false

  private inputId:{identification:number}={
    identification:null
  }
 
  constructor(private service:ConfigService) {
  
  }

  private getInfo() :void{
       
      // loading spinner
      this.isLoader=true

      this.service.getUser(this.inputId.identification).
        subscribe((resp)=>{
          
          
          this.resultUser=resp
          console.log(this.resultUser)

        }, ()=>{return}, ()=>this.isLoader=false)
    }
 
}
