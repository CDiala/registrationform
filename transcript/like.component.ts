export class LikeComponent {
    constructor(public firstCount: number, public isButtonSelected: boolean ) { 

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

    OnClick() {
        this.firstCount += (this.isButtonSelected) ? -1 : 1;
        this.isButtonSelected = !this.isButtonSelected;
    }
}

