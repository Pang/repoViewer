import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { GithubApiService } from '../services/github-api.service';

@Component({
  selector: 'app-commit-item',
  templateUrl: './commit-item.component.html',
  styleUrls: ['./commit-item.component.css']
})

export class CommitItemComponent implements OnInit {
  constructor(private route: ActivatedRoute, private githubApi: GithubApiService) {
  }

  gitUser: string = this.route.snapshot.paramMap.get('GhP');
  repoCommits: string = this.route.snapshot.paramMap.get('RpC');

  gitCommits: any[];

  ngOnInit() {
    this.githubApi.getCommits(this.gitUser, this.repoCommits).subscribe(commits => this.gitCommits = commits.json());
  }

}
