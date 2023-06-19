import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const expired = authService.isJwtExpired();
  console.log(`[authGuard] canActivate: ${expired}`);
  if (expired) {
    router.navigate([''], { queryParams: { returnUrl: state.url } });
    return false;
  }
  return true;
};