import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../core/peis-ng-user/user.service';
import { User } from '../../../../core/peis-ng-user/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) {

   }

  users: User[] = [];

  ngOnInit() {
    this.getUsers();
  }

  public getUsers() {
    console.log("here");
    this.userService.getAllUsers().subscribe(resp => {
      console.log(resp);
      const keys = resp.headers.keys();
       for (const data of resp.body) {
        this.users.push(data);
      }
      console.log("users",this.users);
    });
  }

}
