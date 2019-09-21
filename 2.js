/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
C#, VB, Perl, Swift, Prolog, Javascript, Pascal, HTML, CSS, JS
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
function is_email_valid(email) {
    var test = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return test.test(String(email).toLowerCase());
}

function is_phone_valid(phone){
    var test = /^[+62][0-9_]{8,15}$/;
    return test.test(String(phone));
}

function is_username_valid(username){
    var test = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*@).*$/;
    return test.test(String(username));
}


function is_password_valid(password){
    var test = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*@).*$/;
    return test.test(String(password));
}

print(is_email_valid('dianeka.pertiwi97@gmail.com'));
print(is_phone_valid('+6288225105791'));
print(is_username_valid('@wakwaw'));
print(is_username_valid('poEtri'));
print(is_username_valid('tiara'));
print(is_password_valid('p@ssW0rd99'));
print(is_password_valid('C0d3YourFuture!#'));
