// program to find the largest among three numbers

// take input from the user
let num1 = Number(window.prompt("First Number "));
let num2 = Number(window.prompt("First Number "));
let num3 = Number(window.prompt("First Number "));

if(num1 > num2 && num1 > num3){
    window.alert(num1 + " is largest among the three number.")
}else if(num2 > num1 && num2 > num3){
    window.alert(num2 + " is largest among the three number.")
}else{
    window.alert(num3 + " is largest among the three number.")
}

// display the result here so user can see
console.log("The largest number is " + largest);