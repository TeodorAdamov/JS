import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideAnimations(),
  importProvidersFrom(provideFirebaseApp(() => initializeApp({
    "projectId": "todo-list-8841e",
    "appId": "1:429451343820:web:e138433dca10fb3e0f0f69",
    "storageBucket": "todo-list-8841e.appspot.com",
    "apiKey": "AIzaSyDj_oYqCnS3wDusO7rsDojfUxaBab0vjaw",
    "authDomain": "todo-list-8841e.firebaseapp.com",
    "messagingSenderId": "429451343820"
  }))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
