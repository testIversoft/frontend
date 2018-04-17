import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Role } from '../models/role.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RolesService {

  constructor(private http:HttpClient) {}

  private url = '/roles';

  public getRoles() {
    return this.http.get<Role[]>(this.url);
  }

  public deleteRole(role) {
    return this.http.delete(this.url + "/"+ role.id);
  }

  public createRole(role) {
    return this.http.post<Role>(this.url, role);
  }

  public changeRole(role) {
    return this.http.put<Role>(this.url, role);
  }

}
