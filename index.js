let a = document.querySelector('#current');
document.write("Year: 2022 <br> Today is: Thursday <br> Date: 03.02.2022 <br> Month: February <br> Current time is : 10:32 <br>");
document.write(365*3-31*5);
document.write(" days left until the freedom!");
function divide()
{
        number1 = document.getElementById("first").value;
        number2 = document.getElementById("second").value;
        document.getElementById("res").innerHTML = number1 / number2;
}

function multiply()
{
        number1 = document.getElementById("first").value;
        number2 = document.getElementById("second").value;
        document.getElementById("res").innerHTML = number1 * number2;
}
