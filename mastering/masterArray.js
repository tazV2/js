var computers = ["laptop", "Desktop"];

function others(){
    document.getElementById("things").innerHTML = computers;
}

function addComputers(){
    var newDiv = prompt("Any new device?");
    computers[computers.length] = newDiv;
    document.getElementById("things").innerHTML = computers;
}
