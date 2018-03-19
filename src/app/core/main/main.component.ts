import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SignInComponent} from '../../auth/sign-in/sign-in.component';
import {SignUpComponent} from '../../auth/sign-up/sign-up.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onSignIn() {
    this.dialog.open(SignInComponent);
  }

  onSignUp() {
    this.dialog.open(SignUpComponent);
  }

}
