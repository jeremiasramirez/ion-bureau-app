import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ConfigService {

  constructor(private router:Router) {
    console.log("run service!!!")
   }


   public to(route:string):void{
    this.router.navigate([route])
  }
}
