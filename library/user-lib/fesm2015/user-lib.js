import { Injectable, ɵɵdefineInjectable, ɵɵinject, Component, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/user-lib.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserLibService {
    constructor() { }
}
UserLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UserLibService.ctorParameters = () => [];
/** @nocollapse */ UserLibService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UserLibService_Factory() { return new UserLibService(); }, token: UserLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/user.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserService {
    /**
     * @param {?} httpClient
     */
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * @return {?}
     */
    getUsers() {
        return this.httpClient.get('http://localhost:3000/api/users');
    }
}
UserService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UserService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ UserService.ngInjectableDef = ɵɵdefineInjectable({ factory: function UserService_Factory() { return new UserService(ɵɵinject(HttpClient)); }, token: UserService, providedIn: "root" });
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
class UserLibComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/user-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserLibModule {
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
