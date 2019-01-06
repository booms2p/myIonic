(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["destination-destination-module"],{

/***/ "./src/app/destination/destination.module.ts":
/*!***************************************************!*\
  !*** ./src/app/destination/destination.module.ts ***!
  \***************************************************/
/*! exports provided: DestinationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationPageModule", function() { return DestinationPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _destination_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./destination.page */ "./src/app/destination/destination.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _destination_page__WEBPACK_IMPORTED_MODULE_5__["DestinationPage"]
    }
];
var DestinationPageModule = /** @class */ (function () {
    function DestinationPageModule() {
    }
    DestinationPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_destination_page__WEBPACK_IMPORTED_MODULE_5__["DestinationPage"]]
        })
    ], DestinationPageModule);
    return DestinationPageModule;
}());



/***/ }),

/***/ "./src/app/destination/destination.page.html":
/*!***************************************************!*\
  !*** ./src/app/destination/destination.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>Destination</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header>\n  <ion-nav>\n    <ion-title>Navigation</ion-title>\n  </ion-nav>\n</ion-header>\n\n<ion-content no-padding>\n  <div class=\"img-destination\" \n  *ngFor=\"let item of destinationList; let i = index\" \n  (click)=\"openDestinationDetails(item)\">\n      <img style=\"position: absolute; right: 0; bottom: 0;\" [src]=\"item.imgSrc\" alt=\"\">\n      <div class=\"img-fade\">\n        <h4 class=\"img-title\">\n          จ.{{item.province}}\n        </h4>\n      </div>\n  </div>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/destination/destination.page.scss":
/*!***************************************************!*\
  !*** ./src/app/destination/destination.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-destination {\n  width: 100%;\n  height: 200px;\n  overflow: hidden;\n  position: relative;\n  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));\n  z-index: 99; }\n\n.img-title {\n  color: white;\n  text-transform: uppercase;\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 2rem;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.img-fade {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));\n  z-index: 999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2hhLndhcmFtdW4vRGVza3RvcC9Xb3JrL215SW9uaWMvdGFicy9zcmMvYXBwL2Rlc3RpbmF0aW9uL2Rlc3RpbmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQVc7RUFDWCxjQUFhO0VBQ2IsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUdsQixvRUFBbUU7RUFDbkUsWUFBVyxFQUNYOztBQUVEO0VBQ0MsYUFBWTtFQUNaLDBCQUF5QjtFQUN6QixVQUFTO0VBQ1QsbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixVQUFTO0VBQ1QsZ0JBQWU7RUFDZix5Q0FBZ0M7VUFBaEMsaUNBQWdDLEVBQ2hDOztBQUVEO0VBQ0MsVUFBUztFQUNULG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsVUFBUztFQUNULHlDQUFnQztVQUFoQyxpQ0FBZ0M7RUFDaEMsWUFBVztFQUNYLGFBQVk7RUFDWixvRUFBbUU7RUFDbkUsYUFBWSxFQUNaIiwiZmlsZSI6InNyYy9hcHAvZGVzdGluYXRpb24vZGVzdGluYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1kZXN0aW5hdGlvbiB7XG4gd2lkdGg6IDEwMCU7XG4gaGVpZ2h0OiAyMDBweDtcbiBvdmVyZmxvdzogaGlkZGVuO1xuIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAvLyB3aWR0aDphdXRvOy8qbWFpbnRhaW4gYXNwZWN0IHJhdGlvKi9cbiAvLyBtYXgtd2lkdGg6MjA0OHB4O1xuIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC42KSk7XG4gei1pbmRleDogOTk7XG59XG5cbi5pbWctdGl0bGUge1xuIGNvbG9yOiB3aGl0ZTtcbiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuIG1hcmdpbjogMDtcbiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gdG9wOiA1MCU7XG4gbGVmdDogNTAlO1xuIGZvbnQtc2l6ZTogMnJlbTtcbiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmltZy1mYWRlIHtcbiBtYXJnaW46IDA7XG4gcG9zaXRpb246IGFic29sdXRlO1xuIHRvcDogNTAlO1xuIGxlZnQ6IDUwJTtcbiB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiB3aWR0aDogMTAwJTtcbiBoZWlnaHQ6IDEwMCU7XG4gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4zKSwgcmdiYSgwLCAwLCAwLCAwLjMpKTtcbiB6LWluZGV4OiA5OTk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/destination/destination.page.ts":
/*!*************************************************!*\
  !*** ./src/app/destination/destination.page.ts ***!
  \*************************************************/
/*! exports provided: DestinationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationPage", function() { return DestinationPage; });
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



var DestinationPage = /** @class */ (function () {
    function DestinationPage(service, route) {
        this.service = service;
        this.route = route;
        this.destinationList = [
            { imgSrc: '/assets/wat-arun.jpg', province: 'กรุงเทพ' },
            { imgSrc: '/assets/wat-si-rin.jpg', province: 'อุบลราชธานี' },
            { imgSrc: '/assets/wat-pak-nam.jpg', province: 'ฉะเชิงเทรา' },
            { imgSrc: '/assets/wat-rong-khun.jpg', province: 'เชียงราย' },
            { imgSrc: '/assets/wat-pra-ya-na-khon.jpg', province: 'ประจวบคีรีขันธ์' },
        ];
    }
    DestinationPage.prototype.ngOnInit = function () {
    };
    DestinationPage.prototype.openDestinationDetails = function (item) {
        // this.nav.navigateForward('/destination-detail');
        this.route.navigate(['/destination-detail']);
        this.service.destinationProvince = item;
    };
    DestinationPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-destination',
            template: __webpack_require__(/*! ./destination.page.html */ "./src/app/destination/destination.page.html"),
            styles: [__webpack_require__(/*! ./destination.page.scss */ "./src/app/destination/destination.page.scss")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DestinationPage);
    return DestinationPage;
}());



/***/ })

}]);
//# sourceMappingURL=destination-destination-module.js.map