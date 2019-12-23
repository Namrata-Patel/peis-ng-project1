(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/platform-browser'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('user-lib', ['exports', '@angular/core', '@angular/common/http', '@angular/platform-browser', '@angular/common'], factory) :
    (global = global || self, factory(global['user-lib'] = {}, global.ng.core, global.ng.common.http, global.ng.platformBrowser, global.ng.common));
}(this, (function (exports, core, http, platformBrowser, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/user-lib.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UserLibService = /** @class */ (function () {
        function UserLibService() {
        }
        UserLibService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        UserLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ UserLibService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function UserLibService_Factory() { return new UserLibService(); }, token: UserLibService, providedIn: "root" });
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        UserService.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        /** @nocollapse */ UserService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function UserService_Factory() { return new UserService(core.ɵɵinject(http.HttpClient)); }, token: UserService, providedIn: "root" });
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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        declarations: [UserLibComponent],
                        imports: [
                            platformBrowser.BrowserModule,
                            common.CommonModule, http.HttpClientModule
                        ],
                        exports: [UserLibComponent]
                    },] }
        ];
        return UserLibModule;
    }());

    exports.UserLibComponent = UserLibComponent;
    exports.UserLibModule = UserLibModule;
    exports.UserLibService = UserLibService;
    exports.ɵa = UserService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=user-lib.umd.js.map
