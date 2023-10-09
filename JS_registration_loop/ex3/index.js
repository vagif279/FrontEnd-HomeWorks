/*
Регистрация (сложность 5)
1) Пользователь при заходе на сайт видит уведомление (alert) о том что щас он должен зарегистрироваться
2) Он должен ввести логин и пароль
3) Пользователю показывается уведомление (alert) о том что щас он должен авторизоваться
4) Он должен заново ввести пароль и логин
    4.1) Если он правильно ввёл свои данные, т.е. те же данные что и при регистрации то ему показывается уведомление (alert) о том что всё окей
    4.2) Если у него будет ошибка в логине или в пароле то уведомление (alert) о том что он неправильно ввёл логин или пароль
5) С 4-ого пункта должно повторяться пока не будут введены верные данные (максимум повторов 3)
6) После 3-ей неудачной попытки предложить создать нового пользователя и зайти заново
    6.1) Если будет отказано то предложить сбросить пароль
        6.1.1) Если будет отказано то вернуться к пункту 4 и сбросить количество неудачных попыток
        6.1.2) Если будет принято то пункт 7
    6.2) Если будет принято то вернуться к пункту 1 и сбросить количество неудачных попыток
7) Если был выбран сброс пароля то пароль надо сбрасывать с помощью логина
    7.1) Если такого логина не существует, то показать уведомление о том, что такого логина не существует и предложить создать пользователя
        7.1.1) Если будет отказано то возвращаемся на 7-ой пункт
        7.1.2) Если будет принято то возвращаемся на 1-ый пункт
*/
outterLoop: while(true){ 
    alert("You will now register."); //ПУНКТ 1
    let login = prompt("Enter login:");
    let pass = prompt("Enter password:");
    let tries = 3;
    innerLoop: while(true){
        alert("You will now log in. You have "+tries+" tries");
        let checkLog = prompt("Enter YOUR login:"); //ПУНКТ 4
        let checkPass = prompt("Enter YOUR password:");
        if((login === checkLog) && (pass === checkPass)){ 
            alert("Ok!"); //Всё верно
            break outterLoop; //Закончить всё и выйти из внешнего цикла
        } else {
            alert("Wrong login OR password");
            tries-=1;
        }
        if(tries<=0){ //ПУНКТ 6
            tries = 3; //Сброс попыток происходит в любом случае
            let yesNo = confirm("Do you want to create NEW user?");
            if (yesNo === true){
                break innerLoop; //пункт 6.2
            } else{
                yesNo = confirm("Do you want to RESET password?"); //пункт 6.1
                if(yesNo === false){
                    continue; //пункт 6.1.1
                } else{ //пункт 6.1.2
                    let resetLog = prompt("Enter your LOGIN to RESET its password"); //ПУНКТ 7
                    if(resetLog!==login){
                        yesNo = confirm("There is no such login. Do you want to create such user?"); //пункт 7.1
                        if(yesNo == false){
                            continue; //пункт 7.1.1
                        } else{
                            break innerLoop; //пункт 7.1.2
                        }
                    } else{
                        pass = prompt("Enter NEW password for your '"+resetLog+"' login:");
                        continue;
                    }
                }
            }
        }
    }
}