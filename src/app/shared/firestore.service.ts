import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {AuthService} from '../auth/auth.service';


@Injectable()
export class FirestoreService {
  userUid;

  constructor(private afs: AngularFirestore,
              private auth: AuthService) {
    this.auth.authState$
      .share()
      .subscribe(authState => {
        if (authState != null) {
          this.userUid = authState.uid;
        } else {
          this.userUid = null;
        }
      });
  }

  get userInfo$() {
    if (this.userUid != null) {
      return this.afs.collection('users', ref => ref.where('uid', '==', this.userUid)).valueChanges();
    }
  }
}
