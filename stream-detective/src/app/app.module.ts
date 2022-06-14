import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserLibraryComponent } from './logged-in-mainpage/user-library/user-library.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SearchComponent } from './logged-in-mainpage/search/search.component';
import { LoggedInMainpageComponent } from './logged-in-mainpage/logged-in-mainpage.component';
// Firebase and Firestore AUTH
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat'; // firebase
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // firestore


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignInComponent,
    SignUpComponent,
    UserLibraryComponent,
    NavbarComponent,
    SearchComponent,
    LoggedInMainpageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
