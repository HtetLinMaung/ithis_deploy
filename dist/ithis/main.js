(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/htetlinmaung/mit/projects/ithis/src/main.ts */"zUnb");


/***/ }),

/***/ "0bJV":
/*!***************************************************************************!*\
  !*** ./src/app/inpatient-medical-record/instruction/Instruction.model.ts ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Instruction; });
class Instruction {
    constructor(syskey, date, dateTaken, drugAllergyTo, instruction, remarks, fmtDate, fmtDateTaken, pId) {
        this.syskey = syskey;
        this.date = date;
        this.dateTaken = dateTaken;
        this.drugAllergyTo = drugAllergyTo;
        this.instruction = instruction;
        this.remarks = remarks;
        this.fmtDate = fmtDate;
        this.fmtDateTaken = fmtDateTaken;
        this.pId = pId;
    }
}


/***/ }),

/***/ "0hgX":
/*!*************************************************************!*\
  !*** ./src/app/nursing-activity-worklist/activity.model.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Activity; });
class Activity {
    constructor(syskey, procedureName, procedure, date, dueDateChange, dueDateRemove, fmtDate, fmtDueDateChange, fmtDueDateRemove, size, site, marking, externalLength, doctorName, doctorId, sizeUnit, siteUnit, markingUnit, externalLengthUnit, fmtSize, fmtSite, fmtMarking, fmtExternalLength) {
        this.syskey = syskey;
        this.procedureName = procedureName;
        this.procedure = procedure;
        this.date = date;
        this.dueDateChange = dueDateChange;
        this.dueDateRemove = dueDateRemove;
        this.fmtDate = fmtDate;
        this.fmtDueDateChange = fmtDueDateChange;
        this.fmtDueDateRemove = fmtDueDateRemove;
        this.size = size;
        this.site = site;
        this.marking = marking;
        this.externalLength = externalLength;
        this.doctorName = doctorName;
        this.doctorId = doctorId;
        this.sizeUnit = sizeUnit;
        this.siteUnit = siteUnit;
        this.markingUnit = markingUnit;
        this.externalLengthUnit = externalLengthUnit;
        this.fmtSize = fmtSize;
        this.fmtSite = fmtSite;
        this.fmtMarking = fmtMarking;
        this.fmtExternalLength = fmtExternalLength;
    }
}


/***/ }),

/***/ "2pki":
/*!*****************************************************************************!*\
  !*** ./src/app/inpatient-medical-record/inpatient-medical-record.module.ts ***!
  \*****************************************************************************/
/*! exports provided: InpatientMedicalRecordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InpatientMedicalRecordModule", function() { return InpatientMedicalRecordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instruction/instruction.component */ "W0X+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _instruction_instruction_form_instruction_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instruction/instruction-form/instruction-form.component */ "RfXh");
/* harmony import */ var _instruction_instruction_list_instruction_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instruction/instruction-list/instruction-list.component */ "j6Z4");
/* harmony import */ var _stat_medication_stat_medication_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stat-medication/stat-medication.component */ "QGel");
/* harmony import */ var _stat_medication_stat_medication_form_stat_medication_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stat-medication/stat-medication-form/stat-medication-form.component */ "bWrW");
/* harmony import */ var _stat_medication_stat_medication_list_stat_medication_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stat-medication/stat-medication-list/stat-medication-list.component */ "fwLT");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _non_parenteral_non_parenteral_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./non-parenteral/non-parenteral.component */ "CDQU");
/* harmony import */ var _non_parenteral_non_parenteral_form_non_parenteral_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./non-parenteral/non-parenteral-form/non-parenteral-form.component */ "Etrg");
/* harmony import */ var _non_parenteral_non_parenteral_list_non_parenteral_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./non-parenteral/non-parenteral-list/non-parenteral-list.component */ "sHip");














class InpatientMedicalRecordModule {
}
InpatientMedicalRecordModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InpatientMedicalRecordModule });
InpatientMedicalRecordModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InpatientMedicalRecordModule_Factory(t) { return new (t || InpatientMedicalRecordModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: 'inpatient-medication-record/instruction',
                    component: _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_1__["InstructionComponent"],
                },
                {
                    path: 'inpatient-medication-record/stat-medication',
                    component: _stat_medication_stat_medication_component__WEBPACK_IMPORTED_MODULE_5__["StatMedicationComponent"],
                },
                {
                    path: 'inpatient-medication-record/non-parenteral',
                    component: _non_parenteral_non_parenteral_component__WEBPACK_IMPORTED_MODULE_9__["NonParenteralComponent"],
                },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InpatientMedicalRecordModule, { declarations: [_instruction_instruction_component__WEBPACK_IMPORTED_MODULE_1__["InstructionComponent"],
        _instruction_instruction_form_instruction_form_component__WEBPACK_IMPORTED_MODULE_3__["InstructionFormComponent"],
        _instruction_instruction_list_instruction_list_component__WEBPACK_IMPORTED_MODULE_4__["InstructionListComponent"],
        _stat_medication_stat_medication_component__WEBPACK_IMPORTED_MODULE_5__["StatMedicationComponent"],
        _stat_medication_stat_medication_form_stat_medication_form_component__WEBPACK_IMPORTED_MODULE_6__["StatMedicationFormComponent"],
        _stat_medication_stat_medication_list_stat_medication_list_component__WEBPACK_IMPORTED_MODULE_7__["StatMedicationListComponent"],
        _non_parenteral_non_parenteral_component__WEBPACK_IMPORTED_MODULE_9__["NonParenteralComponent"],
        _non_parenteral_non_parenteral_form_non_parenteral_form_component__WEBPACK_IMPORTED_MODULE_10__["NonParenteralFormComponent"],
        _non_parenteral_non_parenteral_list_non_parenteral_list_component__WEBPACK_IMPORTED_MODULE_11__["NonParenteralListComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InpatientMedicalRecordModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_1__["InstructionComponent"],
                    _instruction_instruction_form_instruction_form_component__WEBPACK_IMPORTED_MODULE_3__["InstructionFormComponent"],
                    _instruction_instruction_list_instruction_list_component__WEBPACK_IMPORTED_MODULE_4__["InstructionListComponent"],
                    _stat_medication_stat_medication_component__WEBPACK_IMPORTED_MODULE_5__["StatMedicationComponent"],
                    _stat_medication_stat_medication_form_stat_medication_form_component__WEBPACK_IMPORTED_MODULE_6__["StatMedicationFormComponent"],
                    _stat_medication_stat_medication_list_stat_medication_list_component__WEBPACK_IMPORTED_MODULE_7__["StatMedicationListComponent"],
                    _non_parenteral_non_parenteral_component__WEBPACK_IMPORTED_MODULE_9__["NonParenteralComponent"],
                    _non_parenteral_non_parenteral_form_non_parenteral_form_component__WEBPACK_IMPORTED_MODULE_10__["NonParenteralFormComponent"],
                    _non_parenteral_non_parenteral_list_non_parenteral_list_component__WEBPACK_IMPORTED_MODULE_11__["NonParenteralListComponent"],
                ],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: 'inpatient-medication-record/instruction',
                            component: _instruction_instruction_component__WEBPACK_IMPORTED_MODULE_1__["InstructionComponent"],
                        },
                        {
                            path: 'inpatient-medication-record/stat-medication',
                            component: _stat_medication_stat_medication_component__WEBPACK_IMPORTED_MODULE_5__["StatMedicationComponent"],
                        },
                        {
                            path: 'inpatient-medication-record/non-parenteral',
                            component: _non_parenteral_non_parenteral_component__WEBPACK_IMPORTED_MODULE_9__["NonParenteralComponent"],
                        },
                    ]),
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "6j51":
/*!**************************************************************!*\
  !*** ./src/app/framework/pagination/pagination.component.ts ***!
  \**************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function PaginationComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1, " ");
} }
class PaginationComponent {
    constructor() {
        this.perPage = 0;
        this.perPages = [];
        this.total = 0;
        this.start = 0;
        this.end = 0;
        this.totalPage = 0;
        this.onPerPageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPrev = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSkipFirst = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSkipLast = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    handlePerPageChanged(event) {
        this.onPerPageChanged.emit(event.target.value);
    }
    skipFirst() {
        this.onSkipFirst.emit();
    }
    skipLast() {
        this.onSkipLast.emit();
    }
    next() {
        this.onNext.emit();
    }
    prev() {
        this.onPrev.emit();
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["app-pagination"]], inputs: { perPage: "perPage", perPages: "perPages", total: "total", start: "start", end: "end", totalPage: "totalPage" }, outputs: { onPerPageChanged: "onPerPageChanged", onNext: "onNext", onPrev: "onPrev", onSkipFirst: "onSkipFirst", onSkipLast: "onSkipLast" }, decls: 9, vars: 4, consts: [[1, "pagination"], [1, "fas", "fa-backward", 3, "click"], [1, "fas", "fa-angle-left", 3, "click"], [1, "select", 2, "flex", "0 0 20%", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "fas", "fa-angle-right", 3, "click"], [1, "fas", "fa-forward", 3, "click"], [3, "value"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_i_click_1_listener() { return ctx.skipFirst(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_i_click_2_listener() { return ctx.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PaginationComponent_Template_select_change_3_listener($event) { return ctx.handlePerPageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationComponent_option_4_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_i_click_5_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_Template_i_click_6_listener() { return ctx.skipLast(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.perPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.start + 1, " - ", ctx.end, " of ", ctx.total, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: [".pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.select[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakIiLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pagination',
                templateUrl: './pagination.component.html',
                styleUrls: ['./pagination.component.css'],
            }]
    }], function () { return []; }, { perPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], perPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], start: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], end: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onPerPageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onNext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onPrev: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onSkipFirst: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onSkipLast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "7pZn":
/*!**************************************!*\
  !*** ./src/app/app-store.service.ts ***!
  \**************************************/
/*! exports provided: AppStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoreService", function() { return AppStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _framework_doctor_dialog_doctor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./framework/doctor-dialog/doctor.model */ "xkeh");
/* harmony import */ var _patient_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patient.model */ "f3K7");





class AppStoreService {
    constructor() {
        this._pId = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](300268449);
        this._patientInfo = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new _patient_model__WEBPACK_IMPORTED_MODULE_3__["Patient"]('', '', ''));
        this._doctor = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new _framework_doctor_dialog_doctor_model__WEBPACK_IMPORTED_MODULE_2__["Doctor"]());
        this._doctorDialog = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this._doctors = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.pId$ = this._pId.asObservable();
        this.patientInfo$ = this._patientInfo.asObservable();
        this.doctor$ = this._doctor.asObservable();
        this.doctorDialog$ = this._doctorDialog.asObservable();
        this._doctors$ = this._doctors.asObservable();
    }
    set pId(v) {
        this._pId.next(v);
    }
    get pId() {
        return this._pId.getValue();
    }
    set patientInfo(v) {
        this._patientInfo.next(v);
    }
    get patientInfo() {
        return this._patientInfo.getValue();
    }
    set doctor(v) {
        this._doctor.next(v);
    }
    get doctor() {
        return this._doctor.getValue();
    }
    set doctorDialog(v) {
        this._doctorDialog.next(v);
    }
    get doctorDialog() {
        return this._doctorDialog.getValue();
    }
    set doctors(v) {
        this._doctors.next(v);
    }
    get doctors() {
        return this._doctors.getValue();
    }
}
AppStoreService.ɵfac = function AppStoreService_Factory(t) { return new (t || AppStoreService)(); };
AppStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppStoreService, factory: AppStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "A5yb":
/*!********************************************************************!*\
  !*** ./src/app/framework/delete-dialog/delete-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DeleteDialogComponent {
    constructor() {
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    cancel() {
        this.onCancel.emit();
    }
    delete() {
        this.onDelete.emit();
    }
}
DeleteDialogComponent.ɵfac = function DeleteDialogComponent_Factory(t) { return new (t || DeleteDialogComponent)(); };
DeleteDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteDialogComponent, selectors: [["app-delete-dialog"]], outputs: { onCancel: "onCancel", onDelete: "onDelete" }, decls: 13, vars: 0, consts: [[1, "dialog__wrapper"], [1, "dialog__content"], [2, "font-size", "17px", "color", "#fff", "text-align", "center"], [2, "font-size", "12px", "color", "#fff", "padding", "0 1rem"], [1, "flex__row", 2, "justify-content", "space-between"], [1, "btn", "btn-outline-primary", "cancel__btn", 3, "click"], [1, "btn", "btn-danger", "__raised", 2, "font-size", "12px", "padding", "5px 25px !important", "border-radius", "10px", 3, "click"]], template: function DeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Are you sure you want to delete? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Please be careful. Deleting action cannot be undone. Make sure you know what you are doing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_button_click_8_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_button_click_11_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".dialog__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  transition: all 0.3s;\n  background-color: rgb(33, 33, 33, 0.46);\n  border-color: rgb(33, 33, 33, 0.46);\n  z-index: 98;\n}\n.dialog__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 0.5rem;\n  width: 381px;\n  background: #f66559;\n  transition: all 0.3s;\n  z-index: 99;\n  overflow-y: auto;\n  padding: 0.75rem 1rem;\n  height: 189px;\n  border-radius: 20px;\n}\n.cancel__btn[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 5px 25px !important;\n  border-radius: 10px;\n  border-color: #fff;\n  color: #fff;\n}\n.cancel__btn[_ngcontent-%COMP%]:hover {\n  background-color: transparent !important;\n}\n.cancel__btn[_ngcontent-%COMP%]:active {\n  border-color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLHVDQUF1QztFQUN2QyxtQ0FBbUM7RUFDbkMsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QjttQ0FDaUM7RUFDakMsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CIiwiZmlsZSI6ImRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2dfX3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzMywgMzMsIDMzLCAwLjQ2KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMzMsIDMzLCAzMywgMC40Nik7XG4gIHotaW5kZXg6IDk4O1xufVxuLmRpYWxvZ19fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgcGFkZGluZzogMC41cmVtO1xuICB3aWR0aDogMzgxcHg7XG4gIGJhY2tncm91bmQ6ICNmNjY1NTk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB6LWluZGV4OiA5OTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICBoZWlnaHQ6IDE4OXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmNhbmNlbF9fYnRuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA1cHggMjVweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhbmNlbF9fYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5jYW5jZWxfX2J0bjphY3RpdmUge1xuICBib3JkZXItY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delete-dialog',
                templateUrl: './delete-dialog.component.html',
                styleUrls: ['./delete-dialog.component.css'],
            }]
    }], function () { return []; }, { onCancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onDelete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Alt2":
/*!***********************************************************************************!*\
  !*** ./src/app/inpatient-medical-record/instruction/instruction-store.service.ts ***!
  \***********************************************************************************/
/*! exports provided: InstructionStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionStoreService", function() { return InstructionStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class InstructionStoreService {
    constructor() {
        this._currentSysKey = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this._instructions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this._isUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this._tabNo = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](1);
        this._deleteDialog = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentSysKey$ = this._currentSysKey.asObservable();
        this.instructions$ = this._instructions.asObservable();
        this.isUpdate$ = this._isUpdate.asObservable();
        this.tabNo$ = this._tabNo.asObservable();
        this.deleteDialog$ = this._deleteDialog.asObservable();
    }
    set currentSysKey(v) {
        this._currentSysKey.next(v);
    }
    set instructions(v) {
        this._instructions.next(v);
    }
    set tabNo(v) {
        this._tabNo.next(v);
    }
    set isUpdate(v) {
        this._isUpdate.next(v);
    }
    set deleteDialog(v) {
        this._deleteDialog.next(v);
    }
    get isUpdate() {
        return this._isUpdate.getValue();
    }
    get tabNo() {
        return this._tabNo.getValue();
    }
    get instructions() {
        return this._instructions.getValue();
    }
    get currentSysKey() {
        return this._currentSysKey.getValue();
    }
    get deleteDialog() {
        return this._deleteDialog.getValue();
    }
}
InstructionStoreService.ɵfac = function InstructionStoreService_Factory(t) { return new (t || InstructionStoreService)(); };
InstructionStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InstructionStoreService, factory: InstructionStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstructionStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


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
    production: false,
    apiUrl: 'http://localhost:8080/Angular2',
    orgId: 'X/R7RWTBdWsCp/VtkbqPKg==',
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

/***/ "CDQU":
/*!*************************************************************************************!*\
  !*** ./src/app/inpatient-medical-record/non-parenteral/non-parenteral.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NonParenteralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonParenteralComponent", function() { return NonParenteralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _non_parenteral_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./non-parenteral-store.service */ "gDNE");
/* harmony import */ var src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/framework/http.service */ "KQ+0");
/* harmony import */ var _framework_patient_header_patient_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/patient-header/patient-header.component */ "dxN6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _non_parenteral_list_non_parenteral_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./non-parenteral-list/non-parenteral-list.component */ "sHip");
/* harmony import */ var _non_parenteral_form_non_parenteral_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./non-parenteral-form/non-parenteral-form.component */ "Etrg");
/* harmony import */ var _framework_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../framework/delete-dialog/delete-dialog.component */ "A5yb");









