import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SignInComponent} from '../../auth/sign-in/sign-in.component';
import {SignUpComponent} from '../../auth/sign-up/sign-up.component';
import {AuthService} from '../../auth/auth.service';
import {FirestoreService} from '../../shared/firestore.service';
import {User} from '../../shared/user.model';
import {ProfileComponent} from '../../profile/profile.component';
import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn} from 'ngx-animate';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      // Set the duration to 5seconds and delay to 2seconds
      params: {timing: 0.7}
    }))])
  ],
})
export class MainComponent implements OnInit {
  userInfo;
  showSpinner: boolean = true;
  fadeIn: any;

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
              this.showSpinner = false;
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

  onProfile() {
    this.dialog.open(ProfileComponent);
  }
}
