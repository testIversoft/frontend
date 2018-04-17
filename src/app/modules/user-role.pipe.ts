import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'UserRole',
  pure: false
})

export class UserRole implements PipeTransform {
  transform(user: any, roles: any){
    let match = [];
    match.push(roles.filter(role => user.userRoleId == role.id)[0]);
    return match[0].roleLabel;
  }
}

