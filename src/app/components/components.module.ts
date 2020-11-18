import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ConfigService } from '../services/config.service';
 

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
   HeaderComponent 
  ],
  exports:[
    HeaderComponent,
    ConfigService 
  ],
  providers:[
    ConfigService
  ]
})
export class ComponentsModule {}
