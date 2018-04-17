import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../models/user.model';
import { Role } from '../../models/role.model';
import { UserService } from '../../services/user.service';
import { RolesService } from '../../services/roles.service';

@Component({
  templateUrl: './add-user.component.html'
})
export class AddUserComponent implements OnInit {
  userId: number = null;
  user: User = new User();
  users: User[];
  userRoles: Role[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService,
              private rolesService: RolesService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params['userId'];
    });

    this.rolesService.getRoles().subscribe(data => {
      this.userRoles = data;
    });

    this.userService.getUsers().subscribe(data => {
      this.users = data;
      if (this.userId != null) {
        this.user = this.users.filter(user => user.id == this.userId)[0];
      }
    });
  }

  createUser(cadabra): void {
    this.userService.createUser(cadabra).subscribe(data => {
      //alert('User ' + data.userName + ' created successfully.');
    });
  };

  changeValue(userRole): void {
    this.user.userRoleId = userRole;
  };

}
