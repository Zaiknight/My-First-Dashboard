function store() {
    class User {
        constructor(email, name, password) {
            this.email = email;
            this.name = name;
            this.password = password;
        }
    }
    const email = document.getElementById('email').value;
    const pw = document.getElementById('pw').value;
    const pwC = document.getElementById('pwC').value;
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;

    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;

    let userList = JSON.parse(localStorage.getItem("all_users")) || [];

    if (!email) {
        alert('Please fill in email');
    } else if (!pw) {
        alert('Please fill in password');
    } else if (pw !== pwC) {
        alert('Passwords are not the same');
    } else if (pw.length < 8) {
        alert('Minimum 8 characters required.');
    } else if (!pw.match(numbers)) {
        alert('Please add 1 number');
    } else if (!pw.match(upperCaseLetters)) {
        alert('Please add 1 uppercase letter');
    } else if (!pw.match(lowerCaseLetters)) {
        alert('Please add 1 lowercase letter');
    } else if (userList.some(user => user.email === email)) {
        alert("Account already exists");
    }else {
        const newUser = new User(email, `${fname} ${lname}`, pw);
        userList.push(newUser);
        localStorage.setItem('all_users', JSON.stringify(userList));
        alert('Your account has been created');
    }
}
function setCookie(cname, cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";"+ expires + ";path=/";
}

function check() {
    const userList = JSON.parse(localStorage.getItem("all_users")) || [];
    const useremail = document.getElementById('userEmail').value;
    const userPw = document.getElementById('pw').value;

    if (useremail === '' || userPw === '') {
        alert('Please enter your details.');
        return;
    }

    const foundUser = userList.find(user => user.email === useremail && user.password === userPw);
    
    if (foundUser) {
        console.log('You are logged in.');
        setCookie("CurrentName",JSON.stringify(foundUser.name),1);
        setCookie("CurrentUser",JSON.stringify(foundUser),1);
        login = true;
        window.location.replace("index.html");
    } else {
        alert('Account not found');
    }
}

function deleteCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function logout() {
    console.log('Logout Detected');
    deleteCookie("CurrentUser");
    deleteCookie("CurrentName");
    login = false;
    window.location.replace("login.html");
}