function NonParenteralComponent_app_non_parenteral_list_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-non-parenteral-list");
} }
function NonParenteralComponent_app_non_parenteral_form_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-non-parenteral-form");
} }
function NonParenteralComponent_app_delete_dialog_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-delete-dialog", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDelete", function NonParenteralComponent_app_delete_dialog_13_Template_app_delete_dialog_onDelete_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteData(); })("onCancel", function NonParenteralComponent_app_delete_dialog_13_Template_app_delete_dialog_onCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.cancelDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NonParenteralComponent {
    constructor(nonParenteralStoreService, http) {
        this.nonParenteralStoreService = nonParenteralStoreService;
        this.http = http;
    }
    ngOnInit() { }
    tabClickHandler(n) {
        const tabEle1 = document.getElementById('tab1');
        const tabEle2 = document.getElementById('tab2');
        switch (n) {
            case 1:
                tabEle1.style.background = '#3b5998';
                tabEle2.style.background = '#8C9899';
                break;
            default:
                tabEle2.style.background = '#3b5998';
                tabEle1.style.background = '#8C9899';
        }
        this.nonParenteralStoreService.tabNo = n;
    }
    deleteData() {
        this.nonParenteralStoreService.deleteDialog = false;
        if (this.nonParenteralStoreService.isUpdate) {
            // this.http
            //   .doPost(
            //     `inpatient-medical-record/delete-instruction/${this.instructionStoreService.currentSysKey}`,
            //     { syskey: this.instructionStoreService.currentSysKey }
            //   )
            //   .subscribe((data) => {
            //     const tabEle1 = document.getElementById('tab1');
            //     const tabEle2 = document.getElementById('tab2');
            //     tabEle1.style.background = '#3b5998';
            //     tabEle2.style.background = '#8C9899';
            //     this.instructionStoreService.isUpdate = false;
            //     this.instructionStoreService.tabNo = 1;
            //   });
        }
    }
    cancelDelete() {
        this.nonParenteralStoreService.deleteDialog = false;
    }
}
NonParenteralComponent.ɵfac = function NonParenteralComponent_Factory(t) { return new (t || NonParenteralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_non_parenteral_store_service__WEBPACK_IMPORTED_MODULE_1__["NonParenteralStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
NonParenteralComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NonParenteralComponent, selectors: [["app-non-parenteral"]], decls: 15, vars: 9, consts: [[2, "width", "100%", "padding", "2rem 3rem"], [2, "display", "flex"], ["id", "tab1", 1, "tab__list-item", 2, "background", "#3b5998", 3, "click"], ["id", "tab2", 1, "tab__list-item", 3, "click"], [1, "card", "tab__body", 2, "flex", "1"], [4, "ngIf"], [3, "onDelete", "onCancel", 4, "ngIf"], [3, "onDelete", "onCancel"]], template: function NonParenteralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-patient-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NonParenteralComponent_Template_div_click_3_listener() { return ctx.tabClickHandler(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NonParenteralComponent_Template_div_click_5_listener() { return ctx.tabClickHandler(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Stat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NonParenteralComponent_app_non_parenteral_list_9_Template, 1, 0, "app-non-parenteral-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NonParenteralComponent_app_non_parenteral_form_11_Template, 1, 0, "app-non-parenteral-form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NonParenteralComponent_app_delete_dialog_13_Template, 1, 0, "app-delete-dialog", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 3, ctx.nonParenteralStoreService.tabNo$) == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 5, ctx.nonParenteralStoreService.tabNo$) == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, ctx.nonParenteralStoreService.deleteDialog$));
    } }, directives: [_framework_patient_header_patient_header_component__WEBPACK_IMPORTED_MODULE_3__["PatientHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _non_parenteral_list_non_parenteral_list_component__WEBPACK_IMPORTED_MODULE_5__["NonParenteralListComponent"], _non_parenteral_form_non_parenteral_form_component__WEBPACK_IMPORTED_MODULE_6__["NonParenteralFormComponent"], _framework_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteDialogComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub24tcGFyZW50ZXJhbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NonParenteralComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-non-parenteral',
                templateUrl: './non-parenteral.component.html',
                styleUrls: ['./non-parenteral.component.css'],
            }]
    }], function () { return [{ type: _non_parenteral_store_service__WEBPACK_IMPORTED_MODULE_1__["NonParenteralStoreService"] }, { type: src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "EfYC":
/*!*******************************************************************************!*\
  !*** ./src/app/nursing-activity-worklist/nursing-activity-worklist.module.ts ***!
  \*******************************************************************************/
/*! exports provided: NursingActivityWorklistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NursingActivityWorklistModule", function() { return NursingActivityWorklistModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nursing_activity_worklist_nursing_activity_worklist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nursing-activity-worklist/nursing-activity-worklist.component */ "R7DW");
/* harmony import */ var _nursing_activity_worklist_nursing_activity_worklist_list_nursing_activity_worklist_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nursing-activity-worklist/nursing-activity-worklist-list/nursing-activity-worklist-list.component */ "fplC");
/* harmony import */ var _nursing_activity_worklist_nursing_activity_worklist_form_nursing_activity_worklist_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nursing-activity-worklist/nursing-activity-worklist-form/nursing-activity-worklist-form.component */ "VLjx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");








class NursingActivityWorklistModule {
}
NursingActivityWorklistModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NursingActivityWorklistModule });
NursingActivityWorklistModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NursingActivityWorklistModule_Factory(t) { return new (t || NursingActivityWorklistModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: 'nursing-activity-worklist',
                    component: _nursing_activity_worklist_nursing_activity_worklist_component__WEBPACK_IMPORTED_MODULE_1__["NursingActivityWorklistComponent"],
                },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NursingActivityWorklistModule, { declarations: [_nursing_activity_worklist_nursing_activity_worklist_component__WEBPACK_IMPORTED_MODULE_1__["NursingActivityWorklistComponent"],
        _nursing_activity_worklist_nursing_activity_worklist_list_nursing_activity_worklist_list_component__WEBPACK_IMPORTED_MODULE_2__["NursingActivityWorklistListComponent"],
        _nursing_activity_worklist_nursing_activity_worklist_form_nursing_activity_worklist_form_component__WEBPACK_IMPORTED_MODULE_3__["NursingActivityWorklistFormComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NursingActivityWorklistModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _nursing_activity_worklist_nursing_activity_worklist_component__WEBPACK_IMPORTED_MODULE_1__["NursingActivityWorklistComponent"],
                    _nursing_activity_worklist_nursing_activity_worklist_list_nursing_activity_worklist_list_component__WEBPACK_IMPORTED_MODULE_2__["NursingActivityWorklistListComponent"],
                    _nursing_activity_worklist_nursing_activity_worklist_form_nursing_activity_worklist_form_component__WEBPACK_IMPORTED_MODULE_3__["NursingActivityWorklistFormComponent"],
                ],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                        {
                            path: 'nursing-activity-worklist',
                            component: _nursing_activity_worklist_nursing_activity_worklist_component__WEBPACK_IMPORTED_MODULE_1__["NursingActivityWorklistComponent"],
                        },
                    ]),
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "Etrg":
/*!**************************************************************************************************************!*\
  !*** ./src/app/inpatient-medical-record/non-parenteral/non-parenteral-form/non-parenteral-form.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: NonParenteralFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonParenteralFormComponent", function() { return NonParenteralFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _non_parenteral_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../non-parenteral-store.service */ "gDNE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function NonParenteralFormComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NonParenteralFormComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NonParenteralFormComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NonParenteralFormComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NonParenteralFormComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Known Drug Allergy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NonParenteralFormComponent_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const allergy_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", allergy_r10.trim(), " ");
} }
function NonParenteralFormComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NonParenteralFormComponent_div_46_div_1_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.drugAllergyTo.split(","));
} }
function NonParenteralFormComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", header_r11, " ");
} }
class NonParenteralFormComponent {
    constructor(nonParenteralStoreService) {
        this.nonParenteralStoreService = nonParenteralStoreService;
        this.headers = ['Route', 'Medication', 'Dose', 'Frequency', 'Duration'];
        this.date = '';
        this.drugAllergyTo = '';
        this.chronicRenalFailure = false;
        this.pregnant = false;
        this.tubeFeed = false;
        this.liquidMedication = false;
        this.dateStart = '';
        this.dateOff = '';
    }
    ngOnInit() { }
    new() { }
    save() { }
    delete() { }
    print() { }
}
NonParenteralFormComponent.ɵfac = function NonParenteralFormComponent_Factory(t) { return new (t || NonParenteralFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_non_parenteral_store_service__WEBPACK_IMPORTED_MODULE_1__["NonParenteralStoreService"])); };
NonParenteralFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NonParenteralFormComponent, selectors: [["app-non-parenteral-form"]], decls: 70, vars: 17, consts: [[2, "flex", "1"], [2, "display", "flex", "margin-top", "1rem", "margin-bottom", "2rem"], [1, "btn", "btn-primary", "btn__crud", 3, "click"], ["class", "btn btn-success btn__crud", 3, "click", 4, "ngIf"], [1, "btn", "btn-danger", "btn__crud", 3, "click"], [1, "flex__row", 2, "align-items", "flex-end"], [1, "p__5", 2, "flex", "0 0 20%"], [1, "form__label"], ["type", "datetime-local", "step", "1", 1, "form-control", "form__input", 3, "ngModel", "ngModelChange"], [1, "p__5", 2, "flex", "0 0 30%"], [1, "p__5", "flex__row", 2, "flex", "0 0 50%"], [1, "flex__row", "p__5"], ["type", "checkbox", 1, "__checkbox", 3, "ngModel", "ngModelChange"], [1, "checkbox__label"], [1, "flex__row"], [1, "p__5", 2, "flex", "0 0 21.1%"], ["type", "text", 1, "form-control", "form__input", 3, "ngModel", "ngModelChange"], [2, "flex", "0 0 30%"], ["type", "date", 1, "form-control", "form__input", 3, "ngModel", "ngModelChange"], [1, "p__5", 2, "flex", "0 0 45%"], ["class", "tag__box", "style", "justify-content: center", 4, "ngIf"], ["class", "tag__box", 4, "ngIf"], ["class", "flex-table__column", "style", "font-size: 14px", 4, "ngFor", "ngForOf"], [1, "flex-table__row"], [1, "flex-table__column"], [1, "form-control", "form__input"], [1, "flex-table__column", 2, "justify-content", "space-between"], [1, "form-control", "form__input", 2, "flex", "0 0 47%", "text-align", "right"], [1, "form-control", "form__input", 2, "flex", "0 0 47%"], ["type", "text", 1, "form-control", "form__input"], [1, "btn", "btn-success", "btn__crud", 3, "click"], [1, "tag__box", 2, "justify-content", "center"], [1, "tag__box"], ["class", "__chip", 4, "ngFor", "ngForOf"], [1, "__chip"], [1, "flex-table__column", 2, "font-size", "14px"]], template: function NonParenteralFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NonParenteralFormComponent_Template_button_click_2_listener() { return ctx.new(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NonParenteralFormComponent_button_4_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NonParenteralFormComponent_button_6_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NonParenteralFormComponent_Template_button_click_8_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NonParenteralFormComponent_Template_button_click_10_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NonParenteralFormComponent_Template_input_ngModelChange_16_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NonParenteralFormComponent_Template_input_ngModelChange_20_listener($event) { return ctx.tubeFeed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tube Feed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NonParenteralFormComponent_Template_input_ngModelChange_24_listener($event) { return ctx.liquidMedication = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Liquid Medication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Diagnosis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NonParenteralFormComponent_Template_input_ngModelChange_31_listener($event) { return ctx.diagnosis = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Date Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NonParenteralFormComponent_Template_input_ngModelChange_36_listener($event) { return ctx.dateStart = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Date Off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NonParenteralFormComponent_Template_input_ngModelChange_40_listener($event) { return ctx.dateOff = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Drug Allergy To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, NonParenteralFormComponent_div_45_Template, 3, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, NonParenteralFormComponent_div_46_Template, 2, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NonParenteralFormComponent_Template_input_ngModelChange_49_listener($event) { return ctx.chronicRenalFailure = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Chronic Renal failure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NonParenteralFormComponent_Template_input_ngModelChange_53_listener($event) { return ctx.pregnant = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Pregnant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, NonParenteralFormComponent_div_57_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 13, ctx.nonParenteralStoreService.isUpdate$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 15, ctx.nonParenteralStoreService.isUpdate$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tubeFeed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.liquidMedication);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.diagnosis);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dateStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dateOff);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.drugAllergyTo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.drugAllergyTo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.chronicRenalFailure);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pregnant);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".tag__box[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid #c4c4c4;\n  width: 100%;\n  min-height: 80px;\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  flex-wrap: wrap;\n}\n.__chip[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  padding: 0.3rem 1rem;\n  margin: 0.2rem;\n  font-size: 12px;\n  display: inline-block;\n  border-radius: 35px;\n  border: 1px solid #c4c4c4;\n}\n.checkbox__label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding-left: 0.5rem;\n}\n.__checkbox[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.flex-table__column[_ngcontent-%COMP%]:nth-child(2) {\n  flex-basis: 140px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vbi1wYXJlbnRlcmFsLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJub24tcGFyZW50ZXJhbC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFnX19ib3gge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLl9fY2hpcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xuICBtYXJnaW46IDAuMnJlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XG59XG4uY2hlY2tib3hfX2xhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbn1cbi5fX2NoZWNrYm94IHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbn1cbi5mbGV4LXRhYmxlX19jb2x1bW46bnRoLWNoaWxkKDIpIHtcbiAgZmxleC1iYXNpczogMTQwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NonParenteralFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-non-parenteral-form',
                templateUrl: './non-parenteral-form.component.html',
                styleUrls: ['./non-parenteral-form.component.css'],
            }]
    }], function () { return [{ type: _non_parenteral_store_service__WEBPACK_IMPORTED_MODULE_1__["NonParenteralStoreService"] }]; }, null); })();


/***/ }),

