/**
 * @fileoverview added by tsickle
 * Generated from: lib/user-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { UserService } from '../lib/user.service';
var UserLibComponent = /** @class */ (function () {
    function UserLibComponent(userService) {
        this.userService = userService;
    }
    /**
     * @return {?}
     */
    UserLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.getUsers();
        console.log("get users");
    };
    /**
     * @return {?}
     */
    UserLibComponent.prototype.getUsers = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.userService.getUsers().subscribe((/**
         * @param {?} arg
         * @return {?}
         */
        function (arg) { return _this.users = arg; }));
    };
    UserLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-user-lib',
                    template: "\n  <table>\n      <thead>\n          <th>Name</th>\n          <th>Index</th>\n      </thead>\n      <tbody>\n          <tr *ngFor=\"let user of users\">\n              <td>{{user.name}}</td>\n          </tr>\n      </tbody>\n  </table>\n"
                }] }
    ];
    /** @nocollapse */
    UserLibComponent.ctorParameters = function () { return [
        { type: UserService }
    ]; };
    return UserLibComponent;
}());
export { UserLibComponent };
if (false) {
    /** @type {?} */
    UserLibComponent.prototype.users;
    /**
     * @type {?}
     * @private
     */
    UserLibComponent.prototype.userService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1saWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdXNlci1saWIvIiwic291cmNlcyI6WyJsaWIvdXNlci1saWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFbEQ7SUFxQkUsMEJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQzs7OztJQUVqRCxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsbUNBQVE7OztJQUFSO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFoQixDQUFnQixFQUFDLENBQUM7SUFDakUsQ0FBQzs7Z0JBOUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGdQQVlYO2lCQUVBOzs7O2dCQWxCUSxXQUFXOztJQWtDcEIsdUJBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQWZZLGdCQUFnQjs7O0lBRTNCLGlDQUFjOzs7OztJQUVGLHVDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL2xpYi9tb2RlbC91c2VyXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uL2xpYi91c2VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdXNlci1saWInLFxuICB0ZW1wbGF0ZTogYFxuICA8dGFibGU+XG4gICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgIDx0aD5JbmRleDwvdGg+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgdXNlciBvZiB1c2Vyc1wiPlxuICAgICAgICAgICAgICA8dGQ+e3t1c2VyLm5hbWV9fTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gIDwvdGFibGU+XG5gLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHVzZXJzOiBVc2VyW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2V0VXNlcnMoKTtcbiAgICBjb25zb2xlLmxvZyhcImdldCB1c2Vyc1wiKTtcbiAgfVxuXG4gIGdldFVzZXJzKCk6IHZvaWQge1xuICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0VXNlcnMoKS5zdWJzY3JpYmUoYXJnID0+IHRoaXMudXNlcnMgPSBhcmcpO1xuICB9XG5cbn1cbiJdfQ==