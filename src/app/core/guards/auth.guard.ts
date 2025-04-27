import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { map } from 'rxjs';



export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService = inject(LoginService);

  return loginService.validAuth().pipe(
    map((valid: boolean) => {
      if (valid) {
        return true;
      } else {
        // Devuelve un UrlTree para la redirección a la página de login
        return router.createUrlTree(['/login']);
      }
    })
  );
};

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginService = inject(LoginService);

  return loginService.validAuth().pipe(
    map((isAuthenticated: boolean) => {
      if (isAuthenticated) {
        // Redirigir al usuario a la página de inicio si ya está autenticado
        return router.createUrlTree(['/']);
      } else {
        return true;
      }
    })
  );
};