/***/ "KQ+0":
/*!*******************************************!*\
  !*** ./src/app/framework/http.service.ts ***!
  \*******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class HttpService {
    constructor(http) {
        this.http = http;
    }
    doGet(url) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/${url}`, {
            headers: {
                'Content-Type': 'application/json',
                'Content-Over': _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].orgId,
            },
        });
    }
    doPost(url, body) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/${url}`, JSON.stringify(body), {
            headers: {
                'Content-Type': 'application/json',
                'Content-Over': _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].orgId,
            },
        });
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Lf9k":
/*!*******************************************************************************************!*\
  !*** ./src/app/inpatient-medical-record/stat-medication/stat-medication-store.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: StatMedicationStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatMedicationStoreService", function() { return StatMedicationStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class StatMedicationStoreService {
    constructor() {
        this._currentSysKey = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        // private readonly _instructions = new BehaviorSubject<Instruction[]>([]);
        this._isUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this._tabNo = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](2);
        this._deleteDialog = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentSysKey$ = this._currentSysKey.asObservable();
        // readonly instructions$ = this._instructions.asObservable();
        this.isUpdate$ = this._isUpdate.asObservable();
        this.tabNo$ = this._tabNo.asObservable();
        this.deleteDialog$ = this._deleteDialog.asObservable();
    }
    set currentSysKey(v) {
        this._currentSysKey.next(v);
    }
    // set instructions(v: Instruction[]) {
    //   this._instructions.next(v);
    // }
    set tabNo(v) {
        this._tabNo.next(v);
    }
    set isUpdate(v) {
        this._isUpdate.next(v);
    }
    set deleteDialog(v) {
        this._deleteDialog.next(v);
    }
    get isUpdate() {
        return this._isUpdate.getValue();
    }
    get tabNo() {
        return this._tabNo.getValue();
    }
    // get instructions(): Instruction[] {
    //   return this._instructions.getValue();
    // }
    get currentSysKey() {
        return this._currentSysKey.getValue();
    }
    get deleteDialog() {
        return this._deleteDialog.getValue();
    }
}
StatMedicationStoreService.ɵfac = function StatMedicationStoreService_Factory(t) { return new (t || StatMedicationStoreService)(); };
StatMedicationStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StatMedicationStoreService, factory: StatMedicationStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatMedicationStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "N+7S":
/*!**********************************************************************!*\
  !*** ./src/app/framework/advance-search/advance-search.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdvanceSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceSearchComponent", function() { return AdvanceSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




function AdvanceSearchComponent_div_9_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", field_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r5.text, " ");
} }
function AdvanceSearchComponent_div_9_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const condition_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", condition_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", condition_r6.text, " ");
} }
function AdvanceSearchComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvanceSearchComponent_div_9_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r2 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.removeFilter(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdvanceSearchComponent_div_9_Template_select_ngModelChange_3_listener($event) { const filter_r1 = ctx.$implicit; return filter_r1.field = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdvanceSearchComponent_div_9_option_4_Template, 2, 2, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdvanceSearchComponent_div_9_Template_select_ngModelChange_5_listener($event) { const filter_r1 = ctx.$implicit; return filter_r1.condition = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdvanceSearchComponent_div_9_option_6_Template, 2, 2, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdvanceSearchComponent_div_9_Template_input_ngModelChange_7_listener($event) { const filter_r1 = ctx.$implicit; return filter_r1.search = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", filter_r1.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.fields);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", filter_r1.condition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.conditions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", filter_r1.search);
} }
class AdvanceSearchComponent {
    constructor() {
        this.fields = [];
        this.onAdvanceSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCloseFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.conditions = [
            {
                text: 'Equals',
                value: '1',
            },
            {
                text: 'Contains',
                value: '2',
            },
            {
                text: 'Begins With',
                value: '3',
            },
            {
                text: 'Ends With',
                value: '4',
            },
        ];
        this.filters = [
            {
                condition: '3',
                field: '1',
                search: '',
            },
        ];
    }
    ngOnInit() { }
    getDefaultFilter() {
        return {
            condition: '3',
            field: '1',
            search: '',
        };
    }
    clearFilter() {
        this.filters = [this.getDefaultFilter()];
    }
    addFilter() {
        this.filters.push(this.getDefaultFilter());
    }
    advanceSearch() {
        console.log(this.filters);
        this.onAdvanceSearch.emit(this.filters);
    }
    removeFilter(i) {
        if (this.filters.length > 1) {
            this.filters = this.filters.filter((_, index) => index != i);
        }
    }
    closeFilter() {
        this.onCloseFilter.emit();
    }
}
AdvanceSearchComponent.ɵfac = function AdvanceSearchComponent_Factory(t) { return new (t || AdvanceSearchComponent)(); };
AdvanceSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdvanceSearchComponent, selectors: [["app-advance-search"]], inputs: { fields: "fields" }, outputs: { onAdvanceSearch: "onAdvanceSearch", onCloseFilter: "onCloseFilter" }, decls: 10, vars: 1, consts: [[2, "display", "flex", "margin-top", "1rem", "margin-bottom", "1rem"], [1, "btn", "btn-primary", "btn__adv", 3, "click"], [1, "btn", "btn-success", "btn__adv", 3, "click"], [1, "btn", "btn-secondary", "btn__adv", 3, "click"], ["style", "display: flex; margin: 1rem 0", 4, "ngFor", "ngForOf"], [2, "display", "flex", "margin", "1rem 0"], [2, "display", "flex", "flex", "0 0 50%", "align-items", "center", "justify-content", "space-between"], [1, "fas", "fa-times", 3, "click"], [1, "form-control", "form__input", 2, "flex", "0 0 30%", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", 1, "form-control", "form__input", 2, "flex", "0 0 35%", 3, "ngModel", "ngModelChange"], [3, "value"]], template: function AdvanceSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvanceSearchComponent_Template_button_click_1_listener() { return ctx.addFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvanceSearchComponent_Template_button_click_3_listener() { return ctx.advanceSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvanceSearchComponent_Template_button_click_5_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Clear all filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvanceSearchComponent_Template_button_click_7_listener() { return ctx.closeFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Close filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdvanceSearchComponent_div_9_Template, 8, 5, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: [".btn__adv[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font-weight: bold;\n  margin: 0 0.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmFuY2Utc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJhZHZhbmNlLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bl9fYWR2IHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDAgMC4ycmVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvanceSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-advance-search',
                templateUrl: './advance-search.component.html',
                styleUrls: ['./advance-search.component.css'],
            }]
    }], function () { return []; }, { fields: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onAdvanceSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onCloseFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _framework_patient_header_patient_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../framework/patient-header/patient-header.component */ "dxN6");
/* harmony import */ var _framework_table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../framework/table/table.component */ "WWhL");
/* harmony import */ var _framework_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../framework/pagination/pagination.component */ "6j51");
/* harmony import */ var _framework_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../framework/delete-dialog/delete-dialog.component */ "A5yb");
/* harmony import */ var _framework_advance_search_advance_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../framework/advance-search/advance-search.component */ "N+7S");
/* harmony import */ var _framework_doctor_dialog_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../framework/doctor-dialog/doctor-dialog.component */ "TR0s");










class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_framework_patient_header_patient_header_component__WEBPACK_IMPORTED_MODULE_3__["PatientHeaderComponent"],
        _framework_table_table_component__WEBPACK_IMPORTED_MODULE_4__["TableComponent"],
        _framework_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"],
        _framework_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteDialogComponent"],
        _framework_advance_search_advance_search_component__WEBPACK_IMPORTED_MODULE_7__["AdvanceSearchComponent"],
        _framework_doctor_dialog_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DoctorDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _framework_patient_header_patient_header_component__WEBPACK_IMPORTED_MODULE_3__["PatientHeaderComponent"],
        _framework_table_table_component__WEBPACK_IMPORTED_MODULE_4__["TableComponent"],
        _framework_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"],
        _framework_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteDialogComponent"],
        _framework_advance_search_advance_search_component__WEBPACK_IMPORTED_MODULE_7__["AdvanceSearchComponent"],
        _framework_doctor_dialog_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DoctorDialogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _framework_patient_header_patient_header_component__WEBPACK_IMPORTED_MODULE_3__["PatientHeaderComponent"],
                    _framework_table_table_component__WEBPACK_IMPORTED_MODULE_4__["TableComponent"],
                    _framework_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"],
                    _framework_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteDialogComponent"],
                    _framework_advance_search_advance_search_component__WEBPACK_IMPORTED_MODULE_7__["AdvanceSearchComponent"],
                    _framework_doctor_dialog_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DoctorDialogComponent"],
                ],
                declarations: [
                    _framework_patient_header_patient_header_component__WEBPACK_IMPORTED_MODULE_3__["PatientHeaderComponent"],
                    _framework_table_table_component__WEBPACK_IMPORTED_MODULE_4__["TableComponent"],
                    _framework_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"],
                    _framework_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteDialogComponent"],
                    _framework_advance_search_advance_search_component__WEBPACK_IMPORTED_MODULE_7__["AdvanceSearchComponent"],
                    _framework_doctor_dialog_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DoctorDialogComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "QGel":
/*!***************************************************************************************!*\
  !*** ./src/app/inpatient-medical-record/stat-medication/stat-medication.component.ts ***!
  \***************************************************************************************/
/*! exports provided: StatMedicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatMedicationComponent", function() { return StatMedicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _stat_medication_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat-medication-store.service */ "Lf9k");
/* harmony import */ var src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/framework/http.service */ "KQ+0");
/* harmony import */ var _framework_patient_header_patient_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/patient-header/patient-header.component */ "dxN6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _stat_medication_list_stat_medication_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stat-medication-list/stat-medication-list.component */ "fwLT");
/* harmony import */ var _stat_medication_form_stat_medication_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stat-medication-form/stat-medication-form.component */ "bWrW");
/* harmony import */ var _framework_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../framework/delete-dialog/delete-dialog.component */ "A5yb");









function StatMedicationComponent_app_stat_medication_list_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-stat-medication-list");
} }
function StatMedicationComponent_app_stat_medication_form_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-stat-medication-form");
} }
function StatMedicationComponent_app_delete_dialog_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-delete-dialog", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDelete", function StatMedicationComponent_app_delete_dialog_13_Template_app_delete_dialog_onDelete_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteData(); })("onCancel", function StatMedicationComponent_app_delete_dialog_13_Template_app_delete_dialog_onCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.cancelDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StatMedicationComponent {
    constructor(statMedicationStoreService, http) {
        this.statMedicationStoreService = statMedicationStoreService;
        this.http = http;
    }
    ngOnInit() { }
    tabClickHandler(n) {
        const tabEle1 = document.getElementById('tab1');
        const tabEle2 = document.getElementById('tab2');
        switch (n) {
            case 1:
                tabEle1.style.background = '#3b5998';
                tabEle2.style.background = '#8C9899';
                break;
            default:
                tabEle2.style.background = '#3b5998';
                tabEle1.style.background = '#8C9899';
        }
        this.statMedicationStoreService.tabNo = n;
    }
    deleteData() {
        this.statMedicationStoreService.deleteDialog = false;
        if (this.statMedicationStoreService.isUpdate) {
            // this.http
            //   .doPost(
            //     `inpatient-medical-record/delete-instruction/${this.instructionStoreService.currentSysKey}`,
            //     { syskey: this.instructionStoreService.currentSysKey }
            //   )
            //   .subscribe((data) => {
            //     const tabEle1 = document.getElementById('tab1');
            //     const tabEle2 = document.getElementById('tab2');
            //     tabEle1.style.background = '#3b5998';
            //     tabEle2.style.background = '#8C9899';
            //     this.instructionStoreService.isUpdate = false;
            //     this.instructionStoreService.tabNo = 1;
            //   });
        }
    }
    cancelDelete() {
        this.statMedicationStoreService.deleteDialog = false;
    }
}
StatMedicationComponent.ɵfac = function StatMedicationComponent_Factory(t) { return new (t || StatMedicationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_stat_medication_store_service__WEBPACK_IMPORTED_MODULE_1__["StatMedicationStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"])); };
StatMedicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatMedicationComponent, selectors: [["app-stat-medication"]], decls: 15, vars: 9, consts: [[2, "width", "100%", "padding", "2rem 3rem"], [2, "display", "flex"], ["id", "tab1", 1, "tab__list-item", 2, "background", "#3b5998", 3, "click"], ["id", "tab2", 1, "tab__list-item", 3, "click"], [1, "card", "tab__body", 2, "flex", "1"], [4, "ngIf"], [3, "onDelete", "onCancel", 4, "ngIf"], [3, "onDelete", "onCancel"]], template: function StatMedicationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-patient-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatMedicationComponent_Template_div_click_3_listener() { return ctx.tabClickHandler(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatMedicationComponent_Template_div_click_5_listener() { return ctx.tabClickHandler(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Stat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StatMedicationComponent_app_stat_medication_list_9_Template, 1, 0, "app-stat-medication-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, StatMedicationComponent_app_stat_medication_form_11_Template, 1, 0, "app-stat-medication-form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StatMedicationComponent_app_delete_dialog_13_Template, 1, 0, "app-delete-dialog", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 3, ctx.statMedicationStoreService.tabNo$) == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 5, ctx.statMedicationStoreService.tabNo$) == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, ctx.statMedicationStoreService.deleteDialog$));
    } }, directives: [_framework_patient_header_patient_header_component__WEBPACK_IMPORTED_MODULE_3__["PatientHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _stat_medication_list_stat_medication_list_component__WEBPACK_IMPORTED_MODULE_5__["StatMedicationListComponent"], _stat_medication_form_stat_medication_form_component__WEBPACK_IMPORTED_MODULE_6__["StatMedicationFormComponent"], _framework_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteDialogComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0LW1lZGljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatMedicationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stat-medication',
                templateUrl: './stat-medication.component.html',
                styleUrls: ['./stat-medication.component.css'],
            }]
    }], function () { return [{ type: _stat_medication_store_service__WEBPACK_IMPORTED_MODULE_1__["StatMedicationStoreService"] }, { type: src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "R7DW":
/*!************************************************************************************************************!*\
  !*** ./src/app/nursing-activity-worklist/nursing-activity-worklist/nursing-activity-worklist.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: NursingActivityWorklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NursingActivityWorklistComponent", function() { return NursingActivityWorklistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_app_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app-store.service */ "7pZn");
/* harmony import */ var _nurse_activity_work_list_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nurse-activity-work-list-store.service */ "v2KL");
/* harmony import */ var src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/framework/http.service */ "KQ+0");
/* harmony import */ var _framework_patient_header_patient_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/patient-header/patient-header.component */ "dxN6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nursing_activity_worklist_list_nursing_activity_worklist_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nursing-activity-worklist-list/nursing-activity-worklist-list.component */ "fplC");
/* harmony import */ var _nursing_activity_worklist_form_nursing_activity_worklist_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nursing-activity-worklist-form/nursing-activity-worklist-form.component */ "VLjx");
/* harmony import */ var _framework_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../framework/delete-dialog/delete-dialog.component */ "A5yb");
/* harmony import */ var _framework_doctor_dialog_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../framework/doctor-dialog/doctor-dialog.component */ "TR0s");











