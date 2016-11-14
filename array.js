var food = ["pizza", "Burger", "ice-cream"];

function foods(){
    document.getElementById("display").innerHTML = food;
}

function addFood(){
    var foods = prompt("which food you want to add?");
    food[food.length] = foods;
    document.getElementById("display").innerHTML = food; 
}
