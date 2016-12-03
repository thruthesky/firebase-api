import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseAuth {
    auth: firebase.auth.Auth;
    constructor() {
        this.auth = firebase.auth();
    }

    register( email, password ) {
        this.auth.createUserWithEmailAndPassword(email, password)
            .catch( error => {
                // Handle Errors here.
                var errorCode = error['code'];
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
    }
    
}
