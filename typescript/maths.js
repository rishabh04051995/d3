var maths = (function () {
    function maths() {
    }
    maths.prototype.add = function (a, b) {
        var sum = a + b;
        return sum;
    };
    return maths;
}());
var obj = new maths();
var x = obj.add(4, 5);
console.log(x);
/*class Greeting {
   greet():void {
      console.log("Hello World!!!")
   }
}
var obj = new Greeting();
obj.greet();*/ 
