import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import {ajax} from 'rxjs/ajax'
import {delay, pluck} from 'rxjs/operators'

@Injectable()
export class ConfigService {
  private uriAPI:string;
  public history:any[] = []
  constructor(private router:Router){
    if(JSON.parse(localStorage.getItem("history"))){
      this.history =JSON.parse(localStorage.getItem("history"))
    }
  }

  public getUser(id:string):Observable<any>{
    let url:string="https://api.adamix.net/apec/cedula"
    return ajax.get(`${url}/${id}`).pipe(delay(200),pluck('response'))
  }

  public to(route:string):void{
    timer(300).subscribe(()=>this.router.navigate([route]));
  }

  public setToStorage(item:{}) :void{
    this.history.unshift(item)
    
    localStorage.setItem("history", JSON.stringify(this.history) )
  }

  public getAllStorageHistory() : any[]{
    let elementStorage = JSON.parse(localStorage.getItem("history"))
    return elementStorage
  }


}
