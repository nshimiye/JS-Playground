import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'firebase-email-signin',
  templateUrl: './firebase-email-signin.component.html',
  styleUrls: ['./firebase-email-signin.component.scss']
})
export class FirebaseEmailSigninComponent implements OnInit {
  myForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;

  constructor(
    public af: AngularFire,
    fb: FormBuilder
  ) {
    this.myForm = fb.group({
      'email':  ['', Validators.compose([Validators.required])],
      'password':  ['', Validators.compose([Validators.required, skuValidator])]
    });

    this.email = this.myForm.controls['email'];
    this.password = this.myForm.controls['password'];

  }

  ngOnInit() {
  }

  onSubmit(ev, form: any): void {
    console.log('your submission', form.valid, form.value, ev);
  }

  signIn(email: string, password: string): Promise<boolean> {
       let creds: any = { email: email, password: password };
       let res: Promise<boolean> = new Promise((resolve, reject) => {
           this.af.auth.login(creds).then(result => {
               resolve(result);
           })
       });
       return res;
   }

   signOut() {
      this.af.auth.logout();
   }

}

// start helper functions
function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return { invalidSku: true };
  }
}
// end helper functions
