import { LikeComponent } from './like.component'

let l = new LikeComponent(25, true); 
// l.onclick();
console.log(`Il y a : ${l.likeCount} likes, et le bouton est ${l.isSelected}`);