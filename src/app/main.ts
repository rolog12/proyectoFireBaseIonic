import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app.module";
import * as firebase from 'firebase/app'

import {firebaseConfig} from '../environments/firebase-config';

platformBrowserDynamic().bootstrapModule(AppModule);

firebase.initializeApp(firebaseConfig);
