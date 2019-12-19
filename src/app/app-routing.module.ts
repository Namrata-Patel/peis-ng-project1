import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { UserListComponent } from './user-list/user-list.component';
import {LoginComponent} from '../../../core/login/login/login.component';


const routes: Routes = [
  { path: 'app1/one', component: View1Component },
  { path: 'app1/two', component: View2Component },
  { path: 'app1/users', component: UserListComponent },
  { path: 'app1/login', component: LoginComponent },
  { path: 'app1', redirectTo: 'app1/one' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
