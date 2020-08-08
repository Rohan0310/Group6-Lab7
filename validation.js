function validateEmail(e) {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var re = /\S+@\S+\.\S+/;

    if(re.test(email)) {
        alert("You will recieve the quote from us shortly.");
    } else {
        alert("Please enter a valid email address.");
    }
    document.getElementById("form").reset();
}

// document.getElementById("submit").addEventListener("submit", validateEmail); 