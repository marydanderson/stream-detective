import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { StreamTypeObject, UserLibraryData } from 'src/app/shared/streaming-data.model';


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
  searchforStreamingServices(movieID: number) {
    return this.http.get(`https://api.watchmode.com/v1/title/${movieID}/sources/?apiKey=${environment.watchModeAPIKey}`)
  }



  // ------Capture the returned api data and format into reusable UserLibraryData
  formatApiData(apiReturn, movieName) {
    // ---- format apiReturn for streaming services into usable object
    const apiStreamData = apiReturn; // api returns an array of objects | stream name is key 'name'
    const extractedApiStreamArray = []; // blank array to push api stream name data to
    apiStreamData.forEach(element => {
      extractedApiStreamArray.push(element.name)
    });
    // console.log('compiled stream array: ', extractedApiStreamArray)

    const retrievedStreamValueObj = new StreamTypeObject(
      extractedApiStreamArray //name
    )
    // console.log('retrievedstreamvalueObj: ', retrievedStreamValueObj)

    // create userLibraryData w/ formatted api data from above
    const createdUserLibraryObj = new UserLibraryData(
      movieName,
      retrievedStreamValueObj.name, //array of streaming services
      null, // id, will be filled in when added to firestore database
      retrievedStreamValueObj.seasons, // optional | NULL for now
      retrievedStreamValueObj.episodes //optional | NULL for now
    )
    console.log('user library object: ', createdUserLibraryObj)
    return createdUserLibraryObj;
  }

}
