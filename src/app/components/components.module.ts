import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ConfigService } from '../services/config.service';
import { SkeletonUserComponent } from './skeleton-user/skeleton-user.component';
import { UserComponent } from './user/user.component';
 

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
   HeaderComponent,
   SkeletonUserComponent,
   UserComponent

  ],
  exports:[
    HeaderComponent,
    ConfigService,
    SkeletonUserComponent,
    UserComponent
  ],
  providers:[
    ConfigService
  ]
})
export class ComponentsModule {}
