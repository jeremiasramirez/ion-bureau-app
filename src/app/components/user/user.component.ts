import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() private data={}

  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

}
