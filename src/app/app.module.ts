import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    MdContentComponent
  ],
  imports: [
    BrowserModule,
    Ng2CompleterModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [ GeographyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
