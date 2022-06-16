import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchApiData, UserLibraryData } from 'src/app/shared/streaming-data.model';
import { UserLibraryService } from '../user-library/user-library.service';
import { WatchmodeApiService } from './watchmode-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  reactiveForm : FormGroup;
  movieTitleList = [];
  movieTitle : string;
  results = [];
  titleClicked = '';
  // Mary add:
  userLibraryObject: UserLibraryData;



  constructor(private watchModeAPI: WatchmodeApiService, private userLibraryServcice: UserLibraryService) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      'movieTitleSearchValue': new FormControl(null)
    });

  }

//Used to reset the results to blank.
resetResults(){
  this.results = [];
  this.titleClicked ='';
}

//this search will get an array of objects which contains Movie Titles and their Ids.
//There will have to be another API call to get the list of streaming services once the correct movie is selected.
getSearchResults(){
  //reset results because this will remove previous results from screen
  this.resetResults()
  this.movieTitle = this.reactiveForm.value.movieTitleSearchValue
  this.watchModeAPI.searchForTitle(this.movieTitle).subscribe((data: any[])=>{
    this.movieTitleList = data['title_results'];
    console.log('api search service data: ', data);
  })
}

setResults(res : any[], name : string){
  this.results = res;
  this.titleClicked = name;
  console.log('set results method:', this.results);
}


clickMovie(movieID : number, name : string){
  this.watchModeAPI.searchforStreamingServices(movieID).subscribe((data: any[]) => {
    const filterArray = [203,26,372,380,157,387,388,79,444,371, ];
    const result = data.filter(({ source_id }) => filterArray.includes(source_id));
    console.log('data: ', result)
    this.setResults(result, name) // logs to console & sets result
    // format API data into usable Object
    this.userLibraryObject = this.watchModeAPI.formatApiData(result, name);
  })
  console.log('results: ', this.results)
  return this.userLibraryObject;
  // return this.results
}


// Add movie to UserLibrary Firestore on click
  onAddToLibrary(movie) {
    this.userLibraryServcice.addToWatchlist(movie)
  }


}
