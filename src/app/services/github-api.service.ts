import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})

export class GithubApiService {
  constructor(private _http:Http){}
  private clientId:string = "Iv1.fe8de52d467bca23";
  private clientSecret:string = "d05ba9baef1296718b19f241b4f533f2ab3d0890";

  getRepos(gitUser) {
    return this._http.get(`https://api.github.com/users/${gitUser}/repos?client_id=${this.clientId}&client_secret=${this.clientSecret}&per_page=999`);
  }

  getCommits(gitUser, selectedRepo) {
    return this._http.get(`https://api.github.com/repos/${gitUser}/${selectedRepo}/commits?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
  }
  
}
