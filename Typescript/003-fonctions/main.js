"use strict";
//étape 1
// let drawpoint = (point : {x:number, y : number}) =>{
//         //dessiner le point 
//     }
// drawpoint({
//         x: 1, 
//         y: 2
//     })
//étape 2 
// interface Point { // là je crée mon propre type qui est un objet qui contient un x et un y 
//     x: number, 
//     y: number
// }
// let drawPoint = (point : Point) => { 
//     // dessiner un point 
// }
//  drawPoint({x:1,y:3}) 
//  let getDistance = (pointA : Point, pointB : Point) => {
//     // calculer la distance entre deux points 
//  }
//***********************
// Etape 3
//***********************
// // Création d'une classe 
// class Point { 
//     constructor(a: number = 10, b?: number){
//         this.a = a; 
//         this.b = b ; 
//     }
//     draw() {
//          console.log((`a : ${this.a} , b : ${this.b}`));
//     }
//     getDistance(another : Point) { 
//     }
// }
// let point = new Point(1,2); 
// // point.x = 1; 
// // point.b = 2; 
// point.draw()
// class Point {
//     // private x: number;
//     public x: number;
//     public y: number;
//     // ici le ? défini que x est optionnel
//     // constructor(x?: number, y?: number) {
//     //     this.x = x;
//     //     this.y = y;
//     // }
//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
//     draw() {
//         console.log('x : ' + this.x + ', y : ' + this.y);
//     }
//     getDistance(another: Point) {  //another necessité d'un second point pour clculer la distance
//         //get distance
//     }
//  }
//  let point = new Point(14, 56);
//  //point.x=15;
//  //point.y=84;
//  point.draw();
//  class Ligne extends Point { 
//     z: number ;
//      constructor(z: number, a?: number) {
//         super(z, a );
//      }
//  }
//  let 1 = new Ligne(1)
//  l.draw()
// //******************************* */
// // ETAPE 4
// //******************************* */
// class Point {
//     constructor(private x: number,private y?: number) {
//         this.x = x;
//         this.y = y;
//     }
//     getX() {
//         console.log(`x : ${this.x}`);
//     }
//     setX(value){
//         // this.x = z
//         // console.log(this.x);
//         if (value < 0) 
//             throw new Error ("la valeur ne peut pas être négative ")
//         this.x = value; 
//     }
//     draw() {
//         console.log('x : ' + this.x + ', y : ' + this.y);
//     }
//     getDistance(another: Point) {  //another necessité d'un second point pour clculer la distance
//         //get distance
//     }
//  }
//  let p = new Point(1,2)
// // p.x = 3;  => x est protected donc on ne peut le modifier
// // p.draw()
// // p.getX()
// p.setX(9); 
//******************************* */
// ETAPE 5
//******************************* */
class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        if (value < 0)
            throw new Error("la valeur ne peut pas être négative ");
        this._x = value;
    }
    draw() {
        console.log('x : ' + this._x + ', y : ' + this._y);
    }
    getDistance(another) {
        //get distance
    }
}
let p = new Point(1, 2);
console.log(p.x);
p.x = 10;
