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
  constructor(private watchModeAPI: WatchmodeApiService) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      'movieTitleSearchValue': new FormControl(null)
    });
  }

//this search will get an array of objects which contains Movie Titles and their Ids.
//There will have to be another API call to get the list of streaming services once the correct movie is selected.
getSearchResults(){
  this.movieTitle = this.reactiveForm.value.movieTitleSearchValue
  this.watchModeAPI.searchForTitle(this.movieTitle).subscribe((data: any[])=>{
    console.log(data);
    this.movieTitleList = data['title_results'];
    console.log(this.movieTitleList)
})
}
}

