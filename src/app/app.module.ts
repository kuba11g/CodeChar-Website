import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeFormComponent } from './components/about-me-form/about-me-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FilesFormComponent } from './components/files-form/files-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StartFormComponent } from './components/start-form/start-form.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { InstagrambotzFormComponent } from './components/instagrambotz-form/instagrambotz-form.component';
import { SpottybottyFormComponent } from './components/spottybotty-form/spottybotty-form.component';
import { MessbotFormComponent } from './components/messbot-form/messbot-form.component';


@NgModule({
  declarations: [
    AppComponent,
    FilesFormComponent,
    LoginFormComponent,
    AboutMeFormComponent,
    NavbarComponent,
    StartFormComponent,
    EmailFormComponent,
    InstagrambotzFormComponent,
    SpottybottyFormComponent,
    MessbotFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
