var Greeting = (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello world !!!");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
