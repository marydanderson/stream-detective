import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; //save logged in user data
  dataObservable: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(
    private afAuth: AngularFireAuth, //Auth service installed from Firebase
    public router: Router,
    public afs: AngularFirestore, //firestore database
    public ngZone: NgZone
  ) {
    /* Save user date in localstorage when logged in and setting up null when logged out
    constructor fire every time an object is created; hence if a user objet is created/deleted w/ login/out, this method is initializted
    */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!); //turn into JSON object
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    })

   }

  // Sign Up w/ Firebase Auth
  signUp(email: string, password: string, displayName: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.setUserData(result.user.email, result.user.uid, displayName); //save to firestore
        console.log('userData UID: ', result.user.uid);
        // this.router.navigate(['home']) //navigate to user home page upon sign up
      })
      .catch((error) => {
      window.alert(error.message)
    })
  }

  // Sign In w/ Firebase Auth
  signIn(email: string, password: string) {
    // return this.afAuth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((result) => {
    //     this.setUserData(result.user)
    //     this.router.navigate(['home'])
    //     return this.dataObservable.next(this.userData)
    //   })
    //   .catch((error) => {
    //     window.alert(error.message)
    //   })
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate([''])
    });
  }

  //  Save User Data  upon sign in / sign up so it can be saved to local storage

  setUserData(email: string, uid: string, displayName: string) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);
    const userData: User = {
      uid: uid,
      email: email,
      displayName: displayName
      // subscribedStream: user.subscribedStream
    };
    console.log('data set of user signed in: ', userData)
    return userRef.set(userData, {
      merge: true
    });
  }


  // for Auth Guard; returns true when user is logged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null ? true : false) //return true if there is a user
  }

}
