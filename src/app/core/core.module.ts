import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../shared/material.module';
import {MainComponent} from './main/main.component';
import {AppRoutingModule} from '../app-routing.module';
import {HomeComponent} from '../home/home.component';

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
  exports: [MainComponent]
})
export class CoreModule {
}
