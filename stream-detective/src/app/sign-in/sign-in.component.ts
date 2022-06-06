import { Component,  OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  subscription: Subscription


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  ngOnDestory() {
    // prevent memory leak
    this.subscription.unsubscribe();
  }

  onSignIn(form: NgForm) {
    const userEmail = form.value.email;
    const userPassword = form.value.password
    this.authService.signIn(userEmail, userPassword)
  }


}
