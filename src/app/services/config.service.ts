import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import {ajax} from 'rxjs/ajax'
import {delay, pluck} from 'rxjs/operators'

@Injectable()
export class ConfigService {
  private uriAPI:string;
  constructor(private router:Router) {
    console.log("run service!!!")
  }

  getUser(id:string):Observable<any>{
    return ajax.get(`https://api.adamix.net/apec/cedula/${id}`).pipe(delay(200),pluck('response'))
  }

   public to(route:string):void{
    timer(300).subscribe(()=>this.router.navigate([route]));
  }
}
