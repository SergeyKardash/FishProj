import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private auth: AuthService,
              private dialogRef: MatDialogRef<SignInComponent>) {
  }

  ngOnInit() {
    this.signInForm = new FormGroup({
      'email': new FormControl(null, Validators.email),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSignIn() {
    this.auth.emailLogin(this.signInForm.value.email, this.signInForm.value.password, this.dialogRef);
  }
}
