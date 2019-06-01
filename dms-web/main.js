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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_management_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-management/user-create/user-create.component */ "./src/app/user-management/user-create/user-create.component.ts");
/* harmony import */ var _user_management_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-management/user-search/user-search.component */ "./src/app/user-management/user-search/user-search.component.ts");
/* harmony import */ var _user_management_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-management/reset-password/reset-password.component */ "./src/app/user-management/reset-password/reset-password.component.ts");
/* harmony import */ var _depot_management_depot_create_depot_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./depot-management/depot-create/depot-create.component */ "./src/app/depot-management/depot-create/depot-create.component.ts");
/* harmony import */ var _depot_management_depot_search_depot_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./depot-management/depot-search/depot-search.component */ "./src/app/depot-management/depot-search/depot-search.component.ts");
/* harmony import */ var _depot_management_depot_view_depot_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./depot-management/depot-view/depot-view.component */ "./src/app/depot-management/depot-view/depot-view.component.ts");
/* harmony import */ var _depot_management_depot_update_depot_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./depot-management/depot-update/depot-update.component */ "./src/app/depot-management/depot-update/depot-update.component.ts");
/* harmony import */ var _depot_management_depot_branch_create_depot_branch_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./depot-management/depot-branch-create/depot-branch-create.component */ "./src/app/depot-management/depot-branch-create/depot-branch-create.component.ts");
/* harmony import */ var _user_management_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-management/user-view/user-view.component */ "./src/app/user-management/user-view/user-view.component.ts");
/* harmony import */ var _user_management_user_update_user_update_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-management/user-update/user-update.component */ "./src/app/user-management/user-update/user-update.component.ts");
/* harmony import */ var _customer_management_customer_create_customer_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customer-management/customer-create/customer-create.component */ "./src/app/customer-management/customer-create/customer-create.component.ts");
/* harmony import */ var _customer_management_customer_search_customer_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./customer-management/customer-search/customer-search.component */ "./src/app/customer-management/customer-search/customer-search.component.ts");
/* harmony import */ var _customer_management_customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customer-management/customer-view/customer-view.component */ "./src/app/customer-management/customer-view/customer-view.component.ts");
/* harmony import */ var _customer_management_customer_update_customer_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./customer-management/customer-update/customer-update.component */ "./src/app/customer-management/customer-update/customer-update.component.ts");
/* harmony import */ var _container_management_container_reg_container_reg_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./container-management/container-reg/container-reg.component */ "./src/app/container-management/container-reg/container-reg.component.ts");
/* harmony import */ var _container_management_container_search_container_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./container-management/container-search/container-search.component */ "./src/app/container-management/container-search/container-search.component.ts");
/* harmony import */ var _container_management_container_view_container_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./container-management/container-view/container-view.component */ "./src/app/container-management/container-view/container-view.component.ts");
/* harmony import */ var _container_management_container_update_container_update_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./container-management/container-update/container-update.component */ "./src/app/container-management/container-update/container-update.component.ts");






















var routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'usercreate',
        component: _user_management_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_4__["UserCreateComponent"]
    },
    {
        path: 'usersearch',
        component: _user_management_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_5__["UserSearchComponent"]
    },
    {
        path: 'userview',
        component: _user_management_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_12__["UserViewComponent"]
    },
    {
        path: 'useredit',
        component: _user_management_user_update_user_update_component__WEBPACK_IMPORTED_MODULE_13__["UserUpdateComponent"]
    },
    {
        path: 'resetpassword',
        component: _user_management_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordComponent"]
    },
    {
        path: 'depotcreate',
        component: _depot_management_depot_create_depot_create_component__WEBPACK_IMPORTED_MODULE_7__["DepotCreateComponent"]
    },
    {
        path: 'depotsearch',
        component: _depot_management_depot_search_depot_search_component__WEBPACK_IMPORTED_MODULE_8__["DepotSearchComponent"]
    },
    {
        path: 'depotview',
        component: _depot_management_depot_view_depot_view_component__WEBPACK_IMPORTED_MODULE_9__["DepotViewComponent"]
    },
    {
        path: 'depotedit',
        component: _depot_management_depot_update_depot_update_component__WEBPACK_IMPORTED_MODULE_10__["DepotUpdateComponent"]
    },
    {
        path: 'depotbranchcreate',
        component: _depot_management_depot_branch_create_depot_branch_create_component__WEBPACK_IMPORTED_MODULE_11__["DepotBranchCreateComponent"]
    },
    {
        path: 'customercreate',
        component: _customer_management_customer_create_customer_create_component__WEBPACK_IMPORTED_MODULE_14__["CustomerCreateComponent"]
    },
    {
        path: 'customersearch',
        component: _customer_management_customer_search_customer_search_component__WEBPACK_IMPORTED_MODULE_15__["CustomerSearchComponent"]
    },
    {
        path: 'customerview',
        component: _customer_management_customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_16__["CustomerViewComponent"]
    },
    {
        path: 'customeredit',
        component: _customer_management_customer_update_customer_update_component__WEBPACK_IMPORTED_MODULE_17__["CustomerUpdateComponent"]
    },
    {
        path: 'containerreg',
        component: _container_management_container_reg_container_reg_component__WEBPACK_IMPORTED_MODULE_18__["ContainerRegComponent"]
    },
    {
        path: 'containesearch',
        component: _container_management_container_search_container_search_component__WEBPACK_IMPORTED_MODULE_19__["ContainerSearchComponent"]
    },
    {
        path: 'containerview',
        component: _container_management_container_view_container_view_component__WEBPACK_IMPORTED_MODULE_20__["ContainerViewComponent"]
    },
    {
        path: 'containerupdate',
        component: _container_management_container_update_container_update_component__WEBPACK_IMPORTED_MODULE_21__["ContainerUpdateComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div *ngIf=\"loggedIn\"><app-menu></app-menu></div> \n<!-- <app-menu></app-menu> -->\n<router-outlet></router-outlet>\n<!--<app-footer></app-footer>-->"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'dms-web';
        this.loggedIn = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isLoggedIn.subscribe(function (isLogin) {
            _this.loggedIn = isLogin;
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _services_session_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/session.services */ "./src/app/services/session.services.ts");
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-management/user-management.component */ "./src/app/user-management/user-management.component.ts");
/* harmony import */ var _user_management_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-management/user-create/user-create.component */ "./src/app/user-management/user-create/user-create.component.ts");
/* harmony import */ var _user_management_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-management/user-search/user-search.component */ "./src/app/user-management/user-search/user-search.component.ts");
/* harmony import */ var _user_management_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-management/reset-password/reset-password.component */ "./src/app/user-management/reset-password/reset-password.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _depot_management_depot_create_depot_create_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./depot-management/depot-create/depot-create.component */ "./src/app/depot-management/depot-create/depot-create.component.ts");
/* harmony import */ var _depot_management_depot_search_depot_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./depot-management/depot-search/depot-search.component */ "./src/app/depot-management/depot-search/depot-search.component.ts");
/* harmony import */ var _depot_management_depot_view_depot_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./depot-management/depot-view/depot-view.component */ "./src/app/depot-management/depot-view/depot-view.component.ts");
/* harmony import */ var _depot_management_depot_update_depot_update_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./depot-management/depot-update/depot-update.component */ "./src/app/depot-management/depot-update/depot-update.component.ts");
/* harmony import */ var _depot_management_depot_branch_create_depot_branch_create_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./depot-management/depot-branch-create/depot-branch-create.component */ "./src/app/depot-management/depot-branch-create/depot-branch-create.component.ts");
/* harmony import */ var _user_management_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user-management/user-view/user-view.component */ "./src/app/user-management/user-view/user-view.component.ts");
/* harmony import */ var _user_management_user_update_user_update_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user-management/user-update/user-update.component */ "./src/app/user-management/user-update/user-update.component.ts");
/* harmony import */ var _customer_management_customer_search_customer_search_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./customer-management/customer-search/customer-search.component */ "./src/app/customer-management/customer-search/customer-search.component.ts");
/* harmony import */ var _customer_management_customer_create_customer_create_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./customer-management/customer-create/customer-create.component */ "./src/app/customer-management/customer-create/customer-create.component.ts");
/* harmony import */ var _customer_management_customer_update_customer_update_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./customer-management/customer-update/customer-update.component */ "./src/app/customer-management/customer-update/customer-update.component.ts");
/* harmony import */ var _customer_management_customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./customer-management/customer-view/customer-view.component */ "./src/app/customer-management/customer-view/customer-view.component.ts");
/* harmony import */ var _container_management_container_reg_container_reg_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./container-management/container-reg/container-reg.component */ "./src/app/container-management/container-reg/container-reg.component.ts");
/* harmony import */ var _container_management_container_search_container_search_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./container-management/container-search/container-search.component */ "./src/app/container-management/container-search/container-search.component.ts");
/* harmony import */ var _container_management_container_update_container_update_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./container-management/container-update/container-update.component */ "./src/app/container-management/container-update/container-update.component.ts");
/* harmony import */ var _container_management_container_view_container_view_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./container-management/container-view/container-view.component */ "./src/app/container-management/container-view/container-view.component.ts");































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
                _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_11__["UserManagementComponent"],
                _user_management_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_12__["UserCreateComponent"],
                _user_management_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_13__["UserSearchComponent"],
                _user_management_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_14__["ResetPasswordComponent"],
                _depot_management_depot_create_depot_create_component__WEBPACK_IMPORTED_MODULE_16__["DepotCreateComponent"],
                _depot_management_depot_search_depot_search_component__WEBPACK_IMPORTED_MODULE_17__["DepotSearchComponent"],
                _depot_management_depot_view_depot_view_component__WEBPACK_IMPORTED_MODULE_18__["DepotViewComponent"],
                _depot_management_depot_update_depot_update_component__WEBPACK_IMPORTED_MODULE_19__["DepotUpdateComponent"],
                _depot_management_depot_branch_create_depot_branch_create_component__WEBPACK_IMPORTED_MODULE_20__["DepotBranchCreateComponent"],
                _user_management_user_view_user_view_component__WEBPACK_IMPORTED_MODULE_21__["UserViewComponent"],
                _user_management_user_update_user_update_component__WEBPACK_IMPORTED_MODULE_22__["UserUpdateComponent"],
                _customer_management_customer_search_customer_search_component__WEBPACK_IMPORTED_MODULE_23__["CustomerSearchComponent"],
                _customer_management_customer_create_customer_create_component__WEBPACK_IMPORTED_MODULE_24__["CustomerCreateComponent"],
                _customer_management_customer_update_customer_update_component__WEBPACK_IMPORTED_MODULE_25__["CustomerUpdateComponent"],
                _customer_management_customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_26__["CustomerViewComponent"],
                _container_management_container_reg_container_reg_component__WEBPACK_IMPORTED_MODULE_27__["ContainerRegComponent"],
                _container_management_container_search_container_search_component__WEBPACK_IMPORTED_MODULE_28__["ContainerSearchComponent"],
                _container_management_container_update_container_update_component__WEBPACK_IMPORTED_MODULE_29__["ContainerUpdateComponent"],
                _container_management_container_view_container_view_component__WEBPACK_IMPORTED_MODULE_30__["ContainerViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            providers: [_services_session_services__WEBPACK_IMPORTED_MODULE_10__["SessionService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/container-management/container-reg/container-reg.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/container-management/container-reg/container-reg.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci1tYW5hZ2VtZW50L2NvbnRhaW5lci1yZWcvY29udGFpbmVyLXJlZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/container-management/container-reg/container-reg.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/container-management/container-reg/container-reg.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-position\">\n  <form class=\"form-horizontal\" method=\"post\" action=\"#\">\n    <div class=\"container\">\n\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            <div class=\"card-header\">Container In Form</div>\n            <div class=\"card-body\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cmpname\">Company Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <select class=\"form-control\" id=\"cmpname\">\n                    <option value=\"-1\">Please Select</option>\n                    <option value=\"volvo\">State 1</option>\n                  </select>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cmprocno\">Company ROC No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"cmprocno\" placeholder=\"Company ROC No.\" readonly>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"custname\">Customer Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"custname\" placeholder=\"Customer Name\" readonly>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nric\">Customer NRIC/Passport No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"nric\" placeholder=\"Customer NRIC/Passport No.\" readonly>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"addr1\">Address Line 1</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"addr1\" placeholder=\"Address Line 1\" readonly>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"addr2\">Address Line 2</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"addr2\" placeholder=\"Address Line 2\" readonly>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"postcode\">Post Code</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"postcode\" placeholder=\"Post Code\" readonly>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"state\">State</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <select class=\"form-control\" id=\"state\" readonly>\n                    <option value=\"-1\">Please Select</option>\n                    <option value=\"volvo\">State 1</option>\n                  </select>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno1\">Contact No. 1</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"cntno1\" placeholder=\"Contact No. 1\" readonly>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno2\">Contact No. 2</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"cntno2\" placeholder=\"Contact No. 2\" readonly>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"devname\">Driver Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"devname\" placeholder=\"Driver Name\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"drvnric\">Driver NRIC/Passport No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"drvnric\" placeholder=\"Driver NRIC/Passport No.\">\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"vehno\">Vehicle No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"vehno\" placeholder=\"Vehicle No.\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"containerno\">Container No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"containerno\" placeholder=\"Container No.\">\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"surveyorname\">Surveyor Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <select class=\"form-control\" id=\"surveyorname\">\n                    <option value=\"-1\">Please Select</option>\n                    <option value=\"stk1\">Sticker 1</option>\n                  </select>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"containercond\">Container Condition</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <select class=\"form-control\" id=\"containercond\">\n                    <option value=\"-1\">Please Select</option>\n                    <option value=\"stk1\">Sticker 1</option>\n                  </select>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"stackername\">Stacker Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <select class=\"form-control\" id=\"stackername\">\n                    <option value=\"-1\">Please Select</option>\n                    <option value=\"stk1\">Sticker 1</option>\n                  </select>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"lotno\">Lot No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"lotno\" placeholder=\"Lot No.\">\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"indatetime\">Container In Date Time</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"indatetime\" value=\"27-05-2019 12:12:12\" readonly>\n                </div>\n              </div>\n\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <br><br>\n    </div>\n    <div class=\"fixed-area\">\n      <button type=\"button\" class=\"btn btn-primary\">Back</button>&nbsp; <button type=\"submit\"\n        class=\"btn btn-primary login-button\">Submit</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/container-management/container-reg/container-reg.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/container-management/container-reg/container-reg.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ContainerRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerRegComponent", function() { return ContainerRegComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContainerRegComponent = /** @class */ (function () {
    function ContainerRegComponent() {
    }
    ContainerRegComponent.prototype.ngOnInit = function () {
    };
    ContainerRegComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-container-reg',
            template: __webpack_require__(/*! ./container-reg.component.html */ "./src/app/container-management/container-reg/container-reg.component.html"),
            styles: [__webpack_require__(/*! ./container-reg.component.css */ "./src/app/container-management/container-reg/container-reg.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContainerRegComponent);
    return ContainerRegComponent;
}());



/***/ }),

/***/ "./src/app/container-management/container-search/container-search.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/container-management/container-search/container-search.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fm-border{\r\n    border-width: 3px;\r\n    border-style: solid;\r\n    padding: 5px;  \r\n    border-color: darkgray;\r\n}\r\n\r\ndiv.dataTables div.dataTables_length select {\r\n    width: 60px;\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVyLW1hbmFnZW1lbnQvY29udGFpbmVyLXNlYXJjaC9jb250YWluZXItc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVyLW1hbmFnZW1lbnQvY29udGFpbmVyLXNlYXJjaC9jb250YWluZXItc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm0tYm9yZGVye1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgcGFkZGluZzogNXB4OyAgXHJcbiAgICBib3JkZXItY29sb3I6IGRhcmtncmF5O1xyXG59XHJcblxyXG5kaXYuZGF0YVRhYmxlcyBkaXYuZGF0YVRhYmxlc19sZW5ndGggc2VsZWN0IHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/container-management/container-search/container-search.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/container-management/container-search/container-search.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-position\">\n  <form class=\"form-horizontal\" method=\"post\" action=\"#\">\n\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-12\" style=\"text-align: right;\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addContainer()\">In Time Reg </button>\n      </div>\n    </div>\n\n      <div class=\"fm-border\">\n          <div class=\"form-row\">\n              <div class=\"form-group col-md-2\">\n                  <label for=\"compname\">Company Name</label>\n              </div>\n              <div class=\"form-group col-md-4\">\n                  <input type=\"text\" name=\"compname\" class=\"form-control\" id=\"compname\"\n                      placeholder=\"Company Name\" (change)=\"onChangeValidation($event);\">\n                  <div id=\"err_compname\" class=\"error_msg\"></div>\n              </div>\n              <div class=\"form-group col-md-2\">\n                  <label for=\"rocno\">Company ROC No.</label>\n              </div>\n              <div class=\"form-group col-md-4\">\n                  <input type=\"text\" name=\"rocno\" class=\"form-control\" id=\"rocno\"\n                      placeholder=\"Company ROC No.\" (change)=\"onChangeValidation($event);\">\n                  <div id=\"err_rocno\" class=\"error_msg\"></div>\n              </div>\n\n          </div>\n\n          <div class=\"form-row\">\n              <div class=\"form-group col-md-2\">\n                  <label for=\"ownname\">Driver Name</label>\n              </div>\n              <div class=\"form-group col-md-4\">\n                  <input type=\"text\" name=\"ownname\" class=\"form-control\" id=\"ownname\"\n                      placeholder=\"Customer Name\" (change)=\"onChangeValidation($event);\">\n                  <div id=\"err_ownname\" class=\"error_msg\"></div>\n\n              </div>\n              <div class=\"form-group col-md-2\">\n                  <label for=\"nric\">Driver NRIC/Passport No.</label>\n              </div>\n              <div class=\"form-group col-md-4\">\n\n                  <input type=\"text\" name=\"nric\" class=\"form-control\" id=\"nric\"\n                      placeholder=\"Customer NRIC/Passport No.\" (change)=\"onChangeValidation($event);\">\n                  <div id=\"err_nric\" class=\"error_msg\"></div>\n              </div>\n\n          </div>\n\n\n          <div class=\"form-row\">\n              <div class=\"form-group col-md-2\">\n                  <label for=\"email\">Vehicle No.</label>\n              </div>\n              <div class=\"form-group col-md-4\">\n\n                  <input type=\"text\" name=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\"\n                      (change)=\"onChangeValidation($event);\">\n                  <div id=\"err_email\" class=\"error_msg\"></div>\n\n              </div>\n              <div class=\"form-group col-md-2\">\n                  <label for=\"cntno1\">Container No.</label>\n              </div>\n              <div class=\"form-group col-md-4\">\n                  <input type=\"text\" name=\"cntno1\" class=\"form-control\" id=\"cntno1\"\n                      placeholder=\"Contact No. 1\" (change)=\"onChangeValidation($event);\">\n                  <div id=\"err_cntno1\" class=\"error_msg\"></div>\n              </div>\n\n          </div>\n\n          <div class=\"form-row\">\n              <div class=\"form-group col-md-2\">\n                  <label for=\"postcode\">Surveyor Name</label>\n              </div>\n              <div class=\"form-group col-md-4\">\n                  <input type=\"text\" name=\"postcode\" class=\"form-control\" id=\"postcode\"\n                      placeholder=\"Depot Post Code\" (change)=\"onChangeValidation($event);\">\n                  <div id=\"err_postcode\" class=\"error_msg\"></div>\n\n              </div>\n              <div class=\"form-group col-md-2\">\n                  <label for=\"state\">Stacker Name</label>\n              </div>\n              <div class=\"form-group col-md-4\">\n                  <select class=\"form-control\" id=\"state\" name=\"state\">\n                      <option value=\"\">Please Select</option>\n                      <option value=\"volvo\">State 1</option>\n                  </select>\n                  <div id=\"err_state\" class=\"error_msg\"></div>\n\n              </div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">Search</button>\n      </div>\n\n      <br>\n      <table id=\"example\" class=\"table table-striped table-bordered\" style=\"width:100%\">\n        <thead>\n          <tr>\n            <th>Company Name</th>\n            <th>Driver Name</th>\n            <th>Vehicle No.</th>\n            <th>Container No.</th>\n            <th>In Date Time</th>\n            <th>Out Date Time</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td><a [routerLink]=\"['/containerview']\" class=\"nav-link\">XYZ COMPANY</a></td>\n            <td>Driver Name</td>\n            <td>ABC123</td>\n            <td>3450142</td>\n            <td>12-12-2019 12:12:12</td>\n            <td></td>\n          </tr>\n          <tr>\n            <td><a [routerLink]=\"['/containerview']\" class=\"nav-link\">XYZ COMPANY</a></td>\n            <td>Driver Name</td>\n            <td>ABC123</td>\n            <td>3450142</td>\n            <td>12-12-2019 12:12:12</td>\n            <td></td>\n          </tr>\n          <tr>\n            <td><a [routerLink]=\"['/containerview']\" class=\"nav-link\">XYZ COMPANY</a></td>\n            <td>Driver Name</td>\n            <td>ABC123</td>\n            <td>3450142</td>\n            <td>12-12-2019 12:12:12</td>\n            <td></td>\n          </tr>\n          <tr>\n            <td><a [routerLink]=\"['/containerview']\" class=\"nav-link\">XYZ COMPANY</a></td>\n            <td>Driver Name</td>\n            <td>ABC123</td>\n            <td>3450142</td>\n            <td>12-12-2019 12:12:12</td>\n            <td></td>\n          </tr>\n          <tr>\n            <td><a [routerLink]=\"['/containerview']\" class=\"nav-link\">XYZ COMPANY</a></td>\n            <td>Driver Name</td>\n            <td>ABC123</td>\n            <td>3450142</td>\n            <td>12-12-2019 12:12:12</td>\n            <td></td>\n          </tr>\n          <tr>\n            <td><a [routerLink]=\"['/containerview']\" class=\"nav-link\">XYZ COMPANY</a></td>\n            <td>Driver Name</td>\n            <td>ABC123</td>\n            <td>3450142</td>\n            <td>12-12-2019 12:12:12</td>\n            <td></td>\n          </tr>\n          <tr>\n            <td><a [routerLink]=\"['/containerview']\" class=\"nav-link\">XYZ COMPANY</a></td>\n            <td>Driver Name</td>\n            <td>ABC123</td>\n            <td>3450142</td>\n            <td>12-12-2019 12:12:12</td>\n            <td></td>\n          </tr>\n          <tr>\n            <td><a [routerLink]=\"['/containerview']\" class=\"nav-link\">XYZ COMPANY</a></td>\n            <td>Driver Name</td>\n            <td>ABC123</td>\n            <td>3450142</td>\n            <td>12-12-2019 12:12:12</td>\n            <td></td>\n          </tr>\n          <tr>\n            <td><a [routerLink]=\"['/containerview']\" class=\"nav-link\">XYZ COMPANY</a></td>\n            <td>Driver Name</td>\n            <td>ABC123</td>\n            <td>3450142</td>\n            <td>12-12-2019 12:12:12</td>\n            <td></td>\n          </tr>\n\n        </tbody>\n\n      </table>\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/container-management/container-search/container-search.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/container-management/container-search/container-search.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ContainerSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerSearchComponent", function() { return ContainerSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/validation.service */ "./src/app/services/validation.service.ts");





var ContainerSearchComponent = /** @class */ (function () {
    function ContainerSearchComponent(router, fb, validationService) {
        this.router = router;
        this.validationService = validationService;
    }
    ContainerSearchComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('#example').DataTable();
        });
    };
    ContainerSearchComponent.prototype.addContainer = function () {
        this.router.navigateByUrl('/containerreg');
    };
    ContainerSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-container-search',
            template: __webpack_require__(/*! ./container-search.component.html */ "./src/app/container-management/container-search/container-search.component.html"),
            styles: [__webpack_require__(/*! ./container-search.component.css */ "./src/app/container-management/container-search/container-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"]])
    ], ContainerSearchComponent);
    return ContainerSearchComponent;
}());



