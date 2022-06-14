import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(private watchModeAPI: WatchmodeApiService) { }

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
    console.log(data);
    this.movieTitleList = data['title_results'];
    console.log(this.movieTitleList)
})
}

setResults(res : any[], name : string){
  this.results = res;
  this.titleClicked = name
  console.log(this.results)
}

clickMovie(movieID : number, name : string){
  this.watchModeAPI.searchforStreamingServices(movieID).subscribe((data: any[])=>{

    const filterArray = [203,26,372,380,157,387,388,79,444,371, ];
    const result = data.filter(({ source_id }) => filterArray.includes(source_id));
    this.setResults(result, name)
  })
  return this.results
}

}
