/**
 * source: http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2
 */
import { Component, OnInit } from '@angular/core';
// import { AngularFire, FirebaseAuth } from 'angularfire2';
import { AngularFire } from 'angularfire2';

import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'firebase-email-signup',
  templateUrl: './firebase-email-signup.component.html',
  styleUrls: ['./firebase-email-signup.component.scss']
})
export class FirebaseEmailSignupComponent implements OnInit {
  myForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  confirmPassword: AbstractControl;

  constructor(private af: AngularFire, fb: FormBuilder) {
    this.myForm = fb.group({
      'email':  ['', Validators.compose([Validators.required])],
      'password':  ['', Validators.compose([Validators.required, skuValidator])],
      'confirmPassword':  ['', Validators.compose([Validators.required])]
    });


    this.email = this.myForm.controls['email'];
    this.password = this.myForm.controls['password'];
    this.confirmPassword = this.myForm.controls['confirmPassword'];

    // this.email.valueChanges.subscribe(
    //   (value: string) => {
    //     console.log('sku changed to:', value);
    //   }
    // );

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to:', form);
      }
    );

  }

  ngOnInit() {
  }



  onSubmit(ev, form: any): void {
    console.log('your submission', form.valid, form.value, ev);
  }


  signUp(email: string, password: string) {
      var creds: any = { email: email, password: password };
      this.af.auth.createUser(creds);
  }


}


// start helper functions
function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return { invalidSku: true };
  }
}
// end helper functions