/***/ }),

/***/ "./src/app/container-management/container-update/container-update.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/container-management/container-update/container-update.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci1tYW5hZ2VtZW50L2NvbnRhaW5lci11cGRhdGUvY29udGFpbmVyLXVwZGF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/container-management/container-update/container-update.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/container-management/container-update/container-update.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-position\">\n    <form class=\"form-horizontal\" method=\"post\" action=\"#\">\n      <div class=\"container\">\n  \n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-header\">Container In Form</div>\n              <div class=\"card-body\">\n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"cmpname\">Company Name</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <select class=\"form-control\" id=\"cmpname\">\n                      <option value=\"-1\">Please Select</option>\n                      <option value=\"volvo\">State 1</option>\n                    </select>\n                  </div>\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"cmprocno\">Company ROC No.</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"cmprocno\" placeholder=\"Company ROC No.\" readonly>\n                  </div>\n                </div>\n  \n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"custname\">Customer Name</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"custname\" placeholder=\"Customer Name\" readonly>\n                  </div>\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"nric\">Customer NRIC/Passport No.</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"nric\" placeholder=\"Customer NRIC/Passport No.\" readonly>\n                  </div>\n                </div>\n  \n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"addr1\">Address Line 1</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"addr1\" placeholder=\"Address Line 1\" readonly>\n                  </div>\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"addr2\">Address Line 2</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"addr2\" placeholder=\"Address Line 2\" readonly>\n                  </div>\n                </div>\n  \n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"postcode\">Post Code</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"postcode\" placeholder=\"Post Code\" readonly>\n                  </div>\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"state\">State</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <select class=\"form-control\" id=\"state\" readonly>\n                      <option value=\"-1\">Please Select</option>\n                      <option value=\"volvo\">State 1</option>\n                    </select>\n                  </div>\n                </div>\n  \n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"cntno1\">Contact No. 1</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"cntno1\" placeholder=\"Contact No. 1\" readonly>\n                  </div>\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"cntno2\">Contact No. 2</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"cntno2\" placeholder=\"Contact No. 2\" readonly>\n                  </div>\n                </div>\n  \n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"devname\">Driver Name</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"devname\" placeholder=\"Driver Name\">\n                  </div>\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"drvnric\">Driver NRIC/Passport No.</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"drvnric\" placeholder=\"Driver NRIC/Passport No.\">\n                  </div>\n                </div>\n  \n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"vehno\">Vehicle No.</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"vehno\" placeholder=\"Vehicle No.\">\n                  </div>\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"containerno\">Container No.</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"containerno\" placeholder=\"Container No.\">\n                  </div>\n                </div>\n  \n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"surveyorname\">Surveyor Name</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <select class=\"form-control\" id=\"surveyorname\">\n                      <option value=\"-1\">Please Select</option>\n                      <option value=\"stk1\">Sticker 1</option>\n                    </select>\n                  </div>\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"containercond\">Container Condition</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <select class=\"form-control\" id=\"containercond\">\n                      <option value=\"-1\">Please Select</option>\n                      <option value=\"stk1\">Sticker 1</option>\n                    </select>\n                  </div>\n                </div>\n  \n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"stackername\">Stacker Name</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <select class=\"form-control\" id=\"stackername\">\n                      <option value=\"-1\">Please Select</option>\n                      <option value=\"stk1\">Sticker 1</option>\n                    </select>\n                  </div>\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"lotno\">Lot No.</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"lotno\" placeholder=\"Lot No.\">\n                  </div>\n                </div>\n  \n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"indatetime\">Container In Date Time</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"indatetime\" value=\"27-05-2019 12:12:12\" readonly>\n                  </div>\n                </div>\n  \n  \n              </div>\n  \n            </div>\n          </div>\n        </div>\n        <br><br>\n      </div>\n      <div class=\"fixed-area\">\n        <button type=\"button\" class=\"btn btn-primary\">Back</button>&nbsp; <button type=\"submit\"\n          class=\"btn btn-primary login-button\">Submit</button>\n      </div>\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/container-management/container-update/container-update.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/container-management/container-update/container-update.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ContainerUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerUpdateComponent", function() { return ContainerUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContainerUpdateComponent = /** @class */ (function () {
    function ContainerUpdateComponent() {
    }
    ContainerUpdateComponent.prototype.ngOnInit = function () {
    };
    ContainerUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-container-update',
            template: __webpack_require__(/*! ./container-update.component.html */ "./src/app/container-management/container-update/container-update.component.html"),
            styles: [__webpack_require__(/*! ./container-update.component.css */ "./src/app/container-management/container-update/container-update.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContainerUpdateComponent);
    return ContainerUpdateComponent;
}());



/***/ }),

/***/ "./src/app/container-management/container-view/container-view.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/container-management/container-view/container-view.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lci1tYW5hZ2VtZW50L2NvbnRhaW5lci12aWV3L2NvbnRhaW5lci12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/container-management/container-view/container-view.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/container-management/container-view/container-view.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-position\">\n    <form class=\"form-horizontal\" method=\"post\" action=\"#\">\n\n      <div class=\"container\">\n  \n        <div class=\"row justify-content-center\">\n            <div class=\"form-group col-md-12\" style=\"text-align: right;\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"editContainer()\">Edit In\\Out Info</button>\n              </div>\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n              <div class=\"card-header\">Container In/Out Details</div>\n              <div class=\"card-body\">\n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"cmpname\">Company Name</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                      <div>XYZ COMPANY</div>\n                  </div>\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"cmprocno\">Company ROC No.</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                      <div>ROC12345</div>\n                  </div>\n                </div>\n  \n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"custname\">Customer Name</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                      <div>ABC</div>\n                  </div>\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"nric\">Customer NRIC/Passport No.</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                      <div>K8204022</div>\n                  </div>\n                </div>\n  \n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"addr1\">Address Line 1</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                      <div>XYZ COMPANY, #123</div>\n                  </div>\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"addr2\">Address Line 2</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                      <div>XYZ COMPANY</div>\n                  </div>\n                </div>\n  \n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"postcode\">Post Code</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                      <div>63000</div>\n                  </div>\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"state\">State</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                      <div>SELANGOR</div>\n                  </div>\n                </div>\n  \n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"cntno1\">Contact No. 1</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                      <div>0123123123</div>\n                  </div>\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"cntno2\">Contact No. 2</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                      <div></div>\n                  </div>\n                </div>\n  \n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"devname\">Driver Name</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                      <div>RAAZ</div>\n                  </div>\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"drvnric\">Driver NRIC/Passport No.</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                      <div>G4010401</div>\n                  </div>\n                </div>\n  \n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"vehno\">Vehicle No.</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                      <div>XYZ123</div>\n                  </div>\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"containerno\">Container No.</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                      <div>E1230013</div>\n                  </div>\n                </div>\n  \n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"surveyorname\">Surveyor Name</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                      <div>ZEENA</div>\n                  </div>\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"containercond\">Container Condition</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                      <div>XYZ COMPANY</div>\n                  </div>\n                </div>\n  \n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"stackername\">Stacker Name</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                      <div>STRK 1</div>\n                  </div>\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"lotno\">Lot No.</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                      <div>2</div>\n                  </div>\n                </div>\n  \n                <div class=\"form-row\">\n                  <div class=\"form-group col-md-2\">\n                    <label for=\"indatetime\">Container In Date Time</label>\n                  </div>\n                  <div class=\"form-group col-md-4\">\n                      <div>12-12-2019 12:12:12</div>\n                  </div>\n                  <div class=\"form-group col-md-2\">\n                      <label for=\"indatetime\">Container Out Date Time</label>\n                    </div>\n                    <div class=\"form-group col-md-4\">\n                        <div>12-12-2019 14:12:12</div>\n                    </div>\n                </div>\n  \n  \n              </div>\n  \n            </div>\n          </div>\n        </div>\n        <br><br>\n      </div>    \n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/container-management/container-view/container-view.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/container-management/container-view/container-view.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ContainerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerViewComponent", function() { return ContainerViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ContainerViewComponent = /** @class */ (function () {
    function ContainerViewComponent(router, fb) {
        this.router = router;
    }
    ContainerViewComponent.prototype.ngOnInit = function () {
    };
    ContainerViewComponent.prototype.editContainer = function () {
        this.router.navigateByUrl('/containerreg');
    };
    ContainerViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-container-view',
            template: __webpack_require__(/*! ./container-view.component.html */ "./src/app/container-management/container-view/container-view.component.html"),
            styles: [__webpack_require__(/*! ./container-view.component.css */ "./src/app/container-management/container-view/container-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ContainerViewComponent);
    return ContainerViewComponent;
}());



/***/ }),

/***/ "./src/app/customer-management/customer-create/customer-create.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/customer-management/customer-create/customer-create.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLW1hbmFnZW1lbnQvY3VzdG9tZXItY3JlYXRlL2N1c3RvbWVyLWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/customer-management/customer-create/customer-create.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/customer-management/customer-create/customer-create.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-position\">\n    <form class=\"form-horizontal\" method=\"post\" action=\"#\">\n  <div class=\"container\">\n\n    <div class=\"row justify-content-center\" >\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">Create New Customer</div>\n          <div class=\"card-body\">\n\n            \n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cmpname\">Company Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"cmpname\" placeholder=\"Company Name\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cmprocno\">Company ROC No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"cmprocno\" placeholder=\"Company ROC No.\">\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"custname\">Customer Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"custname\" placeholder=\"Customer Name\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nric\">Customer NRIC/Passport No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"nric\" placeholder=\"Customer NRIC/Passport No.\">\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"addr1\">Address Line 1</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"addr1\" placeholder=\"Address Line 1\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"addr2\">Address Line 2</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"addr2\" placeholder=\"Address Line 2\">\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"postcode\">Post Code</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"postcode\" placeholder=\"Post Code\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"state\">State</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <select class=\"form-control\" id=\"state\">\n                    <option value=\"-1\">Please Select</option>\n                    <option value=\"volvo\">State 1</option>\n                  </select>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno1\">Contact No. 1</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"cntno1\" placeholder=\"Contact No. 1\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno2\">Contact No. 2</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"cntno2\" placeholder=\"Contact No. 2\">\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"noconts\">Number of Containers</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"noconts\" placeholder=\"Number of Containers\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"billstart\">Billing Starts From (Days)</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"billstart\" placeholder=\"Billing Starts From (Days)\">\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"billcycl\">Billing Cycle</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <select class=\"form-control\" id=\"billcycl\">\n                    <option value=\"-1\">Please Select</option>\n                    <option value=\"volvo\">Weekly</option>\n                    <option value=\"volvo\">Biweekly</option>\n                    <option value=\"volvo\">Monthly</option>\n                  </select>\n                </div>\n              </div>\n\n              \n          </div>\n\n        </div>\n      </div>\n    </div>\n    <br>\n  </div>\n  <div class=\"fixed-area\">\n      <button type=\"button\" class=\"btn btn-primary\">Back</button>&nbsp; <button type=\"submit\"\n        class=\"btn btn-primary login-button\">Submit</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/customer-management/customer-create/customer-create.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/customer-management/customer-create/customer-create.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CustomerCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCreateComponent", function() { return CustomerCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerCreateComponent = /** @class */ (function () {
    function CustomerCreateComponent() {
    }
    CustomerCreateComponent.prototype.ngOnInit = function () {
    };
    CustomerCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-create',
            template: __webpack_require__(/*! ./customer-create.component.html */ "./src/app/customer-management/customer-create/customer-create.component.html"),
            styles: [__webpack_require__(/*! ./customer-create.component.css */ "./src/app/customer-management/customer-create/customer-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerCreateComponent);
    return CustomerCreateComponent;
}());



/***/ }),

/***/ "./src/app/customer-management/customer-search/customer-search.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/customer-management/customer-search/customer-search.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fm-border{\r\n    border-width: 3px;\r\n    border-style: solid;\r\n    padding: 5px;  \r\n    border-color: darkgray;\r\n}\r\n\r\ndiv.dataTables div.dataTables_length select {\r\n    width: 60px;\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXItbWFuYWdlbWVudC9jdXN0b21lci1zZWFyY2gvY3VzdG9tZXItc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXItbWFuYWdlbWVudC9jdXN0b21lci1zZWFyY2gvY3VzdG9tZXItc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm0tYm9yZGVye1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgcGFkZGluZzogNXB4OyAgXHJcbiAgICBib3JkZXItY29sb3I6IGRhcmtncmF5O1xyXG59XHJcblxyXG5kaXYuZGF0YVRhYmxlcyBkaXYuZGF0YVRhYmxlc19sZW5ndGggc2VsZWN0IHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/customer-management/customer-search/customer-search.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/customer-management/customer-search/customer-search.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-position\">\n    <form class=\"form-horizontal\" [formGroup]=\"customersearchform\" id=\"customersearchform\" role=\"form\"\n        (ngSubmit)=\"onSubmit(customersearchform)\">\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-12\" style=\"text-align: right;\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"addCustomer()\">Add Customer</button>\n            </div>\n        </div>\n        <div class=\"fm-border\">\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                    <label for=\"compname\">Company Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <input type=\"text\" formControlName=\"compname\" class=\"form-control\" id=\"compname\"\n                        placeholder=\"Company Name\" (change)=\"onChangeValidation($event);\">\n                    <div id=\"err_compname\" class=\"error_msg\"></div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                    <label for=\"rocno\">Company ROC No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <input type=\"text\" formControlName=\"rocno\" class=\"form-control\" id=\"rocno\"\n                        placeholder=\"Company ROC No.\" (change)=\"onChangeValidation($event);\">\n                    <div id=\"err_rocno\" class=\"error_msg\"></div>\n                </div>\n\n            </div>\n\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                    <label for=\"ownname\">Customer Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <input type=\"text\" formControlName=\"ownname\" class=\"form-control\" id=\"ownname\"\n                        placeholder=\"Customer Name\" (change)=\"onChangeValidation($event);\">\n                    <div id=\"err_ownname\" class=\"error_msg\"></div>\n\n                </div>\n                <div class=\"form-group col-md-2\">\n                    <label for=\"nric\">Customer NRIC/Passport No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n\n                    <input type=\"text\" formControlName=\"nric\" class=\"form-control\" id=\"nric\"\n                        placeholder=\"Customer NRIC/Passport No.\" (change)=\"onChangeValidation($event);\">\n                    <div id=\"err_nric\" class=\"error_msg\"></div>\n                </div>\n\n            </div>\n\n\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                    <label for=\"email\">Email</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n\n                    <input type=\"text\" formControlName=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\"\n                        (change)=\"onChangeValidation($event);\">\n                    <div id=\"err_email\" class=\"error_msg\"></div>\n\n                </div>\n                <div class=\"form-group col-md-2\">\n                    <label for=\"cntno1\">Contact No. 1</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <input type=\"text\" formControlName=\"cntno1\" class=\"form-control\" id=\"cntno1\"\n                        placeholder=\"Contact No. 1\" (change)=\"onChangeValidation($event);\">\n                    <div id=\"err_cntno1\" class=\"error_msg\"></div>\n                </div>\n\n            </div>\n\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                    <label for=\"postcode\">Post Code</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <input type=\"text\" formControlName=\"postcode\" class=\"form-control\" id=\"postcode\"\n                        placeholder=\"Depot Post Code\" (change)=\"onChangeValidation($event);\">\n                    <div id=\"err_postcode\" class=\"error_msg\"></div>\n\n                </div>\n                <div class=\"form-group col-md-2\">\n                    <label for=\"state\">State</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <select class=\"form-control\" id=\"state\" formControlName=\"state\">\n                        <option value=\"\">Please Select</option>\n                        <option value=\"volvo\">State 1</option>\n                    </select>\n                    <div id=\"err_state\" class=\"error_msg\"></div>\n\n                </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Search</button>\n        </div>\n\n        <br>\n        <table id=\"example\" class=\"table table-striped table-bordered\" style=\"width:100%\">\n            <thead>\n                <tr>\n                    <th>Company Name</th>\n                    <th>Company ROC No.</th>\n                    <th>Address 1</th>\n                    <th>Address 2</th>\n                    <th>State</th>\n                    <th>Pincode</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td><a [routerLink]=\"['/customerview']\" class=\"nav-link\">XYZ COMPANY</a></td>\n                    <td>R-123456</td>\n                    <td>Addr Line 1</td>\n                    <td>Addr Line 2</td>\n                    <td>SELANGOR</td>\n                    <td>47000</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/customerview']\" class=\"nav-link\">XYZ COMPANY</a></td>\n                    <td>R-123456</td>\n                    <td>Addr Line 1</td>\n                    <td>Addr Line 2</td>\n                    <td>SELANGOR</td>\n                    <td>47000</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/customerview']\" class=\"nav-link\">XYZ COMPANY</a></td>\n                    <td>R-123456</td>\n                    <td>Addr Line 1</td>\n                    <td>Addr Line 2</td>\n                    <td>SELANGOR</td>\n                    <td>47000</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/customerview']\" class=\"nav-link\">XYZ COMPANY</a></td>\n                    <td>R-123456</td>\n                    <td>Addr Line 1</td>\n                    <td>Addr Line 2</td>\n                    <td>SELANGOR</td>\n                    <td>47000</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/customerview']\" class=\"nav-link\">XYZ COMPANY</a></td>\n                    <td>R-123456</td>\n                    <td>Addr Line 1</td>\n                    <td>Addr Line 2</td>\n                    <td>SELANGOR</td>\n                    <td>47000</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/customerview']\" class=\"nav-link\">XYZ COMPANY</a></td>\n                    <td>R-123456</td>\n                    <td>Addr Line 1</td>\n                    <td>Addr Line 2</td>\n                    <td>SELANGOR</td>\n                    <td>47000</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/customerview']\" class=\"nav-link\">XYZ COMPANY</a></td>\n                    <td>R-123456</td>\n                    <td>Addr Line 1</td>\n                    <td>Addr Line 2</td>\n                    <td>SELANGOR</td>\n                    <td>47000</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/customerview']\" class=\"nav-link\">XYZ COMPANY</a></td>\n                    <td>R-123456</td>\n                    <td>Addr Line 1</td>\n                    <td>Addr Line 2</td>\n                    <td>SELANGOR</td>\n                    <td>47000</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/customerview']\" class=\"nav-link\">XYZ COMPANY</a></td>\n                    <td>R-123456</td>\n                    <td>Addr Line 1</td>\n                    <td>Addr Line 2</td>\n                    <td>SELANGOR</td>\n                    <td>47000</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/customerview']\" class=\"nav-link\">XYZ COMPANY</a></td>\n                    <td>R-123456</td>\n                    <td>Addr Line 1</td>\n                    <td>Addr Line 2</td>\n                    <td>SELANGOR</td>\n                    <td>47000</td>\n                </tr>\n\n            </tbody>\n\n        </table>\n\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/customer-management/customer-search/customer-search.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/customer-management/customer-search/customer-search.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CustomerSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerSearchComponent", function() { return CustomerSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/validation.service */ "./src/app/services/validation.service.ts");





var CustomerSearchComponent = /** @class */ (function () {
    function CustomerSearchComponent(router, fb, validationService) {
        this.router = router;
        this.validationService = validationService;
        this.customersearchform = fb.group({
            'compname': [''],
            'rocno': [''],
            'ownname': [''],
            'nric': [''],
            'email': [''],
            'cntno1': [''],
            'postcode': [''],
            'state': ['']
        });
    }
    CustomerSearchComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('#example').DataTable();
        });
    };
    CustomerSearchComponent.prototype.onChangeValidation = function (data) {
        this.validationService.depotFormValidation(data);
    };
    CustomerSearchComponent.prototype.addCustomer = function () {
        this.router.navigateByUrl('/customercreate');
    };
    CustomerSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-search',
            template: __webpack_require__(/*! ./customer-search.component.html */ "./src/app/customer-management/customer-search/customer-search.component.html"),
            styles: [__webpack_require__(/*! ./customer-search.component.css */ "./src/app/customer-management/customer-search/customer-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"]])
    ], CustomerSearchComponent);
    return CustomerSearchComponent;
}());



