"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(firstCount, isButtonSelected) {
        this.firstCount = firstCount;
        this.isButtonSelected = isButtonSelected;
    }
    // OnClick() {
    //     if (this.isButtonSelected = true) {
    //         console.log('Number of likes: ' + (this.firstCount++) + 
    //         ' and button selected state = ' + this.isButtonSelected);  
    //     } else {
    //         console.log('Number of likes: ' + (this.firstCount--) +
    //         ' and button selected state = ' + this.isButtonSelected);
    //     }
    // }
    LikeComponent.prototype.OnClick = function () {
        this.firstCount += (this.isButtonSelected) ? -1 : 1;
        this.isButtonSelected = !this.isButtonSelected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
