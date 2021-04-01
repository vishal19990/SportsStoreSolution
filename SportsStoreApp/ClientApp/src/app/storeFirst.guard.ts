import { Injectable } from '@angular/core';
import {
ActivatedRouteSnapshot,
RouterStateSnapshot,
Router,
} from '@angular/router';
import { StoreComponent } from './stores/store.component';

@Injectable()
export class StoreFirstGuard {
private firstNavgiation = true;
constructor(private router: Router) {}
canActivate(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot
): boolean {
if (this.firstNavgiation) {
this.firstNavgiation = false;
if (route.component !== StoreComponent) {
this.router.navigateByUrl('/');
return false;
}
}
return true;
}
}