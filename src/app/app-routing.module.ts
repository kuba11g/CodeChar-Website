import { MessbotFormComponent } from './components/messbot-form/messbot-form.component';
import { SpottybottyFormComponent } from './components/spottybotty-form/spottybotty-form.component';
import { InstagrambotzFormComponent } from './components/instagrambotz-form/instagrambotz-form.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { StartFormComponent } from './components/start-form/start-form.component';
import { AboutMeFormComponent } from './components/about-me-form/about-me-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FilesFormComponent } from './components/files-form/files-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: StartFormComponent}, // main site
  { path: 'download', component: FilesFormComponent},
  { path: 'login', component: LoginFormComponent},
  { path: 'email', component: EmailFormComponent},
  { path: 'about-me', component: AboutMeFormComponent},
  { path: 'instagrambotz', component: InstagrambotzFormComponent},
  { path: 'spottybotty', component: SpottybottyFormComponent},
  { path: 'messbot', component: MessbotFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
