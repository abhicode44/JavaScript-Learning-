const getTodos = (link , callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener("readystatechange" , () => {
    if(request.readyState == 4  && request.status == 200){
        const data = (request.responseText)
        callback(data)
    }
    else if (request.readyState == 4 ) {
        const data = (request.responseText)
        callback(undefined)
    }
})

request.open("Get" , link )
request.send()
}




var url1 = "https://jsonplaceholder.typicode.com/todos"
var url2 = "https://jsonplaceholder.typicode.com/users"

getTodos(url1 , (data) => {
    if (data) {
        console.log(data)
        getTodos (url2 , (data) => {
            if (data) {
                console.log(data);
                
            }
            else{
                console.log(Error);
            }
        })
    }
    else{
        console.log(Error);
        
    }
})