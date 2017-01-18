export default function fibonacci (n) {
let array =[0, 1]
  if(n === 0) {
    return false
  }
  if(n < 3){
    return array
  }
  for(let i = 2; i < n; i++) {
    array[i] = array[i-2] + array[i - 1]
  }
  return array
}
