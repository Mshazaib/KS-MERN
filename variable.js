const a = 1;
console.log(a);  //output= 1
{
    const a=2;
    console.log(a); //output= 2
    
}
console.log(a);  //output= 1

let b = 3;
console.log(b); //output= 3

{
    let b= 4;
    console.log(b);  //output= 4
}
console.log(b); //output= 3

var c ="var";
console.log(c);  // output = var

var c= "let";
console.log(c);   //output = let

{
    var c = "inner-scope"
    console.log(c);
}
console.log(c);