/***/ }),

/***/ "./src/app/customer-management/customer-update/customer-update.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/customer-management/customer-update/customer-update.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLW1hbmFnZW1lbnQvY3VzdG9tZXItdXBkYXRlL2N1c3RvbWVyLXVwZGF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/customer-management/customer-update/customer-update.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/customer-management/customer-update/customer-update.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-position\">\n    <form class=\"form-horizontal\" method=\"post\" action=\"#\">\n  <div class=\"container\">\n\n    <div class=\"row justify-content-center\" >\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">Update Customer Information</div>\n          <div class=\"card-body\">\n\n            \n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cmpname\">Company Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"cmpname\" placeholder=\"Company Name\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cmprocno\">Company ROC No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"cmprocno\" placeholder=\"Company ROC No.\">\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"custname\">Customer Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"custname\" placeholder=\"Customer Name\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nric\">Customer NRIC/Passport No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"nric\" placeholder=\"Customer NRIC/Passport No.\">\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"addr1\">Address Line 1</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"addr1\" placeholder=\"Address Line 1\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"addr2\">Address Line 2</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"addr2\" placeholder=\"Address Line 2\">\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"postcode\">Post Code</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"postcode\" placeholder=\"Post Code\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"state\">State</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <select class=\"form-control\" id=\"state\">\n                    <option value=\"-1\">Please Select</option>\n                    <option value=\"volvo\">State 1</option>\n                  </select>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno1\">Contact No. 1</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"cntno1\" placeholder=\"Contact No. 1\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno2\">Contact No. 2</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"cntno2\" placeholder=\"Contact No. 2\">\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"noconts\">Number of Containers</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"noconts\" placeholder=\"Number of Containers\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"billstart\">Billing Starts From (Days)</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"billstart\" placeholder=\"Billing Starts From (Days)\">\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"billcycl\">Billing Cycle</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <select class=\"form-control\" id=\"billcycl\">\n                    <option value=\"-1\">Please Select</option>\n                    <option value=\"volvo\">Weekly</option>\n                    <option value=\"volvo\">Biweekly</option>\n                    <option value=\"volvo\">Monthly</option>\n                  </select>\n                </div>\n              </div>             \n          </div>\n\n        </div>\n      </div>\n    </div>\n    <br>\n  </div>\n  <div class=\"fixed-area\">\n      <button type=\"button\" class=\"btn btn-primary\">Back</button>&nbsp; <button type=\"submit\"\n        class=\"btn btn-primary login-button\">Submit</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/customer-management/customer-update/customer-update.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/customer-management/customer-update/customer-update.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CustomerUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerUpdateComponent", function() { return CustomerUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerUpdateComponent = /** @class */ (function () {
    function CustomerUpdateComponent() {
    }
    CustomerUpdateComponent.prototype.ngOnInit = function () {
    };
    CustomerUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-update',
            template: __webpack_require__(/*! ./customer-update.component.html */ "./src/app/customer-management/customer-update/customer-update.component.html"),
            styles: [__webpack_require__(/*! ./customer-update.component.css */ "./src/app/customer-management/customer-update/customer-update.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerUpdateComponent);
    return CustomerUpdateComponent;
}());



/***/ }),

/***/ "./src/app/customer-management/customer-view/customer-view.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/customer-management/customer-view/customer-view.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyLW1hbmFnZW1lbnQvY3VzdG9tZXItdmlldy9jdXN0b21lci12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/customer-management/customer-view/customer-view.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/customer-management/customer-view/customer-view.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-position\">\n  <div class=\"container\">\n\n    <div class=\"row justify-content-center\" >\n      <div class=\"form-group col-md-12\" style=\"text-align: right;\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"editCustomer()\">Edit Customer</button>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">Customer Info</div>\n          <div class=\"card-body\">\n\n            <form class=\"form-horizontal\" method=\"post\" action=\"#\">\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cmpname\">Company Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>XYZ COMPANY</div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cmprocno\">Company ROC No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>C-123456</div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"custname\">Customer Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>RAM K</div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nric\">Customer NRIC/Passport No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>K9193913</div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"addr1\">Address Line 1</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>XYZ COMPANY, JLN 123, BLOCK B, F 12 12</div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"addr2\">Address Line 2</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>XYZ COMPANY</div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"postcode\">Post Code</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>12345</div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"state\">State</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>SELANGOR</div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno1\">Contact No. 1</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>0123123123</div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno2\">Contact No. 2</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>0929294991</div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"noconts\">Number of Containers</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>50</div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"billstart\">Billing Starts From (Days)</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>10</div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"billcycl\">Billing Cycle</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>WEEKLY</div>\n                </div>\n              </div>\n            </form>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <br>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/customer-management/customer-view/customer-view.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/customer-management/customer-view/customer-view.component.ts ***!
  \******************************************************************************/
/*! exports provided: CustomerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerViewComponent", function() { return CustomerViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CustomerViewComponent = /** @class */ (function () {
    function CustomerViewComponent(router) {
        this.router = router;
    }
    CustomerViewComponent.prototype.ngOnInit = function () {
    };
    CustomerViewComponent.prototype.editCustomer = function () {
        this.router.navigateByUrl('/customeredit');
    };
    CustomerViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-view',
            template: __webpack_require__(/*! ./customer-view.component.html */ "./src/app/customer-management/customer-view/customer-view.component.html"),
            styles: [__webpack_require__(/*! ./customer-view.component.css */ "./src/app/customer-management/customer-view/customer-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomerViewComponent);
    return CustomerViewComponent;
}());



/***/ }),

/***/ "./src/app/depot-management/depot-branch-create/depot-branch-create.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/depot-management/depot-branch-create/depot-branch-create.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlcG90LW1hbmFnZW1lbnQvZGVwb3QtYnJhbmNoLWNyZWF0ZS9kZXBvdC1icmFuY2gtY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/depot-management/depot-branch-create/depot-branch-create.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/depot-management/depot-branch-create/depot-branch-create.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-position\">\n  <form class=\"form-horizontal\" [formGroup]=\"depotbranchcreateform\" id=\"depotbranchcreateform\" role=\"form\"\n    (ngSubmit)=\"onSubmit(depotbranchcreateform)\">\n    <div class=\"container\">\n\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            <div class=\"card-header\">Create New Depot Branch</div>\n            <div class=\"card-body\">\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"depotname\">Depot Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input formControlName=\"depotname\" type=\"text\" class=\"form-control\" id=\"depotname\"\n                    placeholder=\"Depot Name\" (change)=\"onChangeValidation($event);\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.depotname.errors }\" readonly>\n                  <div id=\"err_depotname\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.depotname.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.depotname.errors.required\">Depot Name is required</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"rocno\">Depot ROC No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input formControlName=\"rocno\" type=\"text\" class=\"form-control\" id=\"rocno\" placeholder=\"Depot ROC No.\"\n                    (change)=\"onChangeValidation($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.rocno.errors }\"\n                    maxlength=\"12\" readonly>\n                  <div id=\"err_rocno\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.rocno.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.rocno.errors.required\">Depot ROC No. is required</div>\n                    <div *ngIf=\"f.rocno.errors.minlength\">Depot ROC No. min lenght is 8</div>\n                    <div *ngIf=\"f.rocno.errors.maxlength\">Depot ROC No. max langth is 12</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"ownname\">Owner Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input formControlName=\"ownname\" type=\"text\" class=\"form-control\" id=\"ownname\"\n                    placeholder=\"Owner Name\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.ownname.errors }\">\n                  <div id=\"err_ownname\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.ownname.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.ownname.errors.required\">Owner Name is required</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nric\">Owner NRIC/Passport No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input formControlName=\"nric\" type=\"text\" class=\"form-control\" id=\"nric\"\n                    placeholder=\"Owner NRIC/Passport No.\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.nric.errors }\" maxlength=\"12\">\n                  <div id=\"err_nric\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.nric.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.nric.errors.required\">Owner NRIC/Passport No. is required</div>\n                    <div *ngIf=\"f.nric.errors.minlength\">Owner NRIC/Passport No. min lenght is 8</div>\n                    <div *ngIf=\"f.nric.errors.maxlength\">Owner NRIC/Passport No. max langth is 12</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"email\">Email</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input formControlName=\"email\" type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email\"\n                    (change)=\"onChangeValidation($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n                  <div id=\"err_ownname\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                    <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"addr1\">Address Line 1</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input formControlName=\"addr1\" type=\"text\" class=\"form-control\" id=\"addr1\"\n                    placeholder=\"Address Line 1\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.addr1.errors }\">\n                  <div id=\"err_addr1\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.addr1.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.addr1.errors.required\">Address Line 1 is required</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"addr2\">Address Line 2</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input formControlName=\"addr2\" type=\"text\" class=\"form-control\" id=\"addr2\"\n                    placeholder=\"Address Line 2\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.addr2.errors }\">\n                  <div id=\"err_addr2\" class=\"error_msg\"></div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"postcode\">Post Code</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" formControlName=\"postcode\" class=\"form-control\" id=\"postcode\"\n                    placeholder=\"Post Code\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.postcode.errors }\" maxlength=\"5\">\n                  <div id=\"err_postcode\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.postcode.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.postcode.errors.required\">Post Code is required</div>\n                    <div *ngIf=\"f.postcode.errors.minlength\">Post Code must be at least 5 characters</div>\n                    <div *ngIf=\"f.postcode.errors.maxlength\">Post Code must be 5 characters</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"state\">State</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <select class=\"form-control\" formControlName=\"state\" id=\"state\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\">\n                    <option value=\"\">Please Select</option>\n                    <option value=\"st1\">State 1</option>\n                  </select>\n                  <div id=\"err_state\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.state.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.state.errors.required\">State is required</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"country\">Country</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <select class=\"form-control\" formControlName=\"country\" id=\"country\"\n                    (change)=\"onChangeValidation($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\">\n                    <option value=\"MY\" selected>MALAYSIA</option>\n                  </select>\n                  <div id=\"err_country\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.country.errors\" class=\"invalid-feedback\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\">\n                    <div *ngIf=\"f.country.errors.required\">Country is required</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno1\">Contact No. 1</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"cntno1\" id=\"cntno1\"\n                    placeholder=\"Contact No. 1\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.cntno1.errors }\" maxlength=\"11\">\n                  <div id=\"err_cntno1\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.cntno1.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.cntno1.errors.required\">Contact No. 1 is required</div>\n                    <div *ngIf=\"f.cntno1.errors.minlength\">Contact No. 1 min lenght is 10</div>\n                    <div *ngIf=\"f.cntno1.errors.maxlength\">Contact No. 1 max langth must be 11 only</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno2\">Contact No. 2</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"cntno2\" id=\"cntno2\"\n                    placeholder=\"Contact No. 2\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.cntno2.errors }\" maxlength=\"11\">\n                  <div id=\"err_cntno2\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.cntno2.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.cntno2.errors.minlength\">Contact No. 2 min lenght is 10</div>\n                    <div *ngIf=\"f.cntno2.errors.maxlength\">Contact No. 2 max langth must be 11 only</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nolots\">Number of Lots</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"nolots\" id=\"nolots\"\n                    placeholder=\"Number of Lots\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.nolots.errors }\" maxlength=\"2\">\n                  <div id=\"err_nolots\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.nolots.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.nolots.errors.required\">Number of Lots required</div>\n                    <div *ngIf=\"f.nolots.errors.minlength\">Number of Lots must be at least 1 minimum</div>\n                    <div *ngIf=\"f.nolots.errors.maxlength\">Number of Lots allow maximum 99 only</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nocont\">Containers per Lot</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"nocont\" id=\"nocont\"\n                    placeholder=\"Containers per Lot\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.nocont.errors }\" maxlength=\"3\">\n                  <div id=\"err_nocont\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.nocont.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.nocont.errors.required\">Containers per Lot is required</div>\n                    <div *ngIf=\"f.nocont.errors.minlength\">Containers per Lot must be at least 10 minimum</div>\n                    <div *ngIf=\"f.nocont.errors.maxlength\">Containers per Lot allow maximum 99 only</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"isgargavil\">is Garage Avaliable?</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <label class=\"switch\">\n                    <input type=\"checkbox\" formControlName=\"isgargavil\" id=\"isgargavil\">\n                    <span class=\"slider round\"></span>\n                  </label>\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <br>\n    </div>\n      <div class=\"fixed-area\">\n        <button type=\"button\" class=\"btn btn-primary\">Back</button>&nbsp; <button type=\"submit\"\n          class=\"btn btn-primary login-button\">Submit</button>\n      </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/depot-management/depot-branch-create/depot-branch-create.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/depot-management/depot-branch-create/depot-branch-create.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DepotBranchCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepotBranchCreateComponent", function() { return DepotBranchCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/validation.service */ "./src/app/services/validation.service.ts");




var DepotBranchCreateComponent = /** @class */ (function () {
    function DepotBranchCreateComponent(fb, validationService) {
        this.validationService = validationService;
        this.formCtrlKeys = [];
        this.submitted = false;
        this.depotbranchcreateform = fb.group({
            'depotname': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'rocno': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)]],
            'ownname': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'nric': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)]],
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            'addr1': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'addr2': [''],
            'postcode': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)]],
            'state': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'country': ['MY', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'cntno1': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)]],
            'cntno2': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)]],
            'nolots': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)]],
            'nocont': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)]],
            'isgargavil': ['']
        });
    }
    DepotBranchCreateComponent.prototype.ngOnInit = function () {
    };
    DepotBranchCreateComponent.prototype.onChangeValidation = function (data) {
        this.validationService.depotFormValidation(data);
    };
    Object.defineProperty(DepotBranchCreateComponent.prototype, "f", {
        get: function () { return this.depotbranchcreateform.controls; },
        enumerable: true,
        configurable: true
    });
    DepotBranchCreateComponent.prototype.onSubmit = function (depotbranchcreateform) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.depotbranchcreateform.invalid) {
            return;
        }
        this.formCtrlKeys.length = 0;
        Object.keys(depotbranchcreateform.value).forEach(function (key) {
            _this.formCtrlKeys.push(key);
        });
        console.log(this.formCtrlKeys);
    };
    DepotBranchCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-depot-branch-create',
            template: __webpack_require__(/*! ./depot-branch-create.component.html */ "./src/app/depot-management/depot-branch-create/depot-branch-create.component.html"),
            styles: [__webpack_require__(/*! ./depot-branch-create.component.css */ "./src/app/depot-management/depot-branch-create/depot-branch-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"]])
    ], DepotBranchCreateComponent);
    return DepotBranchCreateComponent;
}());



