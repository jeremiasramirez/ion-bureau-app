import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-user',
  templateUrl: './skeleton-user.component.html',
  styleUrls: ['./skeleton-user.component.scss'],
})
export class SkeletonUserComponent implements OnInit {
  @Input() private show:boolean = true;
  @Input() private url:string = '';
  constructor() { }

  ngOnInit() {}

}
