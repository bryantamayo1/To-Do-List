(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\mis_documentos\yecasan\bryan-personal\To-Do-List\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "CvMt":
/*!***************************************************!*\
  !*** ./src/app/components/task/task.component.ts ***!
  \***************************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class TaskComponent {
    constructor() {
        this.closeEevent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.valModified = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.countLetters = 0;
    }
    ngOnInit() {
        this.countLetters = this.taskName.length;
    }
    close() {
        this.closeEevent.emit("close");
    }
    /*
    onNameChange(val:string) {
      this.valModifiedSave = val;
    
    }
    */
    sendModified() {
        this.valModified.emit(this.taskName);
        this.closeEevent.emit("close");
    }
    countChars(event) {
        //console.log("event: ",event.target.value.length );
        this.countLetters = event.target.value.length;
    }
}
TaskComponent.ɵfac = function TaskComponent_Factory(t) { return new (t || TaskComponent)(); };
TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskComponent, selectors: [["app-task"]], inputs: { taskName: "taskName" }, outputs: { closeEevent: "closeEevent", valModified: "valModified" }, decls: 10, vars: 2, consts: [[1, "sonComponent"], [1, "row", "imgClose"], ["src", "./assets/images/close.png", "alt", "close", 1, "close", 3, "click"], [1, "row", "textModified"], ["type", "text", "maxlength", "100", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup.enter", "keyup"], ["id", "charNum"], [1, "row", "buttomModified"], [1, "myButtom", 3, "click"]], template: function TaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_img_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskComponent_Template_input_ngModelChange_4_listener($event) { return ctx.taskName = $event; })("keyup.enter", function TaskComponent_Template_input_keyup_enter_4_listener() { return ctx.sendModified(); })("keyup", function TaskComponent_Template_input_keyup_4_listener($event) { return ctx.countChars($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_div_click_8_listener() { return ctx.sendModified(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Modificate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.taskName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.countLetters, " / 100");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');\r\n\r\n.close[_ngcontent-%COMP%]{\r\n  width: 15px;\r\n  height: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n.sonComponent[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.imgClose[_ngcontent-%COMP%] {\r\n  margin-left: 0 !important;\r\n  margin-right: 4px !important;\r\n  margin-top: 4px !important;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.textModified[_ngcontent-%COMP%]{\r\n  margin-top: 10px;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n\r\n}\r\n\r\n.buttomModified[_ngcontent-%COMP%]{\r\n  justify-content: center;\r\n  margin-top: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.myButtom[_ngcontent-%COMP%]{\r\n  height: 30px;\r\n  background:#007bff;\r\n  color:white;\r\n  border-radius: 6px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.myButtom[_ngcontent-%COMP%]:focus{\r\n  box-shadow: none;\r\n  background: #007BFF;\r\n}\r\n\r\n#charNum[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-right: 3px;\r\n  font-family: 'Audiowide',cursive;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrL3Rhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7O0FBRTlFO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0NBQWdDOztBQUVsQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFzay90YXNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BdWRpb3dpZGUmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4uY2xvc2V7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNvbkNvbXBvbmVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5pbWdDbG9zZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDRweCAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi50ZXh0TW9kaWZpZWR7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG5cclxufVxyXG5cclxuLmJ1dHRvbU1vZGlmaWVke1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5teUJ1dHRvbXtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDojMDA3YmZmO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm15QnV0dG9tOmZvY3Vze1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogIzAwN0JGRjtcclxufVxyXG5cclxuI2NoYXJOdW17XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIGZvbnQtZmFtaWx5OiAnQXVkaW93aWRlJyxjdXJzaXZlO1xyXG5cclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task',
                templateUrl: './task.component.html',
                styleUrls: ['./task.component.css']
            }]
    }], function () { return []; }, { taskName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeEevent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], valModified: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_task_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/task/task.component */ "CvMt");






function AppComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-task", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeEevent", function AppComponent_div_0_div_1_Template_app_task_closeEevent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.close($event); })("valModified", function AppComponent_div_0_div_1_Template_app_task_valModified_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.modifiedValUser($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("taskName", ctx_r4.taskModified[0].name);
} }
function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_0_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.modifiedClick);
} }
const _c0 = function (a0) { return { "containerTasksDark": a0 }; };
const _c1 = function (a0) { return { "borderRightDark": a0 }; };
function AppComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_21_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const task_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.modifiedTask(task_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_21_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const task_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.modifiedTask(task_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_21_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const task_r8 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.modifiedTask(task_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_div_21_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const task_r8 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.clickCheck($event, task_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_21_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const task_r8 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.deleteTask(task_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", task_r8.check && ctx_r1.testCheck)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r1.modeChange == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx_r1.modeChange == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx_r1.modeChange == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.changeLetter(task_r8.name, "-", ","), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx_r1.modeChange == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r8.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx_r1.modeChange == true));
} }
function AppComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_27_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.hiddenComplete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hide complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_28_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.showComplete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { "headerDark": a0 }; };
const _c3 = function (a0) { return { "body-containerDark": a0 }; };
const _c4 = function (a0) { return { "myTableDark": a0 }; };
const _c5 = function (a0) { return { "myFooterDark": a0 }; };
class AppComponent {
    //detectScreen : boolean = true;
    constructor() {
        //this.x.addEventListener("resize",this.changeScreen);
        //$(window).resize(this.changeScreen);
        this.bufferTask = [];
        this.nameTask = "";
        this.showTask = true;
        this.testCheck = false;
        this.year = new Date().getFullYear();
        this.cont = 0;
        this.modeChange = false;
        this.contMode = 0;
        this.modifiedClick = false;
        this.taskModified = [{
                id: 0,
                name: "0",
                check: false,
                date: "0"
            }];
    }
    ngOnInit() {
    }
    mode() {
        this.contMode++;
        if (this.contMode % 2 == 0) {
            this.modeChange = false;
        }
        else {
            this.modeChange = true;
        }
    }
    addTask() {
        if (this.nameTask !== "") {
            let dateTask = new Date();
            let newDate = JSON.parse(JSON.stringify(dateTask.getDate())) + "/" +
                JSON.parse(JSON.stringify(dateTask.getMonth())) + 1 + "/" +
                JSON.parse(JSON.stringify(dateTask.getFullYear())) + " " +
                JSON.parse(JSON.stringify(dateTask.getHours())) + ":" +
                JSON.parse(JSON.stringify(dateTask.getMinutes())) + ":" +
                JSON.parse(JSON.stringify(dateTask.getSeconds()));
            this.cont++;
            let newTask = {
                id: this.cont,
                name: "",
                check: false,
                date: newDate
            };
            newTask.name = this.changeLetter(this.nameTask, ",", "-");
            this.bufferTask.push(newTask);
        }
        this.nameTask = "";
    }
    changeLetter(phrase, letter, cLetter) {
        let originalPhrase = phrase;
        let resultPhrase = "";
        let index = 0;
        let aux = false;
        while (index >= 0) {
            phrase = resultPhrase + phrase.substr(index);
            index = phrase.indexOf(letter, index);
            if (index == -1 && aux == false) {
                resultPhrase = originalPhrase;
            }
            else if (index == -1 && aux == true) {
                if (resultPhrase.length != originalPhrase.length) {
                    resultPhrase = resultPhrase + originalPhrase.substr(originalPhrase.lastIndexOf(letter) + 1);
                }
            }
            else if (index >= 0) {
                let findword = phrase.substr(0, index + 1);
                resultPhrase = findword.replace(letter, cLetter);
                index++;
                aux = true;
            }
        }
        return resultPhrase;
    }
    deleteTask(task) {
        this.bufferTask = this.bufferTask.filter(element => element.id != task);
    }
    hiddenComplete() {
        if (this.bufferTask.length != 0) {
            if (this.bufferTask.some(element => element.check == true)) {
                this.showTask = false;
                this.testCheck = true;
            }
        }
    }
    showComplete() {
        this.showTask = true;
        this.testCheck = false;
    }
    clickCheck(event, task) {
        //console.log(event.isTrusted);     //Always give true
        if (event.currentTarget.checked) {
            task.check = true;
        }
        else {
            task.check = false;
        }
    }
    exportTableToCSV(filename) {
        let csv = [];
        let rowHeader = document.getElementsByClassName("tableHeader");
        let rowHeaderDiv = rowHeader[0].getElementsByTagName("div");
        let stringRowHeader = [];
        for (let i = 0; i < rowHeaderDiv.length; i++) {
            let colsHeader = rowHeaderDiv[i].innerText;
            stringRowHeader.push(colsHeader);
        }
        csv.push(stringRowHeader.join(","));
        /*
        console.log("Esto es stringRowHeader: ", stringRowHeader);
    
        let rowTasks = document.getElementsByClassName("containerTasks");
        for(let i = 0; i < rowTasks.length; i++){
          let stringTask= [], rowTask = rowTasks[i].getElementsByTagName("div");
    
          for(let j = 0; j < rowTask.length - 1; j++ )
            stringTask.push( (rowTask[j] as HTMLElement).innerText);
    
          csv.push(stringTask.join(","));
        }
        */
        this.bufferTask.forEach(element => {
            let id = element.id;
            let name = element.name;
            let date = element.date;
            let check = element.check;
            let stringRow = id + "," + name + "," + date + "," + check;
            csv.push(stringRow);
        });
        // Download CSV file
        this.downloadCSV(csv.join("\n"), filename);
    }
    downloadCSV(csv, filename) {
        let csvFile;
        let downloadLink;
        // CSV file
        csvFile = new Blob([csv], { type: "text/csv" });
        // Download link window.matchMedia("(max-width: 1070px)"));
        downloadLink = document.createElement("a");
        // File name
        downloadLink.download = filename;
        // Create a link to the file
        downloadLink.href = window.URL.createObjectURL(csvFile);
        // Hide download link
        downloadLink.style.display = "none";
        // Add the link to DOM
        document.body.appendChild(downloadLink);
        // Click download link
        downloadLink.click();
    }
    modifiedTask(id) {
        this.taskModified = this.bufferTask.filter(element => element.id == id);
        let heightBodyContainer = jquery__WEBPACK_IMPORTED_MODULE_1__('.body-container').outerHeight();
        heightBodyContainer += (60 + 56);
        let divHeightBody = "--height-body-container: " + heightBodyContainer + "px;";
        jquery__WEBPACK_IMPORTED_MODULE_1__('body').attr({ 'style': divHeightBody });
        this.modifiedClick = true;
    }
    close(event) {
        this.modifiedClick = false;
    }
    modifiedValUser(event) {
        //Update buffer
        let index = this.bufferTask.findIndex(element => element.id == this.taskModified[0].id);
        this.bufferTask[index].name = event;
        let taskToModificate = document.getElementsByClassName("orderTask");
        for (let i = 0; i < taskToModificate.length; i++) {
            if (taskToModificate[i].innerHTML == String(this.taskModified[0].id)) {
                let taskHTML = document.getElementsByClassName("nameTask");
                taskHTML[i].innerHTML = event;
                break;
            }
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 36, vars: 30, consts: [["class", "overlay", 4, "ngIf"], [1, "header", 3, "ngClass"], [1, "title"], [1, "divToggle"], [1, "switch"], ["type", "checkbox"], [1, "slider", "round", 3, "click"], [1, "body-container", 3, "ngClass"], [1, "containerTable"], [1, "myTable", 3, "ngClass"], [1, "tableHeader"], [1, "orderTask", 3, "ngClass"], [1, "nameTask", 3, "ngClass"], [1, "dateTask", 3, "ngClass"], [1, "doneTask", 3, "ngClass"], [1, "buttomTask"], ["class", "containerTasks", 3, "hidden", "ngClass", 4, "ngFor", "ngForOf"], [1, "form-group", "divInsertTask"], ["type", "text", "maxlength", "100", "placeholder", "Insert task", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "actionsButton"], [1, "myButtom", 3, "click"], ["class", "myButtom", 3, "click", 4, "ngIf"], [1, "text-white", "myFooter", 3, "ngClass"], [1, "footer-copyright", "text-center", "py-3"], ["href", "https://www.linkedin.com/in/bryan-tamayo-abad/"], [1, "overlay"], ["class", "taskComponent", 4, "ngIf"], [1, "taskComponent"], [3, "taskName", "closeEevent", "valModified"], [1, "containerTasks", 3, "hidden", "ngClass"], [1, "orderTask", 3, "ngClass", "click"], [1, "nameTask", 3, "ngClass", "click"], [1, "dateTask", 3, "ngClass", "click"], ["type", "checkbox", 3, "change"], [1, "myButtomDelete", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " To Do List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_span_click_7_listener() { return ctx.mode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AppComponent_div_21_Template, 12, 19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_23_listener($event) { return ctx.nameTask = $event; })("keyup.enter", function AppComponent_Template_input_keyup_enter_23_listener() { return ctx.addTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_25_listener() { return ctx.addTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Add new task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AppComponent_div_27_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AppComponent_div_28_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_29_listener() { return ctx.exportTableToCSV("to-do-list.csv"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Generate CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "footer", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "in/bryan-tamayo-abad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modifiedClick);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx.modeChange == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c3, ctx.modeChange == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c4, ctx.modeChange == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, ctx.modeChange == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c1, ctx.modeChange == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c1, ctx.modeChange == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c1, ctx.modeChange == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bufferTask);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nameTask);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTask);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showTask);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c5, ctx.modeChange == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Copyright: ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _components_task_task_component__WEBPACK_IMPORTED_MODULE_4__["TaskComponent"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Cardo&display=swap');\r\n[_ngcontent-%COMP%]:root{\r\n  --height-body-container : 10px;\r\n}\r\n.overlay[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  height: var(--height-body-container);\r\n  width: 100%;\r\n  background-color: rgba(0,0,0,0.6);\r\n  z-index: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n  transition: background-color 0.5s ease-in-out;\r\n  position: sticky;\r\n  background-color: black;\r\n  width: 100%;\r\n  height: 60px;\r\n  top:0;\r\n\r\n  color:white;\r\n\r\n  font-size: 35px;\r\n  border-bottom: 1px solid white;\r\n}\r\n.headerDark[_ngcontent-%COMP%]{\r\n  transition: background-color 0.5s ease-in-out;\r\n  background-color: white;\r\n  color:black;\r\n  border-bottom: 1px solid black;\r\n}\r\n.title[_ngcontent-%COMP%]{\r\n  font-family: 'Lobster', cursive;\r\n  text-align: center;\r\n}\r\n.divToggle[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  height: 60px;\r\n  right: 0;\r\n  top:0;\r\n  margin-right: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.switch[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 23px;\r\n  margin-bottom: 0;\r\n}\r\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n.slider[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  transition: .4s;\r\n}\r\n.slider[_ngcontent-%COMP%]:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 16px;\r\n  width: 16px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  transition: .4s;\r\n  box-shadow: 0 4px 4px rgba(26,53,71,0.25), 0 0 0 1px rgba(26,53,71,0.07); \r\n}\r\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\r\n  background-color: #2196F3;\r\n  box-shadow: 0 4px 4px rgba(26,53,71,0.25), 0 0 0 1px rgba(26,53,71,0.07);\r\n}\r\ninput[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0 1px #2196F3;\r\n  box-shadow: 0 4px 4px rgba(26,53,71,0.25), 0 0 0 1px rgba(26,53,71,0.07);\r\n}\r\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\r\n  transform: translateX(16px);\r\n}\r\n\r\n.slider.round[_ngcontent-%COMP%] {\r\n  border-radius: 34px;\r\n}\r\n.slider.round[_ngcontent-%COMP%]:before {\r\n  border-radius: 50%;\r\n}\r\n.body-container[_ngcontent-%COMP%]{\r\n  transition: background 0.5s ease-in-out;\r\n  min-height: calc( 100vh - 60px - 56px);\r\n  background-color: black;\r\n}\r\n.body-containerDark[_ngcontent-%COMP%]{\r\n  transition: background 0.5s ease-in-out;\r\n  background-color:white;\r\n\r\n}\r\n.myTable[_ngcontent-%COMP%]{\r\n  width: 75vw;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  border-radius: 5px;\r\n  color: white;\r\n  border: 2px solid white;\r\n\r\n\r\n}\r\n.myTableDark[_ngcontent-%COMP%]{\r\n  color: black !important;\r\n  border: 2px solid black !important;\r\n}\r\n.containerTable[_ngcontent-%COMP%]{\r\n  padding-top: 30px;\r\n}\r\n.tableHeader[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n.tableHeader[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  align-items: center;\r\n  font-weight:bold;\r\n\r\n}\r\n.orderTask[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  border-right: 1px solid white;\r\n  width: 3vw;\r\n}\r\n.tableHeader[_ngcontent-%COMP%]   .nameTask[_ngcontent-%COMP%]{\r\n  border-right: 1px solid white;\r\n  width: 45vw;\r\n}\r\n.dateTask[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  border-right: 1px solid white;\r\n  width: 13vw;\r\n}\r\n.doneTask[_ngcontent-%COMP%]{\r\n  border-right: 1px solid white;\r\n  width: 4vw;\r\n}\r\n.borderRightDark[_ngcontent-%COMP%]{\r\n  border-right: 1px solid black !important;\r\n}\r\n.buttomTask[_ngcontent-%COMP%]{\r\n  width: 10vw;\r\n}\r\n.containerTasks[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n.containerTasks[_ngcontent-%COMP%]:hover{\r\n  background-color: rgba(0, 0, 0, 0.076) !important;\r\n}\r\n.containerTasks[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n  border-top: 1px solid white;\r\n  text-align: center;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.containerTasksDark[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n  border-top: 1px solid black;\r\n}\r\n.containerTasks[_ngcontent-%COMP%]   .nameTask[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  border-right: 1px solid white;\r\n  width: 45vw;\r\n  font-family: 'Cardo',cursive;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n\r\n}\r\n.myButtom[_ngcontent-%COMP%]{\r\n  height: 30px;\r\n  background:#007bff;\r\n  color:white;\r\n  border-radius: 6px;\r\n  width: 130px;\r\n  cursor: pointer;\r\n  margin-bottom: 20px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.myButtom[_ngcontent-%COMP%]:hover{\r\n  box-shadow: none;\r\n  background: #0e61ba;\r\n}\r\n.myButtomDelete[_ngcontent-%COMP%]{\r\n  height: 30px !important;\r\n  width: 110px ;\r\n  background:#007bff;\r\n  color:white;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border:none !important;\r\n}\r\n.myButtomDelete[_ngcontent-%COMP%]:hover{\r\n  box-shadow: none;\r\n  background: #0e61ba;\r\n}\r\n.divInsertTask[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  width: 30vw;\r\n  margin-left:auto;\r\n  margin-right: auto;\r\n}\r\n.form-control[_ngcontent-%COMP%]{\r\n  height: 30px;\r\n}\r\n.actionsButton[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  margin-top: 20px;\r\n  width: 30vw;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  justify-content: space-between;\r\n  text-align: center;\r\n}\r\n.myFooter[_ngcontent-%COMP%]{\r\n  transition: background-color 0.5s ease-in-out;\r\n  border-top: 1px solid white;\r\n  background-color: black;\r\n}\r\n.myFooterDark[_ngcontent-%COMP%] {\r\n  transition: background-color 0.5s ease-in-out;\r\n  border-top: 1px solid black !important;\r\n  background-color: white !important;\r\n  color:black !important;\r\n}\r\n@media (max-width : 1320px){\r\n  .actionsButton[_ngcontent-%COMP%]{\r\n    flex-direction: column;\r\n    width: 150px;\r\n  }\r\n\r\n  .actionsButton[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n@media (max-width : 1130px){\r\n  .tableHeader[_ngcontent-%COMP%]{\r\n    width: 840px !important;\r\n  }\r\n\r\n  .containerTasks[_ngcontent-%COMP%]{\r\n    width: 840px !important;\r\n  }\r\n\r\n  .orderTask[_ngcontent-%COMP%]{\r\n    width: 32px !important;\r\n  }\r\n\r\n  .nameTask[_ngcontent-%COMP%]{\r\n    width: 500px !important;\r\n  }\r\n\r\n  .dateTask[_ngcontent-%COMP%]{\r\n    width: 160px !important;\r\n  }\r\n\r\n  .doneTask[_ngcontent-%COMP%]{\r\n    width: 45px !important;\r\n  }\r\n\r\n  .buttomTask[_ngcontent-%COMP%]{\r\n    width: 115px !important;\r\n  }\r\n\r\n  .myTable[_ngcontent-%COMP%]{\r\n    overflow-x:scroll;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block !important;\r\n    overflow-x: auto !important;\r\n    white-space: nowrap !important;\r\n  }\r\n\r\n  .divInsertTask[_ngcontent-%COMP%]{\r\n    width: 40vw;\r\n  }\r\n}\r\n@media (max-width : 900px){\r\n  .myTable[_ngcontent-%COMP%]{\r\n    width: 85vw !important;\r\n  }\r\n\r\n  .tableHeader[_ngcontent-%COMP%]{\r\n    width: 760px !important;\r\n  }\r\n\r\n  .containerTasks[_ngcontent-%COMP%]{\r\n    width: 760px !important;\r\n  }\r\n\r\n  .orderTask[_ngcontent-%COMP%]{\r\n    width: 32px !important;\r\n  }\r\n\r\n  .nameTask[_ngcontent-%COMP%]{\r\n    width: 410px !important;\r\n  }\r\n\r\n  .dateTask[_ngcontent-%COMP%]{\r\n    width: 160px !important;\r\n  }\r\n\r\n  .doneTask[_ngcontent-%COMP%]{\r\n    width: 45px !important;\r\n  }\r\n\r\n  .buttomTask[_ngcontent-%COMP%]{\r\n    width: 115px !important;\r\n  }\r\n\r\n  .divInsertTask[_ngcontent-%COMP%]{\r\n    width: 50vw;\r\n  }\r\n}\r\n@media(max-width : 640px){\r\n  .taskComponent[_ngcontent-%COMP%]{\r\n    width: 400px !important;\r\n  }\r\n}\r\n@media(max-width : 375px){\r\n  .taskComponent[_ngcontent-%COMP%]{\r\n    width: 350px !important;\r\n  }\r\n\r\n  .divInsertTask[_ngcontent-%COMP%]{\r\n    width: 70vw;\r\n  }\r\n\r\n}\r\n@media(max-width : 350px){\r\n  .taskComponent[_ngcontent-%COMP%]{\r\n    width: 270px !important;\r\n  }\r\n}\r\n.taskComponent[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  top:35%;\r\n  width: 600px;\r\n  z-index: 2;\r\n  border-radius: 10px;\r\n  background: white ;\r\n  box-shadow: 0 11px 15px -7px rgb(0 0 0 /20%), 0 24px 38px 3px rgb(0 0 0 /14%), 0 9px 46px 8px rgb(0 0 0 /12%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQTRFO0FBQzVFLDBFQUEwRTtBQUUxRTtFQUNFLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsNkNBQTZDO0VBRTdDLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixLQUFLOztFQUVMLFdBQVc7O0VBRVgsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFFBQVE7RUFDUixLQUFLO0VBQ0wsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztBQUNYO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxzQkFBc0I7RUFFdEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBRXZCLGVBQWU7RUFDZix3RUFBd0UsRUFBRSxhQUFhO0FBQ3pGO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsd0VBQXdFO0FBQzFFO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isd0VBQXdFO0FBQzFFO0FBRUE7RUFHRSwyQkFBMkI7QUFDN0I7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLHNDQUFzQztFQUN0Qyx1QkFBdUI7QUFDekI7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxzQkFBc0I7O0FBRXhCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1Qjs7O0FBR3pCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7O0FBRWxCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLFVBQVU7QUFDWjtBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixVQUFVO0FBQ1o7QUFFQTtFQUNFLHdDQUF3QztBQUMxQztBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDtBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCOztBQUVsQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSw2Q0FBNkM7RUFDN0MsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLHNDQUFzQztFQUN0QyxrQ0FBa0M7RUFDbEMsc0JBQXNCO0FBQ3hCO0FBR0E7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjtBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtBQUNGO0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFRjtBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7QUFDRjtBQUVBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsNkdBQTZHO0FBQy9HIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXJkbyZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbjpyb290e1xyXG4gIC0taGVpZ2h0LWJvZHktY29udGFpbmVyIDogMTBweDtcclxufVxyXG5cclxuLm92ZXJsYXl7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogdmFyKC0taGVpZ2h0LWJvZHktY29udGFpbmVyKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgei1pbmRleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIHBvc2l0aW9uOi13ZWJraXQtc3RpY2t5O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHRvcDowO1xyXG5cclxuICBjb2xvcjp3aGl0ZTtcclxuXHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLmhlYWRlckRhcmt7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGl2VG9nZ2xle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOjA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnN3aXRjaCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDIzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnN3aXRjaCBpbnB1dCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5zbGlkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG4uc2xpZGVyOmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGxlZnQ6IDRweDtcclxuICBib3R0b206IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMjYsNTMsNzEsMC4yNSksIDAgMCAwIDFweCByZ2JhKDI2LDUzLDcxLDAuMDcpOyAvKk5vdCByZW1vdmUqL1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICBib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgyNiw1Myw3MSwwLjI1KSwgMCAwIDAgMXB4IHJnYmEoMjYsNTMsNzEsMC4wNyk7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDI2LDUzLDcxLDAuMjUpLCAwIDAgMCAxcHggcmdiYSgyNiw1Myw3MSwwLjA3KTtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE2cHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KTtcclxufVxyXG5cclxuLyogUm91bmRlZCBzbGlkZXJzICovXHJcbi5zbGlkZXIucm91bmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbn1cclxuXHJcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5ib2R5LWNvbnRhaW5lcntcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgbWluLWhlaWdodDogY2FsYyggMTAwdmggLSA2MHB4IC0gNTZweCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5ib2R5LWNvbnRhaW5lckRhcmt7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcblxyXG59XHJcblxyXG4ubXlUYWJsZXtcclxuICB3aWR0aDogNzV2dztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuXHJcblxyXG59XHJcblxyXG4ubXlUYWJsZURhcmt7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRhaW5lclRhYmxle1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4udGFibGVIZWFkZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnRhYmxlSGVhZGVyIGRpdiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuXHJcbn1cclxuXHJcbi5vcmRlclRhc2t7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHdpZHRoOiAzdnc7XHJcbn1cclxuXHJcbi50YWJsZUhlYWRlciAubmFtZVRhc2t7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XHJcbiAgd2lkdGg6IDQ1dnc7XHJcbn1cclxuXHJcbi5kYXRlVGFza3tcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XHJcbiAgd2lkdGg6IDEzdnc7XHJcbn1cclxuXHJcbi5kb25lVGFza3tcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB3aGl0ZTtcclxuICB3aWR0aDogNHZ3O1xyXG59XHJcblxyXG4uYm9yZGVyUmlnaHREYXJre1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXR0b21UYXNre1xyXG4gIHdpZHRoOiAxMHZ3O1xyXG59XHJcblxyXG4uY29udGFpbmVyVGFza3N7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNvbnRhaW5lclRhc2tzOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNzYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXJUYXNrcyBkaXZ7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyVGFza3NEYXJrIGRpdntcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5jb250YWluZXJUYXNrcyAubmFtZVRhc2t7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIHdpZHRoOiA0NXZ3O1xyXG4gIGZvbnQtZmFtaWx5OiAnQ2FyZG8nLGN1cnNpdmU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxufVxyXG5cclxuLm15QnV0dG9te1xyXG4gIGhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kOiMwMDdiZmY7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5teUJ1dHRvbTpob3ZlcntcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICMwZTYxYmE7XHJcbn1cclxuXHJcbi5teUJ1dHRvbURlbGV0ZXtcclxuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMTEwcHggO1xyXG4gIGJhY2tncm91bmQ6IzAwN2JmZjtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXI6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXlCdXR0b21EZWxldGU6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjMGU2MWJhO1xyXG59XHJcblxyXG4uZGl2SW5zZXJ0VGFza3tcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG4gIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9se1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmFjdGlvbnNCdXR0b257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5teUZvb3RlcntcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubXlGb290ZXJEYXJrIHtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBjb2xvcjpibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGggOiAxMzIwcHgpe1xyXG4gIC5hY3Rpb25zQnV0dG9ue1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICB9XHJcblxyXG4gIC5hY3Rpb25zQnV0dG9uIGJ1dHRvbntcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aCA6IDExMzBweCl7XHJcbiAgLnRhYmxlSGVhZGVye1xyXG4gICAgd2lkdGg6IDg0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyVGFza3N7XHJcbiAgICB3aWR0aDogODQwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5vcmRlclRhc2t7XHJcbiAgICB3aWR0aDogMzJweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5hbWVUYXNre1xyXG4gICAgd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZGF0ZVRhc2t7XHJcbiAgICB3aWR0aDogMTYwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5kb25lVGFza3tcclxuICAgIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9tVGFza3tcclxuICAgIHdpZHRoOiAxMTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm15VGFibGV7XHJcbiAgICBvdmVyZmxvdy14OnNjcm9sbDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5kaXZJbnNlcnRUYXNre1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aCA6IDkwMHB4KXtcclxuICAubXlUYWJsZXtcclxuICAgIHdpZHRoOiA4NXZ3ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGFibGVIZWFkZXJ7XHJcbiAgICB3aWR0aDogNzYwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJUYXNrc3tcclxuICAgIHdpZHRoOiA3NjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm9yZGVyVGFza3tcclxuICAgIHdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubmFtZVRhc2t7XHJcbiAgICB3aWR0aDogNDEwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5kYXRlVGFza3tcclxuICAgIHdpZHRoOiAxNjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmRvbmVUYXNre1xyXG4gICAgd2lkdGg6IDQ1cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5idXR0b21UYXNre1xyXG4gICAgd2lkdGg6IDExNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZGl2SW5zZXJ0VGFza3tcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aCA6IDY0MHB4KXtcclxuICAudGFza0NvbXBvbmVudHtcclxuICAgIHdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aCA6IDM3NXB4KXtcclxuICAudGFza0NvbXBvbmVudHtcclxuICAgIHdpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmRpdkluc2VydFRhc2t7XHJcbiAgICB3aWR0aDogNzB2dztcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoIDogMzUwcHgpe1xyXG4gIC50YXNrQ29tcG9uZW50e1xyXG4gICAgd2lkdGg6IDI3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4udGFza0NvbXBvbmVudHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOjM1JTtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgei1pbmRleDogMjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlIDtcclxuICBib3gtc2hhZG93OiAwIDExcHggMTVweCAtN3B4IHJnYigwIDAgMCAvMjAlKSwgMCAyNHB4IDM4cHggM3B4IHJnYigwIDAgMCAvMTQlKSwgMCA5cHggNDZweCA4cHggcmdiKDAgMCAwIC8xMiUpO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_task_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/task/task.component */ "CvMt");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_task_task_component__WEBPACK_IMPORTED_MODULE_4__["TaskComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_task_task_component__WEBPACK_IMPORTED_MODULE_4__["TaskComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map