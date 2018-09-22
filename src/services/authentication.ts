
import {Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

const identifier = "token";
@Injectable()
export class Authentication
{
  public token: string;
  constructor (private angularAuth: AngularFireAuth)
  {
    this.setup();
  }
  logout()
  {
    return this.angularAuth.auth.signOut().then(()=>
    {
      this.token=null;
    })
  }
  setup()
  {
    this.token =this.getTokenFromLS ();
    console.log("Escuchando el observador");
    this.angularAuth.authState.subscribe ((firebaseUser)=>
    {
      console.log(firebaseUser);
      if(firebaseUser)
      {
        localStorage.setItem(identifier,firebaseUser.uid);
        this.token= firebaseUser.uid;
      }
      else
      {
        localStorage.removeItem(identifier);
        this.token= null;
      }
    });
  }
  getTokenFromLS() :string
  {
    return localStorage.getItem(identifier)
  }

  createUserWithEmailAndPassword (email,password)
  {
    return this.angularAuth.auth.createUserWithEmailAndPassword(email,password);
  }

  createUserWithGoogle()
  {
    let provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().getRedirectResult;
  }
  createUserWithFacebook()
  {
    let provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().getRedirectResult;
  }
  createUserWithProvider(provider)
  {
    return this.angularAuth.auth.signInWithRedirect(provider)
    .then(result=>
    {
      return firebase.auth().getRedirectResult;
    });
  }
}
