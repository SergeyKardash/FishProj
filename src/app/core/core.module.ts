import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../shared/material.module';
import {MainComponent} from './main/main.component';
import {AppRoutingModule} from '../app-routing.module';
import {HomeComponent} from '../home/home.component';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthService} from '../auth/auth.service';
import {AngularFirestore} from 'angularfire2/firestore';
import {FirestoreService} from '../shared/firestore.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  declarations: [
    MainComponent,
    HomeComponent
  ],
  providers: [AuthService, AngularFireAuth, AngularFirestore, FirestoreService],
  exports: [MainComponent]
})
export class CoreModule {
}
