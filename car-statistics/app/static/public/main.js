(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm-email/confirm-email.component */ "./src/app/confirm-email/confirm-email.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _confirm_reset_confirm_reset_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./confirm-reset/confirm-reset.component */ "./src/app/confirm-reset/confirm-reset.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/filter/filter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'register', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] },
    { path: 'confirm/:token', component: _confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmEmailComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"] },
    { path: 'reset', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"] },
    { path: 'reset_password_confirm/:token', component: _confirm_reset_confirm_reset_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmResetComponent"] },
    { path: 'filter', component: _filter_filter_component__WEBPACK_IMPORTED_MODULE_11__["FilterComponent"] },
    { path: '**', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_3__["NotfoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{\nbackground-color: rgb(22, 17, 17);\nborder-radius: 4px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-notification *ngIf=\"loggedIn\"></app-notification>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loggedIn = this.auth.isLogined();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-plotly.js */ "./node_modules/angular-plotly.js/esm5/angular-plotly.js.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./confirm-email/confirm-email.component */ "./src/app/confirm-email/confirm-email.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/filter/filter.component.ts");
/* harmony import */ var _filter_item_filter_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filter-item/filter-item.component */ "./src/app/filter-item/filter-item.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _confirm_reset_confirm_reset_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./confirm-reset/confirm-reset.component */ "./src/app/confirm-reset/confirm-reset.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _file_uploads_file_uploads_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./file-uploads/file-uploads.component */ "./src/app/file-uploads/file-uploads.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/notification/notification.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__["NotfoundComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmEmailComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_15__["LogoutComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_14__["ResetPasswordComponent"],
                _confirm_reset_confirm_reset_component__WEBPACK_IMPORTED_MODULE_16__["ConfirmResetComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"],
                _file_uploads_file_uploads_component__WEBPACK_IMPORTED_MODULE_19__["FileUploadsComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_18__["TableComponent"],
                _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_21__["StatisticsComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_22__["NotificationComponent"],
                _filter_filter_component__WEBPACK_IMPORTED_MODULE_11__["FilterComponent"],
                _filter_item_filter_item_component__WEBPACK_IMPORTED_MODULE_12__["FilterItemComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                angular_plotly_js__WEBPACK_IMPORTED_MODULE_4__["PlotlyModule"]
            ],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
        this.returnUrl = '/login';
    }
    AuthGuardService.prototype.isLogined = function () {
        function getCookie(name) {
            var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }
        return getCookie("session");
    };
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.isLogined()) {
            return true;
        }
        else {
            this.router.navigate([this.returnUrl], { queryParams: { authRedirecting: true } });
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(_http) {
        this._http = _http;
        this.login_api_url = "api/login";
        this.register_api_url = "api/register";
        this.confirm_url = "api/confirm/";
        this.logout_api_url = "api/logout";
        this.reset_password_url = "api/reset";
        this.reset_password_confirm_api = "api/password_reset";
    }
    AuthService.prototype.toRegister = function (user) {
        return this._http.post(this.register_api_url, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) { return console.log(data); }, function (error) { return console.log(error); }));
    };
    AuthService.prototype.toLogin = function (user) {
        return this._http.post(this.login_api_url, user);
    };
    AuthService.prototype.toLogout = function (user) {
        return this._http.post(this.logout_api_url, user);
    };
    AuthService.prototype.toResetPassword = function (email) {
        return this._http.post(this.reset_password_url, { 'email': email });
    };
    AuthService.prototype.toResetPasswordConfirm = function (token, password) {
        return this._http.put(this.reset_password_confirm_api + '/' + token, { 'password': password });
    };
    AuthService.prototype.confirmEmail = function (token) {
        return this._http.get(this.confirm_url + token);
    };
    AuthService.prototype.isLoggedIn = function () {
        return this._http.get('api/get_user_data');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/confirm-email/confirm-email.component.css":
/*!***********************************************************!*\
  !*** ./src/app/confirm-email/confirm-email.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/confirm-email/confirm-email.component.html":
/*!************************************************************!*\
  !*** ./src/app/confirm-email/confirm-email.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  You have confirmed registration. Proceed to <a routerLink=\"\">home page</a>\n"

/***/ }),

/***/ "./src/app/confirm-email/confirm-email.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/confirm-email/confirm-email.component.ts ***!
  \**********************************************************/
/*! exports provided: ConfirmEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEmailComponent", function() { return ConfirmEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmEmailComponent = /** @class */ (function () {
    function ConfirmEmailComponent(auth, route, router) {
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.returnUrl = '/login';
    }
    ConfirmEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.confirmEmail(this.route.snapshot.params["token"])
            .subscribe(function (res) { return _this.router.navigate([_this.returnUrl]); });
    };
    ConfirmEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-email',
            template: __webpack_require__(/*! ./confirm-email.component.html */ "./src/app/confirm-email/confirm-email.component.html"),
            styles: [__webpack_require__(/*! ./confirm-email.component.css */ "./src/app/confirm-email/confirm-email.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ConfirmEmailComponent);
    return ConfirmEmailComponent;
}());



/***/ }),

/***/ "./src/app/confirm-reset/confirm-reset.component.css":
/*!***********************************************************!*\
  !*** ./src/app/confirm-reset/confirm-reset.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media(min-width: 768px) {\n    .field-label-responsive {\n      padding-top: .5rem;\n      text-align: right;\n      \n    }\n\n  }"

/***/ }),

