var name = "Oyinkansola Alabi";

var courses = ["html", "css", "javascript", "nodejs"];

function check() {
    if (courses.length % 2 === 0) {
        let evenNumbers = 0;
        return evenNumbers;
    } else {
        let oddNumbers = 1;
        return oddNumbers;
    } 
}
var initial = check();
console.log(check);
for (var numbers = initial; numbers <= 200; numbers+= 2){
    console.log(numbers);
}