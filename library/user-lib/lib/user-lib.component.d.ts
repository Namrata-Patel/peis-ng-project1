import { OnInit } from '@angular/core';
import { User } from "../lib/model/user";
import { UserService } from '../lib/user.service';
export declare class UserLibComponent implements OnInit {
    private userService;
    users: User[];
    constructor(userService: UserService);
    ngOnInit(): void;
    getUsers(): void;
}
