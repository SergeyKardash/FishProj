import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../shared/material.module';
import {MainComponent} from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class CoreModule {
}
