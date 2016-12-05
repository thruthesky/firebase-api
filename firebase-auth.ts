import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseAuth {
    auth: firebase.auth.Auth;
    constructor() {
        this.auth = firebase.auth();
    }

    /**
     * @note If the new account was created, the user is signed in automatically.
     * 
     * 
     * @code register at philgo first and then register at firebase.
     * 
    register() {
        this.process.begin();
        this.member.register( this.form, (login) => {
            console.log('onClickRegister(), registration sucess: ', login );
            let email = this.member.getApiEmail( login );
            let password = this.member.getApiPassword( login );
            this.auth.register( email, password, FirebaseAuth => {
                // firebase registration ok
                this.route.go('/');
            }, (code, message) => {
                message = 'Warning! Registration Error. Error Code: ' + code + ' : ' + message + ' Please report this error message to admin.';
                this.process.setError( message );
            })
        },
        e => {
            console.log("onClickRegister() error: " + e);
            setTimeout(()=>this.process.setError( e ),345);
        });
    }
    
     * @endcode
     */
    register( email, password, successCallback, failureCallback ) {
        this.auth.createUserWithEmailAndPassword(email, password)
            .then( firebaseUser => {
                // console.log("User " + firebaseUser.uid + " created successfully!");
                // return firebaseUser;
                successCallback( firebaseUser );
            }, error => {
                // Handle Errors here.
                var errorCode = error['code'];
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    errorMessage = 'The password is too weak.';
                }
                failureCallback( errorCode, errorMessage );
            });
    }

    login( email, password, successCallback, failureCallback ) {

        this.auth.signInWithEmailAndPassword(email, password)
            .then( firebaseUser => {
                successCallback( firebaseUser );
            }, error => {
                var errorCode = error['code'];
                var errorMessage = error.message;
                failureCallback( errorCode, errorMessage );
            });
    }
}
