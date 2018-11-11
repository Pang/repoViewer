import { Component, OnInit, Output } from '@angular/core';
import { GithubApiService } from '../services/github-api.service'

@Component({
  selector: 'app-repo-finder',
  templateUrl: './repo-finder.component.html',
  styleUrls: ['./repo-finder.component.css']
})
export class RepoFinderComponent implements OnInit {
  constructor(private githubApi: GithubApiService) { }

  repositories: any[];
  gitProfile: string;

  onSubmit(){
    this.githubApi.getRepos(this.gitProfile).subscribe(repo => this.repositories = repo.json());
  }

  ngOnInit() {
  }

}
