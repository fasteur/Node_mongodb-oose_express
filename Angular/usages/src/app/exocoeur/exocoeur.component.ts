import { Component,Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-exocoeur',
  templateUrl: './exocoeur.component.html',
  styleUrls: ['./exocoeur.component.css']
})
export class ExocoeurComponent  {
  
 @Input('isFavorite') isFavorite : boolean; 
 @Input('nbLike') nbLike : number; 
 @Output('changement') changement = new EventEmitter; 

 onClick(){
   this.nbLike += (this.isFavorite) ? -1 : + 1;
   this.isFavorite = !this.isFavorite; 
  

   this.changement.emit({
     
    }); 
 }

}
export interface FavoriteChangeArgs { 
  newValue:  boolean, 
  likeCoun: number
}