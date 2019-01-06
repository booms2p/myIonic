(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["explore-explore-module"],{

/***/ "./src/app/explore/explore.module.ts":
/*!*******************************************!*\
  !*** ./src/app/explore/explore.module.ts ***!
  \*******************************************/
/*! exports provided: ExplorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorePageModule", function() { return ExplorePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _explore_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./explore.page */ "./src/app/explore/explore.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _explore_page__WEBPACK_IMPORTED_MODULE_5__["ExplorePage"]
    }
];
var ExplorePageModule = /** @class */ (function () {
    function ExplorePageModule() {
    }
    ExplorePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_explore_page__WEBPACK_IMPORTED_MODULE_5__["ExplorePage"]]
        })
    ], ExplorePageModule);
    return ExplorePageModule;
}());



/***/ }),

/***/ "./src/app/explore/explore.page.html":
/*!*******************************************!*\
  !*** ./src/app/explore/explore.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>Explore</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content no-padding>\n <ion-img src=\"/assets/wat-arun.jpg\"></ion-img>\n <div class=\"caption\">\n  <h3>YOURS TO EXPLORE</h3>\n  <span>Discover abd look amazing things to do at exclusive price.</span>\n </div>\n\n <ion-card>\n  <ion-card-header>\n    <ion-card-title style=\"font-size: 18px\">Must See</ion-card-title>\n  </ion-card-header>\n  <ion-img src=\"/assets/must-see.jpg\"></ion-img>\n </ion-card>\n \n</ion-content>\n"

/***/ }),

/***/ "./src/app/explore/explore.page.scss":
/*!*******************************************!*\
  !*** ./src/app/explore/explore.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".caption {\n  position: absolute;\n  top: 42%;\n  left: 43%;\n  -webkit-transform: translate(-42%, -43%);\n          transform: translate(-42%, -43%);\n  color: white;\n  font-weight: bold;\n  width: 100%;\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2hhLndhcmFtdW4vRGVza3RvcC9Xb3JrL215SW9uaWMvdGFicy9zcmMvYXBwL2V4cGxvcmUvZXhwbG9yZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFVBQVM7RUFDVCx5Q0FBa0M7VUFBbEMsaUNBQWtDO0VBQ2xDLGFBQVk7RUFDWixrQkFBaUI7RUFDakIsWUFBVztFQUNYLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUvZXhwbG9yZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FwdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDIlO1xuICAgIGxlZnQ6IDQzJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSggLTQyJSwgLTQzJSApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/explore/explore.page.ts":
/*!*****************************************!*\
  !*** ./src/app/explore/explore.page.ts ***!
  \*****************************************/
/*! exports provided: ExplorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorePage", function() { return ExplorePage; });
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

var ExplorePage = /** @class */ (function () {
    function ExplorePage() {
    }
    ExplorePage.prototype.ngOnInit = function () {
    };
    ExplorePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-explore',
            template: __webpack_require__(/*! ./explore.page.html */ "./src/app/explore/explore.page.html"),
            styles: [__webpack_require__(/*! ./explore.page.scss */ "./src/app/explore/explore.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExplorePage);
    return ExplorePage;
}());



/***/ })

}]);
//# sourceMappingURL=explore-explore-module.js.map