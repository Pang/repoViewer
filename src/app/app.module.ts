import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileFinderComponent } from './profile-finder/profile-finder.component';
import { RepoFinderComponent } from './repo-finder/repo-finder.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileFinderComponent,
    RepoFinderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