/***/ "./src/app/confirm-reset/confirm-reset.component.html":
/*!************************************************************!*\
  !*** ./src/app/confirm-reset/confirm-reset.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth\">\n    <div class=\"form\">\n        <form [formGroup]=\"resetPasswordGroup\" (ngSubmit)=\"toConfirmReset()\">\n            <div class=\"row\">\n                <div class=\"col-md-3\"></div>\n                <div class=\"col-md-6\">\n                    <h2>Register New User</h2>\n                    <hr>\n                    <br><br>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3 field-label-responsive\">\n                    <label for=\"password\"> New password</label>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group has-danger\">\n                        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                            <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n                            <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"password\"\n                                   placeholder=\"Password\" required>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3 field-label-responsive\">\n                    <label for=\"password\">Confirm password</label>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group has-danger\">\n                        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                            <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n                            <input type=\"password\" formControlName=\"password_confirm\" class=\"form-control\"\n                                   id=\"password_confirm\"\n                                   placeholder=\"Password\" required>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\"></div>\n                <div class=\"col-md-6\">\n                    <div class=\"alert alert-danger\" *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n                        <ul>\n                            <li *ngIf=\"password.errors.minlength || password.errors.maxlength\">Password must be from 8\n                                to 40\n                                characters long\n                            </li>\n                            <li *ngIf=\"password.errors.wrongFormat\">Password must contain at least one digit</li>\n\n                        </ul>\n                    </div>\n                    <div class=\"alert alert-danger\"\n                         *ngIf=\"resetPasswordGroup.valid && password.value != password_confirm.value\">\n                        Passwords do not match\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\"></div>\n                <div class=\"col-md-6\">\n                    <button class=\"btn btn-success\" type=\"submit\"\n                            [disabled]=\"!resetPasswordGroup.valid && password.value != password_confirm.value\">Submit\n                    </button>\n                </div>\n                <div class=\"col-md-3\"></div>\n            </div>\n\n        </form>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/confirm-reset/confirm-reset.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/confirm-reset/confirm-reset.component.ts ***!
  \**********************************************************/
/*! exports provided: ConfirmResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmResetComponent", function() { return ConfirmResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _directives_text_format_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/text-format.directive */ "./src/app/directives/text-format.directive.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfirmResetComponent = /** @class */ (function () {
    function ConfirmResetComponent(auth_, router, route) {
        this.auth_ = auth_;
        this.router = router;
        this.route = route;
        this.resetPasswordGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(40),
                Object(_directives_text_format_directive__WEBPACK_IMPORTED_MODULE_2__["TextFormatDirective"])(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
            ]),
            password_confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(40),
                Object(_directives_text_format_directive__WEBPACK_IMPORTED_MODULE_2__["TextFormatDirective"])(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
            ])
        });
    }
    ConfirmResetComponent.prototype.toConfirmReset = function () {
        var _this = this;
        if (this.resetPasswordGroup.controls['password'].value ===
            this.resetPasswordGroup.controls['password_confirm'].value) {
            this.auth_.toResetPasswordConfirm(this.route.snapshot.params["token"], this.resetPasswordGroup.controls['password'].value).subscribe(function (res) {
                _this.router.navigate([_this.returnUrl]);
                _this.resetPasswordGroup.setValue({ email: '', password: '' });
            });
        }
    };
    Object.defineProperty(ConfirmResetComponent.prototype, "password", {
        get: function () {
            return this.resetPasswordGroup.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfirmResetComponent.prototype, "password_confirm", {
        get: function () {
            return this.resetPasswordGroup.get('password_confirm');
        },
        enumerable: true,
        configurable: true
    });
    ConfirmResetComponent.prototype.ngOnInit = function () {
        this.returnUrl = '/login';
    };
    ConfirmResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-reset',
            template: __webpack_require__(/*! ./confirm-reset.component.html */ "./src/app/confirm-reset/confirm-reset.component.html"),
            styles: [__webpack_require__(/*! ./confirm-reset.component.css */ "./src/app/confirm-reset/confirm-reset.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ConfirmResetComponent);
    return ConfirmResetComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
        this.get_statistics_url = 'api/statistics/';
        this.get_rows_url = 'api/get_rows/';
    }
    DataService.prototype.get = function () {
        return this._http.get('test');
    };
    DataService.prototype.getStatistics = function (dataset_id) {
        return this._http.get(this.get_statistics_url + dataset_id);
    };
    DataService.prototype.getRows = function (dataset_id, number_of_rows) {
        return this._http.get(this.get_rows_url + dataset_id + '/' + number_of_rows);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/directives/text-format.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/text-format.directive.ts ***!
  \*****************************************************/
/*! exports provided: TextFormatDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFormatDirective", function() { return TextFormatDirective; });
function TextFormatDirective(nameRe) {
    return function (control) {
        var correct = nameRe.test(control.value);
        return correct ? null : { 'wrongFormat': { value: control.value } };
    };
}


/***/ }),

/***/ "./src/app/file-uploads/file-uploads.component.css":
/*!*********************************************************!*\
  !*** ./src/app/file-uploads/file-uploads.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/file-uploads/file-uploads.component.html":
/*!**********************************************************!*\
  !*** ./src/app/file-uploads/file-uploads.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>File Upload</h3>\n<div class=\"custom-file\">\n    <input type=\"file\" (change)=\"onFileSelected($event)\" class=\"custom-file\">\n    <button type=\"button\" (click)=\"onUpload()\">Upload</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/file-uploads/file-uploads.component.ts":
/*!********************************************************!*\
  !*** ./src/app/file-uploads/file-uploads.component.ts ***!
  \********************************************************/
/*! exports provided: FileUploadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadsComponent", function() { return FileUploadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileUploadsComponent = /** @class */ (function () {
    function FileUploadsComponent(http) {
        this.http = http;
        this.selectedFile = null;
        this.fileUploaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FileUploadsComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    FileUploadsComponent.prototype.onUpload = function () {
        var _this = this;
        var filedata = new FormData();
        filedata.append('upload_file', this.selectedFile, this.selectedFile.name);
        this.http.post('api/upload', filedata)
            .subscribe(function (res) {
            console.log(res);
            _this.fileUploaded.emit(res['result'][2]);
        });
    };
    FileUploadsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FileUploadsComponent.prototype, "fileUploaded", void 0);
    FileUploadsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-file-uploads',
            template: __webpack_require__(/*! ./file-uploads.component.html */ "./src/app/file-uploads/file-uploads.component.html"),
            styles: [__webpack_require__(/*! ./file-uploads.component.css */ "./src/app/file-uploads/file-uploads.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FileUploadsComponent);
    return FileUploadsComponent;
}());



/***/ }),

/***/ "./src/app/filter-item/filter-item.component.css":
/*!*******************************************************!*\
  !*** ./src/app/filter-item/filter-item.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    border-color: dodgerblue;\n}\n\n.button-group {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.operator-button {\n    margin-top: 20px;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.row-padding {\n    margin-bottom: 20px;\n    position:relative;\n}\n\n.ribbon {\n  position:absolute;\n  top:0;\n  right:0;\n}\n"

/***/ }),

