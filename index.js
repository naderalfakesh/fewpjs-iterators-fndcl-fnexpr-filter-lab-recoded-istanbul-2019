// Code your solution here
function findMatching(arr,name){
  const rule1=  name.toLowerCase()+"*";
  return arr.filter((el)=> {return el.toLowerCase() === name.toLowerCase()});
}
