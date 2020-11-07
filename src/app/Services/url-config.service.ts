import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlConfigService {

  constructor() { }
  getUrl(){
    return "https://api.spacexdata.com/v3/launches";
  }
}
