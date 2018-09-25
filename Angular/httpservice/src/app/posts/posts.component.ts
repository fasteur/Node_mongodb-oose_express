import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';
import { PostserviceService } from '../postservice.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
// export class PostsComponent implements OnInit {
export class PostsComponent implements OnInit {
  title : string;
  posts : any[];
  // private url= "https://jsonplaceholder.typicode.com/posts";


  // constructor(private http: Http, postService : PostserviceService ) { 
  constructor( private postService : PostserviceService ) { 
     console.log();
  }  
  ngOnInit() : void { 
    this.postService.AffichPost().subscribe( response => { 
      this.posts = response.json()
    })
  }
 createPost(titleInput) { 
  this.postService.createPost(titleInput).subscribe( response => { 
    let post : any = { title : titleInput} 
    post.id = response.json().id;
    
    this.posts.splice(0, 0, post ) 
  })
 }
 updatePost(post) { 
   this.postService.updatePost(post).subscribe(response => { 
    let index = this.posts.indexOf(post); 
    this.posts[index].title = this.title
  })
 }
 deletePost(post) { 
  this.postService.deletePost(post).subscribe(response => { 
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1) 
  })
 }
  // createPost(titleInput : HTMLInputElement) { 
  //   // let post : any = { title : titleInput.value} // on rajoute le point value si ds html on utilise le #title car il renvoie tout l'élément
  //   let post : any = { title : titleInput} // pas de .value car le ({ ngModel }) ne renvoie que la valeur
  //   this.http.post(this.url, JSON.stringify(post))
  //   .subscribe( response => { 
  //     // post['id'] = response.json().id; // si on enleve le : any a post il faut faire ainsi
  //     post.id = response.json().id;
  //     // this.posts.unshift(post); // push pousse à la fin tandis que unshift pousse au début
  //     this.posts.splice(0, 0, post ) // le split supprime à partir de la position 0, 0 élément dans ce cas ci et on ajoute l'élément post
  //   })
  // }

  // updatePost(post) { 
  //   //avec .put j'envoie TOUT l'article, alors qu'avec le .patch je n'envoie que l'info modifiée
  //   // this.http.put(this.url, JSON.stringify(post))
  //   this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead : true }))
  //   .subscribe(response => { 
  //     let index = this.posts.indexOf(post); 
  //     this.posts[index].title = this.title
  //     console.log(response.json());
  //   })
  // }

  // deletePost(post) { 
  //   this.http.delete(`${this.url}/${post.id}`)
  //   .subscribe(response => { 
  //     let index = this.posts.indexOf(post);
  //     this.posts.splice(index, 1) 
  //   })
  // }

  // ngOnInit() : void { 
  //   this.http.get(this.url)
  //   .subscribe( response => { 
  //     this.posts = response.json()
  //   })
  // }
}