/***/ "./src/app/filter-item/filter-item.component.html":
/*!********************************************************!*\
  !*** ./src/app/filter-item/filter-item.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-padding\">\n    <div class=\"col-md-4\"></div>\n    <div class=\"col-md-4\">\n        <div class=\"card primary\">\n            <div class=\"card-body\">\n                <form class=\"form\">\n                    <div class=\"form-row\">\n                        <div class=\"col-7\">\n                            <select class=\"form-control\" (change)=\"addColumn($event.target.value)\"\n                                    [disabled]=\"disColumn\">\n                                <option value=\"\" disabled selected>Chose column</option>\n                                <option *ngFor=\"let row of columns\">\n                                    {{ row }}\n                                </option>\n                            </select>\n                        </div>\n                        <div>\n                            <span class=\"btn btn-success\" *ngIf=\"count_rows\">{{ count_rows }}</span>\n                        </div>\n                        <div class=\"col input-group\">\n                            <input type=\"number\" name=\"user_quantity\" [ngModel]=\"quantity\"\n                                   (ngModelChange)=\"setQuantity($event)\"\n                                   [className]=\"valid_quantity ? 'form-control' : 'form-control is-invalid'\"\n                                   placeholder=\"Max {{ maxPercentageForUser }}\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\">%</span>\n                            </div>\n                            <div class=\"invalid-feedback\">\n                                {{ quantityError }}\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group mx-sm-2 mb-2\">\n                        <div class=\"button-group\" *ngIf=\"column && !operator\">\n                            <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addOperator('==')\">=</button>\n                            <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addOperator('!=')\">!=</button>\n                            <button type=\"button\" *ngIf=\"valueMaxMin.max\" class=\"btn btn-primary btn-sm\" (click)=\"addOperator('<')\"><</button>\n                            <button type=\"button\" *ngIf=\"valueMaxMin.max\" class=\"btn btn-primary btn-sm\" (click)=\"addOperator('>')\">></button>\n                        </div>\n                        <div class=\"button-group\" *ngIf=\"column && operator\">\n                            <button type=\"button\" class=\"btn btn-primary btn-sm\">{{ operator }}</button>\n                        </div>\n                    </div>\n                    <div class=\"form-group mb-2\">\n                        <select class=\"form-control\" *ngIf=\"operator && !valueMaxMin.max\" (change)=\"addValue($event.target.value)\"\n                                [disabled]=\"disValue\">\n                            <option value=\"\" disabled selected>Chose value</option>\n                            <option *ngFor=\"let row of values\">\n                                {{ row }}\n                            </option>\n                        </select>\n                        <input *ngIf=\"operator && valueMaxMin.max\" type=\"number\"\n                                   name=\"range_value\"\n                                   [ngModel]=\"rangeValue\"\n                                   (ngModelChange)=\"setRangeValue($event)\"\n                                   [className]=\"rangeValueError ? 'form-control  is-invalid' : 'form-control'\"\n                                   placeholder=\"Min: {{ valueMaxMin.min }} Max: {{ valueMaxMin.max }}\">\n                        <div class=\"invalid-feedback\">\n                                {{ rangeValueError }}\n                            </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <div class=\"operator-button\" *ngIf=\"(value || rangeValue) && !operatorBtwElem\">\n            <button type=\"button\" class=\"btn btn-info\" (click)=\"addElem('And')\">Add column</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">Save filter</button>\n        </div>\n        <div class=\"operator-button\" *ngIf=\"value && operatorBtwElem\">\n            <button type=\"button\" class=\"btn btn-info\">{{ operatorBtwElem }}</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/filter-item/filter-item.component.ts":
/*!******************************************************!*\
  !*** ./src/app/filter-item/filter-item.component.ts ***!
  \******************************************************/
/*! exports provided: FilterItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterItemComponent", function() { return FilterItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterItemComponent = /** @class */ (function () {
    function FilterItemComponent(http) {
        this.http = http;
        this.operatorBtwElem = '';
        this.valid_quantity = true;
        this.maxPercentageForUser = 100;
        this.new_column = true;
        this.param_index = 0;
        this.disColumn = false;
        this.disValue = false;
        this.disQuantity = false;
        this.valuesPushed = false;
        this.valueMaxMin = {};
        this.values = [];
        this.addFilterElem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pushFilterParams = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FilterItemComponent.prototype.ngOnInit = function () {
    };
    FilterItemComponent.prototype.save = function () {
        if (!this.checkQuantity()) {
            return false;
        }
        if (!this.valuesPushed) {
            this.pushFilterParams.emit({
                'column': this.column,
                'operator': this.operator,
                'value': this.value,
                'quantity': this.calculateQuantity(),
            });
        }
        this.valuesPushed = true;
        this.saveFilter.emit();
    };
    FilterItemComponent.prototype.addElem = function (data) {
        if (!this.checkQuantity()) {
            return false;
        }
        if (!this.checkRangeValue()) {
            return false;
        }
        if (this.rangeValue) {
            this.value = this.rangeValue.toString();
        }
        this.valid_quantity = true;
        this.operatorElems(data);
        this.disQuantity = true;
        this.addFilterElem.emit();
        this.pushFilterParams.emit({
            'column': this.column,
            'operator': this.operator,
            'value': this.value,
            'quantity': this.calculateQuantity(),
            'btw_elem_operator': this.operatorBtwElem,
        });
    };
    FilterItemComponent.prototype.addColumn = function (column) {
        this.column = column;
        this.value = '';
        // this.rangeValue = 0;
        this.valueMaxMin = {};
        if ('min' in this.metadata[column] && 'max' in this.metadata[column]) {
            this.valueMaxMin = {
                'min': this.metadata[column]['min'],
                'max': this.metadata[column]['max']
            };
        }
        else {
            this.values = this.metadata[column];
        }
    };
    FilterItemComponent.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
    };
    FilterItemComponent.prototype.addValue = function (value) {
        var _this = this;
        this.disColumn = true;
        this.value = value;
        var all_params = this.filter_parameters;
        if (this.new_column) {
            this.new_column = false;
            this.param_index = all_params.length;
            all_params.push({
                'column': this.column,
                'operator': this.operator,
                'value': this.value,
            });
        }
        else {
            all_params[this.param_index].value = this.value;
        }
        this.http
            .post('/api/count_rows', { 'file_id': this.file_id, 'params': all_params })
            .subscribe(function (res) { return _this.setCountRows(res); }, function (error) {
            console.log(error);
        });
    };
    FilterItemComponent.prototype.addOperator = function (oper) {
        this.operator = oper;
    };
    FilterItemComponent.prototype.operatorElems = function (data) {
        this.disValue = true;
        this.operatorBtwElem = data;
    };
    FilterItemComponent.prototype.setPercentage = function () {
        if (this.totalRows != 0) {
            this.maxPercentageForUser = +(this.count_rows * 100 / this.totalRows).toFixed(2);
        }
        else {
            this.maxPercentageForUser = 100;
        }
    };
    FilterItemComponent.prototype.setCountRows = function (data) {
        this.count_rows = data;
        this.setPercentage();
    };
    FilterItemComponent.prototype.calculateQuantity = function () {
        return Math.floor(this.totalRows * this.quantity / 100);
    };
    FilterItemComponent.prototype.checkQuantity = function () {
        if (!this.quantity) {
            this.valid_quantity = false;
            this.quantityError = 'This field is required';
            return false;
        }
        else if (this.quantity > this.maxPercentageForUser) {
            this.quantityError = "This value can't be greater then " + this.maxPercentageForUser;
            this.valid_quantity = false;
            return false;
        }
        return true;
    };
    FilterItemComponent.prototype.setRangeValue = function (data) {
        this.value = data;
        if (this.checkRangeValue()) {
            this.rangeValueError = '';
            this.addValue(data);
        }
    };
    FilterItemComponent.prototype.checkRangeValue = function () {
        if ('max' in this.valueMaxMin) {
            if (this.value > this.valueMaxMin['max'] || this.value < this.valueMaxMin['min']) {
                this.rangeValueError = "This value should be in range between " + this.valueMaxMin['min'] + ' and ' + this.valueMaxMin['max'];
                return false;
            }
        }
        return true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FilterItemComponent.prototype, "addFilterElem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FilterItemComponent.prototype, "pushFilterParams", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FilterItemComponent.prototype, "saveFilter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FilterItemComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FilterItemComponent.prototype, "columns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FilterItemComponent.prototype, "metadata", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FilterItemComponent.prototype, "filter_parameters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FilterItemComponent.prototype, "totalRows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FilterItemComponent.prototype, "file_id", void 0);
    FilterItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'filter-item',
            template: __webpack_require__(/*! ./filter-item.component.html */ "./src/app/filter-item/filter-item.component.html"),
            styles: [__webpack_require__(/*! ./filter-item.component.css */ "./src/app/filter-item/filter-item.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FilterItemComponent);
    return FilterItemComponent;
}());



/***/ }),

/***/ "./src/app/filter/filter.component.css":
/*!*********************************************!*\
  !*** ./src/app/filter/filter.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center_div {\n    margin-top: 200px;\n}\n\n.card {\n    border-color: dodgerblue;\n}\n\n.button-group {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.operator-button {\n    margin-top: 20px;\n    display: flex;\n    justify-content: space-evenly;\n}"

/***/ }),

