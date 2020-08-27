var signUpForm = document.getElementById("signUpForm") ; 
var signUpFeilds = document.querySelectorAll("input")
console.log(signUpFeilds)
signUpForm.addEventListener("submit", validateSubmittedForm)

// If any field is empty or have only spaces
// show an error msg 
function validateSubmittedForm(event){

    signUpFeilds.forEach(function isItValid(field){
        event.preventDefault() ; 
        if(!(field.value.trim.length >0)){
            field.classList.add("is-invalid");
            field.insertAdjacentHTML("afterend" , 
            `<div id="" class="invalid-feedback">
            Please provide a valid ${field.placeholder}.
          </div>`)
        }
    })


}