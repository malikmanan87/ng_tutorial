function log(message) {
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
var count;
count = "a";
log(count); //action
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
var backGroundColor = Color.red;
var msg;
msg = 'abc';
var endsWithC = msg.endsWith('c');
var alternativeWay = msg.endsWith('c');
log(alternativeWay);
var drawPoint = function (point) {
};
drawPoint({
    x: 1,
    y: 2
});
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // 
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