/***/ }),

/***/ "./src/app/depot-management/depot-create/depot-create.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/depot-management/depot-create/depot-create.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlcG90LW1hbmFnZW1lbnQvZGVwb3QtY3JlYXRlL2RlcG90LWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/depot-management/depot-create/depot-create.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/depot-management/depot-create/depot-create.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-position\">\n    <form class=\"form-horizontal\" [formGroup]=\"depotcreateform\" id=\"depotcreateform\" role=\"form\"\n    (ngSubmit)=\"onSubmit(depotcreateform)\">\n  <div class=\"container\">\n     \n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">Create New Depot</div>\n          <div class=\"card-body\">    \n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"depotname\">Depot Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input formControlName=\"depotname\" type=\"text\" class=\"form-control\" id=\"depotname\"\n                    placeholder=\"Depot Name\" (change)=\"onChangeValidation($event);\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.depotname.errors }\">\n                  <div id=\"err_depotname\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.depotname.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.depotname.errors.required\">Depot Name is required</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"rocno\">Depot ROC No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input formControlName=\"rocno\" type=\"text\" class=\"form-control\" id=\"rocno\" placeholder=\"Depot ROC No.\"\n                    (change)=\"onChangeValidation($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.rocno.errors }\"\n                    maxlength=\"12\">\n                  <div id=\"err_rocno\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.rocno.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.rocno.errors.required\">Depot ROC No. is required</div>\n                    <div *ngIf=\"f.rocno.errors.minlength\">Depot ROC No. min lenght is 8</div>\n                    <div *ngIf=\"f.rocno.errors.maxlength\">Depot ROC No. max langth is 12</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"ownname\">Owner Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input formControlName=\"ownname\" type=\"text\" class=\"form-control\" id=\"ownname\"\n                    placeholder=\"Owner Name\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.ownname.errors }\">\n                  <div id=\"err_ownname\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.ownname.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.ownname.errors.required\">Owner Name is required</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nric\">Owner NRIC/Passport No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input formControlName=\"nric\" type=\"text\" class=\"form-control\" id=\"nric\"\n                    placeholder=\"Owner NRIC/Passport No.\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.nric.errors }\" maxlength=\"12\">\n                  <div id=\"err_nric\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.nric.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.nric.errors.required\">Owner NRIC/Passport No. is required</div>\n                    <div *ngIf=\"f.nric.errors.minlength\">Owner NRIC/Passport No. min lenght is 8</div>\n                    <div *ngIf=\"f.nric.errors.maxlength\">Owner NRIC/Passport No. max langth is 12</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"email\">Email</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input formControlName=\"email\" type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email\"\n                    (change)=\"onChangeValidation($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n                  <div id=\"err_ownname\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                    <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"addr1\">Address Line 1</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input formControlName=\"addr1\" type=\"text\" class=\"form-control\" id=\"addr1\"\n                    placeholder=\"Address Line 1\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.addr1.errors }\">\n                  <div id=\"err_addr1\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.addr1.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.addr1.errors.required\">Address Line 1 is required</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"addr2\">Address Line 2</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input formControlName=\"addr2\" type=\"text\" class=\"form-control\" id=\"addr2\"\n                    placeholder=\"Address Line 2\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.addr2.errors }\">\n                  <div id=\"err_addr2\" class=\"error_msg\"></div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"postcode\">Post Code</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" formControlName=\"postcode\" class=\"form-control\" id=\"postcode\"\n                    placeholder=\"Post Code\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.postcode.errors }\" maxlength=\"5\">\n                  <div id=\"err_postcode\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.postcode.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.postcode.errors.required\">Post Code is required</div>\n                    <div *ngIf=\"f.postcode.errors.minlength\">Post Code must be at least 5 characters</div>\n                    <div *ngIf=\"f.postcode.errors.maxlength\">Post Code must be 5 characters</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"state\">State</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <select class=\"form-control\" formControlName=\"state\" id=\"state\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\">\n                    <option value=\"\">Please Select</option>\n                    <option value=\"st1\">State 1</option>\n                  </select>\n                  <div id=\"err_state\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.state.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.state.errors.required\">State is required</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"country\">Country</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <select class=\"form-control\" formControlName=\"country\" id=\"country\"\n                    (change)=\"onChangeValidation($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\">\n                    <option value=\"MY\" selected>MALAYSIA</option>\n                  </select>\n                  <div id=\"err_country\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.country.errors\" class=\"invalid-feedback\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\">\n                    <div *ngIf=\"f.country.errors.required\">Country is required</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno1\">Contact No. 1</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"cntno1\" id=\"cntno1\"\n                    placeholder=\"Contact No. 1\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.cntno1.errors }\" maxlength=\"11\">\n                  <div id=\"err_cntno1\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.cntno1.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.cntno1.errors.required\">Contact No. 1 is required</div>\n                    <div *ngIf=\"f.cntno1.errors.minlength\">Contact No. 1 min lenght is 10</div>\n                    <div *ngIf=\"f.cntno1.errors.maxlength\">Contact No. 1 max langth must be 11 only</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno2\">Contact No. 2</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"cntno2\" id=\"cntno2\"\n                    placeholder=\"Contact No. 2\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.cntno2.errors }\" maxlength=\"11\">\n                  <div id=\"err_cntno2\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.cntno2.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.cntno2.errors.minlength\">Contact No. 2 min lenght is 10</div>\n                    <div *ngIf=\"f.cntno2.errors.maxlength\">Contact No. 2 max langth must be 11 only</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nolots\">Number of Lots</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"nolots\" id=\"nolots\"\n                    placeholder=\"Number of Lots\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.nolots.errors }\" maxlength=\"2\">\n                  <div id=\"err_nolots\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.nolots.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.nolots.errors.required\">Number of Lots required</div>\n                    <div *ngIf=\"f.nolots.errors.minlength\">Number of Lots must be at least 1 minimum</div>\n                    <div *ngIf=\"f.nolots.errors.maxlength\">Number of Lots allow maximum 99 only</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nocont\">Containers per Lot</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"nocont\" id=\"nocont\"\n                    placeholder=\"Containers per Lot\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.nocont.errors }\" maxlength=\"3\">\n                  <div id=\"err_nocont\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.nocont.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.nocont.errors.required\">Containers per Lot is required</div>\n                    <div *ngIf=\"f.nocont.errors.minlength\">Containers per Lot must be at least 10 minimum</div>\n                    <div *ngIf=\"f.nocont.errors.maxlength\">Containers per Lot allow maximum 99 only</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"isgargavil\">is Garage Avaliable?</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <label class=\"switch\">\n                    <input type=\"checkbox\" formControlName=\"isgargavil\" id=\"isgargavil\">\n                    <span class=\"slider round\"></span>\n                  </label>\n                </div>\n              </div>\n           \n          </div>\n\n        </div>\n      </div>\n    </div>\n    <br><br>\n\n  </div>\n  <div class=\"fixed-area\">\n      <button type=\"button\" class=\"btn btn-primary\">Back</button>&nbsp; <button type=\"submit\" class=\"btn btn-primary login-button\">Submit</button>\n  </div>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/depot-management/depot-create/depot-create.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/depot-management/depot-create/depot-create.component.ts ***!
  \*************************************************************************/
