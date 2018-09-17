export class LikeComponent {
    constructor (private _likeCount: number,private _isSelected: boolean) {}
    onclick() {
        // if (this._isSelected) {
        //     this._likeCount --; 
        //     this._isSelected = false;
        // } else {
        //     this._likeCount ++; 
        //     this._isSelected = true; 
        // }   
        this._likeCount += (this._isSelected) ? -1 : +1;
        this._isSelected = !this._isSelected
    }
    get isSelected() { 
        return this._isSelected; 
    }
    get likeCount() { 
        return this._likeCount; 
    }
}