function NursingActivityWorklistComponent_app_nursing_activity_worklist_list_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nursing-activity-worklist-list");
} }
function NursingActivityWorklistComponent_app_nursing_activity_worklist_form_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nursing-activity-worklist-form");
} }
function NursingActivityWorklistComponent_app_delete_dialog_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-delete-dialog", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDelete", function NursingActivityWorklistComponent_app_delete_dialog_13_Template_app_delete_dialog_onDelete_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteData(); })("onCancel", function NursingActivityWorklistComponent_app_delete_dialog_13_Template_app_delete_dialog_onCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.cancelDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NursingActivityWorklistComponent_app_doctor_dialog_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-doctor-dialog");
} }
class NursingActivityWorklistComponent {
    constructor(appStoreService, nurseActivityWorkListStoreService, http) {
        this.appStoreService = appStoreService;
        this.nurseActivityWorkListStoreService = nurseActivityWorkListStoreService;
        this.http = http;
    }
    ngOnInit() {
        this.fetchDoctors();
    }
    fetchDoctors() {
        this.http.doGet('nurse-activity-worklist/doctors').subscribe((data) => {
            this.appStoreService.doctors = data;
        }, (error) => { }, () => { });
    }
    tabClickHandler(n) {
        const tabEle1 = document.getElementById('tab1');
        const tabEle2 = document.getElementById('tab2');
        switch (n) {
            case 1:
                tabEle1.style.background = '#3b5998';
                tabEle2.style.background = '#8C9899';
                break;
            default:
                tabEle2.style.background = '#3b5998';
                tabEle1.style.background = '#8C9899';
        }
        this.nurseActivityWorkListStoreService.tabNo = n;
    }
    deleteData() {
        this.nurseActivityWorkListStoreService.deleteDialog = false;
        if (this.nurseActivityWorkListStoreService.isUpdate) {
            this.http
                .doPost(`nurse-activity-worklist/delete/${this.nurseActivityWorkListStoreService.currentSysKey}`, { syskey: this.nurseActivityWorkListStoreService.currentSysKey })
                .subscribe((data) => {
                const tabEle1 = document.getElementById('tab1');
                const tabEle2 = document.getElementById('tab2');
                tabEle1.style.background = '#3b5998';
                tabEle2.style.background = '#8C9899';
                this.nurseActivityWorkListStoreService.isUpdate = false;
                this.nurseActivityWorkListStoreService.tabNo = 1;
            }, (error) => { }, () => { });
        }
    }
    cancelDelete() {
        this.nurseActivityWorkListStoreService.deleteDialog = false;
    }
}
NursingActivityWorklistComponent.ɵfac = function NursingActivityWorklistComponent_Factory(t) { return new (t || NursingActivityWorklistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_store_service__WEBPACK_IMPORTED_MODULE_1__["AppStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nurse_activity_work_list_store_service__WEBPACK_IMPORTED_MODULE_2__["NurseActivityWorkListStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"])); };
NursingActivityWorklistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NursingActivityWorklistComponent, selectors: [["app-nursing-activity-worklist"]], decls: 17, vars: 12, consts: [[2, "width", "100%", "padding", "2rem 3rem"], [2, "display", "flex"], ["id", "tab1", 1, "tab__list-item", 2, "background", "#3b5998", 3, "click"], ["id", "tab2", 1, "tab__list-item", 3, "click"], [1, "card", "tab__body"], [4, "ngIf"], [3, "onDelete", "onCancel", 4, "ngIf"], [3, "onDelete", "onCancel"]], template: function NursingActivityWorklistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-patient-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NursingActivityWorklistComponent_Template_div_click_3_listener() { return ctx.tabClickHandler(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NursingActivityWorklistComponent_Template_div_click_5_listener() { return ctx.tabClickHandler(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Nurse Activity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NursingActivityWorklistComponent_app_nursing_activity_worklist_list_9_Template, 1, 0, "app-nursing-activity-worklist-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NursingActivityWorklistComponent_app_nursing_activity_worklist_form_11_Template, 1, 0, "app-nursing-activity-worklist-form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NursingActivityWorklistComponent_app_delete_dialog_13_Template, 1, 0, "app-delete-dialog", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NursingActivityWorklistComponent_app_doctor_dialog_15_Template, 1, 0, "app-doctor-dialog", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, ctx.nurseActivityWorkListStoreService.tabNo$) == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 6, ctx.nurseActivityWorkListStoreService.tabNo$) == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, ctx.nurseActivityWorkListStoreService.deleteDialog$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 10, ctx.appStoreService.doctorDialog$));
    } }, directives: [_framework_patient_header_patient_header_component__WEBPACK_IMPORTED_MODULE_4__["PatientHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _nursing_activity_worklist_list_nursing_activity_worklist_list_component__WEBPACK_IMPORTED_MODULE_6__["NursingActivityWorklistListComponent"], _nursing_activity_worklist_form_nursing_activity_worklist_form_component__WEBPACK_IMPORTED_MODULE_7__["NursingActivityWorklistFormComponent"], _framework_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteDialogComponent"], _framework_doctor_dialog_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DoctorDialogComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudXJzaW5nLWFjdGl2aXR5LXdvcmtsaXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NursingActivityWorklistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nursing-activity-worklist',
                templateUrl: './nursing-activity-worklist.component.html',
                styleUrls: ['./nursing-activity-worklist.component.css'],
            }]
    }], function () { return [{ type: src_app_app_store_service__WEBPACK_IMPORTED_MODULE_1__["AppStoreService"] }, { type: _nurse_activity_work_list_store_service__WEBPACK_IMPORTED_MODULE_2__["NurseActivityWorkListStoreService"] }, { type: src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "RfXh":
/*!*****************************************************************************************************!*\
  !*** ./src/app/inpatient-medical-record/instruction/instruction-form/instruction-form.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: InstructionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionFormComponent", function() { return InstructionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/framework/http.service */ "KQ+0");
/* harmony import */ var _instruction_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../instruction-store.service */ "Alt2");
/* harmony import */ var src_app_app_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app-store.service */ "7pZn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function InstructionFormComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionFormComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InstructionFormComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionFormComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InstructionFormComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Known Drug Allergy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InstructionFormComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const allergy_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", allergy_r10.trim(), " ");
} }
function InstructionFormComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InstructionFormComponent_div_26_div_1_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.drugAllergyTo.split(","));
} }
function InstructionFormComponent_tr_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instruction_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](instruction_r11.fmtDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](instruction_r11.instruction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](instruction_r11.remarks);
} }
class InstructionFormComponent {
    constructor(http, instructionStoreService, appStoreService) {
        this.http = http;
        this.instructionStoreService = instructionStoreService;
        this.appStoreService = appStoreService;
        this.date = '';
        this.dateTaken = '';
        this.drugAllergyTo = '';
        this.instruction = '';
        this.remarks = '';
        this.filteredInstructions = [];
        this.drugAllergyToCurrent = '';
    }
    ngOnInit() {
        this.bindEditData();
        this.filteredInstructions = this.instructionStoreService.instructions.filter((instruction) => instruction.pId == this.appStoreService.pId);
    }
    new() {
        this.instructionStoreService.isUpdate = false;
        this.date = '';
        this.dateTaken = '';
        this.drugAllergyTo = '';
        this.instruction = '';
        this.remarks = '';
        this.fetchAllergiesByPatient(this.appStoreService.pId);
    }
    bindEditData() {
        if (this.instructionStoreService.isUpdate) {
            const tabEle1 = document.getElementById('tab1');
            const tabEle2 = document.getElementById('tab2');
            tabEle2.style.background = '#3b5998';
            tabEle1.style.background = '#8C9899';
            const instruction = this.instructionStoreService.instructions.find((v) => v.syskey == this.instructionStoreService.currentSysKey);
            this.date = instruction.date;
            this.dateTaken = instruction.dateTaken;
            this.drugAllergyTo = instruction.drugAllergyTo;
            this.instruction = instruction.instruction;
            this.remarks = instruction.remarks;
        }
        else {
            this.fetchAllergiesByPatient(this.appStoreService.pId);
        }
    }
    save() {
        this.http
            .doPost(`inpatient-medical-record/${this.instructionStoreService.isUpdate
            ? 'update-instruction/' + this.instructionStoreService.currentSysKey
            : 'save-instruction'}`, {
            syskey: 0,
            pId: this.appStoreService.pId,
            RgsNo: 1,
            userid: '',
            username: '',
            date: this.date,
            dateTaken: this.dateTaken,
            drugAllergyTo: this.drugAllergyTo,
            instruction: this.instruction,
            remarks: this.remarks,
        })
            .subscribe((data) => {
            if (!this.instructionStoreService.isUpdate) {
                this.instructionStoreService.currentSysKey = data.syskey;
            }
            this.instructionStoreService.isUpdate = true;
        });
    }
    delete() {
        if (this.instructionStoreService.isUpdate)
            this.instructionStoreService.deleteDialog = true;
    }
    print() {
        const doc = new jspdf__WEBPACK_IMPORTED_MODULE_1__["jsPDF"]();
        doc.autoTable({
            html: '#inpatient__record',
            startY: 35,
            theme: 'grid',
            didDrawCell: (data) => {
                console.log(data.row);
                switch (data.row.index) {
                    case 1:
                        doc.setFontSize(9);
                        switch (data.column.index) {
                            case 0:
                                doc.text('WARD', data.cell.x + 2, data.cell.y + 5);
                                doc.text(this.appStoreService.patientInfo.ward, data.cell.x + 5, data.cell.y + 10);
                                break;
                            case 1:
                                doc.text('BED', data.cell.x + 2, data.cell.y + 5);
                                doc.text(this.appStoreService.patientInfo.bed, data.cell.x + 5, data.cell.y + 10);
                                break;
                        }
                        break;
                    case 2:
                        doc.setFontSize(9);
                        doc.text('DRUG ALLERGY', data.cell.x + 1, data.cell.y + 3);
                        doc.text('DRUG ALLERGY TO:', data.cell.x + 40, data.cell.y + 3);
                        doc.text(this.appStoreService.patientInfo.drugAllergyTo, data.cell.x + 73, data.cell.y + 3);
                        doc.rect(data.cell.x + 3, data.cell.y + 5, 5, 5);
                        doc.text('YES', data.cell.x + 10, data.cell.y + 9);
                        doc.rect(data.cell.x + 25, data.cell.y + 5, 5, 5);
                        doc.text('NO', data.cell.x + 32, data.cell.y + 9);
                        break;
                }
            },
            styles: {
                minCellWidth: 15,
                fontSize: 11,
                cellPadding: 4,
                valign: 'middle',
                halign: 'center',
            },
        });
        doc.setFontSize(11);
        doc.text('ASIA ROYAL HOSPITAL', 105, 15, { align: 'center' });
        doc.text('IN-PATIENT MEDICATION RECORD - INSTRUCTION', 105, 23, {
            align: 'center',
        });
        const y = 80;
        doc.setFontSize(10);
        doc.text('HT: ', 18, y);
        doc.line(25, y, 45, y);
        doc.text('WT: ', 55, y);
        doc.line(62, y, 82, y);
        doc.text('DATE TAKEN: ', 135, y);
        doc.line(147 + 15, y, 180 + 15, y);
        doc.setFontSize(9);
        doc.text('(To be taken on admission)', 31, y + 3);
        doc.autoTable({
            html: '#instruction__print',
            startY: 90,
            theme: 'grid',
            styles: {
                fontSize: 12,
                valign: 'middle',
                halign: 'center',
            },
            headStyles: {
                fillColor: '#686869',
            },
        });
        doc.save('instruction.pdf');
    }
    fetchAllergiesByPatient(pId) {
        this.http
            .doGet(`inpatient-medical-record/allergies/${pId}`)
            .subscribe((data) => {
            this.drugAllergyTo = data.length ? data[0].allergy : '';
        });
    }
}
InstructionFormComponent.ɵfac = function InstructionFormComponent_Factory(t) { return new (t || InstructionFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_instruction_store_service__WEBPACK_IMPORTED_MODULE_4__["InstructionStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_store_service__WEBPACK_IMPORTED_MODULE_5__["AppStoreService"])); };
InstructionFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstructionFormComponent, selectors: [["app-instruction-form"]], decls: 59, vars: 13, consts: [[2, "flex", "1"], [2, "display", "flex", "margin-top", "1rem", "margin-bottom", "2rem"], [1, "btn", "btn-primary", "btn__crud", 3, "click"], ["class", "btn btn-success btn__crud", 3, "click", 4, "ngIf"], [1, "btn", "btn-danger", "btn__crud", 3, "click"], [1, "flex__row"], [1, "p__5", 2, "flex", "0 0 20%"], [1, "form__label"], ["type", "date", 1, "form-control", "form__input", 3, "ngModel", "ngModelChange"], [1, "p__5", 2, "flex", "0 0 70%"], ["class", "tag__box", "style", "justify-content: center", 4, "ngIf"], ["class", "tag__box", 4, "ngIf"], ["type", "date", 1, "form-control", "form__input", 2, "min-height", "120px", 3, "ngModel", "ngModelChange"], ["id", "inpatient__record", 2, "display", "none"], ["colspan", "2"], ["rowspan", "2"], ["colspan", "3"], ["id", "instruction__print", 2, "display", "none"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-success", "btn__crud", 3, "click"], [1, "tag__box", 2, "justify-content", "center"], [1, "tag__box"], ["class", "__chip", 4, "ngFor", "ngForOf"], [1, "__chip"]], template: function InstructionFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionFormComponent_Template_button_click_2_listener() { return ctx.new(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InstructionFormComponent_button_4_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InstructionFormComponent_button_6_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionFormComponent_Template_button_click_8_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionFormComponent_Template_button_click_10_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InstructionFormComponent_Template_input_ngModelChange_16_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Date Taken");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InstructionFormComponent_Template_input_ngModelChange_20_listener($event) { return ctx.dateTaken = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Drug Allergy To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, InstructionFormComponent_div_25_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, InstructionFormComponent_div_26_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Instruction Under Treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InstructionFormComponent_Template_textarea_ngModelChange_31_listener($event) { return ctx.instruction = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InstructionFormComponent_Template_textarea_ngModelChange_36_listener($event) { return ctx.remarks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "IN-PATIENT MEDICATION RECORD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "PATIENT LABEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "DATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "INSTRUCTION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "REMARKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, InstructionFormComponent_tr_58_Template, 7, 3, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, ctx.instructionStoreService.isUpdate$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 11, ctx.instructionStoreService.isUpdate$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dateTaken);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.drugAllergyTo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.drugAllergyTo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.instruction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.remarks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredInstructions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".tag__box[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid #c4c4c4;\n  width: 100%;\n  min-height: 80px;\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  flex-wrap: wrap;\n}\n.__chip[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  padding: 0.3rem 1rem;\n  margin: 0.2rem;\n  font-size: 12px;\n  display: inline-block;\n  border-radius: 35px;\n  border: 1px solid #c4c4c4;\n}\n#inpatient__record[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RydWN0aW9uLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJpbnN0cnVjdGlvbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFnX19ib3gge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLl9fY2hpcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xuICBtYXJnaW46IDAuMnJlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGM0YzQ7XG59XG4jaW5wYXRpZW50X19yZWNvcmQgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstructionFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-instruction-form',
                templateUrl: './instruction-form.component.html',
                styleUrls: ['./instruction-form.component.css'],
            }]
    }], function () { return [{ type: src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: _instruction_store_service__WEBPACK_IMPORTED_MODULE_4__["InstructionStoreService"] }, { type: src_app_app_store_service__WEBPACK_IMPORTED_MODULE_5__["AppStoreService"] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'ithis';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "TR0s":
/*!********************************************************************!*\
  !*** ./src/app/framework/doctor-dialog/doctor-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: DoctorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorDialogComponent", function() { return DoctorDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "KQ+0");
/* harmony import */ var src_app_app_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-store.service */ "7pZn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pagination/pagination.component */ "6j51");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../table/table.component */ "WWhL");
/* harmony import */ var _advance_search_advance_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../advance-search/advance-search.component */ "N+7S");









function DoctorDialogComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-advance-search", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAdvanceSearch", function DoctorDialogComponent_div_15_Template_app_advance_search_onAdvanceSearch_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.advanceSearch($event); })("onCloseFilter", function DoctorDialogComponent_div_15_Template_app_advance_search_onCloseFilter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.closeFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fields", ctx_r0.fields);
} }
function DoctorDialogComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorDialogComponent_tr_19_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const doctor_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.selectDoctor(doctor_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doctor_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", doctor_r5.doctorID, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", doctor_r5.doctorName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doctor_r5.speciality);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doctor_r5.rank);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doctor_r5.degree);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doctor_r5.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doctor_r5.clinic);
} }
class DoctorDialogComponent {
    constructor(http, appStoreService) {
        this.http = http;
        this.appStoreService = appStoreService;
        this.headers = ['ID', 'Name', 'Speciality', 'Rank', 'Degree', 'Phone', 'Clinic'];
        this.doctors = [];
        this.page = 1;
        this.totalPage = 0;
        this.total = 0;
        this.perPage = 10;
        this.perPages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        this.start = 0;
        this.end = 0;
        this.fields = [
            {
                text: 'ID',
                value: '1',
                key: 'doctorID',
            },
            {
                text: 'Name',
                value: '2',
                key: 'doctorName',
            },
            {
                text: 'Speciality',
                value: '3',
                key: 'speciality',
            },
            {
                text: 'Rank',
                value: '4',
                key: 'rank',
            },
            {
                text: 'Degree',
                value: '5',
                key: 'degree',
            },
            {
                text: 'Phone',
                value: '6',
                key: 'phone',
            },
            {
                text: 'Clinic',
                value: '7',
                key: 'clinic',
            },
        ];
        this.search = '';
        this.open = false;
    }
    ngOnInit() {
        this.fetchDoctors();
    }
    selectDoctor(doctor) {
        this.appStoreService.doctor = doctor;
        this.appStoreService.doctorDialog = false;
    }
    initPagination(data) {
        this.start = 0;
        this.end = this.perPage;
        if (data.length < this.perPage) {
            this.end = data.length;
        }
        this.calculateTotal(data);
    }
    calculateTotal(data) {
        this.totalPage = Math.ceil(data.length / this.perPage);
        this.total = data.length;
    }
    fetchDoctors() {
        this.http.doGet('nurse-activity-worklist/doctors').subscribe((data) => {
            this.appStoreService.doctors = [...data];
            this.doctors = data;
            this.initPagination(data);
        }, (error) => { }, () => { });
    }
    handlePerPageChanged(perPage) {
        this.perPage = perPage;
        this.initPagination(this.doctors);
    }
    handleSkip(n) {
        switch (n) {
            case 1:
                if (this.page < this.totalPage) {
                    this.page++;
                    this.end = this.page * this.perPage;
                    if (this.page == this.totalPage) {
                        this.end = this.doctors.length - this.start;
                    }
                    this.start = (this.page - 1) * this.perPage;
                }
                break;
            case 2:
                if (this.page !== 1) {
                    this.page--;
                    this.end = this.page * this.perPage;
                    this.start = (this.page - 1) * this.perPage;
                }
                else {
                    this.start = (this.page - 1) * this.perPage;
                    this.end = this.perPage;
                    if (this.doctors.length < this.perPage) {
                        this.end = this.doctors.length;
                    }
                }
            case 3:
                this.page = 1;
                this.start = (this.page - 1) * this.perPage;
                this.end = this.perPage;
                if (this.doctors.length < this.perPage) {
                    this.end = this.doctors.length;
                }
                break;
            default:
                this.page = this.totalPage;
                this.start = (this.page - 1) * this.perPage;
                if (this.doctors.length % this.perPage === 0) {
                    this.end = this.page * this.perPage;
                }
                else {
                    this.end = this.start + (this.doctors.length % this.perPage);
                }
        }
    }
    openAdvSearch() {
        this.open = true;
    }
    closeFilter() {
        this.open = false;
    }
    advanceSearch(filters) {
        this.doctors = this.appStoreService.doctors.filter((doctor) => {
            var _a;
            let flag = true;
            for (const filter of filters) {
                const key = (_a = this.fields.find((field) => field.value == filter.field)) === null || _a === void 0 ? void 0 : _a.key;
                switch (filter.condition) {
                    case '1':
                        flag = flag && filter.search == doctor[key];
                        break;
                    case '2':
                        flag = flag && doctor[key].toString().includes(filter.search);
                        break;
                    case '3':
                        flag = flag && doctor[key].toString().startsWith(filter.search);
                        break;
                    default:
                        flag = flag && doctor[key].toString().endsWith(filter.search);
                }
            }
            return flag;
        });
        this.initPagination(this.doctors);
    }
    normalSearch() {
        if (this.search) {
            const searchKeys = this.fields.map((field) => field.key);
            this.doctors = this.appStoreService.doctors.filter((doctor) => {
                let flag = false;
                for (const key in doctor) {
                    if (searchKeys.includes(key)) {
                        flag = flag || doctor[key].toString().includes(this.search);
                    }
                }
                return flag;
            });
        }
        this.initPagination(this.doctors);
    }
    showAll() {
        this.fetchDoctors();
    }
    clearSearch() {
        this.search = '';
    }
    closeDialog() {
        this.appStoreService.doctorDialog = false;
    }
    preventBubble(e) {
        e.stopPropagation();
    }
}
DoctorDialogComponent.ɵfac = function DoctorDialogComponent_Factory(t) { return new (t || DoctorDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_store_service__WEBPACK_IMPORTED_MODULE_2__["AppStoreService"])); };
DoctorDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DoctorDialogComponent, selectors: [["app-doctor-dialog"]], decls: 20, vars: 9, consts: [[1, "dialog__wrapper", 3, "click"], [1, "dialog__content", 3, "click"], [2, "display", "flex", "margin", "1rem 0"], [2, "display", "flex", "flex", "0 0 50%", "align-items", "center", "justify-content", "space-between"], ["type", "text", 1, "form-control", "form__input", 2, "flex", "0 0 45%", 3, "ngModel", "ngModelChange"], ["title", "Search", 1, "__fab", "__raised", 3, "click"], [1, "fas", "fa-arrow-right"], ["title", "Show all", 1, "__fab", "__raised", 3, "click"], [1, "fas", "fa-list"], ["title", "Clear", 1, "__fab", "__raised", 3, "click"], [1, "fas", "fa-times"], ["title", "Advanced Search", 1, "__fab", "__raised", 3, "click"], [1, "fas", "fa-search"], ["title", "Export", 1, "__fab", "__raised"], [1, "fas", "fa-file-export"], [4, "ngIf"], [2, "display", "flex", "margin", "0.5rem 0"], [2, "flex", "0 0 35%", 3, "total", "perPage", "start", "end", "perPages", "onPerPageChanged", "onNext", "onPrev", "onSkipFirst", "onSkipLast"], [1, "doctor__table", 3, "headers"], ["class", "__raised", 3, "click", 4, "ngFor", "ngForOf"], [3, "fields", "onAdvanceSearch", "onCloseFilter"], [1, "__raised", 3, "click"]], template: function DoctorDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorDialogComponent_Template_div_click_0_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorDialogComponent_Template_div_click_1_listener($event) { return ctx.preventBubble($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorDialogComponent_Template_input_ngModelChange_4_listener($event) { return ctx.search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorDialogComponent_Template_div_click_5_listener() { return ctx.normalSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorDialogComponent_Template_div_click_7_listener() { return ctx.showAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorDialogComponent_Template_div_click_9_listener() { return ctx.clearSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorDialogComponent_Template_div_click_11_listener() { return ctx.openAdvSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DoctorDialogComponent_div_15_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-pagination", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPerPageChanged", function DoctorDialogComponent_Template_app_pagination_onPerPageChanged_17_listener($event) { return ctx.handlePerPageChanged($event); })("onNext", function DoctorDialogComponent_Template_app_pagination_onNext_17_listener() { return ctx.handleSkip(1); })("onPrev", function DoctorDialogComponent_Template_app_pagination_onPrev_17_listener() { return ctx.handleSkip(2); })("onSkipFirst", function DoctorDialogComponent_Template_app_pagination_onSkipFirst_17_listener() { return ctx.handleSkip(3); })("onSkipLast", function DoctorDialogComponent_Template_app_pagination_onSkipLast_17_listener() { return ctx.handleSkip(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DoctorDialogComponent_tr_19_Template, 15, 7, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", ctx.doctors.length)("perPage", ctx.perPage)("start", ctx.start)("end", ctx.end)("perPages", ctx.perPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headers", ctx.headers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.doctors.slice(ctx.start, ctx.end));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"], _table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _advance_search_advance_search_component__WEBPACK_IMPORTED_MODULE_7__["AdvanceSearchComponent"]], styles: [".dialog__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  transition: all 0.3s;\n  background-color: rgb(33, 33, 33, 0.46);\n  border-color: rgb(33, 33, 33, 0.46);\n  z-index: 98;\n}\n.dialog__content[_ngcontent-%COMP%] {\n  width: 950px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 0.5rem;\n  max-width: 1200px;\n  background: #fff;\n  transition: all 0.3s;\n  z-index: 99;\n  overflow-y: auto;\n  border-radius: 10px;\n  height: 750px;\n}\n.doctor__table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 11px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3Rvci1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLHVDQUF1QztFQUN2QyxtQ0FBbUM7RUFDbkMsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1o7bUNBQ2lDO0VBQ2pDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJkb2N0b3ItZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nX193cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzMsIDMzLCAzMywgMC40Nik7XG4gIGJvcmRlci1jb2xvcjogcmdiKDMzLCAzMywgMzMsIDAuNDYpO1xuICB6LWluZGV4OiA5ODtcbn1cbi5kaWFsb2dfX2NvbnRlbnQge1xuICB3aWR0aDogOTUwcHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgei1pbmRleDogOTk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogNzUwcHg7XG59XG4uZG9jdG9yX190YWJsZSB0ZCB7XG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-doctor-dialog',
                templateUrl: './doctor-dialog.component.html',
                styleUrls: ['./doctor-dialog.component.css'],
            }]
    }], function () { return [{ type: _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: src_app_app_store_service__WEBPACK_IMPORTED_MODULE_2__["AppStoreService"] }]; }, null); })();


/***/ }),

