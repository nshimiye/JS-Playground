import { Component, OnInit } from '@angular/core';

import { GeographyService } from '../../../services/geography.service';

@Component({
  selector: 'country-identity',
  templateUrl: './country-identity.component.html',
  styleUrls: ['./country-identity.component.scss']
})
export class CountryIdentityComponent implements OnInit {
  selectedCountry: any = {};
  realName: string;
  cartesianDimension: any = { bottomLeft: {lat: 0, long: 0}, topRight: {lat:0, long:0}};
  polarDimension: any = {lat: 0, long: 0, radius: 0};
  constructor(
    public geographyService: GeographyService
  ) { }


  ngOnInit() {
  }
  querySearch() {
    return [{ name: 'USA' }, { name: 'Canada' }];
  }

  selectCountry(country){
    console.log('country identity', country);
    this.selectedCountry = country;

    let center;
    let data;
    this.fetchCountryData(country)
    .then( tmpData => { // => { name:string, topRight: {}, bottomLeft: string}
      data = tmpData;
      let { name, topRight, bottomLeft } = data;
      this.realName = name;
      this.cartesianDimension = data;
      // let { lat: right, long: top } = topRight;
      // let { lat: left, long: bottom } = bottomLeft;
      return this.geographyService.computeCountryCenter(topRight /* { top, right } */ , bottomLeft /* { bottom, left } */ )
    })
    .then(tmpCenter => { // => { lat, long }
      center = tmpCenter;
      console.log('selectCountry success', center, data)
      let { topRight, bottomLeft } = data;
      return this.geographyService.computeCountryRadius(topRight, bottomLeft)
    })
    .then(radius => { // => { lat, long }
      let { lat, long } = center;
      this.polarDimension = { lat, long, radius };
    });
  }

  fetchCountryData(country: any): Promise<{ name: string, topRight: { lat: number, long: number }, bottomLeft: { lat: number, long: number } }> {
    // return GeographyService
    return this.geographyService.fetchLocationByCountry(country);
  }
}
