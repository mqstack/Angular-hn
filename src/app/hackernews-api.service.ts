import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class HackernewsApiService {
    baseUrl: string;
    baseUrl2: string;

    constructor(private http: Http) {
        this.baseUrl = 'https://hacker-news.firebaseio.com/v0';  
        this.baseUrl2 = 'https://node-hnapi.herokuapp.com'; 
    }
    
    fetchStories(): Observable<any>{
        return this.http.get(`${this.baseUrl}/topstories.json`)
            .map(response => response.json());
    }
    
    fetchItem(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/item/${id}.json`)
            .map(response => response.json());
    }
    
    fetchStories2(stroyType: string, page: number): Observable<any>{
        return this.http.get(`${this.baseUrl2}/${stroyType}?page=${page}`)
            .map(response => response.json());
    }
    
    fetchComments(id: number): Observable<any>{
        return this.http.get(`${this.baseUrl2}/item/${id}`)
            .map(response => response.json());
    }
    
    fetchUser(id: string):Observable<any>{
        return this.http.get(`${this.baseUrl2}/user/${id}`)
            .map(response => response.json());
    }
}