/*! exports provided: DepotCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepotCreateComponent", function() { return DepotCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/validation.service */ "./src/app/services/validation.service.ts");




var DepotCreateComponent = /** @class */ (function () {
    function DepotCreateComponent(fb, validationService) {
        this.validationService = validationService;
        this.formCtrlKeys = [];
        this.submitted = false;
        this.depotcreateform = fb.group({
            'depotname': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'rocno': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)]],
            'ownname': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'nric': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)]],
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            'addr1': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'addr2': [''],
            'postcode': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)]],
            'state': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'country': ['MY', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'cntno1': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)]],
            'cntno2': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)]],
            'nolots': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)]],
            'nocont': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)]],
            'isgargavil': ['']
        });
    }
    DepotCreateComponent.prototype.ngOnInit = function () {
    };
    DepotCreateComponent.prototype.onChangeValidation = function (data) {
        this.validationService.depotFormValidation(data);
    };
    Object.defineProperty(DepotCreateComponent.prototype, "f", {
        get: function () { return this.depotcreateform.controls; },
        enumerable: true,
        configurable: true
    });
    DepotCreateComponent.prototype.onSubmit = function (depotcreateform) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.depotcreateform.invalid) {
            return;
        }
        this.formCtrlKeys.length = 0;
        Object.keys(depotcreateform.value).forEach(function (key) {
            _this.formCtrlKeys.push(key);
        });
        console.log(this.formCtrlKeys);
    };
    DepotCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-depot-create',
            template: __webpack_require__(/*! ./depot-create.component.html */ "./src/app/depot-management/depot-create/depot-create.component.html"),
            styles: [__webpack_require__(/*! ./depot-create.component.css */ "./src/app/depot-management/depot-create/depot-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"]])
    ], DepotCreateComponent);
    return DepotCreateComponent;
}());



/***/ }),

/***/ "./src/app/depot-management/depot-search/depot-search.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/depot-management/depot-search/depot-search.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fm-border{\r\n    border-width: 3px;\r\n    border-style: solid;\r\n    padding: 5px;  \r\n    border-color: darkgray;\r\n}\r\n\r\ndiv.dataTables div.dataTables_length select {\r\n    width: 60px;\r\n    display: inline-block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVwb3QtbWFuYWdlbWVudC9kZXBvdC1zZWFyY2gvZGVwb3Qtc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvZGVwb3QtbWFuYWdlbWVudC9kZXBvdC1zZWFyY2gvZGVwb3Qtc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm0tYm9yZGVye1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgcGFkZGluZzogNXB4OyAgXHJcbiAgICBib3JkZXItY29sb3I6IGRhcmtncmF5O1xyXG59XHJcblxyXG5kaXYuZGF0YVRhYmxlcyBkaXYuZGF0YVRhYmxlc19sZW5ndGggc2VsZWN0IHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/depot-management/depot-search/depot-search.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/depot-management/depot-search/depot-search.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-position\">\n    <form class=\"form-horizontal\" [formGroup]=\"depotsearchform\" id=\"depotsearchform\" role=\"form\"\n        (ngSubmit)=\"onSubmit(depotsearchform)\">\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-12\" style=\"text-align: right;\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"addDepot()\">Add Depot</button>\n            </div>\n        </div>\n        <div class=\"fm-border\">\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                    <label for=\"depotname\">Depot Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <input type=\"text\" formControlName=\"depotname\" class=\"form-control\" id=\"depotname\"\n                        placeholder=\"Depot Name\" (change)=\"onChangeValidation($event);\">\n                    <div id=\"err_depotname\" class=\"error_msg\"></div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                    <label for=\"rocno\">Depot ROC No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <input type=\"text\" formControlName=\"rocno\" class=\"form-control\" id=\"rocno\"\n                        placeholder=\"Depot ROC No.\" (change)=\"onChangeValidation($event);\">\n                    <div id=\"err_rocno\" class=\"error_msg\"></div>\n                </div>\n\n            </div>\n\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                    <label for=\"ownname\">Owner Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <input type=\"text\" formControlName=\"ownname\" class=\"form-control\" id=\"ownname\"\n                        placeholder=\"Owner Name\" (change)=\"onChangeValidation($event);\">\n                    <div id=\"err_ownname\" class=\"error_msg\"></div>\n\n                </div>\n                <div class=\"form-group col-md-2\">\n                    <label for=\"nric\">Owner NRIC/Passport No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n\n                    <input type=\"text\" formControlName=\"nric\" class=\"form-control\" id=\"nric\"\n                        placeholder=\"Owner NRIC/Passport No.\" (change)=\"onChangeValidation($event);\">\n                    <div id=\"err_nric\" class=\"error_msg\"></div>\n                </div>\n\n            </div>\n\n\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                    <label for=\"email\">Email</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n\n                    <input type=\"text\" formControlName=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\"\n                        (change)=\"onChangeValidation($event);\">\n                    <div id=\"err_email\" class=\"error_msg\"></div>\n\n                </div>\n                <div class=\"form-group col-md-2\">\n                    <label for=\"cntno1\">Contact No. 1</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <input type=\"text\" formControlName=\"cntno1\" class=\"form-control\" id=\"cntno1\"\n                        placeholder=\"Contact No. 1\" (change)=\"onChangeValidation($event);\">\n                    <div id=\"err_cntno1\" class=\"error_msg\"></div>\n                </div>\n\n            </div>\n\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                    <label for=\"postcode\">Post Code</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <input type=\"text\" formControlName=\"postcode\" class=\"form-control\" id=\"postcode\"\n                        placeholder=\"Depot Post Code\" (change)=\"onChangeValidation($event);\">\n                    <div id=\"err_postcode\" class=\"error_msg\"></div>\n\n                </div>\n                <div class=\"form-group col-md-2\">\n                    <label for=\"state\">State</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <select class=\"form-control\" id=\"state\" formControlName=\"state\">\n                        <option value=\"\">Please Select</option>\n                        <option value=\"volvo\">State 1</option>\n                    </select>\n                    <div id=\"err_state\" class=\"error_msg\"></div>\n\n                </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Search</button>\n        </div>\n\n        <br>\n        <table id=\"example\" class=\"table table-striped table-bordered\" style=\"width:100%\">\n            <thead>\n                <tr>\n                    <th>Depot Name</th>\n                    <th>ROC No.</th>\n                    <th>Address 1</th>\n                    <th>Address 2</th>\n                    <th>State</th>\n                    <th>Pincode</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td><a [routerLink]=\"['/depotview']\" class=\"nav-link\">ABC DEPOT</a></td>\n                    <td>R-123456</td>\n                    <td>Addr Line 1</td>\n                    <td>Addr Line 2</td>\n                    <td>SELANGOR</td>\n                    <td>47000</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/depotview']\" class=\"nav-link\">ABC DEPOT</a></td>\n                    <td>R-123456</td>\n                    <td>Addr Line 1</td>\n                    <td>Addr Line 2</td>\n                    <td>SELANGOR</td>\n                    <td>47000</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/depotview']\" class=\"nav-link\">ABC DEPOT</a></td>\n                    <td>R-123456</td>\n                    <td>Addr Line 1</td>\n                    <td>Addr Line 2</td>\n                    <td>SELANGOR</td>\n                    <td>47000</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/depotview']\" class=\"nav-link\">ABC DEPOT</a></td>\n                    <td>R-123456</td>\n                    <td>Addr Line 1</td>\n                    <td>Addr Line 2</td>\n                    <td>SELANGOR</td>\n                    <td>47000</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/depotview']\" class=\"nav-link\">ABC DEPOT</a></td>\n                    <td>R-123456</td>\n                    <td>Addr Line 1</td>\n                    <td>Addr Line 2</td>\n                    <td>SELANGOR</td>\n                    <td>47000</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/depotview']\" class=\"nav-link\">ABC DEPOT</a></td>\n                    <td>R-123456</td>\n                    <td>Addr Line 1</td>\n                    <td>Addr Line 2</td>\n                    <td>SELANGOR</td>\n                    <td>47000</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/depotview']\" class=\"nav-link\">ABC DEPOT</a></td>\n                    <td>R-123456</td>\n                    <td>Addr Line 1</td>\n                    <td>Addr Line 2</td>\n                    <td>SELANGOR</td>\n                    <td>47000</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/depotview']\" class=\"nav-link\">ABC DEPOT</a></td>\n                    <td>R-123456</td>\n                    <td>Addr Line 1</td>\n                    <td>Addr Line 2</td>\n                    <td>SELANGOR</td>\n                    <td>47000</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/depotview']\" class=\"nav-link\">ABC DEPOT</a></td>\n                    <td>R-123456</td>\n                    <td>Addr Line 1</td>\n                    <td>Addr Line 2</td>\n                    <td>SELANGOR</td>\n                    <td>47000</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/depotview']\" class=\"nav-link\">ABC DEPOT</a></td>\n                    <td>R-123456</td>\n                    <td>Addr Line 1</td>\n                    <td>Addr Line 2</td>\n                    <td>SELANGOR</td>\n                    <td>47000</td>\n                </tr>\n\n            </tbody>\n\n        </table>\n\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/depot-management/depot-search/depot-search.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/depot-management/depot-search/depot-search.component.ts ***!
  \*************************************************************************/
/*! exports provided: DepotSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepotSearchComponent", function() { return DepotSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/validation.service */ "./src/app/services/validation.service.ts");





