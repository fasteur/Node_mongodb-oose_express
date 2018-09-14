var chiffre;
// chiffre = 'Anissa'; 
var prenom;
var isFriday;
var nom = "Belkheir";
var chaine;
chaine = 123;
chaine = "Anissa"; // varibale de type "any" donc on peut mettre ce que l'on veut mais ce n'est pas conseillé, conseil : "typer vos variables"
var maVar;
var monArray; // on doit choisir si mon array contiendra du string ou des numbers
// monArray = ["Anissa", 123];
monArray = ["Anissa", "Gilles"];
(function () {
    let monArray2; // Là on peut mettre n'importe quoi dedans et ça passe! 
    monArray2 = [123, true, 'Anissa'];
    const ColorRed = 0;
    const ColorGreen = 1;
    const ColorBlue = 2;
    // enum Color { Red, Green, Blue }; 
    let Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
        Color[Color["Yellow"] = 4] = "Yellow";
    })(Color || (Color = {}));
    ;
    let bgColor = Color.Red;
    console.log(bgColor);
    console.log(Color);
    // si bgColor == 0 --> #ff0000;
    let message;
    message = 'abc';
    // définir le type d'une variable permet d'accéder à toutes les méthodes propres au type 
    let endsWithC = message.endsWith('c');
    console.log(endsWithC);
    let alternative = message.endsWith('c');
})();
let message;
message = 'abc';
// définir le type d'une variable permet d'accéder à toutes les méthodes propres au type 
let endsWithC = message.endsWith('c');
console.log(endsWithC);
let alternative = message.endsWith('c');
