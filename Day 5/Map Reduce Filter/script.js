console.log("This is a Map Method");
const numbers = [1,2,3,4]

const doubled = numbers.map(num => num * 2 )
console.log(doubled);

console.log("This is a Filter Method");

const number = [1,2,3,4,5,6,7,8,9,10]

const double = number.filter(num => num % 2 === 0)

console.log(double);


console.log("This is a Reduce Method");

const digit = [1,2,3,4]

const sum = digit.reduce((accumalator , currentvalue) => accumalator + currentvalue , 0)
console.log(sum);
