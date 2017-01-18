export default function factorial(n){

     if(typeof(n) !== 'number'){
       throw "Invalid Input"
     }
     if(n === 0){
       return 1;
     }
     return n * factorial(n-1)

     }
