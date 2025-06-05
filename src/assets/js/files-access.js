function checkPassword(){
    window.alert("Hello");
}

// sprawdzic na dole
var password = "12345";

function passSecure(){
    if(document.getElementById('pass1').value != password)
    {
        alert('Wrong password!');
        return false;
    }

    if(document.getElementById('pass1').value == password)
    {
        alert('Correct password!');
    }
}