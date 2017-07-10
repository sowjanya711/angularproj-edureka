import {Component, provide} from 'angular2/core';
import { CORE_DIRECTIVES} from 'angular2/common';
import {Router, ROUTER_DIRECTIVES, RouterLink, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
import {HomeComponent} from '../home/home';
import {AdminComponent} from '../admin/admin';

@RouteConfig([
  {path: '/admin/...', component: AdminComponent, name: 'AdminCmp' },
  {path: '/home', component: HomeComponent, name: 'HomeCmp' }
])

@Component({
  selector: 'main-app',
  template:` 
      <center><h1 class="page-header">Employee Directory</h1>
      <a [routerLink]="['AdminCmp']">Enter Directory</a>
      <hr><br>
    <router-outlet></router-outlet></center>
  `,
  directives: [ROUTER_DIRECTIVES, RouterLink]
})

export class MainComponent{
}
