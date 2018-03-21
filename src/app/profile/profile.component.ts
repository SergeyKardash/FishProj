import {Component, OnInit} from '@angular/core';
import {FirestoreService} from '../shared/firestore.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
user;
  constructor(public fs: FirestoreService) {
    this.fs.userInfo$.subscribe( user => {
      this.user = user[0];
      }
    );
  }

  ngOnInit() {
  }

}
