let error=document.getElementById('errors-holder')
let result=document.getElementById('result-holder')
let submitBtn =document.getElementById("submit")
let ownPhoneCheckbox=document.getElementById("q_owns_phone")
let age=document.getElementById('q_age');

function ageChange(e){

    age = e.target.value;
    if(age>5 && age<110){
        error.innerText=""
        submitBtn.disabled=false
    }
    else if(age<5){
        error.innerText="You need to be atleast 5 years old to participate";
        submitBtn.disabled=true
    }
    else if(age>120){
        error.innerText="You need to choose correct age";
    }
    else{
        error.innerText="";
        submitBtn.disabled=false
    }
}


function handleSubmit(){
    event.preventDefault()
    if (age.value == 0) {
        error.innerText = 'Please choose age';
        return;
    }

    // error.innerText = '';

    if (ownPhoneCheckbox.checked) {
        if (age.value < 13) {
            result.innerText = 'You are too young to have a phone';
        } else {
            result.innerText = 'Use your phone in moderation';
        }
    } else {
        if (age.value < 13) {
            result.innerText = 'You will get a phone soon';
        } else {
            result.innerText = 'You should get a phone';
        }
    }
    
}