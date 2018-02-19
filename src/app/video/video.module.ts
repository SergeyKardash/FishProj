import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../shared/material.module';
import {VideoComponent} from './video.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [VideoComponent],
  exports: [VideoComponent]
})
export class VideoModule {
}
