
import {Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class Authentication
{
  constructor (private angularAuth: AngularFireAuth){}

  createUserWithEmailAndPassword (email,password)
  {
    return this.angularAuth.auth.createUserWithEmailAndPassword(email,password);
  }

  createUserWithGoogle()
  {
    let provider = new firebase.auth.GoogleAuthProvider();
    return this.angularAuth.auth.signInWithRedirect (provider)
    .then(result=>
      {
        return firebase.auth().getRedirectResult;
      });
  }
  createUserWithFacebook()
  {
    let providerFace = new firebase.auth.FacebookAuthProvider();
    return this.angularAuth.auth.signInWithRedirect(providerFace)
    .then(result=>
    {
      return firebase.auth().getRedirectResult;
    });
  }
}
