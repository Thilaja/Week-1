var Name,Roll,F1,F2,Total
mName = prompt("Enter the name : ")
Roll = prompt("Enter the Roll Number : ")
F1 = parseInt(prompt("Enter First Number : "))
F2 = parseInt(prompt("Enter Second Number : "))
Total = F1 + F2

document.getElementById('h1').innerHTML="My Name is          : "+mName;
document.getElementById('h2').innerHTML="My Roll Number is   : "+Roll;
document.getElementById('h3').innerHTML="My First Number is  : "+F1;
document.getElementById('h4').innerHTML="My Second Number is : "+F2;
document.getElementById('h5').innerHTML="Total is            : "+Total;