/***/ "./src/app/filter/filter.component.html":
/*!**********************************************!*\
  !*** ./src/app/filter/filter.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col col-md-auto\">\n            <h2 class=\"display-4\">Filtering data section</h2>\n            <select class=\"form-control\" (change)=\"selectFile($event.target.value)\">\n                <option value=\"\" disabled selected>Chose file</option>\n                <option *ngFor=\"let file of files\" value=\"{{ file[0] }}\">\n                    {{ file[2].name }}\n                </option>\n            </select>\n            <hr class=\"my-4\">\n            <input type=\"text\" placeholder=\"Filter name\"\n                   [className]=\"valid_filter_name ? 'form-control' : 'form-control is-invalid'\"\n                   [ngModel]=\"filter_name\"\n                   (ngModelChange)=\"setFilterName($event)\"\n>\n        </div>\n    </div>\n</div>\n<div class=\"row\" *ngIf=\"columns.length > 0\">\n    <div class=\"col-md-4\"></div>\n    <div class=\"col-md-4\">\n        <h3>Select data where:</h3>\n    </div>\n</div>\n\n<div *ngIf=\"columns.length > 0\">\n    <filter-item *ngFor=\"let number of filter_number\"\n                 [index]='number'\n                 [file_id]=\"file_id\"\n                 [columns]=\"columns\"\n                 [metadata]=\"metadata\"\n                 [filter_parameters]=\"filter_params\"\n                 [totalRows]=\"totalRows\"\n                 (addFilterElem)='addElement()'\n                 (pushFilterParams)=\"pushParams($event)\"\n                 (saveFilter)='storeFilter()'\n    ></filter-item>\n</div>"

/***/ }),

