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
  gitProfile: string;
  gitCommits: [];
  errorMsg: boolean = false;

  @Output() selectRepoEvent = new EventEmitter<object>();
  gitRepoDetails:{};

  onSubmit(){
    this.errorMsg = false;
    this.githubApi.getRepos(this.gitProfile).subscribe(repo => this.repositories = repo.json(), error => this.errorMsg = true);
  }

  selectRepo(e){
    this.gitRepoDetails = {'user': this.gitProfile, 'repo': e.target.id, 'commits': this.gitCommits};
    this.selectRepoEvent.emit(this.gitRepoDetails);
  }

  ngOnInit(){}
}