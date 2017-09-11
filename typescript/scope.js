var num = 12; //global declared
var Numbers = (function () {
    function Numbers() {
        this.num1 = 13;
    }
    Numbers.prototype.print = function () {
        var num2 = 14;
        console.log(num2);
    };
    return Numbers;
}());
var obj = new Numbers;
obj.print();
console.log(obj.num1);
/* var global_num = 12          //global variable
class Numbers {
   num_val = 13;             //class variable
   static sval = 10;         //static field
   
   storeNum():void {
      var local_num = 14;    //local variable
   }
}
console.log("Global num: "+global_num)
console.log(Numbers.sval)   //static variable
var obj = new Numbers();
console.log("Global num: "+obj.num_val) */ 
