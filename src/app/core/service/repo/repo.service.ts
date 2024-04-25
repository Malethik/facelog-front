import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { UserCreateDto, UserLoginDto } from '../../entities/user';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  httpClient = inject(HttpClient);
  url = environment.apiUrl + '/user';

  login(_data: UserLoginDto) {
    const data = {
      name: _data.username,
      password: _data.password,
      email: _data.email,
    };
    return this.httpClient.post<{ token: string }>(this.url + '/login', data);
  }

  getById(id: string) {
    return this.httpClient.get(this.url + '/' + id);
  }
  getFriend(id: string) {
    const result = this.httpClient.get(this.url + `${id}/friends`);
    return result;
  }
  getEnemy(id: string) {
    const result = this.httpClient.get(this.url + `${id}/enemies`);
    return result;
  }
  createUser(data: UserCreateDto) {
    return this.httpClient.post(this.url, data);
  }
}
