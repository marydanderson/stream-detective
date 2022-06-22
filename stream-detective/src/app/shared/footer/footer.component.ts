import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  watchmode() {
    window.location.href='https://www.watchmode.com/';
  }

  githubOne() {
    window.location.href='https://github.com/marydanderson';
  }

  githubTwo() {
    window.location.href='https://github.com/cooper-myatt';
  }

  githubThree() {
    window.location.href='https://github.com/cjcapone85';
  }

  streamingOne() {
    window.location.href='https://www.netflix.com/';
  }

  streamingTwo() {
    window.location.href='https://www.amazon.com/Prime-Video/b?ie=UTF8&node=2676882011';
  }

  streamingThree() {
    window.location.href='https://www.crunchyroll.com/';
  }

  streamingFour() {
    window.location.href='https://www.disneyplus.com/';
  }

  streamingFive() {
    window.location.href='https://www.hbomax.com/';
  }


  ngOnInit(): void {
  }

}
