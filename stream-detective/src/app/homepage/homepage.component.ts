import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  onSignIn =  true;
  onSignUp =  false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickBoolean(button) {
    if (button === "sign in") {
      this.onSignIn = false;
      this.onSignUp = true;
    }
    else { //sign up
      this.onSignUp = false;
      this.onSignIn = true;
    }
  }
}
