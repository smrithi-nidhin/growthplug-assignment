
// Name and Password from the register-form
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email = document.getElementById('email');
var phone = document.getElementById('phone');

// storing input from register-form
function store() {
    localStorage.setItem('fname', fname.value);
    localStorage.setItem('lname', lname.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('phone', phone.value);

   alert("sucess")
    
}

