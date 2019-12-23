/**
 * @fileoverview added by tsickle
 * Generated from: lib/user-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { UserService } from '../lib/user.service';
export class UserLibComponent {
    /**
     * @param {?} userService
     */
    constructor(userService) {
        this.userService = userService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.getUsers();
        console.log("get users");
    }
    /**
     * @return {?}
     */
    getUsers() {
        this.userService.getUsers().subscribe((/**
         * @param {?} arg
         * @return {?}
         */
        arg => this.users = arg));
    }
}
UserLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-user-lib',
                template: `
  <table>
      <thead>
          <th>Name</th>
          <th>Index</th>
      </thead>
      <tbody>
          <tr *ngFor="let user of users">
              <td>{{user.name}}</td>
          </tr>
      </tbody>
  </table>
`
            }] }
];
/** @nocollapse */
UserLibComponent.ctorParameters = () => [
    { type: UserService }
];
if (false) {
    /** @type {?} */
    UserLibComponent.prototype.users;
    /**
     * @type {?}
     * @private
     */
    UserLibComponent.prototype.userService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1saWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdXNlci1saWIvIiwic291cmNlcyI6WyJsaWIvdXNlci1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFtQmxELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFJM0IsWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBSSxDQUFDOzs7O0lBRWpELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsU0FBUzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUMsQ0FBQztJQUNqRSxDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztDQVlYO2FBRUE7Ozs7WUFsQlEsV0FBVzs7OztJQXFCbEIsaUNBQWM7Ozs7O0lBRUYsdUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vbGliL21vZGVsL3VzZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbGliL3VzZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi11c2VyLWxpYicsXG4gIHRlbXBsYXRlOiBgXG4gIDx0YWJsZT5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgPHRoPkluZGV4PC90aD5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCB1c2VyIG9mIHVzZXJzXCI+XG4gICAgICAgICAgICAgIDx0ZD57e3VzZXIubmFtZX19PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgPC90Ym9keT5cbiAgPC90YWJsZT5cbmAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVXNlckxpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdXNlcnM6IFVzZXJbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nZXRVc2VycygpO1xuICAgIGNvbnNvbGUubG9nKFwiZ2V0IHVzZXJzXCIpO1xuICB9XG5cbiAgZ2V0VXNlcnMoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyU2VydmljZS5nZXRVc2VycygpLnN1YnNjcmliZShhcmcgPT4gdGhpcy51c2VycyA9IGFyZyk7XG4gIH1cblxufVxuIl19