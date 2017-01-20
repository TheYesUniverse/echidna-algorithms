const collatz = (start) => {

  let array = []

  const collatzConj = (n) => {
    if(typeof(n) !== 'number'){
      throw "InvalidInput"
    }
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
    collatzConj(n)
  }
  collatzConj(start)
  return array
}
export default collatz
