import { Injectable, signal } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {

  private readonly cookieKey: string = 'theme-preference';

  private _darkTheme = signal<boolean>(false);

  constructor(private cookieService: CookieService) {

    const themePreference = this.cookieService.get(this.cookieKey);

    if (themePreference) {
      // La cookie existe, establecer el tema basado en ella
      this._darkTheme.set(themePreference === 'true');

    } else {
      // La cookie no existe, obtener la preferencia del sistema y establecer la cookie
      this._darkTheme.set(this.getSystemTheme());
      console.log(this.getSystemTheme());
      this.cookieService.set(this.cookieKey, String(this._darkTheme()), undefined, '/');
    }
  }

  get isDarkTheme():boolean {
    return this._darkTheme();
  }

  toggleTheme(): void {
    this._darkTheme.set(!this._darkTheme());
    this.cookieService.set('theme-preference', String(this._darkTheme()), undefined, '/');
  }

  private getSystemTheme(): boolean {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

}