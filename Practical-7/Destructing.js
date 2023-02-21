let myNumbers = [1, 2, 3, 4];
let [firstNum, secondNum, thirdNum, fourthNum] = myNumbers;

console.log(firstNum);
console.log(secondNum);
console.log(thirdNum);
console.log(fourthNum);

let obj = {
	name: "Darsh",
	add: {
		country: "India",
		state: {
			pincode: "388421",
			article: {
				topic: "destructuring"
			}
		}
	}
}

let { name } = obj;
console.log(name)

let { add: { country: abcd } } = obj
console.log(abcd)

let { add: { state: { pincode: cd } } } = obj
console.log(cd)

let { add: { state: { article: { topic: ef } } } } = obj
console.log(ef);

