var num:number = 12 //global declared
 class Numbers{
    public num1:number = 13;
  print():void{
  var num2:number = 14;
  console.log(num2)
  }

 }
 var obj = new Numbers;
 obj.print()
 console.log(obj.num1)
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