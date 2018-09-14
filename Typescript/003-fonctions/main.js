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
class Point {
    // ici le ? défini que x est optionnel
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log('x : ' + this.x + ', y : ' + this.y);
    }
    getDistance(another) {
        //get distance
    }
}
let point = new Point(14, 56);
//point.x=15;
//point.y=84;
point.draw();
