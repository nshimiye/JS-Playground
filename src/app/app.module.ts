import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Ng2CompleterModule } from "ng2-completer"

import { AppComponent } from './app.component';
import { GeographyComponent } from './features/geography/geography.component';
import { CountryIdentityComponent } from './features/geography/country-identity/country-identity.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { DistanceBetweenComponent } from './features/geography/distance-between/distance-between.component';
import { MdAutocompleteComponent } from './features/material/md-autocomplete/md-autocomplete.component';
import { MdItemTemplateComponent } from './features/material/md-item-template/md-item-template.component';
import { MdNotFoundComponent } from './features/material/md-not-found/md-not-found.component';
import { MdContentComponent } from './features/material/md-content/md-content.component';

import { GeographyService } from './services/geography.service';
import { SlackComponent } from './features/slack/slack.component';
import { FirebaseComponent } from './features/firebase/firebase.component';
import { MessagesComponent } from './features/slack/messages/messages.component';
import { ImagesComponent } from './features/slack/images/images.component';
import { VhDashboardComponent } from './features/firebase/vh-dashboard/vh-dashboard.component';
import { FirebaseVhDashboardComponent } from './features/firebase/firebase-vh-dashboard/firebase-vh-dashboard.component';
import { FirebaseEmailSignupComponent } from './features/firebase/firebase-email-signup/firebase-email-signup.component';
import { FirebaseEmailSigninComponent } from './features/firebase/firebase-email-signin/firebase-email-signin.component';


import {
  FIREBASE_PROVIDERS,
  defaultFirebase,
  firebaseAuthConfig,
  AuthProviders,
  AuthMethods,
  AngularFireModule
} from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDQkICNE0rltdRvGRM2pQ9EzO7z_UoEkIw",
  authDomain: "playground-2f1a9.firebaseapp.com",
  databaseURL: "https://playground-2f1a9.firebaseio.com",
  storageBucket: "playground-2f1a9.appspot.com",
  messagingSenderId: "1067461117329"
};


@NgModule({
  declarations: [
    AppComponent,
    GeographyComponent,
    CountryIdentityComponent,
    NavigationMenuComponent,
    DistanceBetweenComponent,
    MdAutocompleteComponent,
    MdItemTemplateComponent,
    MdNotFoundComponent,
    MdContentComponent,
    SlackComponent,
    FirebaseComponent,
    MessagesComponent,
    ImagesComponent,
    VhDashboardComponent,
    FirebaseVhDashboardComponent,
    FirebaseEmailSignupComponent,
    FirebaseEmailSigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'geography', component: GeographyComponent },
      { path: 'slack', component: SlackComponent },
      {
        path: 'firebase',
        component: FirebaseComponent,
        data: {
          title: 'Firebase'
        }
      },
      { path: '', component: GeographyComponent },
      { path: '**', component: GeographyComponent }
    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ GeographyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