/***/ "VLjx":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/nursing-activity-worklist/nursing-activity-worklist/nursing-activity-worklist-form/nursing-activity-worklist-form.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: NursingActivityWorklistFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NursingActivityWorklistFormComponent", function() { return NursingActivityWorklistFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_framework_doctor_dialog_doctor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/framework/doctor-dialog/doctor.model */ "xkeh");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_app_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app-store.service */ "7pZn");
/* harmony import */ var _nurse_activity_work_list_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../nurse-activity-work-list-store.service */ "v2KL");
/* harmony import */ var src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/framework/http.service */ "KQ+0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











function NursingActivityWorklistFormComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NursingActivityWorklistFormComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NursingActivityWorklistFormComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NursingActivityWorklistFormComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NursingActivityWorklistFormComponent_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.text, " ");
} }
class NursingActivityWorklistFormComponent {
    constructor(appStoreService, nurseActivityWorkListStoreService, http) {
        this.appStoreService = appStoreService;
        this.nurseActivityWorkListStoreService = nurseActivityWorkListStoreService;
        this.http = http;
        this.procedure = '1';
        this.date = '';
        this.dueDateChange = '';
        this.dueDateRemove = '';
        this.size = '';
        this.sizeUnit = 'mm';
        this.site = '';
        this.siteUnit = 'mm';
        this.marking = '';
        this.markingUnit = 'mm';
        this.externalLength = '';
        this.externalLengthUnit = 'mm';
        this.filterdPrintData = [];
    }
    ngOnInit() {
        this.appStoreService.doctor = new src_app_framework_doctor_dialog_doctor_model__WEBPACK_IMPORTED_MODULE_1__["Doctor"]();
        this.bindEditData();
    }
    bindEditData() {
        if (this.nurseActivityWorkListStoreService.isUpdate) {
            const tabEle1 = document.getElementById('tab1');
            const tabEle2 = document.getElementById('tab2');
            tabEle2.style.background = '#3b5998';
            tabEle1.style.background = '#8C9899';
            const activity = this.nurseActivityWorkListStoreService.activities.find((v) => v.syskey == this.nurseActivityWorkListStoreService.currentSysKey);
            this.procedure = activity.procedure.toString();
            this.date = activity.date;
            this.dueDateChange = activity.dueDateChange;
            this.dueDateRemove = activity.dueDateRemove;
            this.size = activity.size.toString();
            this.sizeUnit = activity.sizeUnit;
            this.site = activity.site.toString();
            this.siteUnit = activity.siteUnit;
            this.marking = activity.marking.toString();
            this.markingUnit = activity.markingUnit;
            this.externalLength = activity.externalLength.toString();
            this.externalLengthUnit = activity.externalLengthUnit;
            this.appStoreService.doctor = this.appStoreService.doctors.find((doctor) => doctor.syskey == activity.doctorId);
        }
    }
    new() {
        this.nurseActivityWorkListStoreService.isUpdate = false;
        this.procedure = '1';
        this.date = '';
        this.dueDateChange = '';
        this.dueDateRemove = '';
        this.size = '';
        this.sizeUnit = 'mm';
        this.site = '';
        this.siteUnit = 'mm';
        this.marking = '';
        this.markingUnit = 'mm';
        this.externalLength = '';
        this.externalLengthUnit = 'mm';
    }
    save() {
        this.http
            .doPost(`nurse-activity-worklist/${!this.nurseActivityWorkListStoreService.isUpdate
            ? 'save'
            : `update/${this.nurseActivityWorkListStoreService.currentSysKey}`}`, {
            pId: this.appStoreService.pId,
            RgsNo: 1,
            userid: '',
            username: '',
            doctorSysKey: this.appStoreService.doctor.syskey,
            procedure: parseInt(this.procedure),
            date: this.date,
            dueDateChange: this.dueDateChange,
            dueDateRemove: this.dueDateRemove,
            size: parseFloat(this.size || '0'),
            site: parseFloat(this.site || '0'),
            marking: parseFloat(this.marking || '0'),
            externalLength: parseFloat(this.externalLength || '0'),
            siteUnit: this.siteUnit,
            sizeUnit: this.sizeUnit,
            markingUnit: this.markingUnit,
            externalLengthUnit: this.externalLengthUnit,
        })
            .subscribe((data) => {
            if (!this.nurseActivityWorkListStoreService.isUpdate) {
                this.nurseActivityWorkListStoreService.currentSysKey = data.syskey;
            }
            this.nurseActivityWorkListStoreService.isUpdate = true;
        }, (error) => { }, () => { });
    }
    delete() {
        if (this.nurseActivityWorkListStoreService.isUpdate)
            this.nurseActivityWorkListStoreService.deleteDialog = true;
    }
    print() {
        this.http.doGet('nurse-activity-worklist/get-by-patient/1').subscribe((printData) => {
            const query1 = [5, 11, 16, 21, 25, 29, 33, 37, 41, 45]
                .map((n) => `#export_table tr:nth-child(${n}) td:nth-child(1)`)
                .join(', ');
            const query2 = [6, 12, 17, 22, 26, 30, 34, 38, 42, 46]
                .map((n) => `#export_table tr:nth-child(${n}) td:nth-child(1)`)
                .join(', ');
            const elems = document.querySelectorAll(query2);
            const proEles = document.querySelectorAll(query1);
            proEles.forEach((p, i) => {
                const tubeName = p.innerHTML.trim();
                const proRef = this.nurseActivityWorkListStoreService.procedures.find((v) => v.text.match(new RegExp(tubeName)));
                if (proRef) {
                    this.filterdPrintData = printData.filter((p) => p.procedure == proRef.value);
                    if (this.filterdPrintData.length) {
                        elems[i].innerHTML = moment__WEBPACK_IMPORTED_MODULE_2__(this.filterdPrintData[0].dueDateChange).format('DD/MM/yyyy');
                    }
                }
            });
            const doc = new jspdf__WEBPACK_IMPORTED_MODULE_3__["jsPDF"]();
            doc.autoTable({
                html: '#export_table',
                startY: 10,
                theme: 'grid',
                didDrawCell: (data) => {
                    switch (data.row.index) {
                        case 4:
                        case 10:
                        case 15:
                        case 20:
                        case 24:
                        case 28:
                        case 32:
                        case 36:
                        case 40:
                        case 44:
                            const tubeName = data.row.cells[0].text.join(' ');
                            const proRef = this.nurseActivityWorkListStoreService.procedures.find((v) => v.text.match(new RegExp(tubeName)));
                            if (proRef) {
                                this.filterdPrintData = printData.filter((p) => p.procedure == proRef.value);
                            }
                            this.filterdPrintData.forEach((p, i) => {
                                if (i < 7) {
                                    data.row.cells[i + 1].text[0] = moment__WEBPACK_IMPORTED_MODULE_2__(p.date).format('DD/MM/yyyy');
                                }
                            });
                            break;
                        case 5:
                        case 11:
                        case 16:
                        case 21:
                        case 25:
                        case 29:
                        case 33:
                        case 37:
                        case 41:
                        case 45:
                            // Due Date
                            this.filterdPrintData.forEach((p, i) => {
                                if (i < 7) {
                                    data.row.cells[i + 1].text[0] = moment__WEBPACK_IMPORTED_MODULE_2__(p.dueDateChange).format('DD/MM/yyyy');
                                }
                            });
                            break;
                        case 34:
                            this.filterdPrintData.forEach((p, i) => {
                                if (i < 7) {
                                    data.row.cells[i + 1].text[0] =
                                        p.site + p.siteUnit + ' & ' + p.size + p.sizeUnit;
                                }
                            });
                            break;
                        case 17:
                        case 22:
                        case 26:
                        case 30:
                        case 38:
                            this.filterdPrintData.forEach((p, i) => {
                                if (i < 7) {
                                    data.row.cells[i + 1].text[0] = p.site + p.siteUnit;
                                }
                            });
                            break;
                        case 6:
                        case 12:
                        case 18:
                        case 42:
                        case 46:
                            this.filterdPrintData.forEach((p, i) => {
                                if (i < 7) {
                                    data.row.cells[i + 1].text[0] = p.size + p.sizeUnit;
                                }
                            });
                            break;
                        case 47:
                        case 8:
                            this.filterdPrintData.forEach((p, i) => {
                                if (i < 7) {
                                    data.row.cells[i + 1].text[0] =
                                        p.externalLength + p.externalLengthUnit;
                                }
                            });
                            break;
                        case 7:
                        case 13:
                            this.filterdPrintData.forEach((p, i) => {
                                if (i < 7) {
                                    data.row.cells[i + 1].text[0] = p.marking + p.markingUnit;
                                }
                            });
                            break;
                    }
                },
                willDrawCell: (data) => {
                    switch (data.row.index) {
                        case 0:
                            doc.setFillColor('#CDC8C8');
                            doc.setTextColor('#fff');
                            break;
                        case 3:
                        case 9:
                        case 14:
                        case 19:
                        case 23:
                        case 27:
                        case 31:
                        case 35:
                        case 39:
                        case 43:
                        case 48:
                        case 50:
                            data.row.height = 1;
                            doc.setFillColor('#CDC8C8');
                    }
                },
                styles: {
                    fontSize: 9,
                    minCellHeight: 1,
                    cellPadding: 1,
                    valign: 'middle',
                },
            });
            doc.save('nurse activity.pdf');
        }, (error) => { }, () => { });
    }
    browseDoctor() {
        this.appStoreService.doctorDialog = true;
    }
}
NursingActivityWorklistFormComponent.ɵfac = function NursingActivityWorklistFormComponent_Factory(t) { return new (t || NursingActivityWorklistFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_store_service__WEBPACK_IMPORTED_MODULE_5__["AppStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nurse_activity_work_list_store_service__WEBPACK_IMPORTED_MODULE_6__["NurseActivityWorkListStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"])); };
NursingActivityWorklistFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NursingActivityWorklistFormComponent, selectors: [["app-nursing-activity-worklist-form"]], decls: 501, vars: 24, consts: [[2, "flex", "1"], [2, "display", "flex", "margin-top", "1rem", "margin-bottom", "2rem"], [1, "btn", "btn-primary", "btn__crud", 3, "click"], ["class", "btn btn-success btn__crud", 3, "click", 4, "ngIf"], [1, "btn", "btn-danger", "btn__crud", 3, "click"], [1, "flex__row"], [1, "p__5", 2, "flex", "0 0 30%"], [1, "form__label"], [1, "flex__row", 2, "align-items", "center", "justify-content", "space-between"], ["type", "text", 1, "form-control", "form__input", 2, "flex", "0 0 85%", 3, "value"], ["title", "Browse Doctor", 1, "__fab", "__raised", 3, "click"], [1, "fas", "fa-search"], [2, "flex", "0 0 10%"], ["type", "date", 1, "form-control", "form__input", 2, "flex", "0 0 85%", 3, "ngModel", "ngModelChange"], [1, "flex__row", 2, "align-items", "flex-end"], [1, "form-control", "form__input", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "p__5", "flex__row", 2, "flex", "0 0 40%", "justify-content", "space-between", "align-items", "center"], [1, "form__label", 2, "flex", "0 0 30%"], ["type", "text", 1, "form-control", "form__input", 2, "flex", "0 0 30%", 3, "ngModel", "ngModelChange"], [2, "flex", "0 0 30%"], ["id", "export_table", 2, "display", "none"], ["colspan", "8"], ["rowspan", "2"], [1, "btn", "btn-success", "btn__crud", 3, "click"], [3, "value"]], template: function NursingActivityWorklistFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NursingActivityWorklistFormComponent_Template_button_click_2_listener() { return ctx.new(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NursingActivityWorklistFormComponent_button_4_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NursingActivityWorklistFormComponent_button_6_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NursingActivityWorklistFormComponent_Template_button_click_8_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NursingActivityWorklistFormComponent_Template_button_click_10_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Doctor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NursingActivityWorklistFormComponent_Template_div_click_19_listener() { return ctx.browseDoctor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Due Date for Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NursingActivityWorklistFormComponent_Template_input_ngModelChange_25_listener($event) { return ctx.dueDateChange = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NursingActivityWorklistFormComponent_Template_input_ngModelChange_30_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Due Date for Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NursingActivityWorklistFormComponent_Template_input_ngModelChange_35_listener($event) { return ctx.dueDateRemove = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Procedure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NursingActivityWorklistFormComponent_Template_select_ngModelChange_40_listener($event) { return ctx.procedure = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, NursingActivityWorklistFormComponent_option_41_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NursingActivityWorklistFormComponent_Template_input_ngModelChange_47_listener($event) { return ctx.size = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NursingActivityWorklistFormComponent_Template_input_ngModelChange_48_listener($event) { return ctx.sizeUnit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NursingActivityWorklistFormComponent_Template_input_ngModelChange_55_listener($event) { return ctx.site = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NursingActivityWorklistFormComponent_Template_input_ngModelChange_56_listener($event) { return ctx.siteUnit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Marking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NursingActivityWorklistFormComponent_Template_input_ngModelChange_63_listener($event) { return ctx.marking = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NursingActivityWorklistFormComponent_Template_input_ngModelChange_64_listener($event) { return ctx.markingUnit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "External Length");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NursingActivityWorklistFormComponent_Template_input_ngModelChange_71_listener($event) { return ctx.externalLength = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NursingActivityWorklistFormComponent_Template_input_ngModelChange_72_listener($event) { return ctx.externalLengthUnit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Nurse Activity WorkList");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "PROCEDURE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Due Date For Change Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Due Date For Change Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Due Date For Change Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Due Date For Change Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Due Date For Change Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Due Date For Change Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Due Date For Change Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Endotracheal Tube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "asd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Size:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Marking:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "External Length:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Tracheostomy Tube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Size:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Marking:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Chest Tube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Site:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Size:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Arterial Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Site:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Pacing Wire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Site:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "General Venous Catheter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Site:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Peripheral IV Cannula");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](346, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Site & Size:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](357, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Vascular Catheter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](365, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](366, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](367, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](368, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](369, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](373, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](374, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](375, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](377, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](378, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Site:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](383, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](384, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](385, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](386, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](387, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](389, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](391, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "Urinary Catheter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](395, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](397, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](398, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](399, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](400, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](401, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](403, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](405, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](406, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](407, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](408, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](409, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "Size:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](413, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](414, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](415, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](416, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](417, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](418, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](419, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](421, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "Nasogastric Tube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](425, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](426, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](427, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](428, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](429, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](430, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](431, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](434, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](435, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](436, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](437, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](438, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](439, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "Size:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](443, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](444, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](445, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](446, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](447, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](448, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](449, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "Length:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](453, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](454, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](455, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](456, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](457, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](458, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](459, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](461, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "Others:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](465, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](466, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](467, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](468, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](469, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](470, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](471, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](473, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](475, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](476, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](477, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](478, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](479, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](480, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](481, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](482, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](484, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](485, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](486, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](487, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](488, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](489, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](490, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](491, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](493, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](494, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](495, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](496, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](497, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](498, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](499, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](500, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_2_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 16, ctx.nurseActivityWorkListStoreService.isUpdate$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 18, ctx.nurseActivityWorkListStoreService.isUpdate$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 20, ctx.appStoreService.doctor$)) == null ? null : tmp_2_0.doctorName) || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dueDateChange);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dueDateRemove);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.procedure);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 22, ctx.nurseActivityWorkListStoreService.procedures$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sizeUnit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.site);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.siteUnit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.marking);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.markingUnit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.externalLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.externalLengthUnit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudXJzaW5nLWFjdGl2aXR5LXdvcmtsaXN0LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NursingActivityWorklistFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nursing-activity-worklist-form',
                templateUrl: './nursing-activity-worklist-form.component.html',
                styleUrls: ['./nursing-activity-worklist-form.component.css'],
            }]
    }], function () { return [{ type: src_app_app_store_service__WEBPACK_IMPORTED_MODULE_5__["AppStoreService"] }, { type: _nurse_activity_work_list_store_service__WEBPACK_IMPORTED_MODULE_6__["NurseActivityWorkListStoreService"] }, { type: src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "W0X+":
/*!*******************************************************************************!*\
  !*** ./src/app/inpatient-medical-record/instruction/instruction.component.ts ***!
  \*******************************************************************************/
/*! exports provided: InstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionComponent", function() { return InstructionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/framework/http.service */ "KQ+0");
/* harmony import */ var _instruction_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instruction-store.service */ "Alt2");
/* harmony import */ var _framework_patient_header_patient_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/patient-header/patient-header.component */ "dxN6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _instruction_list_instruction_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instruction-list/instruction-list.component */ "j6Z4");
/* harmony import */ var _instruction_form_instruction_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instruction-form/instruction-form.component */ "RfXh");
/* harmony import */ var _framework_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../framework/delete-dialog/delete-dialog.component */ "A5yb");









function InstructionComponent_app_instruction_list_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-instruction-list");
} }
function InstructionComponent_app_instruction_form_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-instruction-form");
} }
function InstructionComponent_app_delete_dialog_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-delete-dialog", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDelete", function InstructionComponent_app_delete_dialog_13_Template_app_delete_dialog_onDelete_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteData(); })("onCancel", function InstructionComponent_app_delete_dialog_13_Template_app_delete_dialog_onCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.cancelDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class InstructionComponent {
    constructor(http, instructionStoreService) {
        this.http = http;
        this.instructionStoreService = instructionStoreService;
    }
    ngOnInit() { }
    tabClickHandler(n) {
        const tabEle1 = document.getElementById('tab1');
        const tabEle2 = document.getElementById('tab2');
        switch (n) {
            case 1:
                tabEle1.style.background = '#3b5998';
                tabEle2.style.background = '#8C9899';
                break;
            default:
                tabEle2.style.background = '#3b5998';
                tabEle1.style.background = '#8C9899';
        }
        this.instructionStoreService.tabNo = n;
    }
    deleteData() {
        this.instructionStoreService.deleteDialog = false;
        if (this.instructionStoreService.isUpdate) {
            this.http
                .doPost(`inpatient-medical-record/delete-instruction/${this.instructionStoreService.currentSysKey}`, { syskey: this.instructionStoreService.currentSysKey })
                .subscribe((data) => {
                const tabEle1 = document.getElementById('tab1');
                const tabEle2 = document.getElementById('tab2');
                tabEle1.style.background = '#3b5998';
                tabEle2.style.background = '#8C9899';
                this.instructionStoreService.isUpdate = false;
                this.instructionStoreService.tabNo = 1;
            });
        }
    }
    cancelDelete() {
        this.instructionStoreService.deleteDialog = false;
    }
}
InstructionComponent.ɵfac = function InstructionComponent_Factory(t) { return new (t || InstructionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_instruction_store_service__WEBPACK_IMPORTED_MODULE_2__["InstructionStoreService"])); };
InstructionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstructionComponent, selectors: [["app-instruction"]], decls: 15, vars: 9, consts: [[2, "width", "100%", "padding", "2rem 3rem"], [2, "display", "flex"], ["id", "tab1", 1, "tab__list-item", 2, "background", "#3b5998", 3, "click"], ["id", "tab2", 1, "tab__list-item", 3, "click"], [1, "card", "tab__body"], [4, "ngIf"], [3, "onDelete", "onCancel", 4, "ngIf"], [3, "onDelete", "onCancel"]], template: function InstructionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-patient-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionComponent_Template_div_click_3_listener() { return ctx.tabClickHandler(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionComponent_Template_div_click_5_listener() { return ctx.tabClickHandler(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Instruction ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InstructionComponent_app_instruction_list_9_Template, 1, 0, "app-instruction-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InstructionComponent_app_instruction_form_11_Template, 1, 0, "app-instruction-form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InstructionComponent_app_delete_dialog_13_Template, 1, 0, "app-delete-dialog", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 3, ctx.instructionStoreService.tabNo$) == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 5, ctx.instructionStoreService.tabNo$) == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, ctx.instructionStoreService.deleteDialog$));
    } }, directives: [_framework_patient_header_patient_header_component__WEBPACK_IMPORTED_MODULE_3__["PatientHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _instruction_list_instruction_list_component__WEBPACK_IMPORTED_MODULE_5__["InstructionListComponent"], _instruction_form_instruction_form_component__WEBPACK_IMPORTED_MODULE_6__["InstructionFormComponent"], _framework_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteDialogComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0cnVjdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstructionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-instruction',
                templateUrl: './instruction.component.html',
                styleUrls: ['./instruction.component.css'],
            }]
    }], function () { return [{ type: src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _instruction_store_service__WEBPACK_IMPORTED_MODULE_2__["InstructionStoreService"] }]; }, null); })();


