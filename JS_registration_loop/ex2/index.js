outterLoop: while(true){
    alert("You will now register.");
    let login = prompt("Enter login:");
    let pass = prompt("Enter password:");
    alert("You will now log in. You have 3 tries");
    let tries = 3;
    while(true){
        let checkLog = prompt("Enter YOUR login:");
        let checkPass = prompt("Enter YOUR password:");
        if((login === checkLog) && (pass === checkPass)){
            alert("Ok!");
            break outterLoop; //закончить всё и выйти из внешнего цикла
        } else {
            alert("Wrong login OR password");
            tries-=1;
        }
        if(tries<=0){
            tries = 3; //Сброс попыток в любом случае
            const yesNo = confirm("Do you want to create new user?");
            if (yesNo === true){
                break; //начать со второй строки при соглашении
            } else{
                continue; //начать с 8ой строки при отказе
            }
        }
    }
}