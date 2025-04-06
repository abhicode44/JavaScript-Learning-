// function login (email , password , callback ) {
//     setTimeout(()=> {
//         if (email == "a@123" && password =="123"){
//             callback(email)
//         }
//     },2000)
// }

// function getVideos (cb) {
//     setTimeout(()=>{
//         cb(console.log(["Abhishek" , "Chudasama"]))
//     },3000)
// }

// login( "a@123"  , "123", (email)=> {
//     console.log("Login Succesfully" + " " + email)
//     getVideos( (videos) => {
//         console.log(videos)
//     });
// })



// let  getPromise = (percentage) =>{return new Promise ( (resolve , reject) => {
//     setTimeout((percentage) => {
//         if (percentage > "85"){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     },2000)
// })} 

// getPromise("75").then((percentage) => {
//     console.log("Your Scored Above then 85 % you will get Bike")
// }).catch((percentage) =>{
//     console.log("Your Scored Below then 85 % you will get cycle")
// })

var getVideos=(email)=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email) {
                resolve(["Abhishek", "Aritra"])
            }
            else {
                reject()
            }
        }, 3000)

    })
}

let getLogin = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout( ()=> {
            if (email == "a@123", password == "123") {
                resolve(email)
            }
            else {
                reject(email)
            }
        } , 2000)
        
    })
}

var getVideosDetails = (videos) => {
    return new Promise( (resolve , reject ) => {
        setTimeout( () => {
            if (videos) {
                resolve(videos[0])
            }
            else{
                reject()
            }
        } , 4000)
    })
}





// getLogin("a@123", "123").then((email) => {
//     console.log("Login Succesfully ")
//     console.log(`Username :- ${email} `)
//     return getVideos(email)
// }).then((videos) => {
//     console.log(videos)
//     return getVideosDetails(videos)
// }).then( (videos) => {
//     console.log(videos)
// })
// .catch(() => {
//         console.log("Login Falied")
//     })


var doOperations = async () => {

    var credinetials = await getLogin("a@123" , "123" )
    console.log("Login Succesfully ")
    console.log(`Username :- ${credinetials} `)

    var videosarray = await getVideos(credinetials)
    console.log(videosarray)

    var Details = await getVideosDetails(videosarray)
    console.log(Details)

}

doOperations()