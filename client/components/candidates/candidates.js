System.register(['angular2/core', 'angular2/router', '../../../client/services/httpprovider', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, httpprovider_1, http_1;
    var CandidatesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (httpprovider_1_1) {
                httpprovider_1 = httpprovider_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            CandidatesComponent = (function () {
                function CandidatesComponent(_router, _httpprovider) {
                    this._router = _router;
                    this._httpprovider = _httpprovider;
                    this.candidates = [];
                    this.manageCandidate = {};
                    this.manage = false;
                }
                CandidatesComponent.prototype.delete = function (candidate) {
                    var vari = this;
                    this._httpprovider.httpReq('http://localhost:9001/deletecandidate', 'POST', candidate, null).subscribe(function (data) {
                        vari.candidates = data;
                    });
                    return false;
                };
                CandidatesComponent.prototype.calculateAge = function (birthday) {
                    var ageDifMs = Date.now() - new Date(birthday);
                    var ageDate = new Date(ageDifMs);
                    return Math.abs(ageDate.getUTCFullYear() - 1970);
                };
                CandidatesComponent.prototype.submitCandidate = function (candidate) {
                    var vari = this;
                    candidate.age = this.calculateAge(candidate.dob);
                    this._httpprovider.httpReq('http://localhost:9001/editcandidate', 'POST', candidate, null).subscribe(function (data) {
                    });
                    vari.manage = false;
                    return false;
                };
                CandidatesComponent.prototype.edit = function (candidate) {
                    var vari = this;
                    vari.manage = true;
                    vari.manageCandidate = candidate;
                    return false;
                };
                CandidatesComponent.prototype.ngOnInit = function () {
                    var vari = this;
                    this._httpprovider.httpReq('http://localhost:9001/admin/candidates', 'GET', null, null).subscribe(function (data) {
                        for (var i = 0; i < data.length; i++) {
                            vari.candidates.push(data[i]);
                        }
                    });
                };
                CandidatesComponent = __decorate([
                    core_1.Component({
                        selector: 'candidates',
                        template: "\n<div class=\"container\">\n<div>Employees Component</div> \n  <table class=\"table table-hover\">\n        <thead>\n            <th>Name</th>\n            <th>Email</th>\n            <th>DOB</th>\n            <th>Department</th>\n            <th>Gender</th>\n            <th>Age</th>\n            <th>Delete</th>\n            <th>Edit</th>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"#candidate of candidates\">\n                <td>{{candidate.name}}</td> \n                <td>{{candidate.email}}</td>\n                <td>{{candidate.dob}}</td>\n                <td>{{candidate.department}}</td>\n                <td>{{candidate.gender}}</td>\n                 <td>{{candidate.age}}</td>\n                <td><a type=\"button\" class=\"btn btn-primary\" href=\"\" (click)=\"delete(candidate)\">Delete</a></td>\n                <td><a type=\"button\" class=\"btn btn-primary\" href=\"\" (click)=\"edit(candidate)\">Edit</a></td>\n            </tr>\n        </tbody>\n    </table>\n    </div>\n    <div class=\"container\">\n      <table *ngIf=\"manage\" class=\"table\">\n        <thead>\n            <th>Name</th>\n            <th>Email</th>\n            <th>DOB</th>\n            <th>Department</th>\n            <th>Gender</th>\n        </thead>\n        <tbody>\n            <tr>            \n                 <td><input type=\"text\" [(ngModel)]=\"manageCandidate.name\" placeholder=\"Name\"/></td>\n                 <td><input type=\"text\" [(ngModel)]=\"manageCandidate.email\" placeholder=\"Email\"/></td>\n                 <td><input type=\"date\" [(ngModel)]=\"manageCandidate.dob\" placeholder=\"DOB\"/></td>\n                 <td><input type=\"text\" [(ngModel)]=\"manageCandidate.department\" placeholder=\"Department\"/></td>\n                 <td><input type=\"text\" [(ngModel)]=\"manageCandidate.gender\" placeholder=\"Gender\"/></td>\n                 <td><a type=\"button\" class=\"btn btn-primary\" href=\"\" (click)=\"submitCandidate(manageCandidate)\">Done</a></td>\n            </tr>\n        </tbody>\n    </table>\n    </div>\n  ",
                        providers: [http_1.Http, http_1.HTTP_PROVIDERS, httpprovider_1.Httpprovider]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, httpprovider_1.Httpprovider])
                ], CandidatesComponent);
                return CandidatesComponent;
            }());
            exports_1("CandidatesComponent", CandidatesComponent);
        }
    }
});
//# sourceMappingURL=candidates.js.map