/***/ }),

/***/ "WWhL":
/*!****************************************************!*\
  !*** ./src/app/framework/table/table.component.ts ***!
  \****************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TableComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", header_r1, " ");
} }
const _c0 = ["*"];
class TableComponent {
    constructor() { }
    ngOnInit() { }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], inputs: { headers: "headers", items: "items" }, ngContentSelectors: _c0, decls: 7, vars: 1, consts: [[1, "table-responsive"], [1, "table", "table-striped", "table-bordered"], [1, "header__row"], ["style", "font-size: 13px !important", 4, "ngFor", "ngForOf"], [2, "font-size", "13px !important"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableComponent_th_4_Template, 2, 1, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".header__row[_ngcontent-%COMP%] {\n  background-color: #446cb3;\n  color: #fff;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJ0YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcl9fcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NmNiMztcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.css'],
            }]
    }], function () { return []; }, { headers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _inpatient_medical_record_inpatient_medical_record_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inpatient-medical-record/inpatient-medical-record.module */ "2pki");
/* harmony import */ var _nursing_activity_worklist_nursing_activity_worklist_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nursing-activity-worklist/nursing-activity-worklist.module */ "EfYC");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _inpatient_medical_record_inpatient_medical_record_module__WEBPACK_IMPORTED_MODULE_7__["InpatientMedicalRecordModule"],
            _nursing_activity_worklist_nursing_activity_worklist_module__WEBPACK_IMPORTED_MODULE_8__["NursingActivityWorklistModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                {
                    path: '',
                    component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                },
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _inpatient_medical_record_inpatient_medical_record_module__WEBPACK_IMPORTED_MODULE_7__["InpatientMedicalRecordModule"],
        _nursing_activity_worklist_nursing_activity_worklist_module__WEBPACK_IMPORTED_MODULE_8__["NursingActivityWorklistModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _inpatient_medical_record_inpatient_medical_record_module__WEBPACK_IMPORTED_MODULE_7__["InpatientMedicalRecordModule"],
                    _nursing_activity_worklist_nursing_activity_worklist_module__WEBPACK_IMPORTED_MODULE_8__["NursingActivityWorklistModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                        {
                            path: '',
                            component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                        },
                    ]),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "bWrW":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/inpatient-medical-record/stat-medication/stat-medication-form/stat-medication-form.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: StatMedicationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatMedicationFormComponent", function() { return StatMedicationFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _stat_medication_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stat-medication-store.service */ "Lf9k");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function StatMedicationFormComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatMedicationFormComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StatMedicationFormComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatMedicationFormComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StatMedicationFormComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", header_r7, " ");
} }
class StatMedicationFormComponent {
    constructor(statMedicationStoreService) {
        this.statMedicationStoreService = statMedicationStoreService;
        this.headers = [
            'Route',
            'Medication',
            'Dose',
            'Prescription remarks',
            'Time Admin',
            'Given By',
            "Dr's remark",
        ];
        this.date = '';
    }
    ngOnInit() { }
    new() { }
    save() { }
    delete() { }
    print() { }
}
StatMedicationFormComponent.ɵfac = function StatMedicationFormComponent_Factory(t) { return new (t || StatMedicationFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_stat_medication_store_service__WEBPACK_IMPORTED_MODULE_1__["StatMedicationStoreService"])); };
StatMedicationFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatMedicationFormComponent, selectors: [["app-stat-medication-form"]], decls: 35, vars: 8, consts: [[2, "flex", "1"], [2, "display", "flex", "margin-top", "1rem", "margin-bottom", "2rem"], [1, "btn", "btn-primary", "btn__crud", 3, "click"], ["class", "btn btn-success btn__crud", 3, "click", 4, "ngIf"], [1, "btn", "btn-danger", "btn__crud", 3, "click"], [1, "flex__row"], [1, "p__5", 2, "flex", "0 0 20%"], [1, "form__label"], ["type", "datetime-local", "step", "1", 1, "form-control", "form__input", 3, "ngModel", "ngModelChange"], ["class", "flex-table__column", "style", "font-size: 14px", 4, "ngFor", "ngForOf"], [1, "flex-table__row"], [1, "flex-table__column"], [1, "form-control", "form__input"], [1, "flex-table__column", 2, "justify-content", "space-between"], [1, "form-control", "form__input", 2, "flex", "0 0 47%", "text-align", "right"], [1, "form-control", "form__input", 2, "flex", "0 0 47%"], ["type", "time", "step", "1", 1, "form-control", "form__input"], [1, "btn", "btn-success", "btn__crud", 3, "click"], [1, "flex-table__column", 2, "font-size", "14px"]], template: function StatMedicationFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatMedicationFormComponent_Template_button_click_2_listener() { return ctx.new(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StatMedicationFormComponent_button_4_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StatMedicationFormComponent_button_6_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatMedicationFormComponent_Template_button_click_8_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StatMedicationFormComponent_Template_button_click_10_listener() { return ctx.print(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StatMedicationFormComponent_Template_input_ngModelChange_16_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, StatMedicationFormComponent_div_18_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.statMedicationStoreService.isUpdate$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx.statMedicationStoreService.isUpdate$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".flex-table__column[_ngcontent-%COMP%]:nth-child(4) {\n  flex-basis: 100px;\n}\n.flex-table__column[_ngcontent-%COMP%]:nth-child(2) {\n  flex-basis: 140px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXQtbWVkaWNhdGlvbi1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzdGF0LW1lZGljYXRpb24tZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtdGFibGVfX2NvbHVtbjpudGgtY2hpbGQoNCkge1xuICBmbGV4LWJhc2lzOiAxMDBweDtcbn1cbi5mbGV4LXRhYmxlX19jb2x1bW46bnRoLWNoaWxkKDIpIHtcbiAgZmxleC1iYXNpczogMTQwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatMedicationFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stat-medication-form',
                templateUrl: './stat-medication-form.component.html',
                styleUrls: ['./stat-medication-form.component.css'],
            }]
    }], function () { return [{ type: _stat_medication_store_service__WEBPACK_IMPORTED_MODULE_1__["StatMedicationStoreService"] }]; }, null); })();


/***/ }),

/***/ "dxN6":
/*!**********************************************************************!*\
  !*** ./src/app/framework/patient-header/patient-header.component.ts ***!
  \**********************************************************************/
