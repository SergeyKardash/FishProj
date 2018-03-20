import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SignInComponent} from '../../auth/sign-in/sign-in.component';
import {SignUpComponent} from '../../auth/sign-up/sign-up.component';
import {AuthService} from '../../auth/auth.service';
import {FirestoreService} from '../../shared/firestore.service';
import {User} from '../../shared/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  userInfo;

  constructor(public dialog: MatDialog,
              public auth: AuthService,
              public fs: FirestoreService) {
    this.auth.authState$
      .share()
      .subscribe(userState => {
        if (userState != null) {
          this.fs.userInfo$
            .share()
            .subscribe(user => {
              this.userInfo = user[0];
              console.log(this.userInfo);
            });
        }
      });
  }

  ngOnInit() {
  }

  onSignIn() {
    this.dialog.open(SignInComponent);
  }

  onSignUp() {
    this.dialog.open(SignUpComponent, {
      width: '500px'
    });
  }

  onSignOut() {
    this.auth.signOut();
  }
}
