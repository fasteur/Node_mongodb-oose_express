import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root',
 
})
export class PostserviceService {
 
  url= "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: Http) { 

  }  
  AffichPost() { 
    
    return this.http.get(this.url);
    
  }
  createPost(titleInput : HTMLInputElement) { 
    let post : any = { title : titleInput} 
   return this.http.post(this.url, JSON.stringify(post))

  }

  updatePost(post) { 
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead : true }))
    
  }

  deletePost(post) { 
    return this.http.delete(`${this.url}/${post.id}`)
    
  }
}
