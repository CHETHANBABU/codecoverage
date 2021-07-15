import { Component, OnInit } from '@angular/core';
import { UserService } from '../providers/user.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {
  userInfo: any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  getUserInfo(userId: any): void {
    this.userService.getUserInfo(userId.id).subscribe(res => {
      console.log(res);
      this.userInfo = res;
    });
  }

}
