import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GeographyService {
  googleGeoCode: string;
  http: Http;
  constructor(
    http: Http
  ) {
    this.http = http;
    this.googleGeoCode = "https://maps.googleapis.com/maps/api/geocode/json"
  }

  /**
   * @param country { name: string, code: string }
   * @return => topRight: { lat: right, long: top }, bottomLeft: { lat: left, long: bottom }
   */
  fetchLocationByCountry(country: any): Promise<{ name: string, topRight: { lat: number, long: number }, bottomLeft: { lat: number, long: number } }> {
    return this.http.get(`${this.googleGeoCode}?address=${country.code}`)
    .map(res => res.json())
    .toPromise()
    .then(response => {
      console.log('fetchLocationByCountry success', response)
      let {results} = response;
      if(results.length <= 0){return null;} // if array is empty
      results = results[0]; // ignore the rest
      let name = results.formatted_address;
      let bounds = results.geometry.bounds
      let topRight = { lat: bounds.northeast.lat, long: bounds.northeast.lng };
      let bottomLeft = { lat: bounds.southwest.lat, long: bounds.southwest.lng }
      return { name, topRight, bottomLeft };
    })
    .catch(e => {
      console.log('fetchLocationByCountry error', e)
      return null;
    });
  }

  computeCountryCenter(topRight: { lat: number, long: number }, bottomLeft: { lat: number, long: number }): Promise<{lat: number, long: number}>  {

    let A = topRight.lat;
    let B = bottomLeft.lat;

    let lat = (A + B)/2;
      A = topRight.long;
      B = bottomLeft.long;
    let long = (A + B)/2;

    return Promise.resolve({ lat, long });
  }

  computeCountryRadius(topRight: { lat: number, long: number }, bottomLeft: { lat: number, long: number }): Promise<number> {
    let w = topRight.lat - bottomLeft.lat;
    let h = topRight.long - bottomLeft.long;
    let diameter = Math.sqrt((h*h) + (w*w));
    let radius = diameter/2;
    return Promise.resolve(radius);
  }

}
