import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {  MdInput } from '@angular/material';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { countries } from "./res/data/countries";

@Component({
  selector: 'app-md-autocomplete',
  templateUrl: './md-autocomplete.component.html',
  styleUrls: ['./md-autocomplete.component.scss']
})
export class MdAutocompleteComponent implements OnInit {
  // @ViewChild('searchInput') searchInput: MdInput;

  @Input('md-search-text') searchTextIn: string;
  @Input('md-items') items: Array<any>;
  @Input('md-selected-item') selectedItem: any;
  @Input() placeholder: string;

@Output('select-country') selectedCountryOutput = new EventEmitter();

searchText: string; // @TODO

selectedCountry: any = {};

countries: Array<any>;
filteredCountries: Array<any> = [];
  constructor() {
    this.countries = countries;
    this.filterCountries()
    .then(() => {
      this.filteredCountries = [];
    });
  }


  ngOnInit() {
    // this.searchInput.focus();
  }

  filterCountries(): Promise<any> {
    return new Promise(resolve => {
      window.setTimeout(() => {
        resolve('DIRECT');
      }, 500);
    });
  }

  selectCountry(ev, country){
    this.selectedCountry = country;
    this.filteredCountries = [];
    this.selectedCountryOutput.emit(country);
  }

  initializeItems(){
    this.filteredCountries = this.countries;
  }

  searchCountries(ev, text) {
    console.log('searchCountries', ev, text);
    if(!text || text.trim() === ''){
      this.filteredCountries = [];
      return;
    }
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.filteredCountries = this.filteredCountries.filter((country) => {
        return (country.name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
                (country.code.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
