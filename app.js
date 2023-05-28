let light = parseInt(prompt("Enter Total Number of Lights"));
let lightHour = parseInt(prompt("Enter how many hours the lights are used for a day"));
let fan = parseInt(prompt("Enter Total Number of fans"));
let fanHour = parseInt(prompt("Enter how many hours the fans are used for a day"));
let ac = parseInt(prompt("Enter Total Number of ACs"));
let acHour = parseInt(prompt("Enter how many hours the ACs are used for a day"));
let fridge = parseInt(prompt("Enter Total Number of Fridges"));
let fridgeHour = parseInt(prompt("Enter how many hours the fridges are used for a day"));
let tv = parseInt(prompt("Enter Total Number of TVs"));
let tvHour = parseInt(prompt("Enter how many hours the TVs are used for a day"));

let total= ((light* lightHour* 10) + (fan* fanHour *25) + (ac * acHour * 3250) + (fridge * fridgeHour * 1200) + (tv * tvHour * 100))/1000;

let unit = parseFloat(prompt("Enter per Unit amount in Tk"));
let bill = (total * unit);

document.write("Total Electricity Per Day " + total + " Unit <br>");
document.write(`Per Day Electricity Bill is ${bill} TK`);

