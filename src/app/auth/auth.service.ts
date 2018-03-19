import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {MatDialog} from '@angular/material';

@Injectable()
export class AuthService {

  authState: any = null;

  constructor(private afAuth: AngularFireAuth,
              private dialog: MatDialog,
              private router: Router) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // emailSignUp(email: string, password: string) {
  //   return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  //     .then((user) => {
  //       this.authState = user;
  //       this.updateUserData();
  //     })
  //     .catch(error => console.log(error));
  // }
  //
  // emailLogin(email: string, password: string) {
  //   return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  //     .then((user) => {
  //       this.authState = user;
  //       this.updateUserData();
  //     })
  //     .catch(error => console.log(error));
  // }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    let auth = firebase.auth();

    return auth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error));
  }

  //// Sign Out ////
  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }


  // private updateUserData(): void {
  //   //   // Writes user name and email to realtime db
  //   //   // useful if your app displays information about users or for admin features
  //   //   let path = `users/${this.currentUserId}`; // Endpoint on firebase
  //   //   let data = {
  //   //     email: this.authState.email,
  //   //     name: this.authState.displayName
  //   //   };
  //   //
  //   //   this.db.object(path).update(data)
  //   //     .catch(error => console.log(error));
  //   //
  //   // }


}
