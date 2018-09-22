import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app.module";
import * as firebase from 'firebase/app'

import {firebaseConfig} from '../environments/firebase-config';
firebase.initializeApp(firebaseConfig);

/*platformBrowserDynamic().bootstrapModule(AppModule);*/

/* espera permanente de respueta */
firebase.auth().getRedirectResult().then(result=>console.log(result));
platformBrowserDynamic().bootstrapModule(AppModule)