/***/ "./src/app/filter/filter.component.ts":
/*!********************************************!*\
  !*** ./src/app/filter/filter.component.ts ***!
  \********************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FilterComponent = /** @class */ (function () {
    function FilterComponent(http, router) {
        this.http = http;
        this.router = router;
        this.filter_number = [0];
        this.filter_name = '';
        this.files = {};
        this.valid_filter_name = true;
        this.totalRows = 0;
        this.columns = [];
        this.value = [];
        this.filter_params = [];
    }
    FilterComponent.prototype.ngOnInit = function () {
        this.getFiles();
    };
    FilterComponent.prototype.addElement = function () {
        this.filter_number.push(this.filter_number.length);
    };
    FilterComponent.prototype.storeFilter = function () {
        var _this = this;
        if (!this.filter_name) {
            this.valid_filter_name = false;
            return false;
        }
        this.http
            .post('/api/save_filter', {
            'params': this.filter_params,
            'name': this.filter_name,
            'file_id': this.file_id
        })
            .subscribe(function (data) { return _this.router.navigate(['/']); }, function (error) {
            console.log(error);
        });
    };
    FilterComponent.prototype.pushParams = function (data) {
        this.filter_params.push(data);
    };
    FilterComponent.prototype.getFiles = function () {
        var _this = this;
        this.http
            .post('/api/get_files', '')
            .subscribe(function (res) { return _this.files = res; }, function (error) {
            console.log(error);
        });
    };
    FilterComponent.prototype.selectFile = function (id) {
        this.file_id = id;
        this.getMetadata(this.file_id);
    };
    FilterComponent.prototype.getMetadata = function (id) {
        var _this = this;
        this.http
            .post('/api/get_metadata', { 'file_id': this.file_id })
            .subscribe(function (res) { return _this.parseMetadata(res); }, function (error) {
            console.log(error);
        });
    };
    FilterComponent.prototype.parseMetadata = function (data) {
        this.totalRows = data['rows'];
        this.columns = Object.keys(data['metadata']);
        this.metadata = data['metadata'];
    };
    FilterComponent.prototype.setFilterName = function (value) {
        this.filter_name = value;
    };
    FilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.css */ "./src/app/filter/filter.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-file-uploads (fileUploaded)=\"fileUploadHandler($event)\"></app-file-uploads>\n\n<button (click)=\"sendFile()\" >TEST: Send file to email</button>\n\n<app-statistics *ngIf=\"dataset_id\" [dataset_id]=\"dataset_id\"> Loading statistics... </app-statistics>\n<app-table *ngIf=\"dataset_id\" [dataset_id]=\"dataset_id\">Loading preview table...</app-table>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(data) {
        this.data = data;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.fileUploadHandler = function (dataset_id) {
        console.log(dataset_id);
        this.dataset_id = dataset_id;
    };
    HomeComponent.prototype.sendFile = function () {
        this.data.get()
            .subscribe(function (res) { return console.log(res); });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media(min-width: 768px) {\n    .field-label-responsive {\n      padding-top: .5rem;\n      text-align: right;\n    }\n  }\n#error{\n    display: none;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth\">\n    <div class=\"form\">\n        <form class=\"form-horizontal\" [formGroup]=\"loginGroup\" (ngSubmit)=\"toLogin()\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n\n                </div>\n                <div class=\"col-md-6\">\n                    <h3>Please enter your email and password</h3>\n                    <hr>\n                    <br><br>\n                    <div  class=\"alert alert-warning\" *ngIf=\"redirectingMessage\">\n                        PLease login at first\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3 field-label-responsive\">\n                    <label for=\"email\">E-Mail Address</label>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                            <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\n                            <input type=\"text\" formControlName=\"email\" required class=\"form-control\" id=\"email\"\n                                   placeholder=\"you@example.com\" autofocus>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3 field-label-responsive\">\n                    <label for=\"password\">Password</label>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group has-danger\">\n                        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                            <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n                            <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"password\"\n                                   placeholder=\"Password\" required>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n\n                </div>\n                <div class=\"col-md-6\">\n                    <strong>\n                        <div id=\"error\" class=\"alert alert-warning\">\n\n\n                        </div>\n                    </strong>\n                </div>\n                <div class=\"col-md-3\">\n\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n\n                </div>\n                <div class=\"col-md-6\">\n                    <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n                         class=\"alert alert-danger\">\n\n                        <div *ngIf=\"email.errors.required\">\n                            Email is required.\n                        </div>\n                        <div *ngIf=\"email.errors.wrongFormat\">\n                            Wrong format of email\n                        </div>\n                    </div>\n                    <div *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n                         class=\"alert alert-danger\">\n                        <div *ngIf=\"password.errors || password.errors\">Password must be from 8\n                            to 40 characters long and contain at least one digit.\n                        </div>\n                    </div>\n                    <div class=\"alert alert-danger\" *ngIf=\"message\">\n                        {{ message }}\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n\n                </div>\n\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\"></div>\n                <div class=\"col-md-6\"><a href=\"#\" routerLink='/reset'><span class=\"glyphicon glyphicon-user\"></span>Forgot\n                    your   password?</a>\n                </div>\n                <div class=\"col-md-3\"></div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-3\"></div>\n                <div class=\"col-md-6\">\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!loginGroup.valid\"> Login</button>\n                </div>\n            </div>\n\n        </form>\n    </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _directives_text_format_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directives/text-format.directive */ "./src/app/directives/text-format.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth_, router, route) {
        this.auth_ = auth_;
        this.router = router;
        this.route = route;
        this.redirectingMessage = this.route.snapshot.queryParams["authRedirecting"] || undefined;
        this.loginGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                Object(_directives_text_format_directive__WEBPACK_IMPORTED_MODULE_5__["TextFormatDirective"])(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40),
                Object(_directives_text_format_directive__WEBPACK_IMPORTED_MODULE_5__["TextFormatDirective"])(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
            ])
        });
    }
    LoginComponent.prototype.toLogin = function () {
        var _this = this;
        this.auth_.toLogin(new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"](this.loginGroup.controls['email'].value, this.loginGroup.controls['password'].value))
            .subscribe(function (res) {
            _this.router.navigate([_this.returnUrl]);
        }, function (err) {
            var data_txt = (JSON.stringify(err));
            var error_data = JSON.parse(data_txt);
            _this.message = error_data.error.message.toString();
        });
    };
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.loginGroup.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () {
            return this.loginGroup.get('email');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(auth_, router, route) {
        this.auth_ = auth_;
        this.router = router;
        this.route = route;
        this.returnUrl = '/login';
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth_.toLogout(null).subscribe(function (res) {
            _this.router.navigate([_this.returnUrl]);
        });
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(email, pass) {
        this.email = email;
        this.password = pass;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\");\n\n.navbar-icon-top .navbar-nav .nav-link > .fa {\n  position: relative;\n  width: 36px;\n  font-size: 24px;\n}\n\n.nav-right{\n  text-align: right;\n}\n\n.navbar-icon-top .navbar-nav .nav-link > .fa > .badge {\n  font-size: 0.75rem;\n  position: absolute;\n  right: 0;\n  font-family: sans-serif;\n}\n\n.navbar-icon-top .navbar-nav .nav-link > .fa {\n  top: 3px;\n  line-height: 12px;\n}\n\n.navbar-icon-top .navbar-nav .nav-link > .fa > .badge {\n  top: -10px;\n}\n\n@media (min-width: 576px) {\n  .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link {\n    text-align: center;\n    display: table-cell;\n    height: 70px;\n    vertical-align: middle;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n\n  .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link > .fa {\n    display: block;\n    width: 48px;\n    margin: 2px auto 4px auto;\n    top: 0;\n    line-height: 24px;\n  }\n\n  .navbar-icon-top.navbar-expand-sm .navbar-nav .nav-link > .fa > .badge {\n    top: -7px;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link {\n    text-align: center;\n    display: table-cell;\n    height: 70px;\n    vertical-align: middle;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n\n  .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link > .fa {\n    display: block;\n    width: 48px;\n    margin: 2px auto 4px auto;\n    top: 0;\n    line-height: 24px;\n  }\n\n  .navbar-icon-top.navbar-expand-md .navbar-nav .nav-link > .fa > .badge {\n    top: -7px;\n  }\n}\n\n@media (min-width: 992px) {\n  .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link {\n    text-align: center;\n    display: table-cell;\n    height: 70px;\n    vertical-align: middle;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n\n  .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link > .fa {\n    display: block;\n    width: 48px;\n    margin: 2px auto 4px auto;\n    top: 0;\n    line-height: 24px;\n  }\n\n  .navbar-icon-top.navbar-expand-lg .navbar-nav .nav-link > .fa > .badge {\n    top: -7px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link {\n    text-align: center;\n    display: table-cell;\n    height: 70px;\n    vertical-align: middle;\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n\n  .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link > .fa {\n    display: block;\n    width: 48px;\n    margin: 2px auto 4px auto;\n    top: 0;\n    line-height: 24px;\n  }\n\n  .navbar-icon-top.navbar-expand-xl .navbar-nav .nav-link > .fa > .badge {\n    top: -7px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" routerLink=\"/\">CarStatistic</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" routerLink=\"/\">\n                    <i class=\"fa fa-home\"></i>\n                    Home\n                </a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\">\n                    Messages\n                </a>\n            </li>\n             <li class=\"nav-item active\">\n                <a class=\"nav-link\" href=\"/filter\">\n                    Filter\n                </a>\n            </li>\n            <li class=\"nav-item active nav-right\" *ngIf=\"!isLogined()\">\n                <a class=\"nav-link\" routerLink=\"/login\">\n                    Login\n                </a>\n            </li>\n            <li class=\"nav-item active nav-right\" *ngIf=\"!isLogined()\">\n                <a class=\"nav-link\" routerLink=\"/register\">\n                    Sign up\n                </a>\n            </li>\n            <li class=\"nav-item active nav-right\" *ngIf=\"isLogined()\">\n                <a class=\"nav-link\" routerLink=\"/logout\">\n                    Logout\n                </a>\n            </li>\n\n        </ul>\n\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.isLogined = function () {
        function getCookie(name) {
            var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }
        var isLog = getCookie("session");
        return isLog;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nbody{\n\tfont-family: 'Courgette', cursive;\n}\nbody{\n\tbackground:#f3f3e1;\n}\n.wrap{\n\tmargin:0 auto;\n\twidth:1000px;\n}\n.logo{\n\tmargin-top:50px;\n}\n.logo h1{\n\tfont-size:200px;\n\tcolor:#8F8E8C;\n\ttext-align:center;\n\tmargin-bottom:1px;\n\ttext-shadow:1px 1px 6px #fff;\n}\n.logo p{\n\tcolor:rgb(228, 146, 162);\n\tfont-size:20px;\n\tmargin-top:1px;\n\ttext-align:center;\n}\n.logo p span{\n\tcolor:lightgreen;\n}\n.sub a{\n\tcolor:white;\n\tbackground:#8F8E8C;\n\ttext-decoration:none;\n\tpadding:7px 120px;\n\tfont-size:13px;\n\tfont-family: arial, serif;\n\tfont-weight:bold;\n\t-webkit-border-radius:3em;\n\t-moz-border-radius:.1em;\n\t-border-radius:.1em;\n}\n.footer{\n\tcolor:#8F8E8C;\n\tposition:absolute;\n\tright:10px;\n\tbottom:10px;\n}\n.footer a{\n\tcolor:rgb(228, 146, 162);\n}\t\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n\n    <h1>404 not found</h1>\n    <p>Error occurred! - File not Found</p>\n\n\n</div>"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/notification/notification.component.css":
/*!*********************************************************!*\
  !*** ./src/app/notification/notification.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.notification {\n    position: absolute;\n      top: 12%;\n      left: 83%;\n    width: 15%;\n    min-width: 100px;\n    min-height: 30px;\n    z-index: 10;\n}\n\n.notification-box {\n    padding: 20px;\n    background-color: #4d9ef4;\n    color: white;\n    opacity: 1;\n    transition: opacity 0.6s;\n    margin-bottom: 15px;\n    width: 100%;\n    height: 10%;\n    border-radius: 5%;\n}\n\n.closebtn {\n    top: 100%;\n    right: 100%;\n    color: white;\n    font-weight: bold;\n    float: right;\n    font-size: 22px;\n    line-height: 20px;\n    cursor: pointer;\n    transition: 0.3s;\n}\n\n.closebtn:hover {\n    color: black;\n}"

/***/ }),

/***/ "./src/app/notification/notification.component.html":
/*!**********************************************************!*\
  !*** ./src/app/notification/notification.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"notification\">\n  <div class=\"notification-box\" *ngFor=\"let msg of messages; let i = index\">\n    <span class=\"closebtn\" (click)=\"removeNotification($event.target, i)\">&times;</span>\n      {{msg.data}}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/notification/notification.component.ts":
/*!********************************************************!*\
  !*** ./src/app/notification/notification.component.ts ***!
  \********************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(socket, auth, auth_guard) {
        this.socket = socket;
        this.auth = auth;
        this.auth_guard = auth_guard;
        this.messages = [];
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth_guard.isLogined()) {
            this.connection = this.socket.getMessages()
                .subscribe(function (data) {
                _this.messages.push(data);
            });
            this.auth.isLoggedIn()
                .subscribe(function (res) {
                _this.socket.joinRoom(res['user_id']);
                console.log('asf');
            });
        }
    };
    NotificationComponent.prototype.removeNotification = function (element, index) {
        element.parentElement.remove();
        this.messages.splice(index, 1);
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.css */ "./src/app/notification/notification.component.css")]
        }),
        __metadata("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media(min-width: 768px) {\n  .field-label-responsive {\n    padding-top: .5rem;\n    text-align: right;\n  }\n}\n#error{\n    display: none;\n}"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth\">\n    <div class=\"form\">\n        <div class=\"row\">\n                <div class=\"col-md-3\">\n\n                </div>\n                <div class=\"col-md-6\">\n                    <div *ngIf=\"message\" class=\"alert alert-success\">\n                        <br><br>{{ message }}\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n\n                </div>\n            </div>\n        <form class=\"form-horizontal\"  [formGroup]=\"registerGroup\" (ngSubmit)=\"toRegister()\">\n            <div class=\"row\">\n                <div class=\"col-md-3\"></div>\n                <div class=\"col-md-6\">\n                    <h2>Register New User</h2>\n                    <hr>\n                    <br><br>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-3 field-label-responsive\">\n                    <label for=\"email\">E-Mail Address</label>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                            <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\n                            <input type=\"text\" formControlName=\"email\" required class=\"form-control\" id=\"email\"\n                                   placeholder=\"you@example.com\" autofocus>\n\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n\n                </div>\n                <div class=\"col-md-6\">\n                    <div *ngIf=\"email == ''\">\n                        Email can not be empty\n                    </div>\n                    <div *ngIf=\"email.invalid && (email.dirty || email.touched) && validation_passed\"\n                         class=\"alert alert-danger\">\n\n                        <div *ngIf=\"email.errors.required\">\n                            Email is required.\n                        </div>\n                        <div *ngIf=\"email.errors.wrongFormat\">\n                            Wrong format of email.\n                        </div>\n\n\n\n                    </div>\n                    <div class=\" alert alert-danger\" *ngIf=\"isEmailBusy == true\">\n                            {{ error_message }}\n                        </div>\n                </div>\n                <div class=\"col-md-3\">\n\n                </div>\n\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3 field-label-responsive\">\n                    <label for=\"password\">Password</label>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group has-danger\">\n                        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                            <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-key\"></i></div>\n                            <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"password\"\n                                   placeholder=\"Password\" required>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n\n                </div>\n                <div class=\"col-md-6\">\n                     <div class=\"alert alert-danger\" *ngIf=\"password.invalid && (password.dirty || password.touched) && validation_passed\">\n                        <ul>\n                            <li *ngIf=\"password.errors || password.errors\">Password must be from 8\n                                to 40 characters long and contain at least one digit.\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-3\"></div>\n                <div class=\"col-md-6\">\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!registerGroup.valid\"> Register</button>\n                </div>\n            </div>\n\n        </form>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _directives_text_format_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/text-format.directive */ "./src/app/directives/text-format.directive.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(auth_, router, route) {
        this.auth_ = auth_;
        this.router = router;
        this.route = route;
        this.isEmailBusy = false;
        this.validation_passed = true;
        this.registerGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                Object(_directives_text_format_directive__WEBPACK_IMPORTED_MODULE_2__["TextFormatDirective"])(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(40),
                Object(_directives_text_format_directive__WEBPACK_IMPORTED_MODULE_2__["TextFormatDirective"])(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
            ])
        });
    }
    RegistrationComponent.prototype.toRegister = function () {
        var _this = this;
        this.auth_.toRegister(new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"](this.registerGroup.controls['email'].value, this.registerGroup.controls['password'].value))
            .subscribe(function (res) {
            localStorage.setItem('token', res.token);
            var data_txt = (JSON.stringify(res));
            var response_data = JSON.parse(data_txt);
            _this.message = response_data.message;
            _this.registerGroup.setValue({ email: '', password: '' });
            _this.validation_passed = false;
        }, function (err) {
            _this.isEmailBusy = true;
            var data_txt = (JSON.stringify(err));
            var error_data = JSON.parse(data_txt);
            _this.error_message = error_data.error.message.toString();
        });
    };
    Object.defineProperty(RegistrationComponent.prototype, "password", {
        get: function () {
            return this.registerGroup.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegistrationComponent.prototype, "email", {
        get: function () {
            return this.registerGroup.get('email');
        },
        enumerable: true,
        configurable: true
    });
    RegistrationComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.css":
/*!*************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media(min-width: 768px) {\n  .field-label-responsive {\n    padding-top: .5rem;\n    text-align: right;\n  }\n}\n#error{\n    display: none;\n}\n#input_form{\n    display: none;\n}"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.html":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth\">\n    <div class=\"form\">\n        <form id=\"reset-password\" [formGroup]=\"resetPasswordGroup\" (ngSubmit)=\"toResetPassword()\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n\n                </div>\n                <div class=\"col-md-6\">\n                    <h3>Enter your registration email.</h3>\n                </div>\n                <div class=\"col-md-3\">\n\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3 field-label-responsive\">\n                    <label for=\"email\">E-Mail Address</label>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n                            <div class=\"input-group-addon\" style=\"width: 2.6rem\"><i class=\"fa fa-at\"></i></div>\n                            <input type=\"text\" formControlName=\"email\" required class=\"form-control\"\n                                   placeholder=\"you@example.com\" autofocus>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!resetPasswordGroup.valid\"> Send</button>\n                </div>\n\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n\n                </div>\n                <div class=\"col-md-6\">\n                    <div *ngIf=\"email == ''\">\n                        Email can not be empty\n                    </div>\n                    <div *ngIf=\"email.invalid && (email.dirty || email.touched) && validation_passed\"\n                         class=\"alert alert-danger\">\n                        <div *ngIf=\"email.errors.required\">\n                            Email is required.\n                        </div>\n                        <div *ngIf=\"email.errors.wrongFormat\">\n                            Wrong format of email.\n                        </div>\n                    </div>\n                    <div class=\"alert alert-danger\" *ngIf=\"error_message\">\n                        {{ error_message }}\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n\n                </div>\n\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n\n                </div>\n                <div class=\"col-md-6\">\n                    <div *ngIf=\"confirm_message\">\n                        <div class=\"alert alert-success row \">\n                            We send you confirnation token. Please check your email.\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"col-md-3\">\n\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _directives_text_format_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/text-format.directive */ "./src/app/directives/text-format.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(auth_, router, route) {
        this.auth_ = auth_;
        this.router = router;
        this.route = route;
        this.validation_passed = true;
        this.resetPasswordGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                Object(_directives_text_format_directive__WEBPACK_IMPORTED_MODULE_4__["TextFormatDirective"])(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)
            ])
        });
    }
    ResetPasswordComponent.prototype.toResetPassword = function () {
        var _this = this;
        this.auth_.toResetPassword(this.resetPasswordGroup.controls['email'].value)
            .subscribe(function (res) {
            _this.confirm_message = true;
            _this.resetPasswordGroup.setValue({ email: '' });
            _this.error_message = undefined;
            _this.validation_passed = false;
        }, function (err) {
            var data_txt = (JSON.stringify(err));
            var error_data = JSON.parse(data_txt);
            _this.error_message = err.error.message.toString();
        });
    };
    Object.defineProperty(ResetPasswordComponent.prototype, "email", {
        get: function () {
            return this.resetPasswordGroup.get('email');
        },
        enumerable: true,
        configurable: true
    });
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SocketService = /** @class */ (function () {
    function SocketService() {
        this.url = window.location.origin;
    }
    SocketService.prototype.joinRoom = function (user_id) {
        this.socketio.emit('join_room', user_id);
    };
    SocketService.prototype.getMessages = function () {
        var _this = this;
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socketio = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(_this.url, { query: 1 });
            _this.socketio.on('notification', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socketio.disconnect();
            };
        });
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/statistics/statistics.component.css":
/*!*****************************************************!*\
  !*** ./src/app/statistics/statistics.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab {\n    overflow: hidden;\n    border: 1px solid #ccc;\n    border-bottom: none;\n    background-color: #f1f1f1;\n    width: 600px;\n}\n\n/* Style the buttons that are used to open the tab content */\n\n.tab button {\n    background-color: inherit;\n    float: left;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    padding: 14px 16px;\n    transition: 0.3s;\n    width: 50%;\n}\n\n/* Change background color of buttons on hover */\n\n.tab button:hover {\n    background-color: #ddd;\n}\n\n/* Create an active/current tablink class */\n\n.tab button.active {\n    background-color: #ccc;\n}"

/***/ }),