/*! exports provided: PatientHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientHeaderComponent", function() { return PatientHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_patient_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/patient.model */ "f3K7");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "KQ+0");
/* harmony import */ var src_app_app_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app-store.service */ "7pZn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function PatientHeaderComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.text, " ");
} }
class PatientHeaderComponent {
    constructor(http, appStoreService) {
        this.http = http;
        this.appStoreService = appStoreService;
        this.patientId = '';
        this.patientName = 'Htet Lin Maung';
        this.adNos = [{ value: 0, text: '20-A0010' }];
        this.adNo = 0;
        this.headerData = [];
        this.infoDialog = false;
        this.patientAge = 0;
        this.ADDate = '';
        this.room = '';
        this.doctor = '';
        this.speciality = '';
        this.patientType = '';
    }
    ngOnInit() {
        this.fetchPatientInfoById();
    }
    onAdNoChanged(event) {
        const data = this.headerData.find((v) => v.refNo == event.target.value);
        this.patientId = data.patientid;
        this.patientName = data.persontitle + ' ' + data.personname;
        this.patientAge = data.age;
        this.ADDate = data.arriveDate;
        this.room = data.roomNo;
        this.doctor = data.doctorName;
        this.speciality = data.speciality;
        this.patientType = data.patientType;
        this.appStoreService.patientInfo = new src_app_patient_model__WEBPACK_IMPORTED_MODULE_1__["Patient"](data.allergy, data.ward, data.bed);
    }
    viewInfo(e) {
        const dialogEle = document.getElementById('info-dialog');
        dialogEle.style.left = e.clientX + 'px';
        dialogEle.style.top = e.clientY + 'px';
        dialogEle.style.display = 'block';
    }
    closeInfoDialog() {
        const dialogEle = document.getElementById('info-dialog');
        dialogEle.style.display = 'none';
    }
    fetchPatientInfoById() {
        this.http
            .doGet(`nurse-activity-worklist/patient-info/${this.appStoreService.pId}`)
            .subscribe((data) => {
            this.headerData = data;
            if (data.length) {
                this.patientId = data[0].patientid;
                this.patientName = data[0].persontitle + ' ' + data[0].personname;
                this.patientAge = data[0].age;
                this.ADDate = data[0].arriveDate;
                this.room = data[0].roomNo;
                this.doctor = data[0].doctorName;
                this.speciality = data[0].speciality;
                this.patientType = data[0].patientType;
                this.adNos = data.map((v) => ({
                    value: v.refNo,
                    text: v.refNo,
                }));
                this.adNo = data[0].refNo;
                this.appStoreService.patientInfo = new src_app_patient_model__WEBPACK_IMPORTED_MODULE_1__["Patient"](data[0].allergy, data[0].ward, data[0].bed);
            }
        }, (error) => { }, () => { });
    }
}
PatientHeaderComponent.ɵfac = function PatientHeaderComponent_Factory(t) { return new (t || PatientHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_store_service__WEBPACK_IMPORTED_MODULE_3__["AppStoreService"])); };
PatientHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatientHeaderComponent, selectors: [["app-patient-header"]], decls: 60, vars: 11, consts: [[2, "display", "flex", "align-items", "center", "margin-bottom", "1rem"], ["src", "assets/images/find1.jpg", 2, "width", "25px", "height", "25px"], [1, "patient__label", 2, "flex-basis", "100px", "padding-left", "7px"], [1, "patient__label", 2, "flex-basis", "250px", "padding-left", "7px"], [2, "flex-basis", "100px", "padding-right", "12px"], [2, "flex-basis", "150px"], [1, "form-control", 2, "width", "100%", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["src", "assets/images/info.jpg", 2, "width", "45px", "height", "25px", "padding", "0 10px", 3, "click"], [1, "menu__link"], [2, "flex-basis", "135px"], ["id", "info-dialog", 1, "__menu"], [1, "flex__row", 2, "background", "#446cb3", "padding", "0.1rem 1rem", "border-radius", "0.5rem 0.5rem 0 0"], [2, "flex", "1"], [2, "text-align", "center", "color", "#fff", "flex", "1"], [1, "btn__close", 2, "margin-left", "auto", "background", "#fff", 3, "click"], [1, "flex__row"], [2, "flex-basis", "25%"], [2, "flex-basis", "75%"], [3, "value"]], template: function PatientHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "AD No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PatientHeaderComponent_Template_select_ngModelChange_9_listener($event) { return ctx.adNo = $event; })("change", function PatientHeaderComponent_Template_select_change_9_listener($event) { return ctx.onAdNoChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PatientHeaderComponent_option_10_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientHeaderComponent_Template_img_click_11_listener($event) { return ctx.viewInfo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "eMR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientHeaderComponent_Template_div_click_23_listener() { return ctx.closeInfoDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " x ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "AD Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Doctor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Speciality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.patientId, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.patientName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.adNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.adNos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx.patientName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx.patientAge, " Yrs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx.ADDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx.room, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx.doctor, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx.speciality, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx.patientType, "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: [".patient__label[_ngcontent-%COMP%] {\n  color: #00008b;\n  font-size: 10pt;\n  font-weight: bolder;\n}\n.menu__link[_ngcontent-%COMP%] {\n  color: blue;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.__menu[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  width: 300px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 0.5rem;\n  background: #fff;\n  transition: all 0.3s;\n  z-index: 99;\n  overflow-y: auto;\n}\n.btn__close[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 1px solid #302c2d;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaO21DQUNpQztFQUNqQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJwYXRpZW50LWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhdGllbnRfX2xhYmVsIHtcbiAgY29sb3I6ICMwMDAwOGI7XG4gIGZvbnQtc2l6ZTogMTBwdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5tZW51X19saW5rIHtcbiAgY29sb3I6IGJsdWU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uX19tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAwcHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB6LWluZGV4OiA5OTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5idG5fX2Nsb3NlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzAyYzJkO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-patient-header',
                templateUrl: './patient-header.component.html',
                styleUrls: ['./patient-header.component.css'],
            }]
    }], function () { return [{ type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: src_app_app_store_service__WEBPACK_IMPORTED_MODULE_3__["AppStoreService"] }]; }, null); })();


/***/ }),

/***/ "f3K7":
/*!**********************************!*\
  !*** ./src/app/patient.model.ts ***!
  \**********************************/
/*! exports provided: Patient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return Patient; });
class Patient {
    constructor(drugAllergyTo, ward, bed) {
        this.drugAllergyTo = drugAllergyTo;
        this.ward = ward;
        this.bed = bed;
    }
}


/***/ }),

/***/ "fplC":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/nursing-activity-worklist/nursing-activity-worklist/nursing-activity-worklist-list/nursing-activity-worklist-list.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: NursingActivityWorklistListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NursingActivityWorklistListComponent", function() { return NursingActivityWorklistListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _activity_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../activity.model */ "0hgX");
/* harmony import */ var src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/framework/http.service */ "KQ+0");
/* harmony import */ var _nurse_activity_work_list_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../nurse-activity-work-list-store.service */ "v2KL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../framework/pagination/pagination.component */ "6j51");
/* harmony import */ var _framework_table_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../framework/table/table.component */ "WWhL");
/* harmony import */ var _framework_advance_search_advance_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../framework/advance-search/advance-search.component */ "N+7S");











function NursingActivityWorklistListComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-advance-search", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAdvanceSearch", function NursingActivityWorklistListComponent_div_14_Template_app_advance_search_onAdvanceSearch_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.advanceSearch($event); })("onCloseFilter", function NursingActivityWorklistListComponent_div_14_Template_app_advance_search_onCloseFilter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.closeFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fields", ctx_r0.fields);
} }
function NursingActivityWorklistListComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NursingActivityWorklistListComponent_tr_19_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const activity_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goToList(activity_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.getProcedure(activity_r5.procedure), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.formatDate(activity_r5.date, "DD/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.formatDate(activity_r5.dueDateChange, "DD/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.formatDate(activity_r5.dueDateRemove, "DD/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](activity_r5.fmtSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](activity_r5.fmtSite);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](activity_r5.fmtMarking);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](activity_r5.fmtExternalLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](activity_r5.doctorName);
} }
class NursingActivityWorklistListComponent {
    constructor(http, nurseActivityWorkListStoreService) {
        this.http = http;
        this.nurseActivityWorkListStoreService = nurseActivityWorkListStoreService;
        this.headers = [
            'Procedure',
            'Date',
            'Due Date For Change',
            'Due Date For Remove',
            'Size',
            'Site',
            'Marking',
            'External Length',
            'Doctor Name',
        ];
        this.page = 1;
        this.totalPage = 0;
        this.total = 0;
        this.perPage = 10;
        this.perPages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        this.start = 0;
        this.end = 0;
        this.instructions = [];
        this.open = false;
        this.fields = [
            {
                text: 'Procedure',
                value: '1',
                key: 'procedureName',
            },
            {
                text: 'Date',
                value: '2',
                key: 'fmtDate',
            },
            {
                text: 'Due Date For Change',
                value: '3',
                key: 'fmtDueDateForChange',
            },
            {
                text: 'Due Date For Remove',
                value: '4',
                key: 'fmtDueDateForRemove',
            },
            {
                text: 'Size',
                value: '5',
                key: 'fmtSize',
            },
            {
                text: 'Site',
                value: '6',
                key: 'fmtSite',
            },
            {
                text: 'Marking',
                value: '7',
                key: 'fmtMarking',
            },
            {
                text: 'External Length',
                value: '8',
                key: 'fmtExternalLength',
            },
            {
                text: 'Doctor Name',
                value: '9',
                key: 'doctorName',
            },
        ];
        this.search = '';
        this.activities = [];
    }
    ngOnInit() {
        this.fetchProcedures();
        this.nurseActivityWorkListStoreService.isUpdate = false;
    }
    formatDate(dateStr, format) {
        return moment__WEBPACK_IMPORTED_MODULE_1__(dateStr).format(format);
    }
    initPagination(data) {
        this.start = 0;
        this.end = this.perPage;
        if (data.length < this.perPage) {
            this.end = data.length;
        }
        this.calculateTotal(data);
    }
    calculateTotal(data) {
        this.totalPage = Math.ceil(data.length / this.perPage);
        this.total = data.length;
    }
    goToList({ syskey }) {
        this.nurseActivityWorkListStoreService.currentSysKey = syskey;
        this.nurseActivityWorkListStoreService.isUpdate = true;
        this.nurseActivityWorkListStoreService.tabNo = 2;
    }
    handlePerPageChanged(perPage) {
        this.perPage = perPage;
        this.initPagination(this.nurseActivityWorkListStoreService.activities);
    }
    handleSkip(n) {
        switch (n) {
            case 1:
                if (this.page < this.totalPage) {
                    this.page++;
                    this.end = this.page * this.perPage;
                    if (this.page == this.totalPage) {
                        this.end =
                            this.nurseActivityWorkListStoreService.activities.length -
                                this.start;
                    }
                    this.start = (this.page - 1) * this.perPage;
                }
                break;
            case 2:
                if (this.page !== 1) {
                    this.page--;
                    this.end = this.page * this.perPage;
                    this.start = (this.page - 1) * this.perPage;
                }
                else {
                    this.start = (this.page - 1) * this.perPage;
                    this.end = this.perPage;
                    if (this.nurseActivityWorkListStoreService.activities.length <
                        this.perPage) {
                        this.end = this.nurseActivityWorkListStoreService.activities.length;
                    }
                }
            case 3:
                this.page = 1;
                this.start = (this.page - 1) * this.perPage;
                this.end = this.perPage;
                if (this.nurseActivityWorkListStoreService.activities.length <
                    this.perPage) {
                    this.end = this.nurseActivityWorkListStoreService.activities.length;
                }
                break;
            default:
                this.page = this.totalPage;
                this.start = (this.page - 1) * this.perPage;
                if (this.nurseActivityWorkListStoreService.activities.length %
                    this.perPage ===
                    0) {
                    this.end = this.page * this.perPage;
                }
                else {
                    this.end =
                        this.start +
                            (this.nurseActivityWorkListStoreService.activities.length %
                                this.perPage);
                }
        }
    }
    openAdvSearch() {
        this.open = true;
    }
    closeFilter() {
        this.open = false;
    }
    advanceSearch(filters) {
        this.nurseActivityWorkListStoreService.activities = this.activities.filter((activity) => {
            var _a;
            let flag = true;
            for (const filter of filters) {
                const key = (_a = this.fields.find((field) => field.value == filter.field)) === null || _a === void 0 ? void 0 : _a.key;
                switch (filter.condition) {
                    case '1':
                        flag = flag && filter.search == activity[key];
                        break;
                    case '2':
                        flag = flag && activity[key].toString().includes(filter.search);
                        break;
                    case '3':
                        flag = flag && activity[key].toString().startsWith(filter.search);
                        break;
                    default:
                        flag = flag && activity[key].toString().endsWith(filter.search);
                }
            }
            return flag;
        });
        this.initPagination(this.nurseActivityWorkListStoreService.activities);
    }
    normalSearch() {
        if (this.search) {
            const searchKeys = this.fields.map((field) => field.key);
            this.nurseActivityWorkListStoreService.activities = this.activities.filter((instruction) => {
                let flag = false;
                for (const key in instruction) {
                    if (searchKeys.includes(key)) {
                        flag = flag || instruction[key].toString().includes(this.search);
                    }
                }
                return flag;
            });
        }
        this.initPagination(this.nurseActivityWorkListStoreService.activities);
    }
    showAll() {
        this.fetchAllActivities();
    }
    clearSearch() {
        this.search = '';
    }
    getProcedure(procedure) {
        const item = this.nurseActivityWorkListStoreService.procedures.find((v) => v.value == procedure.toString());
        if (item) {
            return item.text;
        }
        return '';
    }
    fetchProcedures() {
        this.http.doGet('nurse-activity-worklist/procedures').subscribe((data) => {
            this.nurseActivityWorkListStoreService.procedures = data;
            this.fetchAllActivities();
        }, (error) => { }, () => { });
    }
    fetchAllActivities() {
        this.http.doGet('nurse-activity-worklist/activities').subscribe((data) => {
            this.nurseActivityWorkListStoreService.activities = data.map((v) => new _activity_model__WEBPACK_IMPORTED_MODULE_2__["default"](v.syskey, this.getProcedure(v.procedure), v.procedure, v.date, v.dueDateChange, v.dueDateRemove, this.formatDate(v.date, 'DD/MM/yyyy'), this.formatDate(v.dueDateChange, 'DD/MM/yyyy'), this.formatDate(v.dueDateRemove, 'DD/MM/yyyy'), v.size, v.site, v.marking, v.externalLength, v.doctorName, v.doctorId, v.sizeUnit, v.siteUnit, v.markingUnit, v.externalLengthUnit, v.size + v.sizeUnit, v.site + v.siteUnit, v.marking + v.markingUnit, v.externalLength + v.externalLengthUnit));
            this.activities = this.nurseActivityWorkListStoreService.activities;
            this.initPagination(data);
        }, (error) => { }, () => { });
    }
}
NursingActivityWorklistListComponent.ɵfac = function NursingActivityWorklistListComponent_Factory(t) { return new (t || NursingActivityWorklistListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nurse_activity_work_list_store_service__WEBPACK_IMPORTED_MODULE_4__["NurseActivityWorkListStoreService"])); };
NursingActivityWorklistListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NursingActivityWorklistListComponent, selectors: [["app-nursing-activity-worklist-list"]], decls: 21, vars: 13, consts: [[2, "flex", "1"], [2, "display", "flex", "margin", "1rem 0"], [2, "display", "flex", "flex", "0 0 45%", "align-items", "center", "justify-content", "space-between"], ["type", "text", 1, "form-control", "form__input", 2, "flex", "0 0 45%", 3, "ngModel", "ngModelChange"], ["title", "Search", 1, "__fab", "__raised", 3, "click"], [1, "fas", "fa-arrow-right"], ["title", "Show all", 1, "__fab", "__raised", 3, "click"], [1, "fas", "fa-list"], ["title", "Clear", 1, "__fab", "__raised", 3, "click"], [1, "fas", "fa-times"], ["title", "Advanced Search", 1, "__fab", "__raised", 3, "click"], [1, "fas", "fa-search"], ["title", "Export", 1, "__fab", "__raised"], [1, "fas", "fa-file-export"], [4, "ngIf"], [2, "display", "flex", "margin", "0.5rem 0"], [2, "flex", "0 0 25%", 3, "total", "perPage", "start", "end", "perPages", "onPerPageChanged", "onNext", "onPrev", "onSkipFirst", "onSkipLast"], [3, "headers"], ["class", "__raised", 3, "click", 4, "ngFor", "ngForOf"], [3, "fields", "onAdvanceSearch", "onCloseFilter"], [1, "__raised", 3, "click"]], template: function NursingActivityWorklistListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NursingActivityWorklistListComponent_Template_input_ngModelChange_3_listener($event) { return ctx.search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NursingActivityWorklistListComponent_Template_div_click_4_listener() { return ctx.normalSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NursingActivityWorklistListComponent_Template_div_click_6_listener() { return ctx.showAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NursingActivityWorklistListComponent_Template_div_click_8_listener() { return ctx.clearSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NursingActivityWorklistListComponent_Template_div_click_10_listener() { return ctx.openAdvSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NursingActivityWorklistListComponent_div_14_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-pagination", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPerPageChanged", function NursingActivityWorklistListComponent_Template_app_pagination_onPerPageChanged_16_listener($event) { return ctx.handlePerPageChanged($event); })("onNext", function NursingActivityWorklistListComponent_Template_app_pagination_onNext_16_listener() { return ctx.handleSkip(1); })("onPrev", function NursingActivityWorklistListComponent_Template_app_pagination_onPrev_16_listener() { return ctx.handleSkip(2); })("onSkipFirst", function NursingActivityWorklistListComponent_Template_app_pagination_onSkipFirst_16_listener() { return ctx.handleSkip(3); })("onSkipLast", function NursingActivityWorklistListComponent_Template_app_pagination_onSkipLast_16_listener() { return ctx.handleSkip(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NursingActivityWorklistListComponent_tr_19_Template, 19, 9, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_2_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 9, ctx.nurseActivityWorkListStoreService.activities$)) == null ? null : tmp_2_0.length)("perPage", ctx.perPage)("start", ctx.start)("end", ctx.end)("perPages", ctx.perPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headers", ctx.headers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 11, ctx.nurseActivityWorkListStoreService.activities$).slice(ctx.start, ctx.end));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _framework_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"], _framework_table_table_component__WEBPACK_IMPORTED_MODULE_8__["TableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _framework_advance_search_advance_search_component__WEBPACK_IMPORTED_MODULE_9__["AdvanceSearchComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudXJzaW5nLWFjdGl2aXR5LXdvcmtsaXN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NursingActivityWorklistListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nursing-activity-worklist-list',
                templateUrl: './nursing-activity-worklist-list.component.html',
                styleUrls: ['./nursing-activity-worklist-list.component.css'],
            }]
    }], function () { return [{ type: src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }, { type: _nurse_activity_work_list_store_service__WEBPACK_IMPORTED_MODULE_4__["NurseActivityWorkListStoreService"] }]; }, null); })();


/***/ }),

