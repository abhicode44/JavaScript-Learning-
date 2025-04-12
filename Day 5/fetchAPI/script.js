fetch("https://jsonplaceholder.typicode.com/todos").then((response)=> {
    if(response.status == 200){
        return response.json()
    }
    throw new Error("Could not Fetch Data Error Occured !")
}).then((data) => {
    console.log(data);
    return "Data Fetched Succesfully"
}).then((str) => {
    console.log(str)
}).catch((err) => {
    console.log(err);
})

fetch ("https://jsonplaceholder.typicode.com/users").then((response) => {
    if (response.status == 200 ){
        return response.json()
    }
    throw new Error("Couldn't Fetch Data")
}).then((data) => {
    console.log(data);
    return "Data Fetched Succesfully"
}).then((str) => {
    console.log(str);
}).catch((err) => {
    console.log("Error Occured");
    
})