'use strict'
export class Points {
    
    constructor (private _x: number,private _y?: number) {}

    get x():number { // permet d'obtenir la valeur 
        return this._x
    }
    set x(value){ //permet de modifier la valeur 
        if (value < 0) 
            throw new Error ("la valeur ne peut pas être négative ")
        this._x = value; 
    }
    draw() {
        console.log('x : ' + this._x + ', y : ' + this._y);
    }
   
 }