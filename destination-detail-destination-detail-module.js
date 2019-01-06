(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["destination-detail-destination-detail-module"],{

/***/ "./src/app/destination-detail/destination-detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/destination-detail/destination-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: DestinationDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationDetailPageModule", function() { return DestinationDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _destination_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./destination-detail.page */ "./src/app/destination-detail/destination-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _destination_detail_page__WEBPACK_IMPORTED_MODULE_5__["DestinationDetailPage"]
    }
];
var DestinationDetailPageModule = /** @class */ (function () {
    function DestinationDetailPageModule() {
    }
    DestinationDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_destination_detail_page__WEBPACK_IMPORTED_MODULE_5__["DestinationDetailPage"]]
        })
    ], DestinationDetailPageModule);
    return DestinationDetailPageModule;
}());



/***/ }),

/***/ "./src/app/destination-detail/destination-detail.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/destination-detail/destination-detail.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n <ion-toolbar>\n  \n  <ion-buttons slot=\"start\">\n   <ion-back-button\n    routerLink=\"/tabs/destination\"\n    [text]=\"'Back'\"\n    (click)=\"clearDestinationProvince()\"\n   ></ion-back-button>\n  </ion-buttons>\n\n  <ion-title align=\"center\">\n    จ.{{province}}\n  </ion-title>\n\n </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n <ion-card class=\"welcome-card\" *ngFor=\"let item of detailList; let i = index\">\n  <ion-img [src]=\"item.imgSrc\"></ion-img>\n  <ion-card-header>\n   <ion-card-subtitle>Example Subtitle</ion-card-subtitle>\n   <ion-card-title>Example Title</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n   <p>\n    Now that your app has been created, you'll want to start building out\n    features and components. Check out some of the resources below for next\n    steps.\n   </p>\n  </ion-card-content>\n </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/destination-detail/destination-detail.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/destination-detail/destination-detail.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rlc3RpbmF0aW9uLWRldGFpbC9kZXN0aW5hdGlvbi1kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/destination-detail/destination-detail.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/destination-detail/destination-detail.page.ts ***!
  \***************************************************************/
/*! exports provided: DestinationDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationDetailPage", function() { return DestinationDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DestinationDetailPage = /** @class */ (function () {
    function DestinationDetailPage(service) {
        this.service = service;
        this.detailList = [
            { imgSrc: '', description: '' },
            { imgSrc: '', description: '' },
            { imgSrc: '', description: '' },
            { imgSrc: '', description: '' },
            { imgSrc: '', description: '' }
        ];
    }
    DestinationDetailPage.prototype.ngOnInit = function () {
        console.log(this.service.destinationProvince);
        if (this.service.destinationProvince && this.service.destinationProvince.imgSrc) {
            var img = this.service.destinationProvince.imgSrc;
            this.detailList = [
                { imgSrc: img, description: '' },
                { imgSrc: img, description: '' },
                { imgSrc: img, description: '' },
                { imgSrc: img, description: '' },
                { imgSrc: img, description: '' }
            ];
            this.province = this.service.destinationProvince.province;
        }
    };
    DestinationDetailPage.prototype.clearDestinationProvince = function () {
        this.service.destinationProvince = {
            imgSrc: '',
            province: ''
        };
        this.province = '';
    };
    DestinationDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-destination-detail',
            template: __webpack_require__(/*! ./destination-detail.page.html */ "./src/app/destination-detail/destination-detail.page.html"),
            styles: [__webpack_require__(/*! ./destination-detail.page.scss */ "./src/app/destination-detail/destination-detail.page.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], DestinationDetailPage);
    return DestinationDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=destination-detail-destination-detail-module.js.map