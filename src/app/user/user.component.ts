import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { RolesService } from '../services/roles.service';
import { Role } from '../models/role.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit{

  users: User[];
  userRoles: Role[];

  constructor(private router: Router,
              private userService: UserService,
              private rolesService: RolesService) {

  }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });

    this.rolesService.getRoles().subscribe(data => {
      this.userRoles = data;
    });
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user).subscribe(data => {
      this.users = this.users.filter(u => u !== user);
    })
  };

  changeUser(user: User): void {
    this.router.navigate(['edituser/', user.id]);
  };

}


