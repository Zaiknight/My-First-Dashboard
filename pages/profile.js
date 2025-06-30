const userList = JSON.parse(localStorage.getItem("all_users")) || [];
console.log(userList);

function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookie(cname, cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";"+ expires + ";path=/";
}

function deleteCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function changeName(func) {
    const currentName = getCookie("CurrentName");
    console.log("Current user from cookie:", currentName);
    let newName = document.getElementById("newName").value; 
    let newEmail = String(document.getElementById("newEmail").value);
    console.log(newEmail)
    if (newName === "") {
        console.log("Add name");
        return;
    }

    let currentIndex = -1;

    for (let i = 0; i < userList.length; i++) {
        if (`"${userList[i].name}"` == currentName) {
            currentIndex = i;
            console.log(currentIndex);
            break;
        }
    }

    if (currentIndex !== -1) {
        userList[currentIndex].name = newName;
        userList[currentIndex].email = String(newEmail);
        localStorage.setItem("all_users", JSON.stringify(userList));
        deleteCookie(currentName);
        setCookie("currentName", JSON.stringify(newName), 1);
        func();
    } else {
        console.log("User not found!");
    }
}


function changePassword(logout){
    const currentName = getCookie("CurrentName");
    console.log("Current user from cookie:", currentName);
    let oldPass = String(document.getElementById("oldPassword").value); 
    let newPwd = String(document.getElementById("newPass").value);    
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;

    let currentIndex = -1;

    for (let i = 0; i < userList.length; i++) {
        if (`"${userList[i].name}"` == currentName) {
            currentIndex = i;
            break;
        }
    }
    if (currentIndex !== -1) {
        if(oldPass !== "" || newPwd !== ""){
            if (newPwd.length < 8) {
                console.log('Minimum 8 characters required.');
            } else if (!newPwd.match(numbers)) {
                console.log('Please add 1 number');
            } else if (!newPwd.match(upperCaseLetters)) {
                console.log('Please add 1 uppercase letter');
            } else if (!newPwd.match(lowerCaseLetters)) {
                console.log('Please add 1 lowercase letter');
            }else{
                userList[currentIndex].password = newPwd;
                localStorage.setItem("all_users", JSON.stringify(userList));
                logout();
            }
        }else{
            console.log("Enter a valid Password")
        }
    } else {
        console.log("User not found!");
    }
}

