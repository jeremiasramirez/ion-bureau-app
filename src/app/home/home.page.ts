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

  private inputId:{identification:string}={
    identification:''
  }
 
  constructor(private service:ConfigService) { }

  private getInfo() :void{
       
      // loading spinner
      this.isLoader=true

      this.service.getUser(this.inputId.identification).
        subscribe((resp)=>{
          
          
          this.resultUser=resp
          console.log(this.resultUser)

          // setter to storage 
          if(resp.Nombres) this.service.setToStorage(resp)

        }, ()=>{return}, ()=>this.isLoader=false)
    }
 
}
