function log(message) {  //declaration function
  console.log(message); //method
}
var message = "hello world"; //input
log(message); //action

// variable declaration info, var -> for global/function, let -> for local bracket/block

function doSomething() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Finally: " + i);
}

doSomething();

let count;
count = "a";
log(count); //action

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;   
const ColorBlue = 2;

enum Color { red, green, blue};
let backGroundColor = Color.red;

let msg;
msg = 'abc';
let endsWithC = (<string>msg).endsWith('c');
let alternativeWay = (msg as string).endsWith('c');
log(alternativeWay);

let drawPoint = (point: { x: number, y:number }) => {

}
drawPoint({
    x: 1,
    y: 2
});

class Point{ //class name
    x: number; //declaration properties
    y: number;

    draw() { //method
        console.log('X: '+ this.x + ', Y: ' + this.y); //action
    }

    getDistance(another: Point){ //method
        // 
    }

    let point = new Point(); //create object
    point.x = 1; //set value to properties
    point.y = 2;
    point.draw(); //call method
}