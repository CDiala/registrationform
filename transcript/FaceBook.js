"use strict";
exports.__esModule = true;
var like_component_1 = require("./like.component");
var p = new like_component_1.LikeComponent(546, true);
p.OnClick();
console.log("LikeCount: " + p.firstCount + ", IsSelected: " + p.isButtonSelected);
