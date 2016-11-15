var name = prompt("what is your name?");

if (name.length != 0){
    if (name == "taz" || name == "Taz")
        document.write("Welcome Master " + name);
    else
        document.write("Welcome  " + name);
    }

else
    document.write("Do you have any name?");
