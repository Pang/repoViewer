import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commit-finder',
  templateUrl: './commit-finder.component.html',
  styleUrls: ['./commit-finder.component.css']
})

export class CommitFinderComponent implements OnInit {
  constructor() {}

  @Input() selectedRepo: string;
  @Input() gitUser: string;
  @Input() gitCommits: {};

  ngOnInit() {
  }

}
