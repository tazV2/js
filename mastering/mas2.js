var gr =[22, 22, 22];
var sum = 0;

if (gr.length > 0){
    for (i = 0; i < gr.length; i++){
        sum += gr[i];
    }
    document.write(sum/gr.length);
}

else 
    document.write("Nothing");
