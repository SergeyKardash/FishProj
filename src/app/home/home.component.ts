import { Component, OnInit } from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn} from 'ngx-animate/lib/fading';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      // Set the duration to 5seconds and delay to 2seconds
      params: {timing: 0.7}
    }))])
  ],
})
export class HomeComponent implements OnInit {
  fadeIn: any;
  constructor() { }

  ngOnInit() {
  }

}
