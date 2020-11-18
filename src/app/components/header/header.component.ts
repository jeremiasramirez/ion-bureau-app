import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() private headerImageUrl :string= "../../assets/icon/header-img/user.png"
  @Input() private headerTitle = 'Bureau'
  
  constructor() { }

  ngOnInit() {}

}
