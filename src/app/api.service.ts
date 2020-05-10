import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
API_KEY = '7914dd5798dd4207877a216ec2422a4d';

public getNews(){
  return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`)
}
  constructor(private httpClient: HttpClient) { }
}
