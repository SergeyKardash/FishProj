import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './auth.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
  SignInComponent,
  SignUpComponent
  ],
  entryComponents: [
    SignInComponent,
    SignUpComponent
  ]
})
export class AuthModule { }
