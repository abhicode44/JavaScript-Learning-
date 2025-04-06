// console.log("Welcome to Javascript")
// alert("Hey Abhishek")

// while (true ){
//     let res = prompt("Enter a number ")
// if (res % 2 == 0)
//     {
//         alert("Give Number is Even")

//     }
// else{
//     alert("Give Number is Odd")
// }

// var c = confirm("Do you want to continue ?")

// if (c == false){
//     break
// }
// }


// var a = "Abhishek"
// function demo () 
// {
//     let a = 10
//     console.log(a)
// }
// console.log(a)

// demo()



let number = 10 
console.log( "First" + typeof(number) )

number = "Abhishek"
console.log("Second" + typeof(number))


const a = "Abhishek"
console.log( "Third " + typeof(a))


let email = "abhishek@gmail.com"
console.log(email)

let emailArray = email.split("@")
console.log("Using Split" + ":- " + emailArray)

const domain = emailArray[0]
console.log("Using Array Index Access" + ":- " +  domain)

console.log("Using Substring" +  " :- " + email.substring(email.indexOf("@")+1,2))

console.log("Using Slice" + ":- " + email.slice(email.indexOf("@")+1,14))


let arr = ["Dhoni" , "Virat" , "Rohit" , "Hardik" , "kuldeep"]
console.log(arr)

arr.push("Bhaji")
console.log(arr)

arr.pop()
console.log(arr)

arr.reverse()
console.log(arr)