var DepotSearchComponent = /** @class */ (function () {
    function DepotSearchComponent(router, fb, validationService) {
        this.router = router;
        this.validationService = validationService;
        this.depotsearchform = fb.group({
            'depotname': [''],
            'rocno': [''],
            'ownname': [''],
            'nric': [''],
            'email': [''],
            'cntno1': [''],
            'postcode': [''],
            'state': ['']
        });
    }
    DepotSearchComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('#example').DataTable();
        });
    };
    DepotSearchComponent.prototype.onChangeValidation = function (data) {
        this.validationService.depotFormValidation(data);
    };
    DepotSearchComponent.prototype.addDepot = function () {
        this.router.navigateByUrl('/depotcreate');
    };
    DepotSearchComponent.prototype.onSubmit = function (depotsearchform) {
    };
    DepotSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-depot-search',
            template: __webpack_require__(/*! ./depot-search.component.html */ "./src/app/depot-management/depot-search/depot-search.component.html"),
            styles: [__webpack_require__(/*! ./depot-search.component.css */ "./src/app/depot-management/depot-search/depot-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"]])
    ], DepotSearchComponent);
    return DepotSearchComponent;
}());



/***/ }),

/***/ "./src/app/depot-management/depot-update/depot-update.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/depot-management/depot-update/depot-update.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlcG90LW1hbmFnZW1lbnQvZGVwb3QtdXBkYXRlL2RlcG90LXVwZGF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/depot-management/depot-update/depot-update.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/depot-management/depot-update/depot-update.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-position\">\n  <form class=\"form-horizontal\" [formGroup]=\"depotupdateform\" id=\"depotupdateform\" role=\"form\"\n    (ngSubmit)=\"onSubmit(depotupdateform)\">\n    <div class=\"container\">\n\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            <div class=\"card-header\">Update Depot Information</div>\n            <div class=\"card-body\">\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"depotname\">Depot Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input formControlName=\"depotname\" type=\"text\" class=\"form-control\" id=\"depotname\"\n                    placeholder=\"Depot Name\" (change)=\"onChangeValidation($event);\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.depotname.errors }\">\n                  <div id=\"err_depotname\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.depotname.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.depotname.errors.required\">Depot Name is required</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"rocno\">Depot ROC No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input formControlName=\"rocno\" type=\"text\" class=\"form-control\" id=\"rocno\" placeholder=\"Depot ROC No.\"\n                    (change)=\"onChangeValidation($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.rocno.errors }\"\n                    maxlength=\"12\">\n                  <div id=\"err_rocno\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.rocno.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.rocno.errors.required\">Depot ROC No. is required</div>\n                    <div *ngIf=\"f.rocno.errors.minlength\">Depot ROC No. min lenght is 8</div>\n                    <div *ngIf=\"f.rocno.errors.maxlength\">Depot ROC No. max langth is 12</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"ownname\">Owner Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input formControlName=\"ownname\" type=\"text\" class=\"form-control\" id=\"ownname\"\n                    placeholder=\"Owner Name\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.ownname.errors }\">\n                  <div id=\"err_ownname\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.ownname.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.ownname.errors.required\">Owner Name is required</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nric\">Owner NRIC/Passport No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input formControlName=\"nric\" type=\"text\" class=\"form-control\" id=\"nric\"\n                    placeholder=\"Owner NRIC/Passport No.\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.nric.errors }\" maxlength=\"12\">\n                  <div id=\"err_nric\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.nric.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.nric.errors.required\">Owner NRIC/Passport No. is required</div>\n                    <div *ngIf=\"f.nric.errors.minlength\">Owner NRIC/Passport No. min lenght is 8</div>\n                    <div *ngIf=\"f.nric.errors.maxlength\">Owner NRIC/Passport No. max langth is 12</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"email\">Email</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input formControlName=\"email\" type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email\"\n                    (change)=\"onChangeValidation($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n                  <div id=\"err_ownname\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.email.errors.required\">Email is required</div>\n                    <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"addr1\">Address Line 1</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input formControlName=\"addr1\" type=\"text\" class=\"form-control\" id=\"addr1\"\n                    placeholder=\"Address Line 1\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.addr1.errors }\">\n                  <div id=\"err_addr1\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.addr1.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.addr1.errors.required\">Address Line 1 is required</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"addr2\">Address Line 2</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input formControlName=\"addr2\" type=\"text\" class=\"form-control\" id=\"addr2\"\n                    placeholder=\"Address Line 2\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.addr2.errors }\">\n                  <div id=\"err_addr2\" class=\"error_msg\"></div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"postcode\">Post Code</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" formControlName=\"postcode\" class=\"form-control\" id=\"postcode\"\n                    placeholder=\"Post Code\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.postcode.errors }\" maxlength=\"5\">\n                  <div id=\"err_postcode\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.postcode.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.postcode.errors.required\">Post Code is required</div>\n                    <div *ngIf=\"f.postcode.errors.minlength\">Post Code must be at least 5 characters</div>\n                    <div *ngIf=\"f.postcode.errors.maxlength\">Post Code must be 5 characters</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"state\">State</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <select class=\"form-control\" formControlName=\"state\" id=\"state\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\">\n                    <option value=\"\">Please Select</option>\n                    <option value=\"st1\">State 1</option>\n                  </select>\n                  <div id=\"err_state\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.state.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.state.errors.required\">State is required</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"country\">Country</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <select class=\"form-control\" formControlName=\"country\" id=\"country\"\n                    (change)=\"onChangeValidation($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\">\n                    <option value=\"MY\" selected>MALAYSIA</option>\n                  </select>\n                  <div id=\"err_country\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.country.errors\" class=\"invalid-feedback\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.country.errors }\">\n                    <div *ngIf=\"f.country.errors.required\">Country is required</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno1\">Contact No. 1</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"cntno1\" id=\"cntno1\"\n                    placeholder=\"Contact No. 1\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.cntno1.errors }\" maxlength=\"11\">\n                  <div id=\"err_cntno1\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.cntno1.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.cntno1.errors.required\">Contact No. 1 is required</div>\n                    <div *ngIf=\"f.cntno1.errors.minlength\">Contact No. 1 min lenght is 10</div>\n                    <div *ngIf=\"f.cntno1.errors.maxlength\">Contact No. 1 max langth must be 11 only</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno2\">Contact No. 2</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"cntno2\" id=\"cntno2\"\n                    placeholder=\"Contact No. 2\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.cntno2.errors }\" maxlength=\"11\">\n                  <div id=\"err_cntno2\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.cntno2.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.cntno2.errors.minlength\">Contact No. 2 min lenght is 10</div>\n                    <div *ngIf=\"f.cntno2.errors.maxlength\">Contact No. 2 max langth must be 11 only</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nolots\">Number of Lots</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"nolots\" id=\"nolots\"\n                    placeholder=\"Number of Lots\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.nolots.errors }\" maxlength=\"2\">\n                  <div id=\"err_nolots\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.nolots.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.nolots.errors.required\">Number of Lots required</div>\n                    <div *ngIf=\"f.nolots.errors.minlength\">Number of Lots must be at least 1 minimum</div>\n                    <div *ngIf=\"f.nolots.errors.maxlength\">Number of Lots allow maximum 99 only</div>\n                  </div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nocont\">Containers per Lot</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"nocont\" id=\"nocont\"\n                    placeholder=\"Containers per Lot\" (change)=\"onChangeValidation($event)\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.nocont.errors }\" maxlength=\"3\">\n                  <div id=\"err_nocont\" class=\"error_msg\"></div>\n                  <div *ngIf=\"submitted && f.nocont.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.nocont.errors.required\">Containers per Lot is required</div>\n                    <div *ngIf=\"f.nocont.errors.minlength\">Containers per Lot must be at least 10 minimum</div>\n                    <div *ngIf=\"f.nocont.errors.maxlength\">Containers per Lot allow maximum 99 only</div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"isgargavil\">is Garage Avaliable?</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <label class=\"switch\">\n                    <input type=\"checkbox\" formControlName=\"isgargavil\" id=\"isgargavil\">\n                    <span class=\"slider round\"></span>\n                  </label>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <br><br>\n    </div>\n    <div class=\"fixed-area\">\n      <button type=\"button\" class=\"btn btn-primary\">Back</button>&nbsp; <button type=\"submit\"\n        class=\"btn btn-primary login-button\">Submit</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/depot-management/depot-update/depot-update.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/depot-management/depot-update/depot-update.component.ts ***!
  \*************************************************************************/
/*! exports provided: DepotUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepotUpdateComponent", function() { return DepotUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/validation.service */ "./src/app/services/validation.service.ts");




var DepotUpdateComponent = /** @class */ (function () {
    function DepotUpdateComponent(fb, validationService) {
        this.validationService = validationService;
        this.formCtrlKeys = [];
        this.submitted = false;
        this.depotupdateform = fb.group({
            'depotname': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'rocno': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)]],
            'ownname': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'nric': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)]],
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            'addr1': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'addr2': [''],
            'postcode': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)]],
            'state': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'country': ['MY', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'cntno1': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)]],
            'cntno2': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)]],
            'nolots': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)]],
            'nocont': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3)]],
            'isgargavil': ['']
        });
    }
    DepotUpdateComponent.prototype.ngOnInit = function () {
    };
    DepotUpdateComponent.prototype.onChangeValidation = function (data) {
        this.validationService.depotFormValidation(data);
    };
    Object.defineProperty(DepotUpdateComponent.prototype, "f", {
        get: function () { return this.depotupdateform.controls; },
        enumerable: true,
        configurable: true
    });
    DepotUpdateComponent.prototype.onSubmit = function (depotupdateform) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.depotupdateform.invalid) {
            return;
        }
        this.formCtrlKeys.length = 0;
        Object.keys(depotupdateform.value).forEach(function (key) {
            _this.formCtrlKeys.push(key);
        });
        console.log(this.formCtrlKeys);
    };
    DepotUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-depot-update',
            template: __webpack_require__(/*! ./depot-update.component.html */ "./src/app/depot-management/depot-update/depot-update.component.html"),
            styles: [__webpack_require__(/*! ./depot-update.component.css */ "./src/app/depot-management/depot-update/depot-update.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"]])
    ], DepotUpdateComponent);
    return DepotUpdateComponent;
}());



/***/ }),

/***/ "./src/app/depot-management/depot-view/depot-view.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/depot-management/depot-view/depot-view.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlcG90LW1hbmFnZW1lbnQvZGVwb3Qtdmlldy9kZXBvdC12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/depot-management/depot-view/depot-view.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/depot-management/depot-view/depot-view.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-position\">\n  <div class=\"container\">\n    <form class=\"form-horizontal\" method=\"post\" action=\"#\">\n      <div class=\"row justify-content-center\" >\n        <div class=\"form-group col-md-12\" style=\"text-align: right;\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"editDepot()\">Edit Depot</button> &nbsp;<button\n            type=\"button\" class=\"btn btn-primary\" (click)=\"addDepotBranch()\">Add Branch</button>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            <div class=\"card-header\">Depot Information</div>\n            <div class=\"card-body\">\n\n\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"depotname\">Depot Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>ABC DEPOT SDNBHD</div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"rocno\">Depot ROC No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>R-123456</div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"ownname\">Owner Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>GANESH KUAMR P</div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nric\">Owner NRIC/Passport No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>K8414140</div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"email\">Email</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>ggk@gmail.com</div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"addr1\">Address Line 1</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>B 17 10, BLOCK B, SERIN RESIDENCY, JLN 1</div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"addr2\">Address Line 2</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>CYBERJAYA</div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"postcode\">Post Code</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>63000</div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"state\">State</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>SELANGOR</div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno1\">Contact No. 1</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>0173812312</div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno2\">Contact No. 2</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div></div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nolots\">Number of Lots</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>6</div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nocont\">Containers per Lot</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>50</div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nolots\">is Garage Avaliable?</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>Yes</div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nolots\">Create Date</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>12-12-219</div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nocont\">Update Date</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>12-12-219</div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nolots\">Create User</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>gpakal</div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nocont\">Update User</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>gpakal</div>\n                </div>\n              </div>\n\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <br>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/depot-management/depot-view/depot-view.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/depot-management/depot-view/depot-view.component.ts ***!
  \*********************************************************************/
