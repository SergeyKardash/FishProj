import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {AngularFirestore} from 'angularfire2/firestore';
import {User} from 'app/shared/user.model';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  authState: any = null;

  constructor(private afAuth: AngularFireAuth,
              private dialog: MatDialog,
              private router: Router,
              private afs: AngularFirestore) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  get authState$() {
    return this.afAuth.authState;
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  //
  // // Returns current user data
  // get currentUser(): any {
  //   return this.authenticated ? this.authState : null;
  // }
  //
  // get currentUserId(): string {
  //   return this.authenticated ? this.authState.uid : '';
  // }

  emailSignUp(email: string, password: string, name: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        this.updateUserData(name, email, password);
      })
      .catch(error => console.log(error));
  }

  emailLogin(email: string, password: string, dialogRef) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        dialogRef.close();
      })
      .catch(error => console.log(error));
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error));
  }

  //// Sign Out ////
  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }


  private updateUserData(name, email, password): void {
    const usersCollection = this.afs.collection<User>('users');
    let user = new User(name, email, password, this.authState.uid);
    usersCollection.add(JSON.parse(JSON.stringify(user)));
  }

}
