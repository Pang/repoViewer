import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GithubApiService } from '../services/github-api.service';
import { error } from '@angular/compiler/src/util';

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

  //EventEmitter used for sending data to sibling component (commit-finder)
  @Output() selectRepoEvent = new EventEmitter<object>();
  gitRepoDetails:{};

  //Uses function from service to find correct address of API and pull data as an object
  onSubmit(gitProfile){
    this.errorMsg = false;
    this.githubApi.getRepos(gitProfile.value).subscribe(repo => this.repositories = repo.json(), error => this.errorMsg = true);
  }

  //Puts the collected data into an object and emits it once repo clicked from list
  selectRepo(e, gitProfile){
    this.gitRepoDetails = {'user': gitProfile.value, 'repo': e.target.id, 'commits': this.gitCommits};
    this.selectRepoEvent.emit(this.gitRepoDetails);
  }

  ngOnInit(){}
}