import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class GithubApiService {
  constructor(private _http:Http){}

  getRepos(gitUser) {
      return this._http.get(`https://api.github.com/users/${gitUser}/repos?per_page=100`);
  }

  getCommits(gitUser, selectedRepo) {
      return this._http.get(`https://api.github.com/repos/${gitUser}/${selectedRepo}/commits?per_page=100`);
  }
  
}
