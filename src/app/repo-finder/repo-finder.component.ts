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

  //EventEmitter used for sending data to sibling component (commit-finder)
  @Output() selectRepoEvent = new EventEmitter<object>();
  gitRepoDetails:{};

  @Output() curretView = new EventEmitter<string>();

  //Puts the collected data into an object and emits it once repo clicked from list
  selectRepo(e, gitProfile){
    this.gitRepoDetails = {'user': gitProfile.value, 'repo': e.target.id, 'commits': this.gitCommits, 'view': 'commitFinder'};
    this.selectRepoEvent.emit(this.gitRepoDetails);
  }

  ngOnInit(){}
}