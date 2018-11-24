import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GithubApiService } from '../services/github-api.service';

@Component({
  selector: 'app-repo-finder',
  templateUrl: './repo-finder.component.html',
  styleUrls: ['./repo-finder.component.css']
})

export class RepoFinderComponent implements OnInit {
  constructor(private githubApi: GithubApiService) { }

  repositories: any[];
  gitCommits: [];
  errorMsg: boolean = false;

  //Uses function from service to find correct address of API and pull data as an object
  onSubmit(gitProfile){
    this.errorMsg = false;
    this.githubApi.getRepos(gitProfile.value).subscribe(repo => this.repositories = repo.json(), error => this.errorMsg = true);
  }

  ngOnInit(){}
}