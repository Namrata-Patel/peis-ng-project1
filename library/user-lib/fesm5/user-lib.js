import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/user-lib.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserLibService = /** @class */ (function () {
    function UserLibService() {
    }
    UserLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UserLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ UserLibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UserLibService_Factory() { return new UserLibService(); }, token: UserLibService, providedIn: "root" });
    return UserLibService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/user.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * @return {?}
     */
    UserService.prototype.getUsers = /**
     * @return {?}
     */
    function () {
        return this.httpClient.get('http://localhost:3000/api/users');
    };
    UserService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UserService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ UserService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UserService_Factory() { return new UserService(ɵɵinject(HttpClient)); }, token: UserService, providedIn: "root" });
    return UserService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.httpClient;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/user-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
if (false) {
    /** @type {?} */
    UserLibComponent.prototype.users;
    /**
     * @type {?}
     * @private
     */
    UserLibComponent.prototype.userService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/user-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserLibModule = /** @class */ (function () {
    function UserLibModule() {
    }
    UserLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [UserLibComponent],
                    imports: [
                        BrowserModule,
                        CommonModule, HttpClientModule
                    ],
                    exports: [UserLibComponent]
                },] }
    ];
    return UserLibModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: user-lib.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { UserLibComponent, UserLibModule, UserLibService, UserService as ɵa };
//# sourceMappingURL=user-lib.js.map
