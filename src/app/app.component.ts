import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';
import { WebElement } from 'protractor';
import { HtmlTagDefinition } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public valueForSearchBar :any = "";
  public existWriting:boolean=false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.statusBar.show();
  }

  activeSpinner():void{
    
    this.existWriting = true
    timer(1100).subscribe(()=>{
      this.existWriting = false
    })


  }
  deleteHistory():void{
    this.valueForSearchBar = "";
  }


  getValueBySearch():void {

    this.activeSpinner();

    // if(document.getElementById("searchbar")){
    //   console.log(document.getElementById("searchbar").getElementsByClassName("searchbar-input")[0].textContent)
    // }
    
    let valueSearchbar = document.getElementById("searchbar").value
    this.valueForSearchBar = valueSearchbar
 
  }
   
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByName("blue");
      this.splashScreen.hide();
    });
  }
}
