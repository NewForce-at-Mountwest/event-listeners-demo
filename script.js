const darkModeButton = document.querySelector("#dark-mode-button")

//console.log(darkModeButton)

darkModeButton.addEventListener("click", function(){
   // Select the form element
   const formElement = document.querySelector("form");
   // Add a class of .dark-mode to the form
   formElement.classList.toggle("dark-mode")
})


document.querySelector("#jordan-mode-button").addEventListener("click", function(){

    document.querySelector("form").classList.toggle("zoom-in")
})


// Get the values of the name and email input
const nameInput = document.querySelector("#name-input")
const emailInput = document.querySelector("#email-input")
// console.log("this should be the name input", nameInput)
// console.log("this should be the email input", emailInput)



document.querySelector("#submit-btn").addEventListener("click", function(){

    const nameValue = nameInput.value
    const emailValue = emailInput.value
    // console.log("this should be what they typed into the name input", nameValue)
    // console.log("this should be what they typed into the email input", emailValue)


    // Print those values to the DOM
    document.querySelector("#output-container").innerHTML += `<section>
        <h3>${nameValue}</h3>
        <p>${emailValue}</p>
    </section>`
})