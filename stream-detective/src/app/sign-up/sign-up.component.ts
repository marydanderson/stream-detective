import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  subscription: Subscription

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignUp(form: NgForm) {
    const userEmail = form.value.email;
    const userPassword = form.value.password
    this.authService.signUp(userEmail, userPassword)
  }

  ngOnDestory() {
    // prevent memory leak
    this.subscription.unsubscribe();
  }


}
