import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProjetsComponent } from './projets/projets.component';
import { ProjetComponent } from './projets/projet/projet.component';
import { ContactComponent } from './contact/contact.component';

import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    ProjetsComponent,
    ContactComponent,
    ProjetComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
