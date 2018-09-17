"use strict";
exports.__esModule = true;
var like_component_1 = require("./like.component");
var l = new like_component_1.LikeComponent(25, true);
// l.onclick();
console.log("Il y a : " + l.likeCount + " likes, et le bouton est " + l.isSelected);
