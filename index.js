// Code your solution here
function findMatching(arr,name){
  return arr.filter((el)=> {return el.toLowerCase() === name.toLowerCase()+"*"});
}
