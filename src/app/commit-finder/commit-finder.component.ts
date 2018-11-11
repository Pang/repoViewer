import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../services/github-api.service'

@Component({
  selector: 'app-commit-finder',
  templateUrl: './commit-finder.component.html',
  styleUrls: ['./commit-finder.component.css']
})

export class CommitFinderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
