import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usermodal',
  templateUrl: './usermodal.component.html',
  styleUrls: ['./usermodal.component.scss', '../user/user.component.scss'],
})
export class UsermodalComponent implements OnInit {
  @Input() private data= {}
  constructor() { }

  ngOnInit() {}

}
