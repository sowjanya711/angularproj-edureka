import {Component, provide} from 'angular2/core';
import {Router, RouteData, RouteParams} from 'angular2/router';
import {Httpprovider} from '../../../client/services/httpprovider';

@Component({
  selector: 'home',
  template: `<div>Home Component</div>`,
})
export class HomeComponent {
  constructor(private _router: Router){
      this._router.navigate( ['AdminCmp'] );
  }
}