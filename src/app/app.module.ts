import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProviderListComponent } from './providers/provider-list/provider-list.component';

import { SharedModule } from './shared/shared.module';

// angular-firestore
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ProviderDetailComponent } from './providers/provider-detail/provider-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    ProviderListComponent,
    ProviderDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  entryComponents: [
    ProviderDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
