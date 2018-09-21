import { Component, Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent  {
 @Input('isFavorite') isFavorite : boolean; 
 @Input('likeCount') likeCount : boolean; 

 @Output('changement') changement = new EventEmitter; 

 onClick(){
   this.isFavorite = !this.isFavorite; 
  //  this.changement.emit(this.isFavorite); 
   this.changement.emit({
     newValue : this.isFavorite,
     texte : "trololo" }); 
 }

}
export interface FavoriteChangeArgs { 
  newValue:  boolean, 
  text: string
}