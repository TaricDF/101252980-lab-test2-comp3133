import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  private REST_API_URL = "https://api.spacexdata.com/v3/launches"
  constructor(private httpClient: HttpClient) { }

  public getAllMissionList() {
    return this.httpClient.get(this.REST_API_URL).pipe(retry(3))
  }

  public filterMissionListByYear(year: number) {
    let params = new HttpParams().set('launch_year', year)
    return this.httpClient.get(this.REST_API_URL,{params}).pipe(retry(3))
  }

  public getMissionDetails(flight_number: number) {
    return this.httpClient.get(`${this.REST_API_URL}/${flight_number}`).pipe(retry(3))
  }
}
