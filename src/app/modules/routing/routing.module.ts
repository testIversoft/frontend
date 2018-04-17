import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from '../../user/user.component';
import { AddUserComponent } from '../../user/user-add/add-user.component';

const routes: Routes = [
  {path: '', redirectTo: 'userlist', pathMatch: 'full'},
  {path: 'userlist', component: UserComponent},
  {path: 'adduser', component: AddUserComponent},
  {path: 'edituser/:userId', component: AddUserComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule {}
