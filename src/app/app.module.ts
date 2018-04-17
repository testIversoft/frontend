import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RoutingModule } from './modules/routing/routing.module';
import { UserService } from './services/user.service';
import { RolesService } from './services/roles.service';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './user/user-add/add-user.component';
import { UserRole } from './modules/user-role.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    UserRole
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    RolesService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {}
