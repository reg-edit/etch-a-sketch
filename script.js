let sizeInput = document.querySelector("#sizeInput")
let sizeSubmit = document.querySelector(".sizeSubmit")
let sketchbox = document.querySelector(".sketchbox")
let reset = document.querySelector(".reset")
let squares = document.querySelectorAll(".s")




function createDivs(n) {
    for (let i = 0; i < n; i++) {
        let row = document.createElement("div")
        row.setAttribute("class", "row")
        sketchbox.appendChild(row)
        for (let j = 0; j < n; j++) {
            let square = document.createElement("div")
            square.setAttribute("class", "s")
            row.appendChild(square)
        }
    }  
    squares = document.querySelectorAll(".s")
}

function deleteDivs(parentNode) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild)
    }
}


sketchbox.addEventListener("mouseover", () => {
    for(let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", () => {
            squares[i].removeAttribute("class", "s") 
            squares[i].setAttribute("class", "pendown")
        })
    }
})




/* Reset */
reset.addEventListener("click", () => {
    for(let i = 0; i <squares.length; i++) {
        squares[i].removeAttribute("class", "pendown")
        squares[i].setAttribute("class", "s")
    }
})


/* Change Size */
sizeSubmit.addEventListener("click", () => {
    if ((sizeInput.value >= 1) && (sizeInput.value <= 100)) {
        deleteDivs(sketchbox)
        createDivs(sizeInput.value)
        
    }
    else {
        alert("Please enter a valid number between 1 and 100")
    }    
})


createDivs(64)