alert("You will now register.");
const login = prompt("Enter login:");
const pass = prompt("Enter password:");
alert("You will now log in.");
while(true){
    const checkLog = prompt("Enter YOUR login:");
    const checkPass = prompt("Enter YOUR password:");
    if((login === checkLog) && (pass === checkPass)){
        alert("Ok!");
        break;
    } else {
        alert("Wrong login OR password");
    }
}