import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../providers/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userlist: any = [];
  model: any;

  @Output() userEmit = new EventEmitter<any>();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(): void {
    this.userService.getUserDetails().subscribe(res => {
      this.userlist = res;
    });
  }

  handleUserSelect(): void {
    this.userEmit.emit({id: +this.model});
  }

}
