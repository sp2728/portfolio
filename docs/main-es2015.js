(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex\">\n\n  <div class=\"sidebar\" *ngIf=\"sidebarVisible\" @inOutAnimation>\n    <app-sidebar [activeSection]=\"currentSection\" (sectionEvent)=\"changeSection($event)\">\n    </app-sidebar>\n    <button mat-button class=\"fa fa-times\" (click)=\"closeSideBar()\"> </button>\n  </div>\n  <div class=\"main-content\" id=\"main\">\n      <app-profile id=\"profile\" class=\"wrapper\"></app-profile>\n\n      <app-technologies id=\"technologies\" class=\"wrapper\"></app-technologies>\n\n      <app-blogs id=\"blogs\" class=\"wrapper\"></app-blogs>\n\n      <app-projects id=\"projects\" class=\"wrapper\"></app-projects>\n\n      <app-education id=\"education\" class=\"wrapper\"></app-education>\n\n      <app-contact id=\"contact\" class=\"wrapper\"></app-contact>\n  </div>\n</div>\n<button mat-button class=\"fa fa-bars\" *ngIf=\"!sidebarVisible\" (click)=\"openSidebar()\"> </button>\n\n<div class=\"socialMedia\">\n  <div class=\"follow\">Follow Me</div>\n  <div class=\"icons\">\n    <a class=\"media fa fa-linkedin\" href=\"https://www.linkedin.com/in/saikiran1298/\" target=\"_blank\"></a>\n    <a class=\"media fa fa-medium\" href=\"https://saikiran1298.medium.com\" target=\"_blank\"></a>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blogs/blogs.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blogs/blogs.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h1> Blogs </h1>\n    <div class=\"blogs\">\n        <mat-card *ngFor=\"let blog of blogs\">\n            <a href=\"{{blog.link}}\">{{blog.name}}</a>\n        </mat-card>\n    </div>\n\n    <h1> Certifications </h1>\n    <div class=\"certifications\">\n        <mat-card *ngFor=\"let certificate of certifications\">\n            <a href=\"{{certificate.link}}\">{{certificate.name}}</a>\n        </mat-card>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h1> Get In Touch </h1>\n    <form [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\">\n\n        <mat-form-field class=\"field\">\n            <mat-label>Name</mat-label>\n            <input matInput placeholder=\"Name\" formControlName=\"name\" required>\n            <mat-error *ngIf=\"contactForm.get('name').invalid\"> {{getErrorMessage(contactForm.get('name'))}} </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"field\">\n            <mat-label>Email</mat-label>\n            <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n            <mat-error *ngIf=\"contactForm.get('email').invalid\"> {{getErrorMessage(contactForm.get('email'))}} </mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"field\">\n            <mat-label>Message</mat-label>\n            <textarea matInput placeholder=\"Enter your message\" rows=5 formControlName=\"message\" required></textarea>\n            <mat-error *ngIf=\"contactForm.get('message').invalid\"> {{getErrorMessage(contactForm.get('message'))}} </mat-error>\n        </mat-form-field>\n\n        <button mat-raised-button type=\"submit\" [disabled]=\"contactForm.invalid\"> Submit </button>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h1> Education </h1>\n  <ul>\n    <li class=\"school\" *ngFor=\"let school of schools\">\n      <div>\n        <h2> {{school.name | uppercase}} </h2>\n        <div class=\"courses\">\n          <span class=\"course\" *ngFor=\"let course of school.keyCourses\">{{course}}</span>\n        </div>\n      </div>\n      <div class=\"details\">\n        <p> Degree: {{school.degree}}</p>\n        <p> Major: {{school.major}}</p>\n        <p> Duration: {{school.startDate}} - {{school.endDate}} </p>\n      </div>\n    </li>\n  </ul>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h1> Profile </h1>\n    <p class=\"intro\" *ngIf=\"profile\">\n      Hi! My name is {{profile.name}}. And this is my portfolio website. \n    </p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h1> Projects </h1>\n  <div class=\"projects\">\n      <div *ngFor=\"let project of projects\">\n          <a href=\"{{project.link}}\" target=\"_blank\">\n            <img src=\"{{project.logo}}\">\n            <span>{{project.name}}</span> \n          </a>\n        </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"nav\">\n    <div class=\"profile\">\n        <img src=\"../assets/images/profile-image.JPG\">\n        <h3> Sai Kiran Pocham </h3>\n\n        <span class=\"location\"> New Jersey, USA </span>\n        <!-- <div>\n            <span id=\"number\"> +1 (917)-892-1667 </span>\n            <span> saikiran12698@gmail.com </span>\n        </div> -->\n    </div>\n\n    <ul class=\"nav-list\">\n        <li><a (click)=\"changeSection('profile')\" [class.active]=\"currentSection=='profile'\" >Welcome</a></li>\n        <li><a (click)=\"changeSection('technologies')\" [class.active]=\"currentSection=='technologies'\">Technologies</a></li>\n        <li><a (click)=\"changeSection('blogs')\" [class.active]=\"currentSection=='blogs'\">Blogs & Certifications</a></li>\n        <li><a (click)=\"changeSection('projects')\" [class.active]=\"currentSection=='projects'\">Projects</a></li>\n        <li><a (click)=\"changeSection('education')\" [class.active]=\"currentSection=='education'\">Education</a></li>\n        <li><a (click)=\"changeSection('contact')\" [class.active]=\"currentSection=='contact'\">Get In Touch</a></li>\n    </ul>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/technologies/technologies.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/technologies/technologies.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <h1> Technological Experience </h1>\n    <div class=\"flex\">\n        <div class=\"skills\" *ngFor=\"let skill of skills\">\n            <img [src]=\"skill.logo\">\n            <!-- <h4>{{skill.name}}</h4> -->\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\n/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url('fontawesome-webfont.eot?v=4.7.0');\n  src: url('fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'), url('fontawesome-webfont.woff2?v=4.7.0') format('woff2'), url('fontawesome-webfont.woff?v=4.7.0') format('woff'), url('fontawesome-webfont.ttf?v=4.7.0') format('truetype'), url('fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\f000\";\n}\n.fa-music:before {\n  content: \"\\f001\";\n}\n.fa-search:before {\n  content: \"\\f002\";\n}\n.fa-envelope-o:before {\n  content: \"\\f003\";\n}\n.fa-heart:before {\n  content: \"\\f004\";\n}\n.fa-star:before {\n  content: \"\\f005\";\n}\n.fa-star-o:before {\n  content: \"\\f006\";\n}\n.fa-user:before {\n  content: \"\\f007\";\n}\n.fa-film:before {\n  content: \"\\f008\";\n}\n.fa-th-large:before {\n  content: \"\\f009\";\n}\n.fa-th:before {\n  content: \"\\f00a\";\n}\n.fa-th-list:before {\n  content: \"\\f00b\";\n}\n.fa-check:before {\n  content: \"\\f00c\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\f00d\";\n}\n.fa-search-plus:before {\n  content: \"\\f00e\";\n}\n.fa-search-minus:before {\n  content: \"\\f010\";\n}\n.fa-power-off:before {\n  content: \"\\f011\";\n}\n.fa-signal:before {\n  content: \"\\f012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\f013\";\n}\n.fa-trash-o:before {\n  content: \"\\f014\";\n}\n.fa-home:before {\n  content: \"\\f015\";\n}\n.fa-file-o:before {\n  content: \"\\f016\";\n}\n.fa-clock-o:before {\n  content: \"\\f017\";\n}\n.fa-road:before {\n  content: \"\\f018\";\n}\n.fa-download:before {\n  content: \"\\f019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\f01a\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\f01b\";\n}\n.fa-inbox:before {\n  content: \"\\f01c\";\n}\n.fa-play-circle-o:before {\n  content: \"\\f01d\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\f01e\";\n}\n.fa-refresh:before {\n  content: \"\\f021\";\n}\n.fa-list-alt:before {\n  content: \"\\f022\";\n}\n.fa-lock:before {\n  content: \"\\f023\";\n}\n.fa-flag:before {\n  content: \"\\f024\";\n}\n.fa-headphones:before {\n  content: \"\\f025\";\n}\n.fa-volume-off:before {\n  content: \"\\f026\";\n}\n.fa-volume-down:before {\n  content: \"\\f027\";\n}\n.fa-volume-up:before {\n  content: \"\\f028\";\n}\n.fa-qrcode:before {\n  content: \"\\f029\";\n}\n.fa-barcode:before {\n  content: \"\\f02a\";\n}\n.fa-tag:before {\n  content: \"\\f02b\";\n}\n.fa-tags:before {\n  content: \"\\f02c\";\n}\n.fa-book:before {\n  content: \"\\f02d\";\n}\n.fa-bookmark:before {\n  content: \"\\f02e\";\n}\n.fa-print:before {\n  content: \"\\f02f\";\n}\n.fa-camera:before {\n  content: \"\\f030\";\n}\n.fa-font:before {\n  content: \"\\f031\";\n}\n.fa-bold:before {\n  content: \"\\f032\";\n}\n.fa-italic:before {\n  content: \"\\f033\";\n}\n.fa-text-height:before {\n  content: \"\\f034\";\n}\n.fa-text-width:before {\n  content: \"\\f035\";\n}\n.fa-align-left:before {\n  content: \"\\f036\";\n}\n.fa-align-center:before {\n  content: \"\\f037\";\n}\n.fa-align-right:before {\n  content: \"\\f038\";\n}\n.fa-align-justify:before {\n  content: \"\\f039\";\n}\n.fa-list:before {\n  content: \"\\f03a\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\f03b\";\n}\n.fa-indent:before {\n  content: \"\\f03c\";\n}\n.fa-video-camera:before {\n  content: \"\\f03d\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\f03e\";\n}\n.fa-pencil:before {\n  content: \"\\f040\";\n}\n.fa-map-marker:before {\n  content: \"\\f041\";\n}\n.fa-adjust:before {\n  content: \"\\f042\";\n}\n.fa-tint:before {\n  content: \"\\f043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\f044\";\n}\n.fa-share-square-o:before {\n  content: \"\\f045\";\n}\n.fa-check-square-o:before {\n  content: \"\\f046\";\n}\n.fa-arrows:before {\n  content: \"\\f047\";\n}\n.fa-step-backward:before {\n  content: \"\\f048\";\n}\n.fa-fast-backward:before {\n  content: \"\\f049\";\n}\n.fa-backward:before {\n  content: \"\\f04a\";\n}\n.fa-play:before {\n  content: \"\\f04b\";\n}\n.fa-pause:before {\n  content: \"\\f04c\";\n}\n.fa-stop:before {\n  content: \"\\f04d\";\n}\n.fa-forward:before {\n  content: \"\\f04e\";\n}\n.fa-fast-forward:before {\n  content: \"\\f050\";\n}\n.fa-step-forward:before {\n  content: \"\\f051\";\n}\n.fa-eject:before {\n  content: \"\\f052\";\n}\n.fa-chevron-left:before {\n  content: \"\\f053\";\n}\n.fa-chevron-right:before {\n  content: \"\\f054\";\n}\n.fa-plus-circle:before {\n  content: \"\\f055\";\n}\n.fa-minus-circle:before {\n  content: \"\\f056\";\n}\n.fa-times-circle:before {\n  content: \"\\f057\";\n}\n.fa-check-circle:before {\n  content: \"\\f058\";\n}\n.fa-question-circle:before {\n  content: \"\\f059\";\n}\n.fa-info-circle:before {\n  content: \"\\f05a\";\n}\n.fa-crosshairs:before {\n  content: \"\\f05b\";\n}\n.fa-times-circle-o:before {\n  content: \"\\f05c\";\n}\n.fa-check-circle-o:before {\n  content: \"\\f05d\";\n}\n.fa-ban:before {\n  content: \"\\f05e\";\n}\n.fa-arrow-left:before {\n  content: \"\\f060\";\n}\n.fa-arrow-right:before {\n  content: \"\\f061\";\n}\n.fa-arrow-up:before {\n  content: \"\\f062\";\n}\n.fa-arrow-down:before {\n  content: \"\\f063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\f064\";\n}\n.fa-expand:before {\n  content: \"\\f065\";\n}\n.fa-compress:before {\n  content: \"\\f066\";\n}\n.fa-plus:before {\n  content: \"\\f067\";\n}\n.fa-minus:before {\n  content: \"\\f068\";\n}\n.fa-asterisk:before {\n  content: \"\\f069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\f06a\";\n}\n.fa-gift:before {\n  content: \"\\f06b\";\n}\n.fa-leaf:before {\n  content: \"\\f06c\";\n}\n.fa-fire:before {\n  content: \"\\f06d\";\n}\n.fa-eye:before {\n  content: \"\\f06e\";\n}\n.fa-eye-slash:before {\n  content: \"\\f070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\f071\";\n}\n.fa-plane:before {\n  content: \"\\f072\";\n}\n.fa-calendar:before {\n  content: \"\\f073\";\n}\n.fa-random:before {\n  content: \"\\f074\";\n}\n.fa-comment:before {\n  content: \"\\f075\";\n}\n.fa-magnet:before {\n  content: \"\\f076\";\n}\n.fa-chevron-up:before {\n  content: \"\\f077\";\n}\n.fa-chevron-down:before {\n  content: \"\\f078\";\n}\n.fa-retweet:before {\n  content: \"\\f079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\f07a\";\n}\n.fa-folder:before {\n  content: \"\\f07b\";\n}\n.fa-folder-open:before {\n  content: \"\\f07c\";\n}\n.fa-arrows-v:before {\n  content: \"\\f07d\";\n}\n.fa-arrows-h:before {\n  content: \"\\f07e\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\f080\";\n}\n.fa-twitter-square:before {\n  content: \"\\f081\";\n}\n.fa-facebook-square:before {\n  content: \"\\f082\";\n}\n.fa-camera-retro:before {\n  content: \"\\f083\";\n}\n.fa-key:before {\n  content: \"\\f084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\f085\";\n}\n.fa-comments:before {\n  content: \"\\f086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\f087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\f088\";\n}\n.fa-star-half:before {\n  content: \"\\f089\";\n}\n.fa-heart-o:before {\n  content: \"\\f08a\";\n}\n.fa-sign-out:before {\n  content: \"\\f08b\";\n}\n.fa-linkedin-square:before {\n  content: \"\\f08c\";\n}\n.fa-thumb-tack:before {\n  content: \"\\f08d\";\n}\n.fa-external-link:before {\n  content: \"\\f08e\";\n}\n.fa-sign-in:before {\n  content: \"\\f090\";\n}\n.fa-trophy:before {\n  content: \"\\f091\";\n}\n.fa-github-square:before {\n  content: \"\\f092\";\n}\n.fa-upload:before {\n  content: \"\\f093\";\n}\n.fa-lemon-o:before {\n  content: \"\\f094\";\n}\n.fa-phone:before {\n  content: \"\\f095\";\n}\n.fa-square-o:before {\n  content: \"\\f096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\f097\";\n}\n.fa-phone-square:before {\n  content: \"\\f098\";\n}\n.fa-twitter:before {\n  content: \"\\f099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\f09a\";\n}\n.fa-github:before {\n  content: \"\\f09b\";\n}\n.fa-unlock:before {\n  content: \"\\f09c\";\n}\n.fa-credit-card:before {\n  content: \"\\f09d\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\f09e\";\n}\n.fa-hdd-o:before {\n  content: \"\\f0a0\";\n}\n.fa-bullhorn:before {\n  content: \"\\f0a1\";\n}\n.fa-bell:before {\n  content: \"\\f0f3\";\n}\n.fa-certificate:before {\n  content: \"\\f0a3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\f0a4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\f0a5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\f0a6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\f0a7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\f0a8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\f0a9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\f0aa\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\f0ab\";\n}\n.fa-globe:before {\n  content: \"\\f0ac\";\n}\n.fa-wrench:before {\n  content: \"\\f0ad\";\n}\n.fa-tasks:before {\n  content: \"\\f0ae\";\n}\n.fa-filter:before {\n  content: \"\\f0b0\";\n}\n.fa-briefcase:before {\n  content: \"\\f0b1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\f0b2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\f0c0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\f0c1\";\n}\n.fa-cloud:before {\n  content: \"\\f0c2\";\n}\n.fa-flask:before {\n  content: \"\\f0c3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\f0c4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\f0c5\";\n}\n.fa-paperclip:before {\n  content: \"\\f0c6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\f0c7\";\n}\n.fa-square:before {\n  content: \"\\f0c8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\f0c9\";\n}\n.fa-list-ul:before {\n  content: \"\\f0ca\";\n}\n.fa-list-ol:before {\n  content: \"\\f0cb\";\n}\n.fa-strikethrough:before {\n  content: \"\\f0cc\";\n}\n.fa-underline:before {\n  content: \"\\f0cd\";\n}\n.fa-table:before {\n  content: \"\\f0ce\";\n}\n.fa-magic:before {\n  content: \"\\f0d0\";\n}\n.fa-truck:before {\n  content: \"\\f0d1\";\n}\n.fa-pinterest:before {\n  content: \"\\f0d2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\f0d3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\f0d4\";\n}\n.fa-google-plus:before {\n  content: \"\\f0d5\";\n}\n.fa-money:before {\n  content: \"\\f0d6\";\n}\n.fa-caret-down:before {\n  content: \"\\f0d7\";\n}\n.fa-caret-up:before {\n  content: \"\\f0d8\";\n}\n.fa-caret-left:before {\n  content: \"\\f0d9\";\n}\n.fa-caret-right:before {\n  content: \"\\f0da\";\n}\n.fa-columns:before {\n  content: \"\\f0db\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\f0dc\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\f0dd\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\f0de\";\n}\n.fa-envelope:before {\n  content: \"\\f0e0\";\n}\n.fa-linkedin:before {\n  content: \"\\f0e1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\f0e2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\f0e3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\f0e4\";\n}\n.fa-comment-o:before {\n  content: \"\\f0e5\";\n}\n.fa-comments-o:before {\n  content: \"\\f0e6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\f0e7\";\n}\n.fa-sitemap:before {\n  content: \"\\f0e8\";\n}\n.fa-umbrella:before {\n  content: \"\\f0e9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\f0ea\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\f0eb\";\n}\n.fa-exchange:before {\n  content: \"\\f0ec\";\n}\n.fa-cloud-download:before {\n  content: \"\\f0ed\";\n}\n.fa-cloud-upload:before {\n  content: \"\\f0ee\";\n}\n.fa-user-md:before {\n  content: \"\\f0f0\";\n}\n.fa-stethoscope:before {\n  content: \"\\f0f1\";\n}\n.fa-suitcase:before {\n  content: \"\\f0f2\";\n}\n.fa-bell-o:before {\n  content: \"\\f0a2\";\n}\n.fa-coffee:before {\n  content: \"\\f0f4\";\n}\n.fa-cutlery:before {\n  content: \"\\f0f5\";\n}\n.fa-file-text-o:before {\n  content: \"\\f0f6\";\n}\n.fa-building-o:before {\n  content: \"\\f0f7\";\n}\n.fa-hospital-o:before {\n  content: \"\\f0f8\";\n}\n.fa-ambulance:before {\n  content: \"\\f0f9\";\n}\n.fa-medkit:before {\n  content: \"\\f0fa\";\n}\n.fa-fighter-jet:before {\n  content: \"\\f0fb\";\n}\n.fa-beer:before {\n  content: \"\\f0fc\";\n}\n.fa-h-square:before {\n  content: \"\\f0fd\";\n}\n.fa-plus-square:before {\n  content: \"\\f0fe\";\n}\n.fa-angle-double-left:before {\n  content: \"\\f100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\f101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\f102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\f103\";\n}\n.fa-angle-left:before {\n  content: \"\\f104\";\n}\n.fa-angle-right:before {\n  content: \"\\f105\";\n}\n.fa-angle-up:before {\n  content: \"\\f106\";\n}\n.fa-angle-down:before {\n  content: \"\\f107\";\n}\n.fa-desktop:before {\n  content: \"\\f108\";\n}\n.fa-laptop:before {\n  content: \"\\f109\";\n}\n.fa-tablet:before {\n  content: \"\\f10a\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\f10b\";\n}\n.fa-circle-o:before {\n  content: \"\\f10c\";\n}\n.fa-quote-left:before {\n  content: \"\\f10d\";\n}\n.fa-quote-right:before {\n  content: \"\\f10e\";\n}\n.fa-spinner:before {\n  content: \"\\f110\";\n}\n.fa-circle:before {\n  content: \"\\f111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\f112\";\n}\n.fa-github-alt:before {\n  content: \"\\f113\";\n}\n.fa-folder-o:before {\n  content: \"\\f114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\f115\";\n}\n.fa-smile-o:before {\n  content: \"\\f118\";\n}\n.fa-frown-o:before {\n  content: \"\\f119\";\n}\n.fa-meh-o:before {\n  content: \"\\f11a\";\n}\n.fa-gamepad:before {\n  content: \"\\f11b\";\n}\n.fa-keyboard-o:before {\n  content: \"\\f11c\";\n}\n.fa-flag-o:before {\n  content: \"\\f11d\";\n}\n.fa-flag-checkered:before {\n  content: \"\\f11e\";\n}\n.fa-terminal:before {\n  content: \"\\f120\";\n}\n.fa-code:before {\n  content: \"\\f121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\f122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\f123\";\n}\n.fa-location-arrow:before {\n  content: \"\\f124\";\n}\n.fa-crop:before {\n  content: \"\\f125\";\n}\n.fa-code-fork:before {\n  content: \"\\f126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\f127\";\n}\n.fa-question:before {\n  content: \"\\f128\";\n}\n.fa-info:before {\n  content: \"\\f129\";\n}\n.fa-exclamation:before {\n  content: \"\\f12a\";\n}\n.fa-superscript:before {\n  content: \"\\f12b\";\n}\n.fa-subscript:before {\n  content: \"\\f12c\";\n}\n.fa-eraser:before {\n  content: \"\\f12d\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\f12e\";\n}\n.fa-microphone:before {\n  content: \"\\f130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\f131\";\n}\n.fa-shield:before {\n  content: \"\\f132\";\n}\n.fa-calendar-o:before {\n  content: \"\\f133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\f134\";\n}\n.fa-rocket:before {\n  content: \"\\f135\";\n}\n.fa-maxcdn:before {\n  content: \"\\f136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\f137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\f138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\f139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\f13a\";\n}\n.fa-html5:before {\n  content: \"\\f13b\";\n}\n.fa-css3:before {\n  content: \"\\f13c\";\n}\n.fa-anchor:before {\n  content: \"\\f13d\";\n}\n.fa-unlock-alt:before {\n  content: \"\\f13e\";\n}\n.fa-bullseye:before {\n  content: \"\\f140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\f141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\f142\";\n}\n.fa-rss-square:before {\n  content: \"\\f143\";\n}\n.fa-play-circle:before {\n  content: \"\\f144\";\n}\n.fa-ticket:before {\n  content: \"\\f145\";\n}\n.fa-minus-square:before {\n  content: \"\\f146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\f147\";\n}\n.fa-level-up:before {\n  content: \"\\f148\";\n}\n.fa-level-down:before {\n  content: \"\\f149\";\n}\n.fa-check-square:before {\n  content: \"\\f14a\";\n}\n.fa-pencil-square:before {\n  content: \"\\f14b\";\n}\n.fa-external-link-square:before {\n  content: \"\\f14c\";\n}\n.fa-share-square:before {\n  content: \"\\f14d\";\n}\n.fa-compass:before {\n  content: \"\\f14e\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\f150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\f151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\f152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\f153\";\n}\n.fa-gbp:before {\n  content: \"\\f154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\f155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\f156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\f157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\f158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\f159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\f15a\";\n}\n.fa-file:before {\n  content: \"\\f15b\";\n}\n.fa-file-text:before {\n  content: \"\\f15c\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\f15d\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\f15e\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\f160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\f161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\f162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\f163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\f164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\f165\";\n}\n.fa-youtube-square:before {\n  content: \"\\f166\";\n}\n.fa-youtube:before {\n  content: \"\\f167\";\n}\n.fa-xing:before {\n  content: \"\\f168\";\n}\n.fa-xing-square:before {\n  content: \"\\f169\";\n}\n.fa-youtube-play:before {\n  content: \"\\f16a\";\n}\n.fa-dropbox:before {\n  content: \"\\f16b\";\n}\n.fa-stack-overflow:before {\n  content: \"\\f16c\";\n}\n.fa-instagram:before {\n  content: \"\\f16d\";\n}\n.fa-flickr:before {\n  content: \"\\f16e\";\n}\n.fa-adn:before {\n  content: \"\\f170\";\n}\n.fa-bitbucket:before {\n  content: \"\\f171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\f172\";\n}\n.fa-tumblr:before {\n  content: \"\\f173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\f174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\f175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\f176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\f177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\f178\";\n}\n.fa-apple:before {\n  content: \"\\f179\";\n}\n.fa-windows:before {\n  content: \"\\f17a\";\n}\n.fa-android:before {\n  content: \"\\f17b\";\n}\n.fa-linux:before {\n  content: \"\\f17c\";\n}\n.fa-dribbble:before {\n  content: \"\\f17d\";\n}\n.fa-skype:before {\n  content: \"\\f17e\";\n}\n.fa-foursquare:before {\n  content: \"\\f180\";\n}\n.fa-trello:before {\n  content: \"\\f181\";\n}\n.fa-female:before {\n  content: \"\\f182\";\n}\n.fa-male:before {\n  content: \"\\f183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\f184\";\n}\n.fa-sun-o:before {\n  content: \"\\f185\";\n}\n.fa-moon-o:before {\n  content: \"\\f186\";\n}\n.fa-archive:before {\n  content: \"\\f187\";\n}\n.fa-bug:before {\n  content: \"\\f188\";\n}\n.fa-vk:before {\n  content: \"\\f189\";\n}\n.fa-weibo:before {\n  content: \"\\f18a\";\n}\n.fa-renren:before {\n  content: \"\\f18b\";\n}\n.fa-pagelines:before {\n  content: \"\\f18c\";\n}\n.fa-stack-exchange:before {\n  content: \"\\f18d\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\f18e\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\f190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\f191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\f192\";\n}\n.fa-wheelchair:before {\n  content: \"\\f193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\f194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\f195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\f196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\f197\";\n}\n.fa-slack:before {\n  content: \"\\f198\";\n}\n.fa-envelope-square:before {\n  content: \"\\f199\";\n}\n.fa-wordpress:before {\n  content: \"\\f19a\";\n}\n.fa-openid:before {\n  content: \"\\f19b\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\f19c\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\f19d\";\n}\n.fa-yahoo:before {\n  content: \"\\f19e\";\n}\n.fa-google:before {\n  content: \"\\f1a0\";\n}\n.fa-reddit:before {\n  content: \"\\f1a1\";\n}\n.fa-reddit-square:before {\n  content: \"\\f1a2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\f1a3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\f1a4\";\n}\n.fa-delicious:before {\n  content: \"\\f1a5\";\n}\n.fa-digg:before {\n  content: \"\\f1a6\";\n}\n.fa-pied-piper-pp:before {\n  content: \"\\f1a7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\f1a8\";\n}\n.fa-drupal:before {\n  content: \"\\f1a9\";\n}\n.fa-joomla:before {\n  content: \"\\f1aa\";\n}\n.fa-language:before {\n  content: \"\\f1ab\";\n}\n.fa-fax:before {\n  content: \"\\f1ac\";\n}\n.fa-building:before {\n  content: \"\\f1ad\";\n}\n.fa-child:before {\n  content: \"\\f1ae\";\n}\n.fa-paw:before {\n  content: \"\\f1b0\";\n}\n.fa-spoon:before {\n  content: \"\\f1b1\";\n}\n.fa-cube:before {\n  content: \"\\f1b2\";\n}\n.fa-cubes:before {\n  content: \"\\f1b3\";\n}\n.fa-behance:before {\n  content: \"\\f1b4\";\n}\n.fa-behance-square:before {\n  content: \"\\f1b5\";\n}\n.fa-steam:before {\n  content: \"\\f1b6\";\n}\n.fa-steam-square:before {\n  content: \"\\f1b7\";\n}\n.fa-recycle:before {\n  content: \"\\f1b8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\f1b9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\f1ba\";\n}\n.fa-tree:before {\n  content: \"\\f1bb\";\n}\n.fa-spotify:before {\n  content: \"\\f1bc\";\n}\n.fa-deviantart:before {\n  content: \"\\f1bd\";\n}\n.fa-soundcloud:before {\n  content: \"\\f1be\";\n}\n.fa-database:before {\n  content: \"\\f1c0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\f1c1\";\n}\n.fa-file-word-o:before {\n  content: \"\\f1c2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\f1c3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\f1c4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\f1c5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\f1c6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\f1c7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\f1c8\";\n}\n.fa-file-code-o:before {\n  content: \"\\f1c9\";\n}\n.fa-vine:before {\n  content: \"\\f1ca\";\n}\n.fa-codepen:before {\n  content: \"\\f1cb\";\n}\n.fa-jsfiddle:before {\n  content: \"\\f1cc\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\f1cd\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\f1ce\";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: \"\\f1d0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\f1d1\";\n}\n.fa-git-square:before {\n  content: \"\\f1d2\";\n}\n.fa-git:before {\n  content: \"\\f1d3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\f1d4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\f1d5\";\n}\n.fa-qq:before {\n  content: \"\\f1d6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\f1d7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\f1d8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\f1d9\";\n}\n.fa-history:before {\n  content: \"\\f1da\";\n}\n.fa-circle-thin:before {\n  content: \"\\f1db\";\n}\n.fa-header:before {\n  content: \"\\f1dc\";\n}\n.fa-paragraph:before {\n  content: \"\\f1dd\";\n}\n.fa-sliders:before {\n  content: \"\\f1de\";\n}\n.fa-share-alt:before {\n  content: \"\\f1e0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\f1e1\";\n}\n.fa-bomb:before {\n  content: \"\\f1e2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\f1e3\";\n}\n.fa-tty:before {\n  content: \"\\f1e4\";\n}\n.fa-binoculars:before {\n  content: \"\\f1e5\";\n}\n.fa-plug:before {\n  content: \"\\f1e6\";\n}\n.fa-slideshare:before {\n  content: \"\\f1e7\";\n}\n.fa-twitch:before {\n  content: \"\\f1e8\";\n}\n.fa-yelp:before {\n  content: \"\\f1e9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\f1ea\";\n}\n.fa-wifi:before {\n  content: \"\\f1eb\";\n}\n.fa-calculator:before {\n  content: \"\\f1ec\";\n}\n.fa-paypal:before {\n  content: \"\\f1ed\";\n}\n.fa-google-wallet:before {\n  content: \"\\f1ee\";\n}\n.fa-cc-visa:before {\n  content: \"\\f1f0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\f1f1\";\n}\n.fa-cc-discover:before {\n  content: \"\\f1f2\";\n}\n.fa-cc-amex:before {\n  content: \"\\f1f3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\f1f4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\f1f5\";\n}\n.fa-bell-slash:before {\n  content: \"\\f1f6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\f1f7\";\n}\n.fa-trash:before {\n  content: \"\\f1f8\";\n}\n.fa-copyright:before {\n  content: \"\\f1f9\";\n}\n.fa-at:before {\n  content: \"\\f1fa\";\n}\n.fa-eyedropper:before {\n  content: \"\\f1fb\";\n}\n.fa-paint-brush:before {\n  content: \"\\f1fc\";\n}\n.fa-birthday-cake:before {\n  content: \"\\f1fd\";\n}\n.fa-area-chart:before {\n  content: \"\\f1fe\";\n}\n.fa-pie-chart:before {\n  content: \"\\f200\";\n}\n.fa-line-chart:before {\n  content: \"\\f201\";\n}\n.fa-lastfm:before {\n  content: \"\\f202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\f203\";\n}\n.fa-toggle-off:before {\n  content: \"\\f204\";\n}\n.fa-toggle-on:before {\n  content: \"\\f205\";\n}\n.fa-bicycle:before {\n  content: \"\\f206\";\n}\n.fa-bus:before {\n  content: \"\\f207\";\n}\n.fa-ioxhost:before {\n  content: \"\\f208\";\n}\n.fa-angellist:before {\n  content: \"\\f209\";\n}\n.fa-cc:before {\n  content: \"\\f20a\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\f20b\";\n}\n.fa-meanpath:before {\n  content: \"\\f20c\";\n}\n.fa-buysellads:before {\n  content: \"\\f20d\";\n}\n.fa-connectdevelop:before {\n  content: \"\\f20e\";\n}\n.fa-dashcube:before {\n  content: \"\\f210\";\n}\n.fa-forumbee:before {\n  content: \"\\f211\";\n}\n.fa-leanpub:before {\n  content: \"\\f212\";\n}\n.fa-sellsy:before {\n  content: \"\\f213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\f214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\f215\";\n}\n.fa-skyatlas:before {\n  content: \"\\f216\";\n}\n.fa-cart-plus:before {\n  content: \"\\f217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\f218\";\n}\n.fa-diamond:before {\n  content: \"\\f219\";\n}\n.fa-ship:before {\n  content: \"\\f21a\";\n}\n.fa-user-secret:before {\n  content: \"\\f21b\";\n}\n.fa-motorcycle:before {\n  content: \"\\f21c\";\n}\n.fa-street-view:before {\n  content: \"\\f21d\";\n}\n.fa-heartbeat:before {\n  content: \"\\f21e\";\n}\n.fa-venus:before {\n  content: \"\\f221\";\n}\n.fa-mars:before {\n  content: \"\\f222\";\n}\n.fa-mercury:before {\n  content: \"\\f223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\f224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\f225\";\n}\n.fa-venus-double:before {\n  content: \"\\f226\";\n}\n.fa-mars-double:before {\n  content: \"\\f227\";\n}\n.fa-venus-mars:before {\n  content: \"\\f228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\f229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\f22a\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\f22b\";\n}\n.fa-neuter:before {\n  content: \"\\f22c\";\n}\n.fa-genderless:before {\n  content: \"\\f22d\";\n}\n.fa-facebook-official:before {\n  content: \"\\f230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\f231\";\n}\n.fa-whatsapp:before {\n  content: \"\\f232\";\n}\n.fa-server:before {\n  content: \"\\f233\";\n}\n.fa-user-plus:before {\n  content: \"\\f234\";\n}\n.fa-user-times:before {\n  content: \"\\f235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\f236\";\n}\n.fa-viacoin:before {\n  content: \"\\f237\";\n}\n.fa-train:before {\n  content: \"\\f238\";\n}\n.fa-subway:before {\n  content: \"\\f239\";\n}\n.fa-medium:before {\n  content: \"\\f23a\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\f23b\";\n}\n.fa-optin-monster:before {\n  content: \"\\f23c\";\n}\n.fa-opencart:before {\n  content: \"\\f23d\";\n}\n.fa-expeditedssl:before {\n  content: \"\\f23e\";\n}\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: \"\\f240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\f241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\f242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\f243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\f244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\f245\";\n}\n.fa-i-cursor:before {\n  content: \"\\f246\";\n}\n.fa-object-group:before {\n  content: \"\\f247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\f248\";\n}\n.fa-sticky-note:before {\n  content: \"\\f249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\f24a\";\n}\n.fa-cc-jcb:before {\n  content: \"\\f24b\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\f24c\";\n}\n.fa-clone:before {\n  content: \"\\f24d\";\n}\n.fa-balance-scale:before {\n  content: \"\\f24e\";\n}\n.fa-hourglass-o:before {\n  content: \"\\f250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\f251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\f252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\f253\";\n}\n.fa-hourglass:before {\n  content: \"\\f254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\f255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\f256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\f257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\f258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\f259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\f25a\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\f25b\";\n}\n.fa-trademark:before {\n  content: \"\\f25c\";\n}\n.fa-registered:before {\n  content: \"\\f25d\";\n}\n.fa-creative-commons:before {\n  content: \"\\f25e\";\n}\n.fa-gg:before {\n  content: \"\\f260\";\n}\n.fa-gg-circle:before {\n  content: \"\\f261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\f262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\f263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\f264\";\n}\n.fa-get-pocket:before {\n  content: \"\\f265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\f266\";\n}\n.fa-safari:before {\n  content: \"\\f267\";\n}\n.fa-chrome:before {\n  content: \"\\f268\";\n}\n.fa-firefox:before {\n  content: \"\\f269\";\n}\n.fa-opera:before {\n  content: \"\\f26a\";\n}\n.fa-internet-explorer:before {\n  content: \"\\f26b\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\f26c\";\n}\n.fa-contao:before {\n  content: \"\\f26d\";\n}\n.fa-500px:before {\n  content: \"\\f26e\";\n}\n.fa-amazon:before {\n  content: \"\\f270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\f271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\f272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\f273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\f274\";\n}\n.fa-industry:before {\n  content: \"\\f275\";\n}\n.fa-map-pin:before {\n  content: \"\\f276\";\n}\n.fa-map-signs:before {\n  content: \"\\f277\";\n}\n.fa-map-o:before {\n  content: \"\\f278\";\n}\n.fa-map:before {\n  content: \"\\f279\";\n}\n.fa-commenting:before {\n  content: \"\\f27a\";\n}\n.fa-commenting-o:before {\n  content: \"\\f27b\";\n}\n.fa-houzz:before {\n  content: \"\\f27c\";\n}\n.fa-vimeo:before {\n  content: \"\\f27d\";\n}\n.fa-black-tie:before {\n  content: \"\\f27e\";\n}\n.fa-fonticons:before {\n  content: \"\\f280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\f281\";\n}\n.fa-edge:before {\n  content: \"\\f282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\f283\";\n}\n.fa-codiepie:before {\n  content: \"\\f284\";\n}\n.fa-modx:before {\n  content: \"\\f285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\f286\";\n}\n.fa-usb:before {\n  content: \"\\f287\";\n}\n.fa-product-hunt:before {\n  content: \"\\f288\";\n}\n.fa-mixcloud:before {\n  content: \"\\f289\";\n}\n.fa-scribd:before {\n  content: \"\\f28a\";\n}\n.fa-pause-circle:before {\n  content: \"\\f28b\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\f28c\";\n}\n.fa-stop-circle:before {\n  content: \"\\f28d\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\f28e\";\n}\n.fa-shopping-bag:before {\n  content: \"\\f290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\f291\";\n}\n.fa-hashtag:before {\n  content: \"\\f292\";\n}\n.fa-bluetooth:before {\n  content: \"\\f293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\f294\";\n}\n.fa-percent:before {\n  content: \"\\f295\";\n}\n.fa-gitlab:before {\n  content: \"\\f296\";\n}\n.fa-wpbeginner:before {\n  content: \"\\f297\";\n}\n.fa-wpforms:before {\n  content: \"\\f298\";\n}\n.fa-envira:before {\n  content: \"\\f299\";\n}\n.fa-universal-access:before {\n  content: \"\\f29a\";\n}\n.fa-wheelchair-alt:before {\n  content: \"\\f29b\";\n}\n.fa-question-circle-o:before {\n  content: \"\\f29c\";\n}\n.fa-blind:before {\n  content: \"\\f29d\";\n}\n.fa-audio-description:before {\n  content: \"\\f29e\";\n}\n.fa-volume-control-phone:before {\n  content: \"\\f2a0\";\n}\n.fa-braille:before {\n  content: \"\\f2a1\";\n}\n.fa-assistive-listening-systems:before {\n  content: \"\\f2a2\";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: \"\\f2a3\";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: \"\\f2a4\";\n}\n.fa-glide:before {\n  content: \"\\f2a5\";\n}\n.fa-glide-g:before {\n  content: \"\\f2a6\";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: \"\\f2a7\";\n}\n.fa-low-vision:before {\n  content: \"\\f2a8\";\n}\n.fa-viadeo:before {\n  content: \"\\f2a9\";\n}\n.fa-viadeo-square:before {\n  content: \"\\f2aa\";\n}\n.fa-snapchat:before {\n  content: \"\\f2ab\";\n}\n.fa-snapchat-ghost:before {\n  content: \"\\f2ac\";\n}\n.fa-snapchat-square:before {\n  content: \"\\f2ad\";\n}\n.fa-pied-piper:before {\n  content: \"\\f2ae\";\n}\n.fa-first-order:before {\n  content: \"\\f2b0\";\n}\n.fa-yoast:before {\n  content: \"\\f2b1\";\n}\n.fa-themeisle:before {\n  content: \"\\f2b2\";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: \"\\f2b3\";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: \"\\f2b4\";\n}\n.fa-handshake-o:before {\n  content: \"\\f2b5\";\n}\n.fa-envelope-open:before {\n  content: \"\\f2b6\";\n}\n.fa-envelope-open-o:before {\n  content: \"\\f2b7\";\n}\n.fa-linode:before {\n  content: \"\\f2b8\";\n}\n.fa-address-book:before {\n  content: \"\\f2b9\";\n}\n.fa-address-book-o:before {\n  content: \"\\f2ba\";\n}\n.fa-vcard:before,\n.fa-address-card:before {\n  content: \"\\f2bb\";\n}\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: \"\\f2bc\";\n}\n.fa-user-circle:before {\n  content: \"\\f2bd\";\n}\n.fa-user-circle-o:before {\n  content: \"\\f2be\";\n}\n.fa-user-o:before {\n  content: \"\\f2c0\";\n}\n.fa-id-badge:before {\n  content: \"\\f2c1\";\n}\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: \"\\f2c2\";\n}\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: \"\\f2c3\";\n}\n.fa-quora:before {\n  content: \"\\f2c4\";\n}\n.fa-free-code-camp:before {\n  content: \"\\f2c5\";\n}\n.fa-telegram:before {\n  content: \"\\f2c6\";\n}\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: \"\\f2c7\";\n}\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: \"\\f2c8\";\n}\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: \"\\f2c9\";\n}\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: \"\\f2ca\";\n}\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: \"\\f2cb\";\n}\n.fa-shower:before {\n  content: \"\\f2cc\";\n}\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: \"\\f2cd\";\n}\n.fa-podcast:before {\n  content: \"\\f2ce\";\n}\n.fa-window-maximize:before {\n  content: \"\\f2d0\";\n}\n.fa-window-minimize:before {\n  content: \"\\f2d1\";\n}\n.fa-window-restore:before {\n  content: \"\\f2d2\";\n}\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: \"\\f2d3\";\n}\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: \"\\f2d4\";\n}\n.fa-bandcamp:before {\n  content: \"\\f2d5\";\n}\n.fa-grav:before {\n  content: \"\\f2d6\";\n}\n.fa-etsy:before {\n  content: \"\\f2d7\";\n}\n.fa-imdb:before {\n  content: \"\\f2d8\";\n}\n.fa-ravelry:before {\n  content: \"\\f2d9\";\n}\n.fa-eercast:before {\n  content: \"\\f2da\";\n}\n.fa-microchip:before {\n  content: \"\\f2db\";\n}\n.fa-snowflake-o:before {\n  content: \"\\f2dc\";\n}\n.fa-superpowers:before {\n  content: \"\\f2dd\";\n}\n.fa-wpexplorer:before {\n  content: \"\\f2de\";\n}\n.fa-meetup:before {\n  content: \"\\f2e0\";\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n*{\n    padding: 0;\n    margin: 0;\n    font-size: 16px;\n    font-family: 'Times New Roman', Times, serif;\n}\n:root{\n    --main-bg-red:#503D42;\n    --main-bg-white:#F5FBEF;\n}\nhtml, body { height: 100%; }\nbody { \n    margin: 0; \n    position: relative;\n    width: 100%;\n    height: 100vh;\n    font-family: 'Montserrat', sans-serif;\n}\nh1{\n    font-family: 'Caveat', cursive;\n}\n.flex{\n    display: flex;\n    align-items: stretch;\n    height: 100vh;\n}\n.sidebar{\n    width: 500px;\n    position: relative;\n    overflow-y: scroll;\n    font-size: 0.65em;\n    background: var(--main-bg-red);\n}\n.main-content{\n    width: 100%;\n    background: var(--main-bg-white);\n    overflow-y: scroll;\n}\n.wrapper{\n    min-height: 100vh;\n    display: grid;\n    justify-content: center;\n    align-content: center;\n}\n#profile{\n    background-image: url('/assets/images/waves1.svg');\n    background-size: contain;\n    background-repeat: no-repeat;\n}\n#technologies{\nbackground-color: #FFEEDD;\n}\n#blogs{\n    background-color: #B8B8FF;\n}\n#projects{\n    background-color: #BFD8BD;\n}\n#education{\n    height: 100%;\n    background-image: url('/assets/images/pencil.jpg');\n    background-size: contain;\n    background-repeat: no-repeat;\n}\n/**\n------------------\nSocial Media Icons on the right\n------------------\n*/\n.socialMedia{\n    position: fixed;\n    color: grey;\n    z-index: 100;\n    height: 200px;\n    top:50%;\n    right: 0%;\n}\n.socialMedia .follow{\n    width: 90px;\n    font-size: 18px;\n    transform: rotate(90deg);\n}\n.follow::after{\n    content: \"\";\n    width: 100%;\n    position: absolute;\n    left: 100%;\n    top: 50%;\n    z-index: 1;\n    border-bottom: 2px solid;\n}\n.icons{\n    position: absolute;\n    bottom: 0;\n    right:40%;\n}\n.media{\n    display: block;\n    text-decoration: none;\n    color: grey;\n    margin: 10px 0;\n    transition: ease-in-out 0.3s;\n}\n.media:hover{\n    transform: scale(1.3);\n}\n/*\n------------------\nOpen and Close sidebar\n------------------\n*/\n.fa-bars{\n    position: fixed;\n    font-size: 40px;\n    z-index: 100;\n    top:5%;\n    border-radius: 0 10px 10px 0;\n    border: none;\n    padding: 10px;\n    cursor: pointer;\n    color: rgba(238, 235, 208);\n    background-color: var(--main-bg-red);\n}\n.fa-times{\n    position: absolute;\n    top:0;\n    right:0;\n    margin: 20px;\n    font-size: 30px;\n    color: rgba(238, 235, 208);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIiwibm9kZV9tb2R1bGVzL2ZvbnQtYXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLmNzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFO0FDQTlFOzs7RUFHRTtBQUNGOytCQUMrQjtBQUMvQjtFQUNFLDBCQUEwQjtFQUMxQiwyQ0FBb0Q7RUFDcEQsb1VBQWlYO0VBQ2pYLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQiw2Q0FBNkM7RUFDN0Msa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDO0FBQ0EsNkRBQTZEO0FBQzdEO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBLDJCQUEyQjtBQUMzQjtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsNkNBQTZDO0VBQzdDLHFDQUFxQztBQUN2QztBQUNBO0VBQ0UsK0NBQStDO0VBQy9DLHVDQUF1QztBQUN6QztBQUNBO0VBQ0U7SUFFRSx1QkFBdUI7RUFDekI7RUFDQTtJQUVFLHlCQUF5QjtFQUMzQjtBQUNGO0FBQ0E7RUFDRTtJQUVFLHVCQUF1QjtFQUN6QjtFQUNBO0lBRUUseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQTtFQUNFLHNFQUFzRTtFQUd0RSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLHNFQUFzRTtFQUd0RSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHNFQUFzRTtFQUd0RSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGdGQUFnRjtFQUdoRix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGdGQUFnRjtFQUdoRix1QkFBdUI7QUFDekI7QUFDQTs7Ozs7RUFLRSxvQkFBWTtVQUFaLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO21FQUNtRTtBQUNuRTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7O0VBR0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7OztFQUdFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7OztFQUdFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7OztFQUlFLGdCQUFnQjtBQUNsQjtBQUNBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOzs7OztFQUtFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7OztFQUdFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7O0VBR0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjtBRDd4RUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZiw0Q0FBNEM7QUFDaEQ7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7QUFFQSxhQUFhLFlBQVksRUFBRTtBQUMzQjtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixxQ0FBcUM7QUFDekM7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQztBRXhCQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtBQUNsQztBQUVBO0lBQ0ksV0FBVztJQUNYLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksa0RBQWtEO0lBQ2xELHdCQUF3QjtJQUN4Qiw0QkFBNEI7QUFDaEM7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLFlBQVk7SUFDWixrREFBa0Q7SUFDbEQsd0JBQXdCO0lBQ3hCLDRCQUE0QjtBQUNoQztBQUVBOzs7O0NBSUM7QUFFRDtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixPQUFPO0lBQ1AsU0FBUztBQUNiO0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixVQUFVO0lBQ1Ysd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7QUFDYjtBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsY0FBYztJQUNkLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7Ozs7Q0FJQztBQUVEO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osTUFBTTtJQUNOLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsb0NBQW9DO0FBQ3hDO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsS0FBSztJQUNMLE9BQU87SUFDUCxZQUFZO0lBQ1osZUFBZTtJQUNmLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCAnfmZvbnQtYXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLmNzcyc7XG5cbip7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuXG46cm9vdHtcbiAgICAtLW1haW4tYmctcmVkOiM1MDNENDI7XG4gICAgLS1tYWluLWJnLXdoaXRlOiNGNUZCRUY7XG59XG5cbmh0bWwsIGJvZHkgeyBoZWlnaHQ6IDEwMCU7IH1cbmJvZHkgeyBcbiAgICBtYXJnaW46IDA7IFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbmgxe1xuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JywgY3Vyc2l2ZTtcbn0iLCIvKiFcbiAqICBGb250IEF3ZXNvbWUgNC43LjAgYnkgQGRhdmVnYW5keSAtIGh0dHA6Ly9mb250YXdlc29tZS5pbyAtIEBmb250YXdlc29tZVxuICogIExpY2Vuc2UgLSBodHRwOi8vZm9udGF3ZXNvbWUuaW8vbGljZW5zZSAoRm9udDogU0lMIE9GTCAxLjEsIENTUzogTUlUIExpY2Vuc2UpXG4gKi9cbi8qIEZPTlQgUEFUSFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0ZvbnRBd2Vzb21lJztcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuZW90P3Y9NC43LjAnKTtcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQuZW90PyNpZWZpeCZ2PTQuNy4wJykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQud29mZjI/dj00LjcuMCcpIGZvcm1hdCgnd29mZjInKSwgdXJsKCcuLi9mb250cy9mb250YXdlc29tZS13ZWJmb250LndvZmY/dj00LjcuMCcpIGZvcm1hdCgnd29mZicpLCB1cmwoJy4uL2ZvbnRzL2ZvbnRhd2Vzb21lLXdlYmZvbnQudHRmP3Y9NC43LjAnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnLi4vZm9udHMvZm9udGF3ZXNvbWUtd2ViZm9udC5zdmc/dj00LjcuMCNmb250YXdlc29tZXJlZ3VsYXInKSBmb3JtYXQoJ3N2ZycpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4uZmEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG4vKiBtYWtlcyB0aGUgZm9udCAzMyUgbGFyZ2VyIHJlbGF0aXZlIHRvIHRoZSBpY29uIGNvbnRhaW5lciAqL1xuLmZhLWxnIHtcbiAgZm9udC1zaXplOiAxLjMzMzMzMzMzZW07XG4gIGxpbmUtaGVpZ2h0OiAwLjc1ZW07XG4gIHZlcnRpY2FsLWFsaWduOiAtMTUlO1xufVxuLmZhLTJ4IHtcbiAgZm9udC1zaXplOiAyZW07XG59XG4uZmEtM3gge1xuICBmb250LXNpemU6IDNlbTtcbn1cbi5mYS00eCB7XG4gIGZvbnQtc2l6ZTogNGVtO1xufVxuLmZhLTV4IHtcbiAgZm9udC1zaXplOiA1ZW07XG59XG4uZmEtZncge1xuICB3aWR0aDogMS4yODU3MTQyOWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmEtdWwge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAyLjE0Mjg1NzE0ZW07XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5mYS11bCA+IGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZhLWxpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMi4xNDI4NTcxNGVtO1xuICB3aWR0aDogMi4xNDI4NTcxNGVtO1xuICB0b3A6IDAuMTQyODU3MTRlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZhLWxpLmZhLWxnIHtcbiAgbGVmdDogLTEuODU3MTQyODZlbTtcbn1cbi5mYS1ib3JkZXIge1xuICBwYWRkaW5nOiAuMmVtIC4yNWVtIC4xNWVtO1xuICBib3JkZXI6IHNvbGlkIDAuMDhlbSAjZWVlZWVlO1xuICBib3JkZXItcmFkaXVzOiAuMWVtO1xufVxuLmZhLXB1bGwtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmZhLXB1bGwtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uZmEuZmEtcHVsbC1sZWZ0IHtcbiAgbWFyZ2luLXJpZ2h0OiAuM2VtO1xufVxuLmZhLmZhLXB1bGwtcmlnaHQge1xuICBtYXJnaW4tbGVmdDogLjNlbTtcbn1cbi8qIERlcHJlY2F0ZWQgYXMgb2YgNC40LjAgKi9cbi5wdWxsLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnB1bGwtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmZhLnB1bGwtbGVmdCB7XG4gIG1hcmdpbi1yaWdodDogLjNlbTtcbn1cbi5mYS5wdWxsLXJpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IC4zZW07XG59XG4uZmEtc3BpbiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiBmYS1zcGluIDJzIGluZmluaXRlIGxpbmVhcjtcbn1cbi5mYS1wdWxzZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYS1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpO1xuICBhbmltYXRpb246IGZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCk7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmEtc3BpbiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhLXNwaW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxufVxuLmZhLXJvdGF0ZS05MCB7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MSlcIjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbi5mYS1yb3RhdGUtMTgwIHtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yKVwiO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLmZhLXJvdGF0ZS0yNzAge1xuICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5CYXNpY0ltYWdlKHJvdGF0aW9uPTMpXCI7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG4uZmEtZmxpcC1ob3Jpem9udGFsIHtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0wLCBtaXJyb3I9MSlcIjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbn1cbi5mYS1mbGlwLXZlcnRpY2FsIHtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yLCBtaXJyb3I9MSlcIjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcbn1cbjpyb290IC5mYS1yb3RhdGUtOTAsXG46cm9vdCAuZmEtcm90YXRlLTE4MCxcbjpyb290IC5mYS1yb3RhdGUtMjcwLFxuOnJvb3QgLmZhLWZsaXAtaG9yaXpvbnRhbCxcbjpyb290IC5mYS1mbGlwLXZlcnRpY2FsIHtcbiAgZmlsdGVyOiBub25lO1xufVxuLmZhLXN0YWNrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBsaW5lLWhlaWdodDogMmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmZhLXN0YWNrLTF4LFxuLmZhLXN0YWNrLTJ4IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZhLXN0YWNrLTF4IHtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG4uZmEtc3RhY2stMngge1xuICBmb250LXNpemU6IDJlbTtcbn1cbi5mYS1pbnZlcnNlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4vKiBGb250IEF3ZXNvbWUgdXNlcyB0aGUgVW5pY29kZSBQcml2YXRlIFVzZSBBcmVhIChQVUEpIHRvIGVuc3VyZSBzY3JlZW5cbiAgIHJlYWRlcnMgZG8gbm90IHJlYWQgb2ZmIHJhbmRvbSBjaGFyYWN0ZXJzIHRoYXQgcmVwcmVzZW50IGljb25zICovXG4uZmEtZ2xhc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMDBcIjtcbn1cbi5mYS1tdXNpYzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAwMVwiO1xufVxuLmZhLXNlYXJjaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAwMlwiO1xufVxuLmZhLWVudmVsb3BlLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMDNcIjtcbn1cbi5mYS1oZWFydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAwNFwiO1xufVxuLmZhLXN0YXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMDVcIjtcbn1cbi5mYS1zdGFyLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMDZcIjtcbn1cbi5mYS11c2VyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDA3XCI7XG59XG4uZmEtZmlsbTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAwOFwiO1xufVxuLmZhLXRoLWxhcmdlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDA5XCI7XG59XG4uZmEtdGg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMGFcIjtcbn1cbi5mYS10aC1saXN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDBiXCI7XG59XG4uZmEtY2hlY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMGNcIjtcbn1cbi5mYS1yZW1vdmU6YmVmb3JlLFxuLmZhLWNsb3NlOmJlZm9yZSxcbi5mYS10aW1lczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAwZFwiO1xufVxuLmZhLXNlYXJjaC1wbHVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDBlXCI7XG59XG4uZmEtc2VhcmNoLW1pbnVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDEwXCI7XG59XG4uZmEtcG93ZXItb2ZmOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDExXCI7XG59XG4uZmEtc2lnbmFsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDEyXCI7XG59XG4uZmEtZ2VhcjpiZWZvcmUsXG4uZmEtY29nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDEzXCI7XG59XG4uZmEtdHJhc2gtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAxNFwiO1xufVxuLmZhLWhvbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMTVcIjtcbn1cbi5mYS1maWxlLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMTZcIjtcbn1cbi5mYS1jbG9jay1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDE3XCI7XG59XG4uZmEtcm9hZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAxOFwiO1xufVxuLmZhLWRvd25sb2FkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDE5XCI7XG59XG4uZmEtYXJyb3ctY2lyY2xlLW8tZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAxYVwiO1xufVxuLmZhLWFycm93LWNpcmNsZS1vLXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDFiXCI7XG59XG4uZmEtaW5ib3g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMWNcIjtcbn1cbi5mYS1wbGF5LWNpcmNsZS1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDFkXCI7XG59XG4uZmEtcm90YXRlLXJpZ2h0OmJlZm9yZSxcbi5mYS1yZXBlYXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMWVcIjtcbn1cbi5mYS1yZWZyZXNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDIxXCI7XG59XG4uZmEtbGlzdC1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMjJcIjtcbn1cbi5mYS1sb2NrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDIzXCI7XG59XG4uZmEtZmxhZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAyNFwiO1xufVxuLmZhLWhlYWRwaG9uZXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMjVcIjtcbn1cbi5mYS12b2x1bWUtb2ZmOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDI2XCI7XG59XG4uZmEtdm9sdW1lLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMjdcIjtcbn1cbi5mYS12b2x1bWUtdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMjhcIjtcbn1cbi5mYS1xcmNvZGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMjlcIjtcbn1cbi5mYS1iYXJjb2RlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDJhXCI7XG59XG4uZmEtdGFnOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDJiXCI7XG59XG4uZmEtdGFnczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAyY1wiO1xufVxuLmZhLWJvb2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMmRcIjtcbn1cbi5mYS1ib29rbWFyazpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAyZVwiO1xufVxuLmZhLXByaW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDJmXCI7XG59XG4uZmEtY2FtZXJhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDMwXCI7XG59XG4uZmEtZm9udDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAzMVwiO1xufVxuLmZhLWJvbGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMzJcIjtcbn1cbi5mYS1pdGFsaWM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMzNcIjtcbn1cbi5mYS10ZXh0LWhlaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAzNFwiO1xufVxuLmZhLXRleHQtd2lkdGg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMzVcIjtcbn1cbi5mYS1hbGlnbi1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDM2XCI7XG59XG4uZmEtYWxpZ24tY2VudGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDM3XCI7XG59XG4uZmEtYWxpZ24tcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMzhcIjtcbn1cbi5mYS1hbGlnbi1qdXN0aWZ5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDM5XCI7XG59XG4uZmEtbGlzdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAzYVwiO1xufVxuLmZhLWRlZGVudDpiZWZvcmUsXG4uZmEtb3V0ZGVudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAzYlwiO1xufVxuLmZhLWluZGVudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAzY1wiO1xufVxuLmZhLXZpZGVvLWNhbWVyYTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjAzZFwiO1xufVxuLmZhLXBob3RvOmJlZm9yZSxcbi5mYS1pbWFnZTpiZWZvcmUsXG4uZmEtcGljdHVyZS1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDNlXCI7XG59XG4uZmEtcGVuY2lsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDQwXCI7XG59XG4uZmEtbWFwLW1hcmtlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA0MVwiO1xufVxuLmZhLWFkanVzdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA0MlwiO1xufVxuLmZhLXRpbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNDNcIjtcbn1cbi5mYS1lZGl0OmJlZm9yZSxcbi5mYS1wZW5jaWwtc3F1YXJlLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNDRcIjtcbn1cbi5mYS1zaGFyZS1zcXVhcmUtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA0NVwiO1xufVxuLmZhLWNoZWNrLXNxdWFyZS1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDQ2XCI7XG59XG4uZmEtYXJyb3dzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDQ3XCI7XG59XG4uZmEtc3RlcC1iYWNrd2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA0OFwiO1xufVxuLmZhLWZhc3QtYmFja3dhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNDlcIjtcbn1cbi5mYS1iYWNrd2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA0YVwiO1xufVxuLmZhLXBsYXk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNGJcIjtcbn1cbi5mYS1wYXVzZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA0Y1wiO1xufVxuLmZhLXN0b3A6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNGRcIjtcbn1cbi5mYS1mb3J3YXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDRlXCI7XG59XG4uZmEtZmFzdC1mb3J3YXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDUwXCI7XG59XG4uZmEtc3RlcC1mb3J3YXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDUxXCI7XG59XG4uZmEtZWplY3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNTJcIjtcbn1cbi5mYS1jaGV2cm9uLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNTNcIjtcbn1cbi5mYS1jaGV2cm9uLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDU0XCI7XG59XG4uZmEtcGx1cy1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNTVcIjtcbn1cbi5mYS1taW51cy1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNTZcIjtcbn1cbi5mYS10aW1lcy1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNTdcIjtcbn1cbi5mYS1jaGVjay1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNThcIjtcbn1cbi5mYS1xdWVzdGlvbi1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNTlcIjtcbn1cbi5mYS1pbmZvLWNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA1YVwiO1xufVxuLmZhLWNyb3NzaGFpcnM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNWJcIjtcbn1cbi5mYS10aW1lcy1jaXJjbGUtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA1Y1wiO1xufVxuLmZhLWNoZWNrLWNpcmNsZS1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDVkXCI7XG59XG4uZmEtYmFuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDVlXCI7XG59XG4uZmEtYXJyb3ctbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA2MFwiO1xufVxuLmZhLWFycm93LXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDYxXCI7XG59XG4uZmEtYXJyb3ctdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNjJcIjtcbn1cbi5mYS1hcnJvdy1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDYzXCI7XG59XG4uZmEtbWFpbC1mb3J3YXJkOmJlZm9yZSxcbi5mYS1zaGFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA2NFwiO1xufVxuLmZhLWV4cGFuZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA2NVwiO1xufVxuLmZhLWNvbXByZXNzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDY2XCI7XG59XG4uZmEtcGx1czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA2N1wiO1xufVxuLmZhLW1pbnVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDY4XCI7XG59XG4uZmEtYXN0ZXJpc2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNjlcIjtcbn1cbi5mYS1leGNsYW1hdGlvbi1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNmFcIjtcbn1cbi5mYS1naWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDZiXCI7XG59XG4uZmEtbGVhZjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA2Y1wiO1xufVxuLmZhLWZpcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNmRcIjtcbn1cbi5mYS1leWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNmVcIjtcbn1cbi5mYS1leWUtc2xhc2g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNzBcIjtcbn1cbi5mYS13YXJuaW5nOmJlZm9yZSxcbi5mYS1leGNsYW1hdGlvbi10cmlhbmdsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA3MVwiO1xufVxuLmZhLXBsYW5lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDcyXCI7XG59XG4uZmEtY2FsZW5kYXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNzNcIjtcbn1cbi5mYS1yYW5kb206YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNzRcIjtcbn1cbi5mYS1jb21tZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDc1XCI7XG59XG4uZmEtbWFnbmV0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDc2XCI7XG59XG4uZmEtY2hldnJvbi11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA3N1wiO1xufVxuLmZhLWNoZXZyb24tZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA3OFwiO1xufVxuLmZhLXJldHdlZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwNzlcIjtcbn1cbi5mYS1zaG9wcGluZy1jYXJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDdhXCI7XG59XG4uZmEtZm9sZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDdiXCI7XG59XG4uZmEtZm9sZGVyLW9wZW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwN2NcIjtcbn1cbi5mYS1hcnJvd3MtdjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA3ZFwiO1xufVxuLmZhLWFycm93cy1oOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDdlXCI7XG59XG4uZmEtYmFyLWNoYXJ0LW86YmVmb3JlLFxuLmZhLWJhci1jaGFydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA4MFwiO1xufVxuLmZhLXR3aXR0ZXItc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDgxXCI7XG59XG4uZmEtZmFjZWJvb2stc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDgyXCI7XG59XG4uZmEtY2FtZXJhLXJldHJvOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDgzXCI7XG59XG4uZmEta2V5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDg0XCI7XG59XG4uZmEtZ2VhcnM6YmVmb3JlLFxuLmZhLWNvZ3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwODVcIjtcbn1cbi5mYS1jb21tZW50czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA4NlwiO1xufVxuLmZhLXRodW1icy1vLXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDg3XCI7XG59XG4uZmEtdGh1bWJzLW8tZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA4OFwiO1xufVxuLmZhLXN0YXItaGFsZjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA4OVwiO1xufVxuLmZhLWhlYXJ0LW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwOGFcIjtcbn1cbi5mYS1zaWduLW91dDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA4YlwiO1xufVxuLmZhLWxpbmtlZGluLXNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA4Y1wiO1xufVxuLmZhLXRodW1iLXRhY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwOGRcIjtcbn1cbi5mYS1leHRlcm5hbC1saW5rOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDhlXCI7XG59XG4uZmEtc2lnbi1pbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA5MFwiO1xufVxuLmZhLXRyb3BoeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA5MVwiO1xufVxuLmZhLWdpdGh1Yi1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwOTJcIjtcbn1cbi5mYS11cGxvYWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwOTNcIjtcbn1cbi5mYS1sZW1vbi1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDk0XCI7XG59XG4uZmEtcGhvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwOTVcIjtcbn1cbi5mYS1zcXVhcmUtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA5NlwiO1xufVxuLmZhLWJvb2ttYXJrLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwOTdcIjtcbn1cbi5mYS1waG9uZS1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwOThcIjtcbn1cbi5mYS10d2l0dGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDk5XCI7XG59XG4uZmEtZmFjZWJvb2stZjpiZWZvcmUsXG4uZmEtZmFjZWJvb2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwOWFcIjtcbn1cbi5mYS1naXRodWI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwOWJcIjtcbn1cbi5mYS11bmxvY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwOWNcIjtcbn1cbi5mYS1jcmVkaXQtY2FyZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA5ZFwiO1xufVxuLmZhLWZlZWQ6YmVmb3JlLFxuLmZhLXJzczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjA5ZVwiO1xufVxuLmZhLWhkZC1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGEwXCI7XG59XG4uZmEtYnVsbGhvcm46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwYTFcIjtcbn1cbi5mYS1iZWxsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGYzXCI7XG59XG4uZmEtY2VydGlmaWNhdGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwYTNcIjtcbn1cbi5mYS1oYW5kLW8tcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwYTRcIjtcbn1cbi5mYS1oYW5kLW8tbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBhNVwiO1xufVxuLmZhLWhhbmQtby11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBhNlwiO1xufVxuLmZhLWhhbmQtby1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGE3XCI7XG59XG4uZmEtYXJyb3ctY2lyY2xlLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwYThcIjtcbn1cbi5mYS1hcnJvdy1jaXJjbGUtcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwYTlcIjtcbn1cbi5mYS1hcnJvdy1jaXJjbGUtdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwYWFcIjtcbn1cbi5mYS1hcnJvdy1jaXJjbGUtZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBhYlwiO1xufVxuLmZhLWdsb2JlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGFjXCI7XG59XG4uZmEtd3JlbmNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGFkXCI7XG59XG4uZmEtdGFza3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwYWVcIjtcbn1cbi5mYS1maWx0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwYjBcIjtcbn1cbi5mYS1icmllZmNhc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwYjFcIjtcbn1cbi5mYS1hcnJvd3MtYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGIyXCI7XG59XG4uZmEtZ3JvdXA6YmVmb3JlLFxuLmZhLXVzZXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGMwXCI7XG59XG4uZmEtY2hhaW46YmVmb3JlLFxuLmZhLWxpbms6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwYzFcIjtcbn1cbi5mYS1jbG91ZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBjMlwiO1xufVxuLmZhLWZsYXNrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGMzXCI7XG59XG4uZmEtY3V0OmJlZm9yZSxcbi5mYS1zY2lzc29yczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBjNFwiO1xufVxuLmZhLWNvcHk6YmVmb3JlLFxuLmZhLWZpbGVzLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwYzVcIjtcbn1cbi5mYS1wYXBlcmNsaXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwYzZcIjtcbn1cbi5mYS1zYXZlOmJlZm9yZSxcbi5mYS1mbG9wcHktbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBjN1wiO1xufVxuLmZhLXNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBjOFwiO1xufVxuLmZhLW5hdmljb246YmVmb3JlLFxuLmZhLXJlb3JkZXI6YmVmb3JlLFxuLmZhLWJhcnM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwYzlcIjtcbn1cbi5mYS1saXN0LXVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGNhXCI7XG59XG4uZmEtbGlzdC1vbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBjYlwiO1xufVxuLmZhLXN0cmlrZXRocm91Z2g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwY2NcIjtcbn1cbi5mYS11bmRlcmxpbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwY2RcIjtcbn1cbi5mYS10YWJsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBjZVwiO1xufVxuLmZhLW1hZ2ljOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGQwXCI7XG59XG4uZmEtdHJ1Y2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZDFcIjtcbn1cbi5mYS1waW50ZXJlc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZDJcIjtcbn1cbi5mYS1waW50ZXJlc3Qtc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGQzXCI7XG59XG4uZmEtZ29vZ2xlLXBsdXMtc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGQ0XCI7XG59XG4uZmEtZ29vZ2xlLXBsdXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZDVcIjtcbn1cbi5mYS1tb25leTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBkNlwiO1xufVxuLmZhLWNhcmV0LWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZDdcIjtcbn1cbi5mYS1jYXJldC11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBkOFwiO1xufVxuLmZhLWNhcmV0LWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZDlcIjtcbn1cbi5mYS1jYXJldC1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBkYVwiO1xufVxuLmZhLWNvbHVtbnM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZGJcIjtcbn1cbi5mYS11bnNvcnRlZDpiZWZvcmUsXG4uZmEtc29ydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBkY1wiO1xufVxuLmZhLXNvcnQtZG93bjpiZWZvcmUsXG4uZmEtc29ydC1kZXNjOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGRkXCI7XG59XG4uZmEtc29ydC11cDpiZWZvcmUsXG4uZmEtc29ydC1hc2M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZGVcIjtcbn1cbi5mYS1lbnZlbG9wZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBlMFwiO1xufVxuLmZhLWxpbmtlZGluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGUxXCI7XG59XG4uZmEtcm90YXRlLWxlZnQ6YmVmb3JlLFxuLmZhLXVuZG86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZTJcIjtcbn1cbi5mYS1sZWdhbDpiZWZvcmUsXG4uZmEtZ2F2ZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZTNcIjtcbn1cbi5mYS1kYXNoYm9hcmQ6YmVmb3JlLFxuLmZhLXRhY2hvbWV0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZTRcIjtcbn1cbi5mYS1jb21tZW50LW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZTVcIjtcbn1cbi5mYS1jb21tZW50cy1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGU2XCI7XG59XG4uZmEtZmxhc2g6YmVmb3JlLFxuLmZhLWJvbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZTdcIjtcbn1cbi5mYS1zaXRlbWFwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGU4XCI7XG59XG4uZmEtdW1icmVsbGE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZTlcIjtcbn1cbi5mYS1wYXN0ZTpiZWZvcmUsXG4uZmEtY2xpcGJvYXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGVhXCI7XG59XG4uZmEtbGlnaHRidWxiLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZWJcIjtcbn1cbi5mYS1leGNoYW5nZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBlY1wiO1xufVxuLmZhLWNsb3VkLWRvd25sb2FkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGVkXCI7XG59XG4uZmEtY2xvdWQtdXBsb2FkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGVlXCI7XG59XG4uZmEtdXNlci1tZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBmMFwiO1xufVxuLmZhLXN0ZXRob3Njb3BlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGYxXCI7XG59XG4uZmEtc3VpdGNhc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZjJcIjtcbn1cbi5mYS1iZWxsLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwYTJcIjtcbn1cbi5mYS1jb2ZmZWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZjRcIjtcbn1cbi5mYS1jdXRsZXJ5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGY1XCI7XG59XG4uZmEtZmlsZS10ZXh0LW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZjZcIjtcbn1cbi5mYS1idWlsZGluZy1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGY3XCI7XG59XG4uZmEtaG9zcGl0YWwtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBmOFwiO1xufVxuLmZhLWFtYnVsYW5jZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBmOVwiO1xufVxuLmZhLW1lZGtpdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBmYVwiO1xufVxuLmZhLWZpZ2h0ZXItamV0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGZiXCI7XG59XG4uZmEtYmVlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjBmY1wiO1xufVxuLmZhLWgtc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMGZkXCI7XG59XG4uZmEtcGx1cy1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwZmVcIjtcbn1cbi5mYS1hbmdsZS1kb3VibGUtbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEwMFwiO1xufVxuLmZhLWFuZ2xlLWRvdWJsZS1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEwMVwiO1xufVxuLmZhLWFuZ2xlLWRvdWJsZS11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEwMlwiO1xufVxuLmZhLWFuZ2xlLWRvdWJsZS1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTAzXCI7XG59XG4uZmEtYW5nbGUtbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEwNFwiO1xufVxuLmZhLWFuZ2xlLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTA1XCI7XG59XG4uZmEtYW5nbGUtdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMDZcIjtcbn1cbi5mYS1hbmdsZS1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTA3XCI7XG59XG4uZmEtZGVza3RvcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEwOFwiO1xufVxuLmZhLWxhcHRvcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEwOVwiO1xufVxuLmZhLXRhYmxldDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEwYVwiO1xufVxuLmZhLW1vYmlsZS1waG9uZTpiZWZvcmUsXG4uZmEtbW9iaWxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTBiXCI7XG59XG4uZmEtY2lyY2xlLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMGNcIjtcbn1cbi5mYS1xdW90ZS1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTBkXCI7XG59XG4uZmEtcXVvdGUtcmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMGVcIjtcbn1cbi5mYS1zcGlubmVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTEwXCI7XG59XG4uZmEtY2lyY2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTExXCI7XG59XG4uZmEtbWFpbC1yZXBseTpiZWZvcmUsXG4uZmEtcmVwbHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMTJcIjtcbn1cbi5mYS1naXRodWItYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTEzXCI7XG59XG4uZmEtZm9sZGVyLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMTRcIjtcbn1cbi5mYS1mb2xkZXItb3Blbi1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTE1XCI7XG59XG4uZmEtc21pbGUtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjExOFwiO1xufVxuLmZhLWZyb3duLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMTlcIjtcbn1cbi5mYS1tZWgtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjExYVwiO1xufVxuLmZhLWdhbWVwYWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMWJcIjtcbn1cbi5mYS1rZXlib2FyZC1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTFjXCI7XG59XG4uZmEtZmxhZy1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTFkXCI7XG59XG4uZmEtZmxhZy1jaGVja2VyZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMWVcIjtcbn1cbi5mYS10ZXJtaW5hbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEyMFwiO1xufVxuLmZhLWNvZGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMjFcIjtcbn1cbi5mYS1tYWlsLXJlcGx5LWFsbDpiZWZvcmUsXG4uZmEtcmVwbHktYWxsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTIyXCI7XG59XG4uZmEtc3Rhci1oYWxmLWVtcHR5OmJlZm9yZSxcbi5mYS1zdGFyLWhhbGYtZnVsbDpiZWZvcmUsXG4uZmEtc3Rhci1oYWxmLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMjNcIjtcbn1cbi5mYS1sb2NhdGlvbi1hcnJvdzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEyNFwiO1xufVxuLmZhLWNyb3A6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMjVcIjtcbn1cbi5mYS1jb2RlLWZvcms6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMjZcIjtcbn1cbi5mYS11bmxpbms6YmVmb3JlLFxuLmZhLWNoYWluLWJyb2tlbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEyN1wiO1xufVxuLmZhLXF1ZXN0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTI4XCI7XG59XG4uZmEtaW5mbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEyOVwiO1xufVxuLmZhLWV4Y2xhbWF0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTJhXCI7XG59XG4uZmEtc3VwZXJzY3JpcHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMmJcIjtcbn1cbi5mYS1zdWJzY3JpcHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMmNcIjtcbn1cbi5mYS1lcmFzZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMmRcIjtcbn1cbi5mYS1wdXp6bGUtcGllY2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMmVcIjtcbn1cbi5mYS1taWNyb3Bob25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTMwXCI7XG59XG4uZmEtbWljcm9waG9uZS1zbGFzaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEzMVwiO1xufVxuLmZhLXNoaWVsZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEzMlwiO1xufVxuLmZhLWNhbGVuZGFyLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMzNcIjtcbn1cbi5mYS1maXJlLWV4dGluZ3Vpc2hlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEzNFwiO1xufVxuLmZhLXJvY2tldDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEzNVwiO1xufVxuLmZhLW1heGNkbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEzNlwiO1xufVxuLmZhLWNoZXZyb24tY2lyY2xlLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMzdcIjtcbn1cbi5mYS1jaGV2cm9uLWNpcmNsZS1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEzOFwiO1xufVxuLmZhLWNoZXZyb24tY2lyY2xlLXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTM5XCI7XG59XG4uZmEtY2hldnJvbi1jaXJjbGUtZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEzYVwiO1xufVxuLmZhLWh0bWw1OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTNiXCI7XG59XG4uZmEtY3NzMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEzY1wiO1xufVxuLmZhLWFuY2hvcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjEzZFwiO1xufVxuLmZhLXVubG9jay1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxM2VcIjtcbn1cbi5mYS1idWxsc2V5ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE0MFwiO1xufVxuLmZhLWVsbGlwc2lzLWg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNDFcIjtcbn1cbi5mYS1lbGxpcHNpcy12OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTQyXCI7XG59XG4uZmEtcnNzLXNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE0M1wiO1xufVxuLmZhLXBsYXktY2lyY2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTQ0XCI7XG59XG4uZmEtdGlja2V0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTQ1XCI7XG59XG4uZmEtbWludXMtc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTQ2XCI7XG59XG4uZmEtbWludXMtc3F1YXJlLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNDdcIjtcbn1cbi5mYS1sZXZlbC11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE0OFwiO1xufVxuLmZhLWxldmVsLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNDlcIjtcbn1cbi5mYS1jaGVjay1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNGFcIjtcbn1cbi5mYS1wZW5jaWwtc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTRiXCI7XG59XG4uZmEtZXh0ZXJuYWwtbGluay1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNGNcIjtcbn1cbi5mYS1zaGFyZS1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNGRcIjtcbn1cbi5mYS1jb21wYXNzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTRlXCI7XG59XG4uZmEtdG9nZ2xlLWRvd246YmVmb3JlLFxuLmZhLWNhcmV0LXNxdWFyZS1vLWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNTBcIjtcbn1cbi5mYS10b2dnbGUtdXA6YmVmb3JlLFxuLmZhLWNhcmV0LXNxdWFyZS1vLXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTUxXCI7XG59XG4uZmEtdG9nZ2xlLXJpZ2h0OmJlZm9yZSxcbi5mYS1jYXJldC1zcXVhcmUtby1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE1MlwiO1xufVxuLmZhLWV1cm86YmVmb3JlLFxuLmZhLWV1cjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE1M1wiO1xufVxuLmZhLWdicDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE1NFwiO1xufVxuLmZhLWRvbGxhcjpiZWZvcmUsXG4uZmEtdXNkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTU1XCI7XG59XG4uZmEtcnVwZWU6YmVmb3JlLFxuLmZhLWlucjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE1NlwiO1xufVxuLmZhLWNueTpiZWZvcmUsXG4uZmEtcm1iOmJlZm9yZSxcbi5mYS15ZW46YmVmb3JlLFxuLmZhLWpweTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE1N1wiO1xufVxuLmZhLXJ1YmxlOmJlZm9yZSxcbi5mYS1yb3VibGU6YmVmb3JlLFxuLmZhLXJ1YjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE1OFwiO1xufVxuLmZhLXdvbjpiZWZvcmUsXG4uZmEta3J3OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTU5XCI7XG59XG4uZmEtYml0Y29pbjpiZWZvcmUsXG4uZmEtYnRjOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTVhXCI7XG59XG4uZmEtZmlsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE1YlwiO1xufVxuLmZhLWZpbGUtdGV4dDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE1Y1wiO1xufVxuLmZhLXNvcnQtYWxwaGEtYXNjOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTVkXCI7XG59XG4uZmEtc29ydC1hbHBoYS1kZXNjOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTVlXCI7XG59XG4uZmEtc29ydC1hbW91bnQtYXNjOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTYwXCI7XG59XG4uZmEtc29ydC1hbW91bnQtZGVzYzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE2MVwiO1xufVxuLmZhLXNvcnQtbnVtZXJpYy1hc2M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNjJcIjtcbn1cbi5mYS1zb3J0LW51bWVyaWMtZGVzYzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE2M1wiO1xufVxuLmZhLXRodW1icy11cDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE2NFwiO1xufVxuLmZhLXRodW1icy1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTY1XCI7XG59XG4uZmEteW91dHViZS1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNjZcIjtcbn1cbi5mYS15b3V0dWJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTY3XCI7XG59XG4uZmEteGluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE2OFwiO1xufVxuLmZhLXhpbmctc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTY5XCI7XG59XG4uZmEteW91dHViZS1wbGF5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTZhXCI7XG59XG4uZmEtZHJvcGJveDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE2YlwiO1xufVxuLmZhLXN0YWNrLW92ZXJmbG93OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTZjXCI7XG59XG4uZmEtaW5zdGFncmFtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTZkXCI7XG59XG4uZmEtZmxpY2tyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTZlXCI7XG59XG4uZmEtYWRuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTcwXCI7XG59XG4uZmEtYml0YnVja2V0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTcxXCI7XG59XG4uZmEtYml0YnVja2V0LXNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE3MlwiO1xufVxuLmZhLXR1bWJscjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE3M1wiO1xufVxuLmZhLXR1bWJsci1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNzRcIjtcbn1cbi5mYS1sb25nLWFycm93LWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNzVcIjtcbn1cbi5mYS1sb25nLWFycm93LXVwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTc2XCI7XG59XG4uZmEtbG9uZy1hcnJvdy1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTc3XCI7XG59XG4uZmEtbG9uZy1hcnJvdy1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE3OFwiO1xufVxuLmZhLWFwcGxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTc5XCI7XG59XG4uZmEtd2luZG93czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE3YVwiO1xufVxuLmZhLWFuZHJvaWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxN2JcIjtcbn1cbi5mYS1saW51eDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE3Y1wiO1xufVxuLmZhLWRyaWJiYmxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTdkXCI7XG59XG4uZmEtc2t5cGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxN2VcIjtcbn1cbi5mYS1mb3Vyc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTgwXCI7XG59XG4uZmEtdHJlbGxvOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTgxXCI7XG59XG4uZmEtZmVtYWxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTgyXCI7XG59XG4uZmEtbWFsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE4M1wiO1xufVxuLmZhLWdpdHRpcDpiZWZvcmUsXG4uZmEtZ3JhdGlwYXk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxODRcIjtcbn1cbi5mYS1zdW4tbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE4NVwiO1xufVxuLmZhLW1vb24tbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE4NlwiO1xufVxuLmZhLWFyY2hpdmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxODdcIjtcbn1cbi5mYS1idWc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxODhcIjtcbn1cbi5mYS12azpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE4OVwiO1xufVxuLmZhLXdlaWJvOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMThhXCI7XG59XG4uZmEtcmVucmVuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMThiXCI7XG59XG4uZmEtcGFnZWxpbmVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMThjXCI7XG59XG4uZmEtc3RhY2stZXhjaGFuZ2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxOGRcIjtcbn1cbi5mYS1hcnJvdy1jaXJjbGUtby1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE4ZVwiO1xufVxuLmZhLWFycm93LWNpcmNsZS1vLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxOTBcIjtcbn1cbi5mYS10b2dnbGUtbGVmdDpiZWZvcmUsXG4uZmEtY2FyZXQtc3F1YXJlLW8tbGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE5MVwiO1xufVxuLmZhLWRvdC1jaXJjbGUtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE5MlwiO1xufVxuLmZhLXdoZWVsY2hhaXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxOTNcIjtcbn1cbi5mYS12aW1lby1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxOTRcIjtcbn1cbi5mYS10dXJraXNoLWxpcmE6YmVmb3JlLFxuLmZhLXRyeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE5NVwiO1xufVxuLmZhLXBsdXMtc3F1YXJlLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxOTZcIjtcbn1cbi5mYS1zcGFjZS1zaHV0dGxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTk3XCI7XG59XG4uZmEtc2xhY2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxOThcIjtcbn1cbi5mYS1lbnZlbG9wZS1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxOTlcIjtcbn1cbi5mYS13b3JkcHJlc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxOWFcIjtcbn1cbi5mYS1vcGVuaWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxOWJcIjtcbn1cbi5mYS1pbnN0aXR1dGlvbjpiZWZvcmUsXG4uZmEtYmFuazpiZWZvcmUsXG4uZmEtdW5pdmVyc2l0eTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE5Y1wiO1xufVxuLmZhLW1vcnRhci1ib2FyZDpiZWZvcmUsXG4uZmEtZ3JhZHVhdGlvbi1jYXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxOWRcIjtcbn1cbi5mYS15YWhvbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE5ZVwiO1xufVxuLmZhLWdvb2dsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFhMFwiO1xufVxuLmZhLXJlZGRpdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFhMVwiO1xufVxuLmZhLXJlZGRpdC1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYTJcIjtcbn1cbi5mYS1zdHVtYmxldXBvbi1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYTNcIjtcbn1cbi5mYS1zdHVtYmxldXBvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFhNFwiO1xufVxuLmZhLWRlbGljaW91czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFhNVwiO1xufVxuLmZhLWRpZ2c6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYTZcIjtcbn1cbi5mYS1waWVkLXBpcGVyLXBwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWE3XCI7XG59XG4uZmEtcGllZC1waXBlci1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYThcIjtcbn1cbi5mYS1kcnVwYWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYTlcIjtcbn1cbi5mYS1qb29tbGE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYWFcIjtcbn1cbi5mYS1sYW5ndWFnZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFhYlwiO1xufVxuLmZhLWZheDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFhY1wiO1xufVxuLmZhLWJ1aWxkaW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWFkXCI7XG59XG4uZmEtY2hpbGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYWVcIjtcbn1cbi5mYS1wYXc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYjBcIjtcbn1cbi5mYS1zcG9vbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFiMVwiO1xufVxuLmZhLWN1YmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYjJcIjtcbn1cbi5mYS1jdWJlczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFiM1wiO1xufVxuLmZhLWJlaGFuY2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYjRcIjtcbn1cbi5mYS1iZWhhbmNlLXNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFiNVwiO1xufVxuLmZhLXN0ZWFtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWI2XCI7XG59XG4uZmEtc3RlYW0tc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWI3XCI7XG59XG4uZmEtcmVjeWNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFiOFwiO1xufVxuLmZhLWF1dG9tb2JpbGU6YmVmb3JlLFxuLmZhLWNhcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFiOVwiO1xufVxuLmZhLWNhYjpiZWZvcmUsXG4uZmEtdGF4aTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFiYVwiO1xufVxuLmZhLXRyZWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYmJcIjtcbn1cbi5mYS1zcG90aWZ5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWJjXCI7XG59XG4uZmEtZGV2aWFudGFydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFiZFwiO1xufVxuLmZhLXNvdW5kY2xvdWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYmVcIjtcbn1cbi5mYS1kYXRhYmFzZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFjMFwiO1xufVxuLmZhLWZpbGUtcGRmLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYzFcIjtcbn1cbi5mYS1maWxlLXdvcmQtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFjMlwiO1xufVxuLmZhLWZpbGUtZXhjZWwtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFjM1wiO1xufVxuLmZhLWZpbGUtcG93ZXJwb2ludC1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWM0XCI7XG59XG4uZmEtZmlsZS1waG90by1vOmJlZm9yZSxcbi5mYS1maWxlLXBpY3R1cmUtbzpiZWZvcmUsXG4uZmEtZmlsZS1pbWFnZS1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWM1XCI7XG59XG4uZmEtZmlsZS16aXAtbzpiZWZvcmUsXG4uZmEtZmlsZS1hcmNoaXZlLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYzZcIjtcbn1cbi5mYS1maWxlLXNvdW5kLW86YmVmb3JlLFxuLmZhLWZpbGUtYXVkaW8tbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFjN1wiO1xufVxuLmZhLWZpbGUtbW92aWUtbzpiZWZvcmUsXG4uZmEtZmlsZS12aWRlby1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWM4XCI7XG59XG4uZmEtZmlsZS1jb2RlLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxYzlcIjtcbn1cbi5mYS12aW5lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWNhXCI7XG59XG4uZmEtY29kZXBlbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFjYlwiO1xufVxuLmZhLWpzZmlkZGxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWNjXCI7XG59XG4uZmEtbGlmZS1ib3V5OmJlZm9yZSxcbi5mYS1saWZlLWJ1b3k6YmVmb3JlLFxuLmZhLWxpZmUtc2F2ZXI6YmVmb3JlLFxuLmZhLXN1cHBvcnQ6YmVmb3JlLFxuLmZhLWxpZmUtcmluZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFjZFwiO1xufVxuLmZhLWNpcmNsZS1vLW5vdGNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWNlXCI7XG59XG4uZmEtcmE6YmVmb3JlLFxuLmZhLXJlc2lzdGFuY2U6YmVmb3JlLFxuLmZhLXJlYmVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWQwXCI7XG59XG4uZmEtZ2U6YmVmb3JlLFxuLmZhLWVtcGlyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFkMVwiO1xufVxuLmZhLWdpdC1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZDJcIjtcbn1cbi5mYS1naXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZDNcIjtcbn1cbi5mYS15LWNvbWJpbmF0b3Itc3F1YXJlOmJlZm9yZSxcbi5mYS15Yy1zcXVhcmU6YmVmb3JlLFxuLmZhLWhhY2tlci1uZXdzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWQ0XCI7XG59XG4uZmEtdGVuY2VudC13ZWlibzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFkNVwiO1xufVxuLmZhLXFxOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWQ2XCI7XG59XG4uZmEtd2VjaGF0OmJlZm9yZSxcbi5mYS13ZWl4aW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZDdcIjtcbn1cbi5mYS1zZW5kOmJlZm9yZSxcbi5mYS1wYXBlci1wbGFuZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFkOFwiO1xufVxuLmZhLXNlbmQtbzpiZWZvcmUsXG4uZmEtcGFwZXItcGxhbmUtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFkOVwiO1xufVxuLmZhLWhpc3Rvcnk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZGFcIjtcbn1cbi5mYS1jaXJjbGUtdGhpbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFkYlwiO1xufVxuLmZhLWhlYWRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFkY1wiO1xufVxuLmZhLXBhcmFncmFwaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFkZFwiO1xufVxuLmZhLXNsaWRlcnM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZGVcIjtcbn1cbi5mYS1zaGFyZS1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZTBcIjtcbn1cbi5mYS1zaGFyZS1hbHQtc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWUxXCI7XG59XG4uZmEtYm9tYjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFlMlwiO1xufVxuLmZhLXNvY2Nlci1iYWxsLW86YmVmb3JlLFxuLmZhLWZ1dGJvbC1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWUzXCI7XG59XG4uZmEtdHR5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWU0XCI7XG59XG4uZmEtYmlub2N1bGFyczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFlNVwiO1xufVxuLmZhLXBsdWc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZTZcIjtcbn1cbi5mYS1zbGlkZXNoYXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWU3XCI7XG59XG4uZmEtdHdpdGNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWU4XCI7XG59XG4uZmEteWVscDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFlOVwiO1xufVxuLmZhLW5ld3NwYXBlci1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWVhXCI7XG59XG4uZmEtd2lmaTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFlYlwiO1xufVxuLmZhLWNhbGN1bGF0b3I6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZWNcIjtcbn1cbi5mYS1wYXlwYWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZWRcIjtcbn1cbi5mYS1nb29nbGUtd2FsbGV0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWVlXCI7XG59XG4uZmEtY2MtdmlzYTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFmMFwiO1xufVxuLmZhLWNjLW1hc3RlcmNhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZjFcIjtcbn1cbi5mYS1jYy1kaXNjb3ZlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFmMlwiO1xufVxuLmZhLWNjLWFtZXg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZjNcIjtcbn1cbi5mYS1jYy1wYXlwYWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZjRcIjtcbn1cbi5mYS1jYy1zdHJpcGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZjVcIjtcbn1cbi5mYS1iZWxsLXNsYXNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWY2XCI7XG59XG4uZmEtYmVsbC1zbGFzaC1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWY3XCI7XG59XG4uZmEtdHJhc2g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZjhcIjtcbn1cbi5mYS1jb3B5cmlnaHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZjlcIjtcbn1cbi5mYS1hdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFmYVwiO1xufVxuLmZhLWV5ZWRyb3BwZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZmJcIjtcbn1cbi5mYS1wYWludC1icnVzaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjFmY1wiO1xufVxuLmZhLWJpcnRoZGF5LWNha2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxZmRcIjtcbn1cbi5mYS1hcmVhLWNoYXJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMWZlXCI7XG59XG4uZmEtcGllLWNoYXJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjAwXCI7XG59XG4uZmEtbGluZS1jaGFydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIwMVwiO1xufVxuLmZhLWxhc3RmbTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIwMlwiO1xufVxuLmZhLWxhc3RmbS1zcXVhcmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMDNcIjtcbn1cbi5mYS10b2dnbGUtb2ZmOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjA0XCI7XG59XG4uZmEtdG9nZ2xlLW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjA1XCI7XG59XG4uZmEtYmljeWNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIwNlwiO1xufVxuLmZhLWJ1czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIwN1wiO1xufVxuLmZhLWlveGhvc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMDhcIjtcbn1cbi5mYS1hbmdlbGxpc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMDlcIjtcbn1cbi5mYS1jYzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIwYVwiO1xufVxuLmZhLXNoZWtlbDpiZWZvcmUsXG4uZmEtc2hlcWVsOmJlZm9yZSxcbi5mYS1pbHM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMGJcIjtcbn1cbi5mYS1tZWFucGF0aDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIwY1wiO1xufVxuLmZhLWJ1eXNlbGxhZHM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMGRcIjtcbn1cbi5mYS1jb25uZWN0ZGV2ZWxvcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIwZVwiO1xufVxuLmZhLWRhc2hjdWJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjEwXCI7XG59XG4uZmEtZm9ydW1iZWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMTFcIjtcbn1cbi5mYS1sZWFucHViOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjEyXCI7XG59XG4uZmEtc2VsbHN5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjEzXCI7XG59XG4uZmEtc2hpcnRzaW5idWxrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjE0XCI7XG59XG4uZmEtc2ltcGx5YnVpbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMTVcIjtcbn1cbi5mYS1za3lhdGxhczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIxNlwiO1xufVxuLmZhLWNhcnQtcGx1czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIxN1wiO1xufVxuLmZhLWNhcnQtYXJyb3ctZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIxOFwiO1xufVxuLmZhLWRpYW1vbmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMTlcIjtcbn1cbi5mYS1zaGlwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjFhXCI7XG59XG4uZmEtdXNlci1zZWNyZXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMWJcIjtcbn1cbi5mYS1tb3RvcmN5Y2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjFjXCI7XG59XG4uZmEtc3RyZWV0LXZpZXc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMWRcIjtcbn1cbi5mYS1oZWFydGJlYXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMWVcIjtcbn1cbi5mYS12ZW51czpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIyMVwiO1xufVxuLmZhLW1hcnM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMjJcIjtcbn1cbi5mYS1tZXJjdXJ5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjIzXCI7XG59XG4uZmEtaW50ZXJzZXg6YmVmb3JlLFxuLmZhLXRyYW5zZ2VuZGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjI0XCI7XG59XG4uZmEtdHJhbnNnZW5kZXItYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjI1XCI7XG59XG4uZmEtdmVudXMtZG91YmxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjI2XCI7XG59XG4uZmEtbWFycy1kb3VibGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMjdcIjtcbn1cbi5mYS12ZW51cy1tYXJzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjI4XCI7XG59XG4uZmEtbWFycy1zdHJva2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMjlcIjtcbn1cbi5mYS1tYXJzLXN0cm9rZS12OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjJhXCI7XG59XG4uZmEtbWFycy1zdHJva2UtaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIyYlwiO1xufVxuLmZhLW5ldXRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIyY1wiO1xufVxuLmZhLWdlbmRlcmxlc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMmRcIjtcbn1cbi5mYS1mYWNlYm9vay1vZmZpY2lhbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIzMFwiO1xufVxuLmZhLXBpbnRlcmVzdC1wOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjMxXCI7XG59XG4uZmEtd2hhdHNhcHA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMzJcIjtcbn1cbi5mYS1zZXJ2ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMzNcIjtcbn1cbi5mYS11c2VyLXBsdXM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMzRcIjtcbn1cbi5mYS11c2VyLXRpbWVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjM1XCI7XG59XG4uZmEtaG90ZWw6YmVmb3JlLFxuLmZhLWJlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIzNlwiO1xufVxuLmZhLXZpYWNvaW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyMzdcIjtcbn1cbi5mYS10cmFpbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIzOFwiO1xufVxuLmZhLXN1YndheTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIzOVwiO1xufVxuLmZhLW1lZGl1bTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjIzYVwiO1xufVxuLmZhLXljOmJlZm9yZSxcbi5mYS15LWNvbWJpbmF0b3I6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyM2JcIjtcbn1cbi5mYS1vcHRpbi1tb25zdGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjNjXCI7XG59XG4uZmEtb3BlbmNhcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyM2RcIjtcbn1cbi5mYS1leHBlZGl0ZWRzc2w6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyM2VcIjtcbn1cbi5mYS1iYXR0ZXJ5LTQ6YmVmb3JlLFxuLmZhLWJhdHRlcnk6YmVmb3JlLFxuLmZhLWJhdHRlcnktZnVsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI0MFwiO1xufVxuLmZhLWJhdHRlcnktMzpiZWZvcmUsXG4uZmEtYmF0dGVyeS10aHJlZS1xdWFydGVyczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI0MVwiO1xufVxuLmZhLWJhdHRlcnktMjpiZWZvcmUsXG4uZmEtYmF0dGVyeS1oYWxmOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjQyXCI7XG59XG4uZmEtYmF0dGVyeS0xOmJlZm9yZSxcbi5mYS1iYXR0ZXJ5LXF1YXJ0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNDNcIjtcbn1cbi5mYS1iYXR0ZXJ5LTA6YmVmb3JlLFxuLmZhLWJhdHRlcnktZW1wdHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNDRcIjtcbn1cbi5mYS1tb3VzZS1wb2ludGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjQ1XCI7XG59XG4uZmEtaS1jdXJzb3I6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNDZcIjtcbn1cbi5mYS1vYmplY3QtZ3JvdXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNDdcIjtcbn1cbi5mYS1vYmplY3QtdW5ncm91cDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI0OFwiO1xufVxuLmZhLXN0aWNreS1ub3RlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjQ5XCI7XG59XG4uZmEtc3RpY2t5LW5vdGUtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI0YVwiO1xufVxuLmZhLWNjLWpjYjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI0YlwiO1xufVxuLmZhLWNjLWRpbmVycy1jbHViOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjRjXCI7XG59XG4uZmEtY2xvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNGRcIjtcbn1cbi5mYS1iYWxhbmNlLXNjYWxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjRlXCI7XG59XG4uZmEtaG91cmdsYXNzLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNTBcIjtcbn1cbi5mYS1ob3VyZ2xhc3MtMTpiZWZvcmUsXG4uZmEtaG91cmdsYXNzLXN0YXJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjUxXCI7XG59XG4uZmEtaG91cmdsYXNzLTI6YmVmb3JlLFxuLmZhLWhvdXJnbGFzcy1oYWxmOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjUyXCI7XG59XG4uZmEtaG91cmdsYXNzLTM6YmVmb3JlLFxuLmZhLWhvdXJnbGFzcy1lbmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNTNcIjtcbn1cbi5mYS1ob3VyZ2xhc3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNTRcIjtcbn1cbi5mYS1oYW5kLWdyYWItbzpiZWZvcmUsXG4uZmEtaGFuZC1yb2NrLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNTVcIjtcbn1cbi5mYS1oYW5kLXN0b3AtbzpiZWZvcmUsXG4uZmEtaGFuZC1wYXBlci1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjU2XCI7XG59XG4uZmEtaGFuZC1zY2lzc29ycy1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjU3XCI7XG59XG4uZmEtaGFuZC1saXphcmQtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI1OFwiO1xufVxuLmZhLWhhbmQtc3BvY2stbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI1OVwiO1xufVxuLmZhLWhhbmQtcG9pbnRlci1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjVhXCI7XG59XG4uZmEtaGFuZC1wZWFjZS1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjViXCI7XG59XG4uZmEtdHJhZGVtYXJrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjVjXCI7XG59XG4uZmEtcmVnaXN0ZXJlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI1ZFwiO1xufVxuLmZhLWNyZWF0aXZlLWNvbW1vbnM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNWVcIjtcbn1cbi5mYS1nZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI2MFwiO1xufVxuLmZhLWdnLWNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI2MVwiO1xufVxuLmZhLXRyaXBhZHZpc29yOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjYyXCI7XG59XG4uZmEtb2Rub2tsYXNzbmlraTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI2M1wiO1xufVxuLmZhLW9kbm9rbGFzc25pa2ktc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjY0XCI7XG59XG4uZmEtZ2V0LXBvY2tldDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI2NVwiO1xufVxuLmZhLXdpa2lwZWRpYS13OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjY2XCI7XG59XG4uZmEtc2FmYXJpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjY3XCI7XG59XG4uZmEtY2hyb21lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjY4XCI7XG59XG4uZmEtZmlyZWZveDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI2OVwiO1xufVxuLmZhLW9wZXJhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjZhXCI7XG59XG4uZmEtaW50ZXJuZXQtZXhwbG9yZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNmJcIjtcbn1cbi5mYS10djpiZWZvcmUsXG4uZmEtdGVsZXZpc2lvbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI2Y1wiO1xufVxuLmZhLWNvbnRhbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI2ZFwiO1xufVxuLmZhLTUwMHB4OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjZlXCI7XG59XG4uZmEtYW1hem9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjcwXCI7XG59XG4uZmEtY2FsZW5kYXItcGx1cy1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjcxXCI7XG59XG4uZmEtY2FsZW5kYXItbWludXMtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI3MlwiO1xufVxuLmZhLWNhbGVuZGFyLXRpbWVzLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNzNcIjtcbn1cbi5mYS1jYWxlbmRhci1jaGVjay1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjc0XCI7XG59XG4uZmEtaW5kdXN0cnk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNzVcIjtcbn1cbi5mYS1tYXAtcGluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjc2XCI7XG59XG4uZmEtbWFwLXNpZ25zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjc3XCI7XG59XG4uZmEtbWFwLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNzhcIjtcbn1cbi5mYS1tYXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyNzlcIjtcbn1cbi5mYS1jb21tZW50aW5nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjdhXCI7XG59XG4uZmEtY29tbWVudGluZy1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjdiXCI7XG59XG4uZmEtaG91eno6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyN2NcIjtcbn1cbi5mYS12aW1lbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI3ZFwiO1xufVxuLmZhLWJsYWNrLXRpZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI3ZVwiO1xufVxuLmZhLWZvbnRpY29uczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI4MFwiO1xufVxuLmZhLXJlZGRpdC1hbGllbjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI4MVwiO1xufVxuLmZhLWVkZ2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyODJcIjtcbn1cbi5mYS1jcmVkaXQtY2FyZC1hbHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyODNcIjtcbn1cbi5mYS1jb2RpZXBpZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI4NFwiO1xufVxuLmZhLW1vZHg6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyODVcIjtcbn1cbi5mYS1mb3J0LWF3ZXNvbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyODZcIjtcbn1cbi5mYS11c2I6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyODdcIjtcbn1cbi5mYS1wcm9kdWN0LWh1bnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyODhcIjtcbn1cbi5mYS1taXhjbG91ZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI4OVwiO1xufVxuLmZhLXNjcmliZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI4YVwiO1xufVxuLmZhLXBhdXNlLWNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI4YlwiO1xufVxuLmZhLXBhdXNlLWNpcmNsZS1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjhjXCI7XG59XG4uZmEtc3RvcC1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyOGRcIjtcbn1cbi5mYS1zdG9wLWNpcmNsZS1vOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjhlXCI7XG59XG4uZmEtc2hvcHBpbmctYmFnOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjkwXCI7XG59XG4uZmEtc2hvcHBpbmctYmFza2V0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjkxXCI7XG59XG4uZmEtaGFzaHRhZzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI5MlwiO1xufVxuLmZhLWJsdWV0b290aDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI5M1wiO1xufVxuLmZhLWJsdWV0b290aC1iOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjk0XCI7XG59XG4uZmEtcGVyY2VudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI5NVwiO1xufVxuLmZhLWdpdGxhYjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI5NlwiO1xufVxuLmZhLXdwYmVnaW5uZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyOTdcIjtcbn1cbi5mYS13cGZvcm1zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjk4XCI7XG59XG4uZmEtZW52aXJhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjk5XCI7XG59XG4uZmEtdW5pdmVyc2FsLWFjY2VzczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI5YVwiO1xufVxuLmZhLXdoZWVsY2hhaXItYWx0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjliXCI7XG59XG4uZmEtcXVlc3Rpb24tY2lyY2xlLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyOWNcIjtcbn1cbi5mYS1ibGluZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjI5ZFwiO1xufVxuLmZhLWF1ZGlvLWRlc2NyaXB0aW9uOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMjllXCI7XG59XG4uZmEtdm9sdW1lLWNvbnRyb2wtcGhvbmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYTBcIjtcbn1cbi5mYS1icmFpbGxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmExXCI7XG59XG4uZmEtYXNzaXN0aXZlLWxpc3RlbmluZy1zeXN0ZW1zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmEyXCI7XG59XG4uZmEtYXNsLWludGVycHJldGluZzpiZWZvcmUsXG4uZmEtYW1lcmljYW4tc2lnbi1sYW5ndWFnZS1pbnRlcnByZXRpbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYTNcIjtcbn1cbi5mYS1kZWFmbmVzczpiZWZvcmUsXG4uZmEtaGFyZC1vZi1oZWFyaW5nOmJlZm9yZSxcbi5mYS1kZWFmOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmE0XCI7XG59XG4uZmEtZ2xpZGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYTVcIjtcbn1cbi5mYS1nbGlkZS1nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmE2XCI7XG59XG4uZmEtc2lnbmluZzpiZWZvcmUsXG4uZmEtc2lnbi1sYW5ndWFnZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJhN1wiO1xufVxuLmZhLWxvdy12aXNpb246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYThcIjtcbn1cbi5mYS12aWFkZW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYTlcIjtcbn1cbi5mYS12aWFkZW8tc3F1YXJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmFhXCI7XG59XG4uZmEtc25hcGNoYXQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYWJcIjtcbn1cbi5mYS1zbmFwY2hhdC1naG9zdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJhY1wiO1xufVxuLmZhLXNuYXBjaGF0LXNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJhZFwiO1xufVxuLmZhLXBpZWQtcGlwZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYWVcIjtcbn1cbi5mYS1maXJzdC1vcmRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJiMFwiO1xufVxuLmZhLXlvYXN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmIxXCI7XG59XG4uZmEtdGhlbWVpc2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmIyXCI7XG59XG4uZmEtZ29vZ2xlLXBsdXMtY2lyY2xlOmJlZm9yZSxcbi5mYS1nb29nbGUtcGx1cy1vZmZpY2lhbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJiM1wiO1xufVxuLmZhLWZhOmJlZm9yZSxcbi5mYS1mb250LWF3ZXNvbWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYjRcIjtcbn1cbi5mYS1oYW5kc2hha2UtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJiNVwiO1xufVxuLmZhLWVudmVsb3BlLW9wZW46YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYjZcIjtcbn1cbi5mYS1lbnZlbG9wZS1vcGVuLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYjdcIjtcbn1cbi5mYS1saW5vZGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYjhcIjtcbn1cbi5mYS1hZGRyZXNzLWJvb2s6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYjlcIjtcbn1cbi5mYS1hZGRyZXNzLWJvb2stbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJiYVwiO1xufVxuLmZhLXZjYXJkOmJlZm9yZSxcbi5mYS1hZGRyZXNzLWNhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYmJcIjtcbn1cbi5mYS12Y2FyZC1vOmJlZm9yZSxcbi5mYS1hZGRyZXNzLWNhcmQtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJiY1wiO1xufVxuLmZhLXVzZXItY2lyY2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmJkXCI7XG59XG4uZmEtdXNlci1jaXJjbGUtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJiZVwiO1xufVxuLmZhLXVzZXItbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJjMFwiO1xufVxuLmZhLWlkLWJhZGdlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmMxXCI7XG59XG4uZmEtZHJpdmVycy1saWNlbnNlOmJlZm9yZSxcbi5mYS1pZC1jYXJkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmMyXCI7XG59XG4uZmEtZHJpdmVycy1saWNlbnNlLW86YmVmb3JlLFxuLmZhLWlkLWNhcmQtbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJjM1wiO1xufVxuLmZhLXF1b3JhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmM0XCI7XG59XG4uZmEtZnJlZS1jb2RlLWNhbXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYzVcIjtcbn1cbi5mYS10ZWxlZ3JhbTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJjNlwiO1xufVxuLmZhLXRoZXJtb21ldGVyLTQ6YmVmb3JlLFxuLmZhLXRoZXJtb21ldGVyOmJlZm9yZSxcbi5mYS10aGVybW9tZXRlci1mdWxsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmM3XCI7XG59XG4uZmEtdGhlcm1vbWV0ZXItMzpiZWZvcmUsXG4uZmEtdGhlcm1vbWV0ZXItdGhyZWUtcXVhcnRlcnM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyYzhcIjtcbn1cbi5mYS10aGVybW9tZXRlci0yOmJlZm9yZSxcbi5mYS10aGVybW9tZXRlci1oYWxmOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmM5XCI7XG59XG4uZmEtdGhlcm1vbWV0ZXItMTpiZWZvcmUsXG4uZmEtdGhlcm1vbWV0ZXItcXVhcnRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJjYVwiO1xufVxuLmZhLXRoZXJtb21ldGVyLTA6YmVmb3JlLFxuLmZhLXRoZXJtb21ldGVyLWVtcHR5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmNiXCI7XG59XG4uZmEtc2hvd2VyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmNjXCI7XG59XG4uZmEtYmF0aHR1YjpiZWZvcmUsXG4uZmEtczE1OmJlZm9yZSxcbi5mYS1iYXRoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmNkXCI7XG59XG4uZmEtcG9kY2FzdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJjZVwiO1xufVxuLmZhLXdpbmRvdy1tYXhpbWl6ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJkMFwiO1xufVxuLmZhLXdpbmRvdy1taW5pbWl6ZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJkMVwiO1xufVxuLmZhLXdpbmRvdy1yZXN0b3JlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmQyXCI7XG59XG4uZmEtdGltZXMtcmVjdGFuZ2xlOmJlZm9yZSxcbi5mYS13aW5kb3ctY2xvc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyZDNcIjtcbn1cbi5mYS10aW1lcy1yZWN0YW5nbGUtbzpiZWZvcmUsXG4uZmEtd2luZG93LWNsb3NlLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyZDRcIjtcbn1cbi5mYS1iYW5kY2FtcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJkNVwiO1xufVxuLmZhLWdyYXY6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyZDZcIjtcbn1cbi5mYS1ldHN5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmQ3XCI7XG59XG4uZmEtaW1kYjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJkOFwiO1xufVxuLmZhLXJhdmVscnk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyZDlcIjtcbn1cbi5mYS1lZXJjYXN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmRhXCI7XG59XG4uZmEtbWljcm9jaGlwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMmRiXCI7XG59XG4uZmEtc25vd2ZsYWtlLW86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyZGNcIjtcbn1cbi5mYS1zdXBlcnBvd2VyczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjJkZFwiO1xufVxuLmZhLXdwZXhwbG9yZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyZGVcIjtcbn1cbi5mYS1tZWV0dXA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYyZTBcIjtcbn1cbi5zci1vbmx5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICBib3JkZXI6IDA7XG59XG4uc3Itb25seS1mb2N1c2FibGU6YWN0aXZlLFxuLnNyLW9ubHktZm9jdXNhYmxlOmZvY3VzIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgY2xpcDogYXV0bztcbn1cbiIsIkBpbXBvcnQgdXJsKCcuLi9zdHlsZXMuY3NzJyk7XG5cbi5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnNpZGViYXJ7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgZm9udC1zaXplOiAwLjY1ZW07XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iZy1yZWQpO1xufVxuXG4ubWFpbi1jb250ZW50e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmctd2hpdGUpO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLndyYXBwZXJ7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNwcm9maWxle1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvd2F2ZXMxLnN2ZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4jdGVjaG5vbG9naWVze1xuYmFja2dyb3VuZC1jb2xvcjogI0ZGRUVERDtcbn1cblxuI2Jsb2dze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNCOEI4RkY7XG59XG5cbiNwcm9qZWN0c3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkZEOEJEO1xufVxuXG4jZWR1Y2F0aW9ue1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3BlbmNpbC5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLyoqXG4tLS0tLS0tLS0tLS0tLS0tLS1cblNvY2lhbCBNZWRpYSBJY29ucyBvbiB0aGUgcmlnaHRcbi0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuLnNvY2lhbE1lZGlhe1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBjb2xvcjogZ3JleTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB0b3A6NTAlO1xuICAgIHJpZ2h0OiAwJTtcbn1cblxuLnNvY2lhbE1lZGlhIC5mb2xsb3d7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLmZvbGxvdzo6YWZ0ZXJ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTAwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbn1cblxuLmljb25ze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6NDAlO1xufVxuXG4ubWVkaWF7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBncmV5O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XG59XG5cbi5tZWRpYTpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG59XG5cbi8qXG4tLS0tLS0tLS0tLS0tLS0tLS1cbk9wZW4gYW5kIENsb3NlIHNpZGViYXJcbi0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuLmZhLWJhcnN7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgdG9wOjUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiByZ2JhKDIzOCwgMjM1LCAyMDgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctcmVkKTtcbn1cblxuLmZhLXRpbWVze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICByaWdodDowO1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6IHJnYmEoMjM4LCAyMzUsIDIwOCk7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");





