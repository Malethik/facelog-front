import { Injectable, inject } from '@angular/core';

import { RepoService } from '../repo/repo.service';
import { JwtPayload } from 'jsonwebtoken';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

type LoginState = 'idle' | 'logging' | 'logged' | 'error';

export type Payload = {
  id: string;
  role: string;
} & JwtPayload;

export type State = {
  loginState: LoginState;
  token: string | null;
  currenPayload: Payload | null;
  currenUser: unknown | null;
};
const initialState: State = {
  loginState: 'idle',
  token: null,
  currenPayload: null,
  currenUser: null,
};

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private server = inject(RepoService);
  //Next feature
  /* private _userState = signal(initialState);
  public userState = this._userState.asReadonly(); */
  private state$ = new BehaviorSubject<State>(initialState);

  constructor() {}
  getState(): Observable<State> {
    return this.state$.asObservable();
  }

  getToken = (): string | null => this.state$.value.token;

  setLoginState(loginState: LoginState): void {
    this.state$.next({ ...this.state$.value, loginState });
  }

  setLogin(token: string) {
    const currenPayload = jwtDecode(token) as Payload;
    localStorage.setItem('week7.ng', JSON.stringify({ token }));
    this.server.getById(currenPayload.id).subscribe((user) => {
      this.state$.next({
        ...this.state$.value,
        loginState: 'logged',
        token,
        currenPayload,
        currenUser: user,
      });
    });
  }

  setLogout() {
    localStorage.removeItem('week7.ng');
    this.state$.next({
      ...this.state$.value,
      loginState: 'idle',
      token: null,
      currenPayload: null,
    });
  }
}
