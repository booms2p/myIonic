(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content padding class=\"login-bg\">\n <ion-grid>\n  <ion-row style=\"height: 90vh;\">\n   <ion-col align-self-center>\n    <ion-card>\n\n     <ion-item>\n      <ion-label position=\"floating\" style=\"color: #ffffff\">\n        <!-- User Name -->\n        <ion-icon size=\"large\" name=\"person\"></ion-icon>\n      </ion-label>\n      <ion-input style=\"color: #ffffff\" [(ngModel)]=\"userName\"></ion-input>\n     </ion-item>\n\n     <ion-item>\n      <ion-label position=\"floating\" style=\"color: #ffffff\">\n        <!-- Password -->\n        <ion-icon size=\"large\" name=\"key\"></ion-icon>\n      </ion-label>\n      <ion-input style=\"color: #ffffff\" type=\"password\" [(ngModel)]=\"password\"></ion-input>\n     </ion-item>\n     \n     <ion-row>\n       <ion-col size=\"12\" align-items-center>\n          <ion-button shape=\"round\" fill=\"outline\" expand=\"block\" size=\"default\"\n          (click)=\"onLogin()\">Login</ion-button> \n       </ion-col>  \n     </ion-row>\n\n     <ion-row>\n        <ion-col size=\"12\" align-items-center>\n            <ion-button color=\"medium\" shape=\"round\" fill=\"outline\" expand=\"block\" size=\"default\">Register</ion-button>\n        </ion-col>  \n      </ion-row>\n\n      <ion-row>\n          <ion-col size=\"12\" align-items-center style=\"text-align:center;\">\n              <ion-label color=\"danger\">\n                {{msgError}}\n              </ion-label>\n          </ion-col>  \n        </ion-row>\n     \n    </ion-card>\n   </ion-col>\n  </ion-row>\n </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-bg {\n  background-image: url(\"/assets/bg-login.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n:host ion-content {\n  --background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)); }\n\n:host ion-item {\n  --background: rgba(0, 0, 0, 0); }\n\n:host ion-card {\n  --border-radius: 3%;\n  --border-color: #ffffff;\n  --background: rgba(0, 0, 0, 0.208); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2hhLndhcmFtdW4vRGVza3RvcC9Xb3JrL215SW9uaWMvdGFicy9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDhDQUE2QztFQUM3Qyw0QkFBMkI7RUFDM0IsNkJBQTRCO0VBQzVCLHVCQUFzQixFQUN0Qjs7QUFFRDtFQUVFLHNFQUFhLEVBQ2I7O0FBSEY7RUFNRSwrQkFBYSxFQUNiOztBQVBGO0VBVUUsb0JBQWdCO0VBQ2hCLHdCQUFlO0VBQ2YsbUNBQWEsRUFDYiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1iZyB7XG4gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2JnLWxvZ2luLmpwZycpO1xuIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbjpob3N0IHtcbiBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKTtcbiB9XG5cbiBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiB9XG5cbiBpb24tY2FyZCB7XG4gIC0tYm9yZGVyLXJhZGl1czogMyU7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yMDgpO1xuIH1cbiBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
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



var LoginPage = /** @class */ (function () {
    function LoginPage(service, route) {
        this.service = service;
        this.route = route;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.onLogin = function () {
        this.msgError = '';
        if (this.userName && this.password) {
            // this.nav.navigateForward('/tabs/explore');
            this.route.navigate(['/tabs/explore']);
        }
        else {
            this.msgError = 'Please specify User Name and Password.';
        }
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map