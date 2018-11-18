import { Component } from '@angular/core';
import { GithubApiService } from '../app/services/github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private githubApi: GithubApiService) { }

  selectedRepo: string;
  gitUser: string;
  gitCommits: {};
  menuOpen: string = "repoFinder";

  //Receives the data in the object sent from repo-finder as 'e'
  //Then binds it to new variables to share with commit-finder child component
  receiveSelectedRepo(e){
    this.selectedRepo = e.repo;
    this.gitUser = e.user;
    this.githubApi.getCommits(this.gitUser, this.selectedRepo).subscribe(commits => this.gitCommits = commits.json());
    this.menuOpen = e.view;
  }
}