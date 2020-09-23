/* function log(str) {
    console.log(str);   
}

log('hello'); */
 
function DisplayResult() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}

//DisplayResult();

/*type annotation: this has to do with specifying the 
type of a variable. usually used when the value of the
variable is unknown. Example is seen below */
let a: string;
let salary: number;
let c: number[];
let d = [1, 2.2, 5];


//working with enums
enum Color {Red, Blue, Yellow};
let myColor = Color.Red;
console.log('Hair color: ' + Color.Blue);

//or

enum ShoeSize {S = 0, M = 1, L = 2, XL = 3};
console.log('Available shoe size: ' + ShoeSize.M)


/*type assertions: used to tell typescript
the type of a variable, in order to be able to 
access its intellisence. for example.
*/
let k;
k = 'efwa2ub';
let lastString = (k as string).endsWith('j');
let firstString = (<string>k).startsWith('a');




//writing functions using arrow function:
//default function syntax: 
//let test = function (message) {
//     '''do something here;
// }
//arrow function syntax: 
//let test = (message) => {
//     '''do something here;
// }
//or

let huu = (message) => {
    console.log(message);
}

//or
let huu1 = (msg) => console.log(msg);

//or
let huu2 = () => console.log();


huu('efee');




//INTERFACES
//used to declare related variables and functions, 
//however the function doesn't have any logic, as they 🚡 
//implemented elsewhere. E.g
interface Car {
    Model: string,
    Color: string,
    YOM: number,
    Speed: string,
    OnSale: boolean,

    MyCarInfo: () => void
}

let car: Car = {
    Color: 'Ash',
    Model: 'Ferrari',
    OnSale: false,
    Speed: '105 km/hr',
    YOM: 2015,
    // MyCarInfo: () => console.log('The ' + car.YOM + ' ' + car.Model)
    MyCarInfo() {
        console.log('The ' + car.YOM + ' ' + car.Model)
    }
}


car.MyCarInfo();


//class
class ThatCar {
    Model: string;
    Color: string;
    YOM: number;
    Speed: string;
    OnSale: boolean;

    GetCarInfo = () => {
        console.log('The ' + TheCar.YOM + ' ' + TheCar.Model);
    }
}

let TheCar = new ThatCar();
TheCar.Color = 'Grey';
TheCar.Model = 'Toyota Corona';
TheCar.OnSale = true;
TheCar.Speed = '250 km/hr';
TheCar.YOM = 2018

TheCar.GetCarInfo();