/***/ "./src/app/statistics/statistics.component.html":
/*!******************************************************!*\
  !*** ./src/app/statistics/statistics.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n    <div class=\"plot\">\n        <div class=\"tab\">\n          <button #pie class=\"tablinks\" (click)=\"setPlot('pie', pie, bar) \">Pie</button>\n          <button #bar class=\"tablinks\" (click)=\"setPlot('bar', bar, pie)\">Bar</button>\n        </div>\n        <label for=\"column_selection\">Select Column: </label>\n        <select id=\"column_selection\" #selection (change)=\"makeSelection(selection.value)\" class=\"selectpicker\">\n            <option *ngFor=\"let column of columns\"> {{column}}</option>\n        </select>\n        <plotly-plot *ngIf=\"this.plot=='pie'\"\n                     [config]=\"graph['config']\" [data]=\"graph['pie']\" [layout]=\"graph['layout']\"></plotly-plot>\n        <plotly-plot *ngIf=\"this.plot=='bar'\"\n            [config]=\"graph['config']\" [data]=\"graph['bar']\" [layout]=\"graph['layout']\"></plotly-plot>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/statistics/statistics.component.ts":
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(data) {
        this.data = data;
        this.plot = 'bar';
        this.graph = {
            pie: [
                { labels: [], values: [], type: 'pie' },
            ],
            bar: [
                { x: [], y: [], type: 'bar' },
            ],
            layout: {
                width: 600, height: 400, title: 'Column1',
                xaxis: { title: "", tickangle: "-90", tickformat: '.3f', showline: true, type: "category" },
                modeBarButtonsToRemove: ['sendDataToCloud', 'hoverCompareCartesian']
            },
            config: {
                displayModeBar: true,
                displaylogo: false,
                modeBarButtonsToRemove: ['sendDataToCloud', 'pan2d', 'lasso2d', 'autoScale2d', 'zoom2d', 'select2d',
                    'resetScale2d', 'toggleSpikelines', 'toggleHover', 'hoverClosestCartesian', 'hoverCompareCartesian'],
            }
        };
    }
    Object.defineProperty(StatisticsComponent.prototype, "dataset_id", {
        get: function () {
            return this.dataset_id_;
        },
        set: function (name) {
            this.dataset_id_ = name;
            this.updateGraph();
        },
        enumerable: true,
        configurable: true
    });
    StatisticsComponent.prototype.updateGraph = function () {
        var _this = this;
        this.data.getStatistics(this.dataset_id)
            .subscribe(function (res) {
            _this.statistics = res;
            _this.columns = Object.keys(res);
            _this.graph.layout.title = _this.columns[0];
            _this.graph.pie[0].labels = Object.keys(res[_this.columns[0]]);
            _this.graph.pie[0].values = Object.values(res[_this.columns[0]]);
            _this.graph.bar[0].x = Object.keys(res[_this.columns[0]]);
            _this.graph.bar[0].y = Object.values(res[_this.columns[0]]);
        }, function (error) { console.log(error); });
    };
    StatisticsComponent.prototype.ngOnInit = function () {
        this.updateGraph();
    };
    StatisticsComponent.prototype.setPlot = function (plot_type, target, opp) {
        this.plot = plot_type;
        target.className += ' active';
        opp.className = opp.className.replace(' active', '');
    };
    StatisticsComponent.prototype.makeSelection = function (value) {
        this.graph.layout.title = value;
        this.graph.pie[0].labels = Object.keys(this.statistics[value]);
        this.graph.pie[0].values = Object.values(this.statistics[value]);
        this.graph.bar[0].x = Object.keys(this.statistics[value]);
        this.graph.bar[0].y = Object.values(this.statistics[value]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], StatisticsComponent.prototype, "dataset_id", null);
    StatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! ./statistics.component.html */ "./src/app/statistics/statistics.component.html"),
            styles: [__webpack_require__(/*! ./statistics.component.css */ "./src/app/statistics/statistics.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/table/table.component.css":
/*!*******************************************!*\
  !*** ./src/app/table/table.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\");"

/***/ }),

/***/ "./src/app/table/table.component.html":
/*!********************************************!*\
  !*** ./src/app/table/table.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-hover\">\n    <thead>\n        <tr>\n            <th *ngFor=\"let col_name of columns\">{{col_name}}</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let row of rows\">\n          <td *ngFor=\"let val of row\">{{val}} </td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableComponent = /** @class */ (function () {
    function TableComponent(data) {
        this.data = data;
    }
    Object.defineProperty(TableComponent.prototype, "dataset_id", {
        get: function () {
            return this.dataset_id_;
        },
        set: function (dataset_id) {
            this.dataset_id_ = dataset_id;
            this.updateTable();
        },
        enumerable: true,
        configurable: true
    });
    TableComponent.prototype.updateTable = function () {
        var _this = this;
        this.data.getRows(this.dataset_id, 10)
            .subscribe(function (res) { _this.columns = res['columns']; _this.rows = res['rows']; }, function (error) { console.log(error); });
    };
    TableComponent.prototype.ngOnInit = function () {
        this.updateTable();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TableComponent.prototype, "dataset_id", null);
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vova/SoftServe/Soft_lv-336/Car_project/car-statistics/car-statistics/app/static/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map