class Greeting { 
    greet():void { 
       console.log("Hello World!!!") 
    } 
 } 
var obj: Greeting = new Greeting(); 
 obj.greet();

var message:string = "Hello World" 
console.log(message)

var str = "1"
var str2:number = <number> <any> str   //str is now of type number 
console.log(typeof(str2))

var num = 2;    // data type inferred as  number 
console.log("value of num "+num); 
num = 12;
console.log(num);

var j:any; 
var n:any = "a b c" 

for(j in n) {
   console.log(n[j])  
}

var count : number = 0
for(num=0;num<=20;num++) {
    if (num % 2==0) {
       continue
    }
    count++
 }

 (function () { 
    var x = "Hello!!";   
    console.log(x)     
 })()      // the function invokes itself using a pair of parentheses ()

 var num1 = new Number(7235.123456); 
 console.log(num1.toPrecision()); 
 console.log(num1.toPrecision(1)); 
 console.log(num1.toPrecision(2));

 interface Person { 
    age:number 
 } 
 
 interface Musician extends Person { 
    instrument:string 
 } 
 
 var drummer = <Musician>{} // Musician = new Musician(); 
 drummer.age = 27;
 drummer.instrument = "Drums" 
 console.log("Age:  "+drummer.age);
  console.log("Instrument:  "+drummer.instrument)

interface IParent1 { 
    v1:number 
} 
interface IParent2 { 
    v2:number 
} 
interface Child extends IParent1, IParent2 { } 

 var Iobj:Child = { v1:12, v2:23};
 console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)

 class Car { 
    //field 
    engine:string; 
  
    //constructor 
    constructor(engine:string) { 
       this.engine = engine 
       
    }  
 
    //function 
    disp():void { 
       console.log("Engine is  :   "+this.engine) 
    } 
 }

 var obj1 = new Car("Engine 1")
 obj1.disp();

 interface ILoan { 
    interest:number 
 } 
 
 class AgriLoan implements ILoan { 
    interest:number 
    rebate:number 
    
    constructor(interest:number,rebate:number) { 
       this.interest = interest 
       this.rebate = rebate 
    } 
 } 
 
 var obj2 = new AgriLoan(10,1) 
 console.log("Interest is : "+obj2.interest+" Rebate is : "+obj2.rebate )

 var person = {
    firstName:"Tom", 
    lastName:"Hanks", 
    sayHello:function() {  }  //Type template 
 } 
 person.sayHello = function() {  
    console.log("hello "+person.firstName)
 }  
 person.sayHello()

 var person1 = { 
    firstname:"Tom", 
    lastname:"Hanks" 
 }; 
 var invokeperson = function(obj: any) { 
    console.log("first name :"+obj.firstname) 
    console.log("last name :"+obj.lastname) 
 } 
 invokeperson(person1)