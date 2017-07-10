import {Component, provide, OnInit} from 'angular2/core';
import {Router, RouteData, RouteParams} from 'angular2/router';
import {Httpprovider} from '../../../client/services/httpprovider';
import {HTTP_PROVIDERS, Http, Response, Request,RequestMethod, Headers} from 'angular2/http';

@Component({
  selector: 'candidates',
  template: `
<div class="container">
<div>Employees Component</div> 
  <table class="table table-hover">
        <thead>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Department</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Delete</th>
            <th>Edit</th>
        </thead>
        <tbody>
            <tr *ngFor="#candidate of candidates">
                <td>{{candidate.name}}</td> 
                <td>{{candidate.email}}</td>
                <td>{{candidate.dob}}</td>
                <td>{{candidate.department}}</td>
                <td>{{candidate.gender}}</td>
                 <td>{{candidate.age}}</td>
                <td><a type="button" class="btn btn-primary" href="" (click)="delete(candidate)">Delete</a></td>
                <td><a type="button" class="btn btn-primary" href="" (click)="edit(candidate)">Edit</a></td>
            </tr>
        </tbody>
    </table>
    </div>
    <div class="container">
      <table *ngIf="manage" class="table">
        <thead>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Department</th>
            <th>Gender</th>
        </thead>
        <tbody>
            <tr>            
                 <td><input type="text" [(ngModel)]="manageCandidate.name" placeholder="Name"/></td>
                 <td><input type="text" [(ngModel)]="manageCandidate.email" placeholder="Email"/></td>
                 <td><input type="date" [(ngModel)]="manageCandidate.dob" placeholder="DOB"/></td>
                 <td><input type="text" [(ngModel)]="manageCandidate.department" placeholder="Department"/></td>
                 <td><input type="text" [(ngModel)]="manageCandidate.gender" placeholder="Gender"/></td>
                 <td><a type="button" class="btn btn-primary" href="" (click)="submitCandidate(manageCandidate)">Done</a></td>
            </tr>
        </tbody>
    </table>
    </div>
  `,
  providers:[Http, HTTP_PROVIDERS,Httpprovider]
})
export class CandidatesComponent {

    public candidates: any[] = [];
    public manageCandidate = {};
    public manage:Boolean = false;
  constructor(private _router: Router,  private _httpprovider: Httpprovider){
  }
  
  delete(candidate){
    //console.log(candidate);
    let vari = this;
        this._httpprovider.httpReq('http://localhost:9001/deletecandidate', 'POST', candidate, null).subscribe((data)=> {
            vari.candidates = data;
        });

    return false;
}
    calculateAge(birthday) { // birthday is a date
        var ageDifMs = Date.now() - new Date(birthday)
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    submitCandidate(candidate){
        //console.log(candidate);
        let vari = this;
        candidate.age = this.calculateAge(candidate.dob)
            this._httpprovider.httpReq('http://localhost:9001/editcandidate', 'POST', candidate, null).subscribe((data)=> {
                //vari.candidates = data;
            });
        vari.manage=false;
        return false;
    }
    edit(candidate){
        //console.log(candidate);
        let vari = this;
        vari.manage=true;
        vari.manageCandidate = candidate;
        return false;
    }

  ngOnInit() {
      let vari = this;
      this._httpprovider.httpReq('http://localhost:9001/admin/candidates', 'GET', null, null).subscribe((data)=> {
          for (let i = 0; i < data.length; i++) {
              vari.candidates.push(data[i]);
          }
      });
      }
}