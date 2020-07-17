const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//show error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}


// show success
function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
}



// email validator

function validEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}





// event listner button

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // if(username.value == '') {
    //     showError(username,'Username is requered');
    // } else {
    //     showSuccess(username);
    // }


    // if(email.value == '') {
    //     showError(email,'Email is requered');
    // }else if (!validEmail(email.value)) {
    //     showError(email,'Email is not valid');
    // }
    // else {
    //     showSuccess(email);
    // };

    // if(password.value == '') {
    //     showError(password,'Password is requered');
    // } else {
    //     showSuccess(password);
    // }
    // if(password2.value == '') {
    //     showError(password2,'Confirm Password is requered');
    // } else {
    //     showSuccess(password2);
    // }



    inputCheck ([username, password, email, password2]);
    checkLength (username, 4, 20);
    checkLength (password, 4, 10);
    checkLength (password2, 4, 10);
    passwordMatch(password, password2);



});

function inputCheck(e) {
    e.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `${labelName(input)} is required`)
        }else{
            showSuccess(input);
        }
    });
};

function checkLength(e, min, max) {
    if (e.value.length < min) {
        showError(e, `${labelName(e)} should be at least ${min} characters`);
    } else if (e.value.length > max) {
        showError(e, `${labelName(e)} should be less than ${max} characters`)
    } else {
        showSuccess(e);
    }
}

function labelName(e) {
    return e.id.charAt(0).toUpperCase() + e.id.slice(1);
}


function passwordMatch(e1, e2) {
    if (e1.value !== e2.value) {
        showError(e2, 'Password do not match')
    } 
};



    
