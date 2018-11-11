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

  receiveSelectedRepo(e){
    this.selectedRepo = e.repo;
    this.gitUser = e.user;

    this.githubApi.getCommits(this.gitUser, this.selectedRepo).subscribe( commits => this.gitCommits = commits.json());
  }
}