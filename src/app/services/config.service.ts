import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {ajax} from 'rxjs/ajax'
import {pluck} from 'rxjs/operators'

@Injectable()
export class ConfigService {
  private uriAPI:string;
  constructor(private router:Router) {
    console.log("run service!!!")
  }

  getUserByDocumentNumber(id:number):Observable<any>{
    return ajax.get(`https://api.adamix.net/apec/cedula/${id}`).pipe(pluck('response'))
  }

   public to(route:string):void{
    this.router.navigate([route])
  }
}
