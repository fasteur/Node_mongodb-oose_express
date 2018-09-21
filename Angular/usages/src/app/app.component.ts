import { Component } from '@angular/core';
import { FavoriteChangeArgs } from './exocoeur/exocoeur.component'
// interface FavoriteChangeArgs { 
//   newValue:  boolean, 
//   text: string
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'usages';
 
  post = { 
    nbLike: 20,
    isFavorite: false
  }

  
  onFavoriteChange(isFav : FavoriteChangeArgs){ 
    console.log('button has been clicked');
  }
}
