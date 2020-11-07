import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlConfigService } from './url-config.service';
import { Observable } from 'rxjs';
import { QueryParam } from '../Model/QueryParam';
@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  url: any;

  constructor(private http: HttpClient,private urlConfig:UrlConfigService) { }
 
  public getIntialLoadData(limitValue): Observable<any> {
    return this.http.get(`${this.urlConfig.getUrl()}?limit=${limitValue}`);
    
  }
  public sucessLaunch(launchParam:QueryParam): Observable<any> {
    
    return this.http.get(`${this.urlConfig.getUrl()}?limit=${launchParam.limit}&launch_success=${launchParam.launch_success}`);
    
  }
  public sucessLaunchandLand(launchParam:QueryParam): Observable<any> {
    
    return this.http.get(`${this.urlConfig.getUrl()}?limit=${launchParam.limit}&launch_success=${launchParam.launch_success}&land_success=${launchParam.land_success}`);
    
  }
  public allSuccess(launchParam:QueryParam): Observable<any> {
    
    return this.http.get(`${this.urlConfig.getUrl()}?limit=${launchParam.limit}&launch_success=${launchParam.launch_success}&land_success=${launchParam.land_success}&launch_year=${launchParam.launch_year}`);
    
  }

  // https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true
}
