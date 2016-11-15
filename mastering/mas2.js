var gr =[22, 22, 22, , 22];
var sum = 0;
var count = 0;

if (gr.length > 0){
    for (i = 0; i < gr.length; i++){
        if (gr[i] != undefined){
        sum += gr[i];
        count++
    }
    }
    document.write(sum/count);
}

else 
    document.write("Nothing");
