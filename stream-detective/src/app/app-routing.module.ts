import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoggedInMainpageComponent } from './logged-in-mainpage/logged-in-mainpage.component';
import { SearchComponent } from './logged-in-mainpage/search/search.component';
import { UserLibraryComponent } from './logged-in-mainpage/user-library/user-library.component';

const routes: Routes = [
  { path: "", component: HomepageComponent, pathMatch: "full" },
  { path: "home", component: LoggedInMainpageComponent, children: [
      { path: "search", component: SearchComponent },
      { path: "library", component: UserLibraryComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
