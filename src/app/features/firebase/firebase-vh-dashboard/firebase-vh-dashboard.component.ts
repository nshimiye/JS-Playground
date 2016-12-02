import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'firebase-vh-dashboard',
  templateUrl: './firebase-vh-dashboard.component.html',
  styleUrls: ['./firebase-vh-dashboard.component.scss']
})
export class FirebaseVhDashboardComponent implements OnInit {
  clientUsers: FirebaseListObservable<any>;

  constructor(public af: AngularFire) {

    this.clientUsers = af.database.list('/client_users');
    this.clientUsers.subscribe(
    (result: any) => {
      console.log('Result received');
      console.log(result);
    },
    (e: any) => console.log('error found => ', e),
    () => console.log(' => finally !'));

    console.log(' => this.clientUsers => ', this.clientUsers);
  }

  ngOnInit() {
  }

  search(keyword: string){
    this.clientUsers = this.af.database.list('client_users', {
      query: {
        orderByChild: 'timestamp',
        equalTo: keyword
      }
    });
  }

}
