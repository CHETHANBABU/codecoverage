import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnChanges {
  @Input() userInfo: any;
  userData: any;
  userAddress: any;
  constructor() { }

  ngOnChanges(): void {
    this.userData = this.userInfo.data;
    this.userAddress = this.userInfo.ad;
    console.log(this.userInfo);
    
  }
  ngOnInit(): void {
  }

}
