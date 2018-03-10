webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n<app-demo></app-demo>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fontdialog_fontdialog_component__ = __webpack_require__("../../../../../src/app/fontdialog/fontdialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__demo_demo_component__ = __webpack_require__("../../../../../src/app/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__custdata_service__ = __webpack_require__("../../../../../src/app/custdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__fontdialog_fontdialog_component__["a" /* FontdialogComponent */],
                __WEBPACK_IMPORTED_MODULE_9__demo_demo_component__["a" /* DemoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_cdk_a11y__["a" /* A11yModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_cdk_overlay__["a" /* OverlayModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__custdata_service__["a" /* CustdataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/custdata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustdataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustdataService = /** @class */ (function () {
    function CustdataService(http) {
        this.http = http;
        this.url = "https://csharpbackenddemo.herokuapp.com/cust/";
    }
    CustdataService.prototype.addCustomer = function (fd) {
        return this.http.post(this.url, fd, {
            reportProgress: true,
            observe: "events"
        });
    };
    CustdataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CustdataService);
    return CustdataService;
}());



/***/ }),

/***/ "../../../../../src/app/demo/demo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">csharpcorner</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a >SignUp <span class=\"sr-only\">(current)</span></a></li>\n        <!-- <li><a href=\"#\">signup</a></li> -->\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n</div>\n<div class=\"container\">\n\n  <form [formGroup]=\"signupform\" (ngSubmit)=\"onSubmit()\" >\n    <div class=\"form-group\" >\n        <label for=\"username\">Username</label>\n    <input class=\"form-control\" type=\"text\" formControlName=\"username\" id=\"username\">\n  </div>\n  <div *ngIf=\"!signupform.get('username').valid && signupform.get('username').touched\" class=\"alert alert-danger\">\n  User name is required\n </div>\n <div class=\"form-group\" >\n   <label>email</label>\n    <input type=\"text\" class=\"form-control\" formControlName=\"email\" id=\"email\">\n  </div>\n  <div *ngIf=\"!signupform.get('email').valid && signupform.get('email').touched\" class=\"alert alert-danger\">\n      email is required\n     </div>\n     <div class=\"form-group\">\n       <label>Gender</label>\n    <div *ngFor=\"let item of genders\">\n      <label>\n        <input type=\"radio\"  formControlName=\"gender\" [value]=\"item\" >{{item}}\n      </label>\n    </div>\n  </div>\n  <div class=\"form-group\" >\n    <button class=\"form-control btn btn-info\" type=\"button\" (click)=\"onAddHobby()\">Add Hobby</button>\n    <div style=\"height: 10px;\" ></div>\n    <div class=\"form-group\" formArrayName=\"hobby\" >\n        <!-- signupform.get('hobby').controls -->\n        <!-- signupform.get('hobby').value -->\n      <div *ngFor=\"let item of signupform.get('hobby').controls; let i=index\">\n      <input class=\"form-control\" type=\"text\" [formControlName]=\"i\">\n    </div>\n    </div>\n  </div>\n  <div class=\"form-group\" >\n    <label>Mobile No</label>\n  <input class=\"form-control\" type=\"text\" id=\"mobile_no\" formControlName=\"mobile_no\">\n</div>\n<div class=\"form-group\">\n  <h4>select photo</h4>\n  <input class=\"form-control\" type=\"file\" formControlName=\"user_img\" (change)=\"onFileSelected($event)\">\n  <div class=\"progress\">\n      <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"   [ngStyle]=\"{'width': prg + '%'}\">\n        {{prg +'%'}}\n      </div>\n    </div>\n</div>\n    <button class=\"form-control btn btn-primary\" [disabled]=\"!signupform.valid\" type=\"submit\">Click Me</button>\n  </form>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custdata_service__ = __webpack_require__("../../../../../src/app/custdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DemoComponent = /** @class */ (function () {
    function DemoComponent(_data) {
        this._data = _data;
        this.selectedFile = null;
        this.prg = 0;
        this.genders = [
            'male',
            'female'
        ];
    }
    DemoComponent.prototype.ngOnInit = function () {
        this.signupform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'username': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email]),
            'gender': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('male'),
            'hobby': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormArray */]([]),
            'mobile_no': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null),
            'user_img': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null)
        });
    };
    DemoComponent.prototype.onSubmit = function () {
        var _this = this;
        var fd = new FormData();
        fd.append('username', this.signupform.get('username').value);
        fd.append('email', this.signupform.get('email').value);
        fd.append('gender', this.signupform.get('gender').value);
        var str = "";
        for (var i = 0; i < this.signupform.get('hobby').value.length; i++) {
            str += this.signupform.get('hobby').value[i] + ',';
        }
        fd.append('hobby', str);
        fd.append('mobile_no', this.signupform.get('mobile_no').value);
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this._data.addCustomer(fd)
            .subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                _this.prg = Math.round(event.loaded / event.total * 100);
                console.log('upload progess ' + Math.round(event.loaded / event.total * 100) + '%');
            }
            else if (event.type === __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpEventType */].Response) {
                console.log(event.body);
            }
        });
    };
    DemoComponent.prototype.onAddHobby = function () {
        var control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
        this.signupform.get('hobby').push(control);
    };
    DemoComponent.prototype.onFileSelected = function (value) {
        this.selectedFile = value.target.files[0];
        console.log(value);
    };
    DemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-demo',
            template: __webpack_require__("../../../../../src/app/demo/demo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/demo/demo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__custdata_service__["a" /* CustdataService */]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fontdialog/fontdialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fontdialog/fontdialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.font-family]=\"selectedFont || 'Arial' \" >\n  <p>Welcome to ng-India</p>\n  <p>India's first Angular Conference</p>\n</div>\n\n<button type=\"button\" [style.font-family]=\"selectedFont\" cdkOverlayOrigin #x=\"cdkOverlayOrigin\" (click)=\"isOpen=!isOpen\">Font</button>\n<ng-template cdkConnectedOverlay\n[cdkConnectedOverlayOrigin]=\"x\"\n[cdkConnectedOverlayOpen]=\"isOpen\"\n>\n  <div class=\"font-picker\" >\n    <div class=\"listfont\" (click)=\"selectedFont=item.name;isOpen=false\"  *ngFor=\"let item of fonts\" >\n      {{item.name}}\n    </div>\n  </div>\n</ng-template>\n\n"

/***/ }),

/***/ "../../../../../src/app/fontdialog/fontdialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FontdialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FontdialogComponent = /** @class */ (function () {
    function FontdialogComponent() {
        this.isOpen = false;
        this.selectedFont = '';
        this.fonts = [
            { name: "verdana" },
            { name: "courier" },
            { name: "Comic Sans MS" },
            { name: "Arial Black" },
            { name: "Times New Roman" },
            { name: "Georgia" },
            { name: "Blackadder ITC" }
        ];
    }
    FontdialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-fontdialog',
            template: __webpack_require__("../../../../../src/app/fontdialog/fontdialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/fontdialog/fontdialog.component.css")]
        })
    ], FontdialogComponent);
    return FontdialogComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map