let AppComponent = class AppComponent {
    constructor(helperService) {
        this.helperService = helperService;
        this.title = 'Portfolio';
        this.sidebarVisible = true;
        this.currentSection = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('profile');
        this.sections = ['profile', 'technologies', 'blogs', 'projects', 'education', 'contact'];
    }
    ngOnInit() {
        this.getSidebarStatus();
        document.getElementById('main').addEventListener('scroll', () => {
            this.keepTrack();
        });
    }
    getSidebarStatus() {
        this.helperService.getSidebarStatus().subscribe(res => {
            this.sidebarVisible = res;
        });
    }
    changeSection(section) {
        let element = document.getElementById(section);
        element.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" });
    }
    keepTrack() {
        const viewHeight = window.innerHeight;
        for (var section of this.sections) {
            let index = this.sections.find(data => data == section);
            const element = document.getElementById(index);
            if (element != null) {
                const rect = element.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < viewHeight / 3) {
                    this.currentSection.next(section);
                }
            }
        }
    }
    openSidebar() {
        this.helperService.setSidebarStatus(true);
    }
    closeSideBar() {
        this.helperService.setSidebarStatus(false);
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('inOutAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ width: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ width: 500 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ width: 500 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ width: 0 }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _technologies_technologies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./technologies/technologies.component */ "./src/app/technologies/technologies.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blogs/blogs.component */ "./src/app/blogs/blogs.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
            _technologies_technologies_component__WEBPACK_IMPORTED_MODULE_7__["TechnologiesComponent"],
            _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_12__["BlogsComponent"],
            _education_education_component__WEBPACK_IMPORTED_MODULE_13__["EducationComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/blogs/blogs.component.css":
/*!*******************************************!*\
  !*** ./src/app/blogs/blogs.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\n    font-size: 50px;\n    color: #424B54;\n    line-height: 2em;\n    letter-spacing: 0.1em;\n}\n\nmat-card{\n    margin: 1em;\n    width: 200px;\n    height: 75px;\n}\n\na{\n    padding: 5px;\n    text-decoration: none;\n}\n\n.container div{\n    display: flex;\n\n    flex-wrap: wrap;\n\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZ3MvYmxvZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhOztJQUViLGVBQWU7O0FBRW5CIiwiZmlsZSI6InNyYy9hcHAvYmxvZ3MvYmxvZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBjb2xvcjogIzQyNEI1NDtcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbn1cblxubWF0LWNhcmR7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNzVweDtcbn1cblxuYXtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29udGFpbmVyIGRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG59XG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/blogs/blogs.component.ts":
/*!******************************************!*\
  !*** ./src/app/blogs/blogs.component.ts ***!
  \******************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let BlogsComponent = class BlogsComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.getBlogsData();
    }
    getBlogsData() {
        this.http.get('assets/data/blogs.json')
            .subscribe((res) => {
            this.blogs = res.blogs;
            this.certifications = res.certifications;
        });
    }
};
BlogsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BlogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-blogs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blogs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blogs/blogs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blogs.component.css */ "./src/app/blogs/blogs.component.css")).default]
    })
], BlogsComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\n    font-size: 50px;\n    color: #424B54;\n    line-height: 2em;\n    letter-spacing: 0.1em;\n}\n\n.field{\n    display: block;\n    width: auto;\n    margin: 10px 0;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBjb2xvcjogIzQyNEI1NDtcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbn1cblxuLmZpZWxke1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let ContactComponent = class ContactComponent {
    constructor(fb, _snackBar) {
        this.fb = fb;
        this._snackBar = _snackBar;
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.contactForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    getErrorMessage(control) {
        if (control.errors.required) {
            return 'Required';
        }
        if (control.errors.email) {
            return 'Invalid Email';
        }
    }
    onSubmit() {
        if (this.contactForm.valid) {
            this.messageInfo = this.contactForm.value;
            this._snackBar.open('Message Submitted', 'Close', {
                duration: 2000
            });
        }
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/education/education.component.css":
/*!***************************************************!*\
  !*** ./src/app/education/education.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\n    margin: 0 5em;\n}\n\nh1{\n    font-size: 50px;\n    color: #424B54;\n    line-height: 2em;\n    letter-spacing: 0.1em;\n}\n\n.school{\n    display: grid;\n    grid-template-columns: 2fr 2fr;\n}\n\n.school div{\n    padding: 1em 0;\n}\n\n.school div h2{\n    font-size: large;\n}\n\n.courses{\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.course{\n    background-color: blanchedalmond;\n    padding: 0.5em;\n    margin: 0.25em;\n    border-radius: 10px;\n    cursor:pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgbWFyZ2luOiAwIDVlbTtcbn1cblxuaDF7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGNvbG9yOiAjNDI0QjU0O1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xufVxuXG4uc2Nob29se1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyO1xufVxuXG4uc2Nob29sIGRpdntcbiAgICBwYWRkaW5nOiAxZW0gMDtcbn1cblxuLnNjaG9vbCBkaXYgaDJ7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmNvdXJzZXN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jb3Vyc2V7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgbWFyZ2luOiAwLjI1ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let EducationComponent = class EducationComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.getEducationDetails();
    }
    getEducationDetails() {
        this.http.get('/assets/data/education.json')
            .subscribe((res) => {
            this.schools = res.education;
        });
    }
};
EducationComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-education',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/education/education.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./education.component.css */ "./src/app/education/education.component.css")).default]
    })
], EducationComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\n    font-size: 50px;\n    color: #424B54;\n    line-height: 2em;\n    letter-spacing: 0.1em;\n}\n\n.container{\n  \n}\n\n.intro{\n    width: 100%;\n    font-size: 24px;\n    -webkit-animation: typing 5s steps(60), blink 1s step-end infinite alternate;\n            animation: typing 5s steps(60), blink 1s step-end infinite alternate;\n    white-space: nowrap;\n    overflow: hidden;\n    border-right: 3px solid;\n    font-family: monospace;\n}\n\n@-webkit-keyframes typing {\n    from {\n      width: 0\n    }\n  }\n\n@keyframes typing {\n    from {\n      width: 0\n    }\n  }\n\n@-webkit-keyframes blink {\n    50% {\n      border-color: transparent\n    }\n  }\n\n@keyframes blink {\n    50% {\n      border-color: transparent\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLDRFQUFvRTtZQUFwRSxvRUFBb0U7SUFDcEUsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7TUFDRTtJQUNGO0VBQ0Y7O0FBSkY7SUFDSTtNQUNFO0lBQ0Y7RUFDRjs7QUFFQTtJQUNFO01BQ0U7SUFDRjtFQUNGOztBQUpBO0lBQ0U7TUFDRTtJQUNGO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBjb2xvcjogIzQyNEI1NDtcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbn1cblxuLmNvbnRhaW5lcntcbiAgXG59XG5cbi5pbnRyb3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgYW5pbWF0aW9uOiB0eXBpbmcgNXMgc3RlcHMoNjApLCBibGluayAxcyBzdGVwLWVuZCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkO1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG5cbkBrZXlmcmFtZXMgdHlwaW5nIHtcbiAgICBmcm9tIHtcbiAgICAgIHdpZHRoOiAwXG4gICAgfVxuICB9XG4gICAgICBcbiAgQGtleWZyYW1lcyBibGluayB7XG4gICAgNTAlIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnRcbiAgICB9XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ProfileComponent = class ProfileComponent {
    constructor(http) {
        this.http = http;
        this.getProfile();
    }
    ngOnInit() {
    }
    getProfile() {
        this.http.get('../assets/data/profile.json')
            .subscribe((res) => {
            this.profile = res.profile;
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\n    font-size: 50px;\n    color: #424B54;\n    line-height: 2em;\n    letter-spacing: 0.1em;\n}\n\n.container div{\n    display: flex;\n    flex-wrap: wrap;\n}\n\na{\n    margin: 1.5em;\n    text-decoration: none;\n    align-items: center;\n    box-shadow: 10px black;\n}\n\nimg{\n    display: block;\n    max-height:5em;\n    max-width: 5em;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsc0JBQW1CO09BQW5CLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgY29sb3I6ICM0MjRCNTQ7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG59XG5cbi5jb250YWluZXIgZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5he1xuICAgIG1hcmdpbjogMS41ZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMTBweCBibGFjaztcbn1cblxuaW1ne1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC1oZWlnaHQ6NWVtO1xuICAgIG1heC13aWR0aDogNWVtO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59Il19 */");

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ProjectsComponent = class ProjectsComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.getProjects();
    }
    getProjects() {
        this.http.get('../assets/data/projects.json')
            .subscribe((res) => {
            this.projects = res.projects;
        });
    }
};
ProjectsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")).default]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/services/helper.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/helper.service.ts ***!
  \********************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let HelperService = class HelperService {
    constructor() {
        this.sidebarVisible = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    setSidebarStatus(status) {
        this.sidebarVisible.next(status);
    }
    getSidebarStatus() {
        return this.sidebarVisible.asObservable();
    }
};
HelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HelperService);



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav{\n    margin: 10% 12%;\n    text-align: right;\n    font-weight: bold;\n}\n\n.profile{\n    text-align: center;\n    color: rgba(238, 235, 208);\n}\n\n.profile img{\n    width: 12em;\n    height: 12em;\n    border-radius: 50%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.profile h3{\n    text-transform: uppercase;\n    letter-spacing: 0.2em;\n    line-height: 3em;\n}\n\n.location{\n    color: #503D42;\n    background-color: blanchedalmond;\n    padding: 0.5em;\n    margin: 0.25em;\n    border-radius: 10px;\n    cursor:pointer;\n}\n\n.nav ul{\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n\n}\n\nli{\n    position: relative;\n    margin: 1.8em 0;\n}\n\na{\n    line-height: 2em;\n    text-transform: uppercase;\n    text-decoration: none;\n    letter-spacing: 0.4em;\n    display: block;\n    transition: all ease-out 300ms;\n    color: rgba(238, 235, 208, 0.5);\n}\n\na:hover, .active {\n    color: rgba(238, 235, 208);\n\n}\n\na::after{\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 0.2em;\n    background: black;\n    left: 0;\n    bottom: 0;\n    background-image: linear-gradient(to right, #EEEBD0, #a29d6e)\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBaUI7T0FBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksMEJBQTBCOztBQUU5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsT0FBTztJQUNQLFNBQVM7SUFDVDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7XG4gICAgbWFyZ2luOiAxMCUgMTIlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvZmlsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYmEoMjM4LCAyMzUsIDIwOCk7XG59XG5cbi5wcm9maWxlIGltZ3tcbiAgICB3aWR0aDogMTJlbTtcbiAgICBoZWlnaHQ6IDEyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ucHJvZmlsZSBoM3tcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjJlbTtcbiAgICBsaW5lLWhlaWdodDogM2VtO1xufVxuXG4ubG9jYXRpb257XG4gICAgY29sb3I6ICM1MDNENDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhbmNoZWRhbG1vbmQ7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgbWFyZ2luOiAwLjI1ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbn1cblxuLm5hdiB1bHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbn1cblxubGl7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMS44ZW0gMDtcbn1cblxuYXtcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjRlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1vdXQgMzAwbXM7XG4gICAgY29sb3I6IHJnYmEoMjM4LCAyMzUsIDIwOCwgMC41KTtcbn1cblxuYTpob3ZlciwgLmFjdGl2ZSB7XG4gICAgY29sb3I6IHJnYmEoMjM4LCAyMzUsIDIwOCk7XG5cbn1cblxuYTo6YWZ0ZXJ7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMC4yZW07XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRUVFQkQwLCAjYTI5ZDZlKVxufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/helper.service */ "./src/app/services/helper.service.ts");



let SidebarComponent = class SidebarComponent {
    constructor(helperService) {
        this.helperService = helperService;
        this.sectionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.activeSection.subscribe(res => {
            this.currentSection = res;
        });
        this.getSidebarStatus();
    }
    getSidebarStatus() {
        this.helperService.getSidebarStatus().subscribe(res => {
            this.sidebarVisible = res;
        });
    }
    changeSection(section) {
        this.sectionEvent.emit(section);
        this.currentSection = section;
    }
    closeSideBar() {
        this.helperService.setSidebarStatus(false);
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('activeSection')
], SidebarComponent.prototype, "activeSection", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SidebarComponent.prototype, "sectionEvent", void 0);
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")).default]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/technologies/technologies.component.css":
/*!*********************************************************!*\
  !*** ./src/app/technologies/technologies.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\n    margin: 0 5em;\n    max-height: 100%;\n}\n\nh1{\n    font-size: 50px;\n    color: #424B54;\n    line-height: 2em;\n    letter-spacing: 0.1em;\n}\n\n.flex{\n    display: flex;\n    flex-wrap: wrap;\n}\n\nimg{\n    width: 150px;\n    max-width: 150px;\n    background-size: contain;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVjaG5vbG9naWVzL3RlY2hub2xvZ2llcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC90ZWNobm9sb2dpZXMvdGVjaG5vbG9naWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIG1hcmdpbjogMCA1ZW07XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuaDF7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGNvbG9yOiAjNDI0QjU0O1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xufVxuXG4uZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuaW1ne1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/technologies/technologies.component.ts":
/*!********************************************************!*\
  !*** ./src/app/technologies/technologies.component.ts ***!
  \********************************************************/
/*! exports provided: TechnologiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologiesComponent", function() { return TechnologiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TechnologiesComponent = class TechnologiesComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.getSkills();
    }
    getSkills() {
        this.http.get('../assets/data/blogs.json')
            .subscribe((res) => {
            this.skills = res.skills;
        });
    }
};
TechnologiesComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TechnologiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-technologies',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./technologies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/technologies/technologies.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./technologies.component.css */ "./src/app/technologies/technologies.component.css")).default]
    })
], TechnologiesComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/saikiran/Desktop/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map