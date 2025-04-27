import { Injectable, signal } from '@angular/core';
import { UserLogin, errorResponse } from '../models/user.interface';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  private _token = signal<string | null>(null)
  
  constructor(private router:Router) {
    const token = sessionStorage.getItem('TOKEN');
    if(token){
      this.setToken(token);
    }
  }

  logout(){
    this._token.set(null);
    sessionStorage.clear();
    this.router.navigate(['/login'])

  }

  get tokenAuth():string|null{
    return this._token();
  }

  setToken(token:string):void{
    this._token.set(token)
  }

  setTokenStorage(token:string):void{
    sessionStorage.setItem('TOKEN',token)
  }

  validAuth():Observable<boolean>{
    const token = this._token()
    return of(!!token);
  }

  login(user: UserLogin): errorResponse | string{
    if(user.email !== 'correo@correo.com'){
      return {status:404,error:'User not found'};
    }
    if(user.password !== 'contrasena'){
      return {status:401,error:'Password not match'};
    }
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    this.setToken(token);
    this.setTokenStorage(token);
    return token;
  }
  


}
