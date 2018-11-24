import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RepoFinderComponent } from './repo-finder/repo-finder.component';
import { HttpModule } from '@angular/http';
import { CommitItemComponent } from './commit-item/commit-item.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoFinderComponent,
    CommitItemComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: RepoFinderComponent },
      { path: 'commits/:GhP/:RpC', component: CommitItemComponent },
      { path: '**', component: ErrorPageComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
