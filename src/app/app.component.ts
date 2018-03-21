import {Component} from '@angular/core';
import {AuthService} from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSpinner: boolean = true;


  constructor(auth: AuthService) {
    auth.authState$.share().subscribe(() => setTimeout(this.showSpinner = false, 500));
  }
}
