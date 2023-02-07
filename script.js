let sizeInput = document.querySelector("#sizeInput")
let sizeSubmit = document.querySelector(".sizeSubmit")
let sketchbox = document.querySelector(".sketchbox")
let reset = document.querySelector(".reset")
let squares = document.querySelectorAll(".s")
let rgb = document.querySelector(".RGB")
let greyScale = document.querySelector(".greyscale")
let black = document.querySelector(".black")



function createDivs(n) {
    for (let i = 0; i < n; i++) {
        let row = document.createElement("div")
        row.setAttribute("class", "row")
        sketchbox.appendChild(row)
        for (let j = 0; j < n; j++) {
            let square = document.createElement("div")
            square.setAttribute("class", "s")
            square.style.backgroundColor = "white"
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
            if (rgb.value === "on") {
                squares[i].style.backgroundColor = ("#" + Math.floor(Math.random()*16777215).toString(16))
            }
            else if (greyScale.value ==="on") {
                
            }

            else {
                squares[i].style.backgroundColor = "black"
            }

        })
    }
})
/
/* Black Button */
black.addEventListener("click", () => {
        greyScale.value = "off"
        rgb.value = "off" 
})

/* Greyscale Button */
greyScale.addEventListener("click", () => {
    if (greyScale.value === "off")
        rgb.value = "off"
        greyScale.value = "on" 
})

/* RGB Button */
rgb.addEventListener("click", () => {
    if (rgb.value === "off")
        greyScale.value = "off"
        rgb.value = "on" 
})


/* Reset Button */
reset.addEventListener("click", () => {
    for(let i = 0; i <squares.length; i++) {
        squares[i].style.backgroundColor = "white"
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


createDivs(30)
