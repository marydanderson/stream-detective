import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WatchmodeApiService {


  constructor(private http : HttpClient) { }

//Search through the WatchMode Search API to get the title id of the string we are looking for
searchForTitle(movieTitle : string) {
  //Currently this api call only searches for and returns movies titles.
  //Another potential 'type' is 'person' which could search for actors
  return this.http.get(`https://api.watchmode.com/v1/search/?apiKey=${environment.watchModeAPIKey}&search_field=${'name'}&search_value=${movieTitle}&types=${'tv,movie'}`)
}

//Given the movie's id, return a list of streaming services that the movie is on
searchforStreamingServices(movieID : number){
  return this.http.get(`https://api.watchmode.com/v1/title/${movieID}/sources/?apiKey=${environment.watchModeAPIKey}`)
}
}
