var grades = [80, 80, , 80];
var sum = 0;
for (index = 0; index < grades.length; index++){
    sum += grades[index];
}

document.write(sum/grades.length);
