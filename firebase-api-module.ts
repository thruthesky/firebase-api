import { NgModule } from '@angular/core';
import { FirebaseStorage } from './firebase-storage';
import { FirebaseAuth } from './firebase-auth';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBpVjDZ9TY-UDj61gjKbW_oq_ZhmMnvVsU",
    authDomain: "ionic-ac49b.firebaseapp.com",
    databaseURL: "https://ionic-ac49b.firebaseio.com",
    storageBucket: "ionic-ac49b.appspot.com",
    messagingSenderId: "130954267633"
};
firebase.initializeApp(config);

@NgModule({
  declarations : [],
  imports: [],
  providers : [ FirebaseStorage, FirebaseAuth ]
})
export class FirebaseApiModule {}