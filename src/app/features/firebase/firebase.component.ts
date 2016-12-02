import { Component, OnInit } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss']
})
export class FirebaseComponent implements OnInit {

  constructor(public af: AngularFire, private router: Router) { }

  ngOnInit() {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.af.auth.map(auth =>  {
      console.log('firebase login', auth);
      if(auth == null) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    }).first()
  }

}
