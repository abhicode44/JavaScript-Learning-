//Normal Function 

// function greet(Firstname , LastName) {
//     console.log("Welcome" + " " + Firstname + " " + LastName)
// }

// greet("Abhishek" , "Chudasama")


//Anomyous Function
// const welcome = function (Firstname) {
//     console.log("Welcome Back" + " " + Firstname)
// }

// welcome("Abhishek")


// Arrow Function 
// const greet2 = (name) => { return name}
// greet2(console.log("Abhishek"))

//CallBack Function 

// const func1 = (callback) => {
//     console.log("Function 1 calling First")
//     callback()
// }

//func1 ( () => {console.log("Function 2 calling second")})


// const demogreet =  (callback) => {
//     console.log("Inside Function calling")
//     callback(20)
// }

//demogreet( (value) => {console.log(value)})

// Dom

// let students = ["Abhishek", "Paritosh", "Dev", "Shubham"];

// const bodyRef = document.querySelector("body");

// const h1Element = document.createElement("h1");
// h1Element.innerText = "Hello Everyone ";

// const p2Element = document.createElement("p");
// p2Element.innerText = "Student List";

// const ulElement = document.createElement("ul");

// students.forEach((student, index) => {
//     const liElement = document.createElement("li");
//     liElement.innerText = `${index + 1}. ${student}`;
//     ulElement.appendChild(liElement);
// });




// bodyRef.appendChild(h1Element);
// h1Element.appendChild(p2Element);
// bodyRef.appendChild(ulElement);
// bodyRef.appendChild(newh1Element);


// let tasks = []
// let completedtask = []

// const uiElement = document.querySelector(".tasklist ul");
// const inputRef = document.querySelector("input");



// function addTask() {
//     let text = inputRef.value.trim();
//     if (text === "") {
//         alert("Task cannot be empty!");
//         return;
//     }
//     if (tasks.includes(text)) {
//         alert("Task already exists!");
//         return;
//     }
//     tasks.push(text);
//     inputRef.value = "";
//     DisplayTask();
// }


// function DisplayTask () {

//     uiElement.innerHTML = "";  //clear ui

//     tasks.forEach((task,index) => {
//         const li = document.createElement("li");
//         li.classList.add('spanclass') //give a name to class
//         li.innerText = `${task}`;

//         const span = document.createElement("span");
        
        

//         const completeBtn = document.createElement("button");
//         completeBtn.innerText = "  Completed Task";
//         completeBtn.style.backgroundColor = "green";
//         completeBtn.style.color = "white";
//         completeBtn.style.marginRight = "5px";
//         completeBtn.onclick = (e) => {
//             completedtask.push(task)
//             e.target.parentElement.parentElement.remove()
//             tasks.splice(index,1)
//             //tasks.indexOf(task).remove()
//             DisplayCompletedTask ()
            
            

//         }

//         const RemoveBtn = document.createElement("button");
//         RemoveBtn.innerText = " Remove Task";
//         RemoveBtn.style.backgroundColor = "red";
//         RemoveBtn.style.color = "white";
//         RemoveBtn.addEventListener('click',(e) => {
//             e.target.parentElement.parentElement.remove()
//             tasks.splice(index,1)
//             DisplayTask()
//         })

//         span.appendChild(completeBtn);
//         span.appendChild(RemoveBtn);
//         li.appendChild(span)
//         uiElement.appendChild(li);

//     })
// }


// const uiElement1 = document.querySelector(".completedlist ul")

// function DisplayCompletedTask () {

//     uiElement1.innerHTML = "";

    

//     completedtask.forEach((completetask , index)=> {
//         const li1 = document.createElement("li");
//         li1.innerText = `${completetask}`;

//         const span1 = document.createElement("span");

//         const DeleteBtn = document.createElement("button");
//         DeleteBtn.innerText = " Delete Task";
//         DeleteBtn.style.backgroundColor = "red";
//         DeleteBtn.style.color = "white";
//         DeleteBtn.onclick = (e) => {
//             e.target.parentElement.parentElement.remove()
//             completedtask.splice(index,1)
//         }

//         span1.appendChild(DeleteBtn)
//         li1.appendChild(span1)
//         uiElement1.appendChild(li1)
        
        
        
//     })
// }

// console.log(tasks)
// console.log(completedtask)


let tasks = [];
let completedTasks = [];

const taskListElement = document.querySelector(".tasklist ul");
const completedListElement = document.querySelector(".completedlist ul");
const inputRef = document.querySelector("input");

function addTask() {
    let text = inputRef.value.trim();
    if (text === "") {
        alert("Task cannot be empty!");
        return;
    }
    if (tasks.includes(text)) {
        alert("Task already exists!");
        return;
    }
    tasks.push(text);
    inputRef.value = "";
    displayTasks();
}

function displayTasks() {
    taskListElement.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerText = task;

        const buttonGroup = document.createElement("span");

        const completeBtn = document.createElement("button");
        completeBtn.innerText = "Completed";
        completeBtn.style.backgroundColor = "green";
        completeBtn.style.color = "white";
        completeBtn.onclick = () => {
            completedTasks.push(task);
            tasks.splice(index, 1);
            displayTasks();
            displayCompletedTasks();
        };

        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.style.backgroundColor = "red";
        removeBtn.style.color = "white";
        removeBtn.onclick = () => {
            tasks.splice(index, 1);
            displayTasks();
        };

        buttonGroup.appendChild(completeBtn);
        buttonGroup.appendChild(removeBtn);
        li.appendChild(buttonGroup);
        taskListElement.appendChild(li);
    });
}

function displayCompletedTasks() {
    completedListElement.innerHTML = "";

    completedTasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerText = task;

        const buttonGroup = document.createElement("span");

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.style.backgroundColor = "red";
        deleteBtn.style.color = "white";
        deleteBtn.onclick = () => {
            completedTasks.splice(index, 1);
            displayCompletedTasks();
        };

        buttonGroup.appendChild(deleteBtn);
        li.appendChild(buttonGroup);
        completedListElement.appendChild(li);
    });
}
