

let userInput = parseInt(prompt("Enter The No of Blocks"))
console.log(userInput)



let random_number = Math.floor(Math.random() * userInput + 1 ) ;
console.log(random_number)

const divRef = document.getElementById("container")
let attempts = 0 ;


for (i=1 ; i <= userInput ; i++)
{
    const para = document.createElement("p")
    para.innerText = `${i}`

    divRef.appendChild(para)
}


    
    divRef.addEventListener("click", (e) => {
        if (attempts < 5) {
            let clickedNumber = e.target.innerText;
            attempts++;  // Increase attempt count
            
            if (clickedNumber === random_number) 
            {

                e.target.classList.add("green");
                bodyRef.style.pointerEvents = "none"; // Disable further clicks after winning
                alert(`Congrats Won The Game `)

            }
            else if (clickedNumber > random_number)
            {
                e.target.classList.add("Red");
            } 
            else 
            {
                e.target.classList.add("yellow");
            }
    
            if (attempts === 5 && clickedNumber !== random_number) {
                divRef.style.pointerEvents = "none"; 
                alert(` You Loss Game And ran out of chance`)
            }
        }
    });

    













