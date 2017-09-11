/*interface Anything{
first_name:string;
last_name:string;
	}// interface that describe an objects that have some fields 
function print (anything:Anything):void{
	console.log(anything.first_name);
	console.log(anything.last_name);
}
var user = { first_name: "Jane", last_name: "User" };
print(user);	
var obj:Anything = {
	first_name: "rishabh",
	last_name: "sharma"
}
console.log(obj.first_name+obj.last_name)
*/
interface ages{
	[index:number]:number
}
var agelist:ages=[1,2];
	agelist[0] = 12
	agelist[1] = 15
	console.log(agelist)