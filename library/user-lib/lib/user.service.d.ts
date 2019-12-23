import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user';
export declare class UserService {
    private httpClient;
    constructor(httpClient: HttpClient);
    getUsers(): Observable<User[]>;
}
