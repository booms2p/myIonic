(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account.page */ "./src/app/account/account.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_5__["AccountPage"]
    }
];
var AccountPageModule = /** @class */ (function () {
    function AccountPageModule() {
    }
    AccountPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_account_page__WEBPACK_IMPORTED_MODULE_5__["AccountPage"]]
        })
    ], AccountPageModule);
    return AccountPageModule;
}());



/***/ }),

/***/ "./src/app/account/account.page.html":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n <ion-toolbar> <ion-title>Account</ion-title> </ion-toolbar>\n</ion-header> -->\n\n<!-- <ion-content color=\"primary\" contentHeight=\"10%\">\n\n</ion-content> -->\n\n<ion-content>\n <ion-list lines=\"none\" no-padding>\n  <ion-item color=\"primary\">\n   <ion-label> <h1 style=\"color: #ffffff\">puvadols@ais.co.th</h1> </ion-label>\n   <ion-thumbnail slot=\"end\">\n    <ion-img [src]=\"'assets/icon/user-picture.svg'\"></ion-img>\n   </ion-thumbnail>\n  </ion-item>\n  <ion-item color=\"primary\">\n   <ion-label>\n    <h1 style=\"color: #ffffff\">0</h1>\n    <h3 style=\"color: #ffffff\">Credit</h3>\n   </ion-label>\n   <ion-label> <h1 style=\"color: #ffffff\">|</h1> </ion-label>\n   <ion-label>\n    <h1 style=\"color: #ffffff\">0</h1>\n    <h3 style=\"color: #ffffff\">Promo Code</h3>\n   </ion-label>\n  </ion-item>\n\n  <ion-item>\n   <ion-icon slot=\"start\" color=\"medium\" name=\"gift\"></ion-icon>\n   <ion-label>Voucher</ion-label>\n  </ion-item>\n\n  <ion-item>\n   <ion-icon slot=\"start\" color=\"medium\" name=\"heart-empty\"></ion-icon>\n   <ion-label>Wishlist</ion-label>\n  </ion-item>\n\n  <ion-item>\n   <ion-icon slot=\"start\" color=\"medium\" name=\"filing\"></ion-icon>\n   <ion-label>Earn Rewards</ion-label>\n  </ion-item>\n </ion-list>\n\n <ion-item-divider> </ion-item-divider>\n\n <ion-list lines=\"none\">\n  <ion-item>\n   <ion-icon slot=\"start\" color=\"medium\" name=\"cash\"></ion-icon>\n   <ion-label>Language/Currency</ion-label>\n  </ion-item>\n\n  <ion-item>\n   <ion-icon slot=\"start\" color=\"medium\" name=\"mail\"></ion-icon>\n   <ion-label>Notification</ion-label>\n  </ion-item>\n\n  <ion-item>\n   <ion-icon slot=\"start\" color=\"medium\" name=\"help-circle-outline\"></ion-icon>\n   <ion-label>Help Center</ion-label>\n  </ion-item>\n\n  <ion-item>\n   <ion-icon\n    slot=\"start\"\n    color=\"medium\"\n    name=\"information-circle-outline\"\n   ></ion-icon>\n   <ion-label>About</ion-label>\n  </ion-item>\n\n  <ion-item routerLink=\"/login\">\n   <ion-icon slot=\"start\" color=\"medium\" name=\"power\"></ion-icon>\n   <ion-label>Log Out</ion-label>\n  </ion-item>\n </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/account/account.page.scss":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account/account.page.ts":
/*!*****************************************!*\
  !*** ./src/app/account/account.page.ts ***!
  \*****************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
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

var AccountPage = /** @class */ (function () {
    function AccountPage() {
    }
    AccountPage.prototype.ngOnInit = function () {
    };
    AccountPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.page.html */ "./src/app/account/account.page.html"),
            styles: [__webpack_require__(/*! ./account.page.scss */ "./src/app/account/account.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountPage);
    return AccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map