/*! exports provided: DepotViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepotViewComponent", function() { return DepotViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DepotViewComponent = /** @class */ (function () {
    function DepotViewComponent(router) {
        this.router = router;
    }
    DepotViewComponent.prototype.ngOnInit = function () {
    };
    DepotViewComponent.prototype.editDepot = function () {
        this.router.navigateByUrl('/depotedit');
    };
    DepotViewComponent.prototype.addDepotBranch = function () {
        this.router.navigateByUrl('/depotbranchcreate');
    };
    DepotViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-depot-view',
            template: __webpack_require__(/*! ./depot-view.component.html */ "./src/app/depot-management/depot-view/depot-view.component.html"),
            styles: [__webpack_require__(/*! ./depot-view.component.css */ "./src/app/depot-management/depot-view/depot-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DepotViewComponent);
    return DepotViewComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pageFooter{\r\n    padding-top: 0px;\r\n    position: absolute;\r\n    bottom: 9px;\r\n    height: 30px;\r\n    text-align: center;\r\n    font-size: 9px;\r\n    color: white;\r\n    width: 100%;\r\n    clear: both;\r\n    margin: 0;\r\n    padding: 0px; \r\n    border: none;\r\n    line-height: 30px;\r\n    background-color: #1976D6;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYWdlRm9vdGVye1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogOXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMHB4OyBcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZENjtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pageFooter\">\n    &copy; DMS\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pageHeader {\r\n    top: 0px;\r\n    background-color: #1976D6;\r\n    width: 100%;\r\n    clear: both;\r\n    height: 75px;\r\n    z-index: 1030;\r\n    position: fixed;\r\n  }\r\n\r\n  #pageLogo {\r\n    float: left;\r\n    clear: left;\r\n    width: 77px;\r\n    height: 77px;\r\n  }\r\n\r\n  #logo {\r\n    width: 77px;\r\n    height: 77px;\r\n  }\r\n\r\n  .headerImage {\r\n    float: right;\r\n    margin: 0;\r\n    padding: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 8px;\r\n    z-index: 100;\r\n    width: 65px;\r\n    height: 65px;\r\n  }\r\n\r\n  #pageTitle {\r\n     float: left;\r\n     margin: 0;\r\n     padding-top: 23px;\r\n     vertical-align: baseline;\r\n     position: relative;\r\n  }\r\n\r\n  #pageTitle h1 {\r\n     color: white;\r\n     font-size: 20pt;\r\n     font-weight: bold;\r\n     text-align: left;\r\n     vertical-align: baseline;\r\n     line-height: 20px;\r\n     margin: 0;\r\n     padding: 3px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtLQUNHLFdBQVc7S0FDWCxTQUFTO0tBQ1QsaUJBQWlCO0tBQ2pCLHdCQUF3QjtLQUN4QixrQkFBa0I7RUFDckI7O0VBRUE7S0FDRyxZQUFZO0tBQ1osZUFBZTtLQUNmLGlCQUFpQjtLQUNqQixnQkFBZ0I7S0FDaEIsd0JBQXdCO0tBQ3hCLGlCQUFpQjtLQUNqQixTQUFTO0tBQ1QsWUFBWTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ2VIZWFkZXIge1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NkQ2O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIHotaW5kZXg6IDEwMzA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgfVxyXG5cclxuICAjcGFnZUxvZ28ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjbGVhcjogbGVmdDtcclxuICAgIHdpZHRoOiA3N3B4O1xyXG4gICAgaGVpZ2h0OiA3N3B4O1xyXG4gIH1cclxuXHJcbiAgI2xvZ28ge1xyXG4gICAgd2lkdGg6IDc3cHg7XHJcbiAgICBoZWlnaHQ6IDc3cHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVySW1hZ2Uge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB3aWR0aDogNjVweDtcclxuICAgIGhlaWdodDogNjVweDtcclxuICB9XHJcbiAgXHJcbiAgI3BhZ2VUaXRsZSB7XHJcbiAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgbWFyZ2luOiAwO1xyXG4gICAgIHBhZGRpbmctdG9wOiAyM3B4O1xyXG4gICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gICNwYWdlVGl0bGUgaDEge1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICBmb250LXNpemU6IDIwcHQ7XHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgbWFyZ2luOiAwO1xyXG4gICAgIHBhZGRpbmc6IDNweDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pageHeader\">\n  <div id=\"pageLogo\">\n    <img id=\"logo\" src=\"./assets/img/logo.png\" />\n  </div>\n  <div id=\"pageTitle\">\n    <h1>DMS</h1>\n  </div>\n</div>\n<div id=\"headerMenu\">\n\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n@import url('https://fonts.googleapis.com/css?family=Numans');\n/* Made with love by Mutiullah Samim*/\n.container{\r\nheight: 100%;\r\nalign-content: center;\r\nposition:static;\r\n}\n.card{\r\nheight: 300px;\r\nmargin-top: auto;\r\nmargin-bottom: auto;\r\nwidth: 400px;\r\nbackground-color: rgba(189, 195, 199) !important;\r\n}\n.card-header h3{\r\ncolor: white;\r\n}\n.social_icon{\r\nposition: absolute;\r\nright: 20px;\r\ntop: -45px;\r\n}\n.input-group-prepend span{\r\nwidth: 50px;\r\nbackground-color: #1976D6;\r\ncolor: white;\r\nborder:0 !important;\r\n}\ninput:focus{\r\noutline: 0 0 0 0  !important;\r\nbox-shadow: 0 0 0 0 !important;\r\n\r\n}\n.login_btn{\r\ncolor: white;\r\nbackground-color: #1976D6;\r\nwidth: 100px;\r\n}\n.login_btn:hover{\r\n    color: white;\r\n    background-color: #1976D6;\r\n}\n.links{\r\ncolor: white;\r\n}\n.links a{\r\nmargin-left: 4px;\r\n}\n.login-img {\r\n    position: absolute;\r\n    left:0px;\r\n    width: 100%;\r\n    height: 520px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDZEQUE2RDtBQUY3RCxxQ0FBcUM7QUFHckM7QUFDQSxZQUFZO0FBQ1oscUJBQXFCO0FBQ3JCLGVBQWU7QUFDZjtBQUVBO0FBQ0EsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsWUFBWTtBQUNaLGdEQUFnRDtBQUNoRDtBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsV0FBVztBQUNYLFVBQVU7QUFDVjtBQUVBO0FBQ0EsV0FBVztBQUNYLHlCQUF5QjtBQUN6QixZQUFZO0FBQ1osbUJBQW1CO0FBQ25CO0FBRUE7QUFDQSw0QkFBNEI7QUFDNUIsOEJBQThCOztBQUU5QjtBQUVBO0FBQ0EsWUFBWTtBQUNaLHlCQUF5QjtBQUN6QixZQUFZO0FBQ1o7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWFkZSB3aXRoIGxvdmUgYnkgTXV0aXVsbGFoIFNhbWltKi9cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVtYW5zJyk7XHJcbi5jb250YWluZXJ7XHJcbmhlaWdodDogMTAwJTtcclxuYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5wb3NpdGlvbjpzdGF0aWM7XHJcbn1cclxuXHJcbi5jYXJke1xyXG5oZWlnaHQ6IDMwMHB4O1xyXG5tYXJnaW4tdG9wOiBhdXRvO1xyXG5tYXJnaW4tYm90dG9tOiBhdXRvO1xyXG53aWR0aDogNDAwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg5LCAxOTUsIDE5OSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIGgze1xyXG5jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zb2NpYWxfaWNvbntcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5yaWdodDogMjBweDtcclxudG9wOiAtNDVweDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLXByZXBlbmQgc3Bhbntcclxud2lkdGg6IDUwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6ICMxOTc2RDY7XHJcbmNvbG9yOiB3aGl0ZTtcclxuYm9yZGVyOjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXN7XHJcbm91dGxpbmU6IDAgMCAwIDAgICFpbXBvcnRhbnQ7XHJcbmJveC1zaGFkb3c6IDAgMCAwIDAgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5sb2dpbl9idG57XHJcbmNvbG9yOiB3aGl0ZTtcclxuYmFja2dyb3VuZC1jb2xvcjogIzE5NzZENjtcclxud2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4ubG9naW5fYnRuOmhvdmVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZENjtcclxufVxyXG5cclxuLmxpbmtze1xyXG5jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5saW5rcyBhe1xyXG5tYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcblxyXG4ubG9naW4taW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUyMHB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-position\"> \n\t\t<!-- <div><img class=\"login-img\" src=\"./assets/img/home_bg.jpg\" /></div>   -->\n<div class=\"container\">\n\t<br/><br/><br/>\n\t<div class=\"d-flex justify-content-center h-100\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h3>Sign In</h3>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t<form [formGroup] =\"loginform\" id=\"loginform\" role=\"form\" (ngSubmit)=\"onLogin(loginform)\">\n\t\t\t\t\t<div class=\"input-group form-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input formControlName=\"username\"  id=\"username\" type=\"text\" class=\"form-control\" placeholder=\"username\">\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-group form-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input formControlName=\"password\"  id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"password\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n            <button type=\"submit\" class=\"btn float-right login_btn\" [disabled]=\"!loginform.valid\" >Login</button>\n          </div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class=\"card-footer\">\n\t\t\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t\t\t<a href=\"#\">Forgot your password?</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_session_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/session.services */ "./src/app/services/session.services.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, fb, authService, sessionService) {
        this.router = router;
        this.authService = authService;
        this.sessionService = sessionService;
        this.loginform = fb.group({
            "username": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (loginForm) {
        this.authService.setLoggedIn(true);
        this.sessionService.setToken('login-token', Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])());
        console.log(this.sessionService.getToken('login-token'));
        this.sessionService.removeToken('login-token');
        console.log(this.sessionService.getToken('login-token'));
        this.router.navigateByUrl('/usercreate');
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_session_services__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headerMenu {\r\n    top: 75px;\r\n    background-color: #EAEDED;\r\n    width: 100%;\r\n    clear: both;\r\n    height: 35px;\r\n    z-index: 1030;\r\n    position: fixed;\r\n  }\r\n\r\n.navbar {\r\n    height: 35px;\r\n    font-weight: 700;\r\n}\r\n\r\n.bg-light {\r\n    background-color: #EAEDED;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0VBQ2pCOztBQUVGO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlck1lbnUge1xyXG4gICAgdG9wOiA3NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VBRURFRDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB6LWluZGV4OiAxMDMwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gIH1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmJnLWxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQUVERUQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"headerMenu\">\n    \n        <nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                    <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                <div id=\"navbarCollapse\" class=\"collapse navbar-collapse\">\n                    <ul class=\"nav navbar-nav\">\n                        <li id=\"cntmng\" class=\"nav-item\" >\n                            <a id=\"acntmng\" (click)=\"onMenuSelect('cntmng')\" [routerLink]=\"['/containesearch']\" class=\"nav-link\">Container Management</a>\n                        </li>\n                        <li id=\"usrmng\" class=\"nav-item\">\n                            <a id=\"ausrmng\" (click)=\"onMenuSelect('usrmng')\" [routerLink]=\"['/usersearch']\" class=\"nav-link\">User Management</a>\n                        </li>\n                        <li id=\"dpomng\" class=\"nav-item\">\n                            <a id=\"adpomng\" (click)=\"onMenuSelect('dpomng')\" [routerLink]=\"['/depotsearch']\" class=\"nav-link\">Depot Management</a>\n                        </li>\n                        <li id=\"cstmng\" class=\"nav-item\">\n                                <a id=\"acstmng\" (click)=\"onMenuSelect('cstmng')\" [routerLink]=\"['/customersearch']\" class=\"nav-link\">Customer Management</a>\n                            </li>\n                    </ul>\n                    <ul class=\"nav navbar-nav ml-auto\">\n                        <li class=\"nav-item\" style=\"padding: 7px\">\n                          Ganesh Kumar Pakalapati\n                        </li>\n                       <li class=\"nav-item dropdown\">\n                            <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fas fa-user\"></i></a>\n                            <div class=\"dropdown-menu dropdown-menu-right\">\n                                <a (click)=\"resetpassword()\" [routerLink]=\"['/resetpassword']\" class=\"dropdown-item\">Reset Password</a>\n                                <div class=\"dropdown-divider\"></div>\n                                <a (click)=\"logout()\" [routerLink]=\"['/']\" class=\"dropdown-item\">Logout</a>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n</div> \n\n\n\n\n\n    <!--\n\n        <nav class=\"navbar navbar-expand-md navbar-light bg-light\">\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div id=\"navbarCollapse\" class=\"collapse navbar-collapse\">\n                <ul class=\"nav navbar-nav\">\n                    <li id=\"cntmng\" class=\"nav-item\" >\n                        <a id=\"acntmng\" (click)=\"onMenuSelect('cntmng')\" [routerLink]=\"['/containerreg']\" class=\"nav-link\">Container Management</a>\n                    </li>\n                    <li id=\"usrmng\" class=\"nav-item\">\n                        <a id=\"ausrmng\" (click)=\"onMenuSelect('usrmng')\" [routerLink]=\"['/usersearch']\" class=\"nav-link\">User Management</a>\n                    </li>\n                    <li id=\"dpomng\" class=\"nav-item\">\n                        <a id=\"adpomng\" (click)=\"onMenuSelect('dpomng')\" [routerLink]=\"['/depotsearch']\" class=\"nav-link\">Depot Management</a>\n                    </li>\n                    <li id=\"cstmng\" class=\"nav-item\">\n                            <a id=\"acstmng\" (click)=\"onMenuSelect('cstmng')\" [routerLink]=\"['/customersearch']\" class=\"nav-link\">Customer Management</a>\n                        </li>\n                </ul>\n                <ul class=\"nav navbar-nav ml-auto\">\n                    <li class=\"nav-item\" style=\"padding: 7px\">\n                      Ganesh Kumar Pakalapati\n                    </li>\n                   <li class=\"nav-item dropdown\">\n                        <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fas fa-user\"></i></a>\n                        <div class=\"dropdown-menu dropdown-menu-right\">\n                            <a [routerLink]=\"['/resetpassword']\" class=\"dropdown-item\">Reset Password</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a (click)=\"logout()\" [routerLink]=\"['/']\" class=\"dropdown-item\">Logout</a>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n\n    -->"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_session_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/session.services */ "./src/app/services/session.services.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MenuComponent = /** @class */ (function () {
    function MenuComponent(router, authService, sessionService) {
        this.router = router;
        this.authService = authService;
        this.sessionService = sessionService;
        this.loggedIn = false;
        this.menuLst = ['cntmng', 'usrmng', 'dpomng', 'cstmng'];
    }
    MenuComponent.prototype.ngOnInit = function () {
        document.getElementById('cntmng').className = 'nav-highlight nav-item';
        document.getElementById('acntmng').style.color = "white";
    };
    MenuComponent.prototype.logout = function () {
        this.authService.setLoggedIn(false);
        this.sessionService.clearToken();
        console.log("logout");
    };
    MenuComponent.prototype.resetpassword = function () {
        for (var _i = 0, _a = this.menuLst; _i < _a.length; _i++) {
            var value = _a[_i];
            document.getElementById(value).className = 'nav-item';
            document.getElementById('a' + value).style.color = "rgba(0,0,0,.5)";
        }
    };
    MenuComponent.prototype.onMenuSelect = function (id) {
        for (var _i = 0, _a = this.menuLst; _i < _a.length; _i++) {
            var value = _a[_i];
            console.log(value);
            console.log(id);
            if (value === id) {
                document.getElementById(id).className = 'nav-highlight nav-item';
                document.getElementById('a' + id).style.color = "white";
            }
            else {
                document.getElementById(value).className = 'nav-item';
                document.getElementById('a' + value).style.color = "rgba(0,0,0,.5)";
            }
        }
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_session_services__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthService = /** @class */ (function () {
    function AuthService() {
        this.isLoggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AuthService.prototype.setLoggedIn = function (val) {
        this.isLoggedIn.emit(val);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/session.services.ts":
/*!**********************************************!*\
  !*** ./src/app/services/session.services.ts ***!
  \**********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var SessionService = /** @class */ (function () {
    function SessionService(platformId) {
        this.platformId = platformId;
    }
    SessionService.prototype.setToken = function (key, value) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            window.localStorage.setItem(key, value);
        }
    };
    SessionService.prototype.getToken = function (key) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            return window.localStorage.getItem(key);
        }
    };
    SessionService.prototype.removeToken = function (key) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            window.localStorage.removeItem(key);
        }
    };
    SessionService.prototype.clearToken = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            window.localStorage.clear();
        }
    };
    SessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/services/validation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/validation.service.ts ***!
  \************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.depotFormValidation = function (data) {
        var fldName = data.target.id;
        var fldVal = data.target.value;
        console.log(fldName + "==>" + fldVal);
        document.getElementById(fldName).style.borderColor = '#ced4da';
        document.getElementById('err_' + fldName).innerHTML = '';
        if ((fldName === 'depotname' || fldName === 'ownname' || fldName === 'addr1' || fldName === 'addr2') && fldVal.length != 0) {
            var temp_str = "";
            var str_code = "";
            for (var j = 0; j < fldVal.length; j++) {
                temp_str = fldVal.charAt(j);
                str_code = temp_str.charCodeAt(0);
                if ((str_code > 64 && str_code < 91) || (str_code > 96 && str_code < 123) || str_code == 32 || str_code == 47 || str_code == 39 || str_code == 64 || str_code == 45 || str_code == 46) {
                    continue;
                }
                else {
                    document.getElementById(fldName).style.borderColor = '#dc3545';
                    document.getElementById('err_' + fldName).innerHTML = "Please Enter Properly";
                    break;
                }
            }
        }
        if ((fldName === 'postcode' || fldName === 'cntno1' || fldName === 'cntno2' || fldName === 'nolots' || fldName === 'nocont') && isNaN(fldVal)) {
            document.getElementById(fldName).style.borderColor = '#dc3545';
            document.getElementById('err_' + fldName).innerHTML = "Please Enter Properly. Allow Only Numbers";
        }
        if ((fldName === 'rocno' || fldName === 'nric') && fldVal.length != 0) {
            var temp_str = "";
            var str_code = "";
            for (var j = 0; j < fldVal.length; j++) {
                temp_str = fldVal.charAt(j);
                str_code = temp_str.charCodeAt(0);
                if ((str_code > 64 && str_code < 91) || (str_code > 96 && str_code < 123) || str_code == 47 || str_code == 45 || (str_code > 47 && str_code < 58)) {
                    continue;
                }
                else {
                    document.getElementById(fldName).style.borderColor = '#dc3545';
                    document.getElementById('err_' + fldName).innerHTML = "Please Enter Properly";
                    break;
                }
            }
        }
    };
    ValidationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/user-management/reset-password/reset-password.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/user-management/reset-password/reset-password.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbWFuYWdlbWVudC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user-management/reset-password/reset-password.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/user-management/reset-password/reset-password.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-position\">\n  <form class=\"form-horizontal\" method=\"post\" action=\"#\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-md-5\">\n          <div class=\"card\">\n            <div class=\"card-header\">Reset Password</div>\n            <div class=\"card-body\">\n              <div class=\"text-center\">\n                <i class=\"fa fa-lock fa-4x\"></i>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"cols-sm-2 control-label\">Current Password</label>\n                <div class=\"cols-sm-10\">\n                  <div class=\"input-group\">\n                    <input type=\"password\" class=\"form-control\" name=\"cpassword\" id=\"cpassword\"\n                      placeholder=\"Current Password\" />\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"name\" class=\"cols-sm-2 control-label\">New Password</label>\n                <div class=\"cols-sm-10\">\n                  <div class=\"input-group\">\n                    <input type=\"password\" class=\"form-control\" name=\"npassword\" id=\"npassword\"\n                      placeholder=\"New Password\" />\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\" class=\"cols-sm-2 control-label\">Confirm New Password</label>\n                <div class=\"cols-sm-10\">\n                  <div class=\"input-group\">\n                    <input type=\"password\" class=\"form-control\" name=\"ncpassword\" id=\"ncpassword\"\n                      placeholder=\"Confirm New Password\" />\n                  </div>\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"fixed-area\">\n      <button type=\"button\" class=\"btn btn-primary\">Back</button>&nbsp; <button type=\"submit\"\n        class=\"btn btn-primary login-button\">Submit</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/user-management/reset-password/reset-password.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/user-management/reset-password/reset-password.component.ts ***!
  \****************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent() {
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/user-management/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/user-management/reset-password/reset-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user-management/user-create/user-create.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/user-management/user-create/user-create.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n    background-color: #eee;\r\n}\r\n\r\n*[role=\"form\"] {\r\n    max-width: 530px;\r\n    padding: 15px;\r\n    margin: 0 auto;\r\n    background-color: #fff;\r\n    border-radius: 0.3em;\r\n}\r\n\r\n*[role=\"form\"] h2 {\r\n    margin-left: 5em;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tYW5hZ2VtZW50L3VzZXItY3JlYXRlL3VzZXItY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC91c2VyLW1hbmFnZW1lbnQvdXNlci1jcmVhdGUvdXNlci1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbn1cclxuXHJcbipbcm9sZT1cImZvcm1cIl0ge1xyXG4gICAgbWF4LXdpZHRoOiA1MzBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcclxufVxyXG5cclxuKltyb2xlPVwiZm9ybVwiXSBoMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user-management/user-create/user-create.component.html":
/*!************************************************************************!*\
  !*** ./src/app/user-management/user-create/user-create.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-position\">\n    <form class=\"form-horizontal\" method=\"post\" action=\"#\">\n  <div class=\"container\">\n\n    <div class=\"row justify-content-center\" >\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">Create New User</div>\n          <div class=\"card-body\">\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"fname\">First Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"First Name\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"lname\">Last Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"lname\" placeholder=\"Last Name\">\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nric\">NRIC/Passport No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"nric\" placeholder=\"NRIC/Passport No.\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"email\">Email</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email\">\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno1\">Contact No. 1</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"cntno1\" placeholder=\"Contact No. 1\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno2\">Contact No. 2</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"cntno2\" placeholder=\"Contact No. 2\">\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"uname\">User Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"uname\" placeholder=\"User Name\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"uname\">Role</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <select class=\"form-control\" id=\"role\">\n                    <option value=\"-1\">Please Select</option>\n                    <option value=\"volvo\">Role 1</option>\n                  </select>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"password\">Password</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cpassword\">Confirm Password</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"cpassword\" placeholder=\"Confirm Password\">\n                </div>\n              </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <br>\n  </div>\n  <div class=\"fixed-area\">\n      <button type=\"button\" class=\"btn btn-primary\">Back</button>&nbsp; <button type=\"submit\"\n        class=\"btn btn-primary login-button\">Submit</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/user-management/user-create/user-create.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/user-management/user-create/user-create.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent() {
    }
    UserCreateComponent.prototype.ngOnInit = function () {
    };
    UserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-create',
            template: __webpack_require__(/*! ./user-create.component.html */ "./src/app/user-management/user-create/user-create.component.html"),
            styles: [__webpack_require__(/*! ./user-create.component.css */ "./src/app/user-management/user-create/user-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/user-management/user-management.component.css":
/*!***************************************************************!*\
  !*** ./src/app/user-management/user-management.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-management/user-management.component.html":
/*!****************************************************************!*\
  !*** ./src/app/user-management/user-management.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-management works!\n</p>\n"

/***/ }),

/***/ "./src/app/user-management/user-management.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user-management/user-management.component.ts ***!
  \**************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent() {
    }
    UserManagementComponent.prototype.ngOnInit = function () {
    };
    UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-management',
            template: __webpack_require__(/*! ./user-management.component.html */ "./src/app/user-management/user-management.component.html"),
            styles: [__webpack_require__(/*! ./user-management.component.css */ "./src/app/user-management/user-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserManagementComponent);
    return UserManagementComponent;
}());



/***/ }),

/***/ "./src/app/user-management/user-search/user-search.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/user-management/user-search/user-search.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fm-border{\r\n    border-width: 3px;\r\n    border-style: solid;\r\n    padding: 5px;  \r\n    border-color: darkgray;\r\n}\r\n\r\ndiv.dataTables div.dataTables_length select {\r\n    width: 60px;\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tYW5hZ2VtZW50L3VzZXItc2VhcmNoL3VzZXItc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1tYW5hZ2VtZW50L3VzZXItc2VhcmNoL3VzZXItc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm0tYm9yZGVye1xyXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgcGFkZGluZzogNXB4OyAgXHJcbiAgICBib3JkZXItY29sb3I6IGRhcmtncmF5O1xyXG59XHJcblxyXG5kaXYuZGF0YVRhYmxlcyBkaXYuZGF0YVRhYmxlc19sZW5ndGggc2VsZWN0IHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user-management/user-search/user-search.component.html":
/*!************************************************************************!*\
  !*** ./src/app/user-management/user-search/user-search.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-position\">\n    <form>\n        <div class=\"form-row\">\n            <div class=\"form-group col-md-12\" style=\"text-align: right;\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"addUser()\">Add User</button>\n            </div>\n        </div>\n        <div class=\"fm-border\">\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                    <label for=\"fname\">First Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"First Name\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                    <label for=\"lastname\">Last Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"lastname\" placeholder=\"Last Name\">\n                </div>\n\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                    <label for=\"lastname\">User Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"User Name\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                    <label for=\"nric\">NRIC/Passport No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <input type=\"text\" class=\"form-control\" id=\"nric\" placeholder=\"NRIC/Passport No.\">\n                </div>\n\n            </div>\n            <div class=\"form-row\">\n\n                <div class=\"form-group col-md-2\">\n                    <label for=\"email\">Email</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\">\n                </div>\n\n                <div class=\"form-group col-md-2\">\n                    <label for=\"role\">Role</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <select class=\"form-control\" id=\"role\">\n                        <option value=\"-1\">Please Select</option>\n                        <option value=\"volvo\">Role 1</option>\n                    </select>\n                </div>\n\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Search</button>\n        </div>\n\n        <br>\n        <table id=\"example\" class=\"table table-striped table-bordered\" style=\"width:100%\">\n            <thead>\n                <tr>\n                    <th>Full Name</th>\n                    <th>NRIC/Passport No.</th>\n                    <th>User Name</th>\n                    <th>Role</th>\n                    <th>Company Name</th>\n                    <th>Email</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td><a [routerLink]=\"['/userview']\" class=\"nav-link\">Ganesh Kumar P</a></td>\n                    <td>K8414140</td>\n                    <td>62gpakal</td>\n                    <td>MANAGER</td>\n                    <td>ABC DEPOT SDN BHD</td>\n                    <td>pgk@gmail.com</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/userview']\" class=\"nav-link\">Ganesh Kumar P</a></td>\n                    <td>K8414140</td>\n                    <td>62gpakal</td>\n                    <td>MANAGER</td>\n                    <td>ABC DEPOT SDN BHD</td>\n                    <td>pgk@gmail.com</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/userview']\" class=\"nav-link\">Ganesh Kumar P</a></td>\n                    <td>K8414140</td>\n                    <td>62gpakal</td>\n                    <td>MANAGER</td>\n                    <td>ABC DEPOT SDN BHD</td>\n                    <td>pgk@gmail.com</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/userview']\" class=\"nav-link\">Ganesh Kumar P</a></td>\n                    <td>K8414140</td>\n                    <td>62gpakal</td>\n                    <td>MANAGER</td>\n                    <td>ABC DEPOT SDN BHD</td>\n                    <td>pgk@gmail.com</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/userview']\" class=\"nav-link\">Ganesh Kumar P</a></td>\n                    <td>K8414140</td>\n                    <td>62gpakal</td>\n                    <td>MANAGER</td>\n                    <td>ABC DEPOT SDN BHD</td>\n                    <td>pgk@gmail.com</td>\n                </tr>\n                <tr>\n                    <td><a [routerLink]=\"['/userview']\" class=\"nav-link\">Ganesh Kumar P</a></td>\n                    <td>K8414140</td>\n                    <td>62gpakal</td>\n                    <td>MANAGER</td>\n                    <td>ABC DEPOT SDN BHD</td>\n                    <td>pgk@gmail.com</td>\n                </tr>\n            </tbody>\n\n        </table>\n\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/user-management/user-search/user-search.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/user-management/user-search/user-search.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchComponent", function() { return UserSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UserSearchComponent = /** @class */ (function () {
    function UserSearchComponent(router) {
        this.router = router;
    }
    UserSearchComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('#example').DataTable();
        });
    };
    UserSearchComponent.prototype.addUser = function () {
        this.router.navigateByUrl('/usercreate');
    };
    UserSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-search',
            template: __webpack_require__(/*! ./user-search.component.html */ "./src/app/user-management/user-search/user-search.component.html"),
            styles: [__webpack_require__(/*! ./user-search.component.css */ "./src/app/user-management/user-search/user-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserSearchComponent);
    return UserSearchComponent;
}());



/***/ }),

/***/ "./src/app/user-management/user-update/user-update.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/user-management/user-update/user-update.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbWFuYWdlbWVudC91c2VyLXVwZGF0ZS91c2VyLXVwZGF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user-management/user-update/user-update.component.html":
/*!************************************************************************!*\
  !*** ./src/app/user-management/user-update/user-update.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-position\">\n    <form class=\"form-horizontal\" method=\"post\" action=\"#\">\n\n  <div class=\"container\">\n\n    <div class=\"row justify-content-center\" >\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">Create New User</div>\n          <div class=\"card-body\">\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"fname\">First Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"First Name\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"lname\">Last Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"lname\" placeholder=\"Last Name\">\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nric\">NRIC/Passport No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"nric\" placeholder=\"NRIC/Passport No.\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"email\">Email</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email\">\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno1\">Contact No. 1</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"cntno1\" placeholder=\"Contact No. 1\">\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno2\">Contact No. 2</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"cntno2\" placeholder=\"Contact No. 2\">\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"uname\">User Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <input type=\"text\" class=\"form-control\" id=\"uname\" placeholder=\"User Name\" readonly>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"role\">Role</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <select class=\"form-control\" id=\"role\" readonly>\n                    <option value=\"-1\">Please Select</option>\n                    <option value=\"volvo\">Role 1</option>\n                  </select>\n                </div>\n              </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <br>\n  </div>\n  <div class=\"fixed-area\">\n      <button type=\"button\" class=\"btn btn-primary\">Back</button>&nbsp; <button type=\"submit\"\n        class=\"btn btn-primary login-button\">Submit</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/user-management/user-update/user-update.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/user-management/user-update/user-update.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUpdateComponent", function() { return UserUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserUpdateComponent = /** @class */ (function () {
    function UserUpdateComponent() {
    }
    UserUpdateComponent.prototype.ngOnInit = function () {
    };
    UserUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-update',
            template: __webpack_require__(/*! ./user-update.component.html */ "./src/app/user-management/user-update/user-update.component.html"),
            styles: [__webpack_require__(/*! ./user-update.component.css */ "./src/app/user-management/user-update/user-update.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserUpdateComponent);
    return UserUpdateComponent;
}());



/***/ }),

/***/ "./src/app/user-management/user-view/user-view.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/user-management/user-view/user-view.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbWFuYWdlbWVudC91c2VyLXZpZXcvdXNlci12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user-management/user-view/user-view.component.html":
/*!********************************************************************!*\
  !*** ./src/app/user-management/user-view/user-view.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-position\">\n  <div class=\"container\">\n\n    <div class=\"row justify-content-center\" >\n        <div class=\"form-group col-md-12\" style=\"text-align: right;\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"editUser()\">Edit User</button>\n          </div>\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">User Information</div>\n          <div class=\"card-body\">\n\n            <form class=\"form-horizontal\" method=\"post\" action=\"#\">\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"fname\">First Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>Ganesh Kumar</div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"lname\">Last Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>Pakalapati</div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"nric\">NRIC/Passport No.</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>K8414140</div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"email\">Email</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>ss@gmsil.com</div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno1\">Contact No. 1</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>0173812312</div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cntno2\">Contact No. 2</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div></div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"uname\">User Name</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>gpakal</div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"uname\">Role</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>MANAGER</div>\n                </div>\n              </div>\n\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cdate\">Create Date</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>12-12-2019</div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"udate\">Update Date</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>14-12-2019</div>\n                </div>\n              </div>\n              <div class=\"form-row\">\n                <div class=\"form-group col-md-2\">\n                  <label for=\"cdate\">Create User</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>gpakal</div>\n                </div>\n                <div class=\"form-group col-md-2\">\n                  <label for=\"udate\">Update User</label>\n                </div>\n                <div class=\"form-group col-md-4\">\n                  <div>gpakal</div>\n                </div>\n              </div>\n            </form>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <br>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user-management/user-view/user-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/user-management/user-view/user-view.component.ts ***!
  \******************************************************************/
/*! exports provided: UserViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewComponent", function() { return UserViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UserViewComponent = /** @class */ (function () {
    function UserViewComponent(router) {
        this.router = router;
    }
    UserViewComponent.prototype.ngOnInit = function () {
    };
    UserViewComponent.prototype.addUser = function () {
        this.router.navigateByUrl('/usercreate');
    };
    UserViewComponent.prototype.editUser = function () {
        this.router.navigateByUrl('/useredit');
    };
    UserViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-view',
            template: __webpack_require__(/*! ./user-view.component.html */ "./src/app/user-management/user-view/user-view.component.html"),
            styles: [__webpack_require__(/*! ./user-view.component.css */ "./src/app/user-management/user-view/user-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserViewComponent);
    return UserViewComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\62gpakal\DHL\Personal\DMS-UI\dms-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map