/***/ "fwLT":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/inpatient-medical-record/stat-medication/stat-medication-list/stat-medication-list.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: StatMedicationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatMedicationListComponent", function() { return StatMedicationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StatMedicationListComponent {
    constructor() { }
    ngOnInit() {
    }
}
StatMedicationListComponent.ɵfac = function StatMedicationListComponent_Factory(t) { return new (t || StatMedicationListComponent)(); };
StatMedicationListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatMedicationListComponent, selectors: [["app-stat-medication-list"]], decls: 2, vars: 0, template: function StatMedicationListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "stat-medication-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0LW1lZGljYXRpb24tbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatMedicationListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stat-medication-list',
                templateUrl: './stat-medication-list.component.html',
                styleUrls: ['./stat-medication-list.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gDNE":
/*!*****************************************************************************************!*\
  !*** ./src/app/inpatient-medical-record/non-parenteral/non-parenteral-store.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: NonParenteralStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonParenteralStoreService", function() { return NonParenteralStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class NonParenteralStoreService {
    constructor() {
        this._currentSysKey = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        // private readonly _instructions = new BehaviorSubject<Instruction[]>([]);
        this._isUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this._tabNo = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](2);
        this._deleteDialog = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentSysKey$ = this._currentSysKey.asObservable();
        // readonly instructions$ = this._instructions.asObservable();
        this.isUpdate$ = this._isUpdate.asObservable();
        this.tabNo$ = this._tabNo.asObservable();
        this.deleteDialog$ = this._deleteDialog.asObservable();
    }
    set currentSysKey(v) {
        this._currentSysKey.next(v);
    }
    // set instructions(v: Instruction[]) {
    //   this._instructions.next(v);
    // }
    set tabNo(v) {
        this._tabNo.next(v);
    }
    set isUpdate(v) {
        this._isUpdate.next(v);
    }
    set deleteDialog(v) {
        this._deleteDialog.next(v);
    }
    get isUpdate() {
        return this._isUpdate.getValue();
    }
    get tabNo() {
        return this._tabNo.getValue();
    }
    // get instructions(): Instruction[] {
    //   return this._instructions.getValue();
    // }
    get currentSysKey() {
        return this._currentSysKey.getValue();
    }
    get deleteDialog() {
        return this._deleteDialog.getValue();
    }
}
NonParenteralStoreService.ɵfac = function NonParenteralStoreService_Factory(t) { return new (t || NonParenteralStoreService)(); };
NonParenteralStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NonParenteralStoreService, factory: NonParenteralStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NonParenteralStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "j6Z4":
/*!*****************************************************************************************************!*\
  !*** ./src/app/inpatient-medical-record/instruction/instruction-list/instruction-list.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: InstructionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionListComponent", function() { return InstructionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Instruction_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Instruction.model */ "0bJV");
/* harmony import */ var _instruction_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../instruction-store.service */ "Alt2");
/* harmony import */ var src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/framework/http.service */ "KQ+0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _framework_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../framework/pagination/pagination.component */ "6j51");
/* harmony import */ var _framework_table_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../framework/table/table.component */ "WWhL");
/* harmony import */ var _framework_advance_search_advance_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../framework/advance-search/advance-search.component */ "N+7S");











function InstructionListComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-advance-search", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAdvanceSearch", function InstructionListComponent_div_14_Template_app_advance_search_onAdvanceSearch_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.advanceSearch($event); })("onCloseFilter", function InstructionListComponent_div_14_Template_app_advance_search_onCloseFilter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.closeFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fields", ctx_r0.fields);
} }
function InstructionListComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionListComponent_tr_19_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const instruction_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goToList(instruction_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instruction_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.formatDate(instruction_r5.date, "DD/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.formatDate(instruction_r5.dateTaken, "DD/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](instruction_r5.drugAllergyTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](instruction_r5.instruction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](instruction_r5.remarks);
} }
class InstructionListComponent {
    constructor(instructionStoreService, http) {
        this.instructionStoreService = instructionStoreService;
        this.http = http;
        this.headers = [
            'Date',
            'Date Taken',
            'Drug Allergy To',
            'Instruction Under Treatment',
            'Remarks',
        ];
        this.page = 1;
        this.totalPage = 0;
        this.total = 0;
        this.perPage = 10;
        this.perPages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        this.start = 0;
        this.end = 0;
        this.instructions = [];
        this.open = false;
        this.fields = [
            {
                text: 'Date',
                value: '1',
                key: 'fmtDate',
            },
            {
                text: 'Date Taken',
                value: '2',
                key: 'fmtDateTaken',
            },
            {
                text: 'Drug Allergy To',
                value: '3',
                key: 'drugAllergyTo',
            },
            {
                text: 'Instruction Under Treatment',
                value: '4',
                key: 'instruction',
            },
            {
                text: 'Remarks',
                value: '5',
                key: 'remarks',
            },
        ];
        this.search = '';
    }
    ngOnInit() {
        this.fetchAllInstructions();
        this.instructionStoreService.isUpdate = false;
    }
    formatDate(dateStr, format) {
        return moment__WEBPACK_IMPORTED_MODULE_1__(dateStr).format(format);
    }
    initPagination(data) {
        this.start = 0;
        this.end = this.perPage;
        if (data.length < this.perPage) {
            this.end = data.length;
        }
        this.calculateTotal(data);
    }
    calculateTotal(data) {
        this.totalPage = Math.ceil(data.length / this.perPage);
        this.total = data.length;
    }
    fetchAllInstructions() {
        this.http
            .doGet(`inpatient-medical-record/instructions`)
            .subscribe((data) => {
            this.instructionStoreService.instructions = data.map((v) => new _Instruction_model__WEBPACK_IMPORTED_MODULE_2__["default"](v.syskey, v.date, v.dateTaken, v.drugAllergyTo, v.instruction, v.remarks, this.formatDate(v.date, 'DD/MM/yyyy'), this.formatDate(v.dateTaken, 'DD/MM/yyyy'), v.pId));
            this.instructions = this.instructionStoreService.instructions;
            this.initPagination(data);
        });
    }
    goToList({ syskey }) {
        this.instructionStoreService.currentSysKey = syskey;
        this.instructionStoreService.isUpdate = true;
        this.instructionStoreService.tabNo = 2;
    }
    handlePerPageChanged(perPage) {
        this.perPage = perPage;
        this.initPagination(this.instructionStoreService.instructions);
    }
    handleSkip(n) {
        switch (n) {
            case 1:
                if (this.page < this.totalPage) {
                    this.page++;
                    this.end = this.page * this.perPage;
                    if (this.page == this.totalPage) {
                        this.end =
                            this.instructionStoreService.instructions.length - this.start;
                    }
                    this.start = (this.page - 1) * this.perPage;
                }
                break;
            case 2:
                if (this.page !== 1) {
                    this.page--;
                    this.end = this.page * this.perPage;
                    this.start = (this.page - 1) * this.perPage;
                }
                else {
                    this.start = (this.page - 1) * this.perPage;
                    this.end = this.perPage;
                    if (this.instructionStoreService.instructions.length < this.perPage) {
                        this.end = this.instructionStoreService.instructions.length;
                    }
                }
            case 3:
                this.page = 1;
                this.start = (this.page - 1) * this.perPage;
                this.end = this.perPage;
                if (this.instructionStoreService.instructions.length < this.perPage) {
                    this.end = this.instructionStoreService.instructions.length;
                }
                break;
            default:
                this.page = this.totalPage;
                this.start = (this.page - 1) * this.perPage;
                if (this.instructionStoreService.instructions.length % this.perPage ===
                    0) {
                    this.end = this.page * this.perPage;
                }
                else {
                    this.end =
                        this.start +
                            (this.instructionStoreService.instructions.length % this.perPage);
                }
        }
    }
    openAdvSearch() {
        this.open = true;
    }
    closeFilter() {
        this.open = false;
    }
    advanceSearch(filters) {
        this.instructionStoreService.instructions = this.instructions.filter((instruction) => {
            var _a;
            let flag = true;
            for (const filter of filters) {
                const key = (_a = this.fields.find((field) => field.value == filter.field)) === null || _a === void 0 ? void 0 : _a.key;
                switch (filter.condition) {
                    case '1':
                        flag = flag && filter.search == instruction[key];
                        break;
                    case '2':
                        flag =
                            flag && instruction[key].toString().includes(filter.search);
                        break;
                    case '3':
                        flag =
                            flag && instruction[key].toString().startsWith(filter.search);
                        break;
                    default:
                        flag =
                            flag && instruction[key].toString().endsWith(filter.search);
                }
            }
            return flag;
        });
        this.initPagination(this.instructionStoreService.instructions);
    }
    normalSearch() {
        if (this.search) {
            const searchKeys = this.fields.map((field) => field.key);
            this.instructionStoreService.instructions = this.instructions.filter((instruction) => {
                let flag = false;
                for (const key in instruction) {
                    if (searchKeys.includes(key)) {
                        flag = flag || instruction[key].toString().includes(this.search);
                    }
                }
                return flag;
            });
        }
        this.initPagination(this.instructionStoreService.instructions);
    }
    showAll() {
        this.fetchAllInstructions();
    }
    clearSearch() {
        this.search = '';
    }
}
InstructionListComponent.ɵfac = function InstructionListComponent_Factory(t) { return new (t || InstructionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_instruction_store_service__WEBPACK_IMPORTED_MODULE_3__["InstructionStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"])); };
InstructionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InstructionListComponent, selectors: [["app-instruction-list"]], decls: 21, vars: 13, consts: [[2, "flex", "1"], [2, "display", "flex", "margin", "1rem 0"], [2, "display", "flex", "flex", "0 0 45%", "align-items", "center", "justify-content", "space-between"], ["type", "text", 1, "form-control", "form__input", 2, "flex", "0 0 45%", 3, "ngModel", "ngModelChange"], ["title", "Search", 1, "__fab", "__raised", 3, "click"], [1, "fas", "fa-arrow-right"], ["title", "Show all", 1, "__fab", "__raised", 3, "click"], [1, "fas", "fa-list"], ["title", "Clear", 1, "__fab", "__raised", 3, "click"], [1, "fas", "fa-times"], ["title", "Advanced Search", 1, "__fab", "__raised", 3, "click"], [1, "fas", "fa-search"], ["title", "Export", 1, "__fab", "__raised"], [1, "fas", "fa-file-export"], [4, "ngIf"], [2, "display", "flex", "margin", "0.5rem 0"], [2, "flex", "0 0 25%", 3, "total", "perPage", "start", "end", "perPages", "onPerPageChanged", "onNext", "onPrev", "onSkipFirst", "onSkipLast"], [3, "headers"], ["class", "__raised", 3, "click", 4, "ngFor", "ngForOf"], [3, "fields", "onAdvanceSearch", "onCloseFilter"], [1, "__raised", 3, "click"]], template: function InstructionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InstructionListComponent_Template_input_ngModelChange_3_listener($event) { return ctx.search = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionListComponent_Template_div_click_4_listener() { return ctx.normalSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionListComponent_Template_div_click_6_listener() { return ctx.showAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionListComponent_Template_div_click_8_listener() { return ctx.clearSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InstructionListComponent_Template_div_click_10_listener() { return ctx.openAdvSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InstructionListComponent_div_14_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-pagination", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPerPageChanged", function InstructionListComponent_Template_app_pagination_onPerPageChanged_16_listener($event) { return ctx.handlePerPageChanged($event); })("onNext", function InstructionListComponent_Template_app_pagination_onNext_16_listener() { return ctx.handleSkip(1); })("onPrev", function InstructionListComponent_Template_app_pagination_onPrev_16_listener() { return ctx.handleSkip(2); })("onSkipFirst", function InstructionListComponent_Template_app_pagination_onSkipFirst_16_listener() { return ctx.handleSkip(3); })("onSkipLast", function InstructionListComponent_Template_app_pagination_onSkipLast_16_listener() { return ctx.handleSkip(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, InstructionListComponent_tr_19_Template, 11, 5, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_2_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 9, ctx.instructionStoreService.instructions$)) == null ? null : tmp_2_0.length)("perPage", ctx.perPage)("start", ctx.start)("end", ctx.end)("perPages", ctx.perPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headers", ctx.headers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 11, ctx.instructionStoreService.instructions$).slice(ctx.start, ctx.end));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _framework_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"], _framework_table_table_component__WEBPACK_IMPORTED_MODULE_8__["TableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _framework_advance_search_advance_search_component__WEBPACK_IMPORTED_MODULE_9__["AdvanceSearchComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["td[_ngcontent-%COMP%] {\n  font-size: 13px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RydWN0aW9uLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiaW5zdHJ1Y3Rpb24tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InstructionListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-instruction-list',
                templateUrl: './instruction-list.component.html',
                styleUrls: ['./instruction-list.component.css'],
            }]
    }], function () { return [{ type: _instruction_store_service__WEBPACK_IMPORTED_MODULE_3__["InstructionStoreService"] }, { type: src_app_framework_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "sHip":
/*!**************************************************************************************************************!*\
  !*** ./src/app/inpatient-medical-record/non-parenteral/non-parenteral-list/non-parenteral-list.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: NonParenteralListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonParenteralListComponent", function() { return NonParenteralListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NonParenteralListComponent {
    constructor() { }
    ngOnInit() {
    }
}
NonParenteralListComponent.ɵfac = function NonParenteralListComponent_Factory(t) { return new (t || NonParenteralListComponent)(); };
NonParenteralListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NonParenteralListComponent, selectors: [["app-non-parenteral-list"]], decls: 2, vars: 0, template: function NonParenteralListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "non-parenteral-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub24tcGFyZW50ZXJhbC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NonParenteralListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-non-parenteral-list',
                templateUrl: './non-parenteral-list.component.html',
                styleUrls: ['./non-parenteral-list.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "v2KL":
/*!*************************************************************************************!*\
  !*** ./src/app/nursing-activity-worklist/nurse-activity-work-list-store.service.ts ***!
  \*************************************************************************************/
/*! exports provided: NurseActivityWorkListStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NurseActivityWorkListStoreService", function() { return NurseActivityWorkListStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class NurseActivityWorkListStoreService {
    constructor() {
        this._currentSysKey = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this._activities = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this._isUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this._tabNo = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](1);
        this._deleteDialog = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this._procedures = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.currentSysKey$ = this._currentSysKey.asObservable();
        this.activities$ = this._activities.asObservable();
        this.isUpdate$ = this._isUpdate.asObservable();
        this.tabNo$ = this._tabNo.asObservable();
        this.deleteDialog$ = this._deleteDialog.asObservable();
        this.procedures$ = this._procedures.asObservable();
    }
    set currentSysKey(v) {
        this._currentSysKey.next(v);
    }
    set activities(v) {
        this._activities.next(v);
    }
    set tabNo(v) {
        this._tabNo.next(v);
    }
    set isUpdate(v) {
        this._isUpdate.next(v);
    }
    set deleteDialog(v) {
        this._deleteDialog.next(v);
    }
    set procedures(v) {
        this._procedures.next(v);
    }
    get isUpdate() {
        return this._isUpdate.getValue();
    }
    get tabNo() {
        return this._tabNo.getValue();
    }
    get activities() {
        return this._activities.getValue();
    }
    get currentSysKey() {
        return this._currentSysKey.getValue();
    }
    get deleteDialog() {
        return this._deleteDialog.getValue();
    }
    get procedures() {
        return this._procedures.getValue();
    }
}
NurseActivityWorkListStoreService.ɵfac = function NurseActivityWorkListStoreService_Factory(t) { return new (t || NurseActivityWorkListStoreService)(); };
NurseActivityWorkListStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NurseActivityWorkListStoreService, factory: NurseActivityWorkListStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NurseActivityWorkListStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class LoginComponent {
    constructor(router) {
        this.router = router;
    }
    navigate(n) {
        switch (n) {
            case 1:
                this.router.navigate(['/inpatient-medication-record/instruction']);
                break;
            case 2:
                this.router.navigate(['/inpatient-medication-record/stat-medication']);
                break;
            case 3:
                this.router.navigate(['/nursing-activity-worklist']);
                break;
            case 4:
                this.router.navigate(['/inpatient-medication-record/non-parenteral']);
                break;
        }
    }
    ngOnInit() { }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 8, vars: 0, consts: [[3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_0_listener() { return ctx.navigate(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "inspection form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_2_listener() { return ctx.navigate(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "stat-medication form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_4_listener() { return ctx.navigate(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "nurse activity form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_6_listener() { return ctx.navigate(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "non-parenteral form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "xkeh":
/*!*********************************************************!*\
  !*** ./src/app/framework/doctor-dialog/doctor.model.ts ***!
  \*********************************************************/
/*! exports provided: Doctor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doctor", function() { return Doctor; });
class Doctor {
    constructor(syskey = 0, doctorID = '', doctorName = '', speciality = '', rank = '', degree = '', phone = '', clinic = '') {
        this.syskey = syskey;
        this.doctorID = doctorID;
        this.doctorName = doctorName;
        this.speciality = speciality;
        this.rank = rank;
        this.degree = degree;
        this.phone = phone;
        this.clinic = clinic;
    }
}


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