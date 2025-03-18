
function firstNonRepeatedChar(str) {
 // Write your code 
	let map = new Map();
	for(let t of str){
		if (map.has(t)){
			let v = map.get(t)+1
			map.set(t,v)
		}
		else{
			map.set(t,1)
		}
	}
		// 	console.log( map.values())
for(let [key,value] of map){
  if(value==1){
    return key
  }
  else{
    return null;
  }
}


}
console.log(firstNonRepeatedChar("aasshh"))

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
