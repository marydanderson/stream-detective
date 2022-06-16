import { Component, OnInit } from '@angular/core';
import { UserLibraryData } from 'src/app/shared/streaming-data.model';
import { UserLibraryService } from './user-library.service';

@Component({
  selector: 'app-user-library',
  templateUrl: './user-library.component.html',
  styleUrls: ['./user-library.component.css']
})
export class UserLibraryComponent implements OnInit {
  watchlist: UserLibraryData[] = [];

  constructor(private userLibraryService: UserLibraryService) { }

  ngOnInit(): void {
    // load watchlist when component is intialized
    this.userLibraryService.getWatchlist().subscribe(movies => {
      console.log('subscribed watchlist: ', movies);
      this.watchlist = movies;
    });

  }

}
