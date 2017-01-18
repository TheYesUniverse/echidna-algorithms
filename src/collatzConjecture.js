function collatzConjecture (n){

  let array = []
  function collatz(n){


    array.push(n)

    if(n === 1){
      return 1
    }
    if(n % 2 != 0){
      n = (n * 3) + 1
      array.push(n)
    }
    if(n % 2 === 0){
      n = n /2
    }

    collatz(n)


    return array
  }
}
export default collatzConjecture 
