import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './shared/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {VideoModule} from './video/video.module';
import { AuthComponent } from './auth/auth.component';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule,
    AppRoutingModule,
    CoreModule,
    VideoModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
