let age = 15;

if (age <= 17) {
  console.log("Underage");
} else {
  console.log("18 or over");
}

if (age <= 17) {
  console.log("Underage");
} else if (age <= 65) {
  console.log("Insurable");
} else {
  console.log("out of range");
}

age <= 17 ? console.log("Underage") : console.log("18 or over");

let name = "billy";
switch (name) {
  case "mike":
    console.log("Mike Switch");
    break;
  case "jim":
    console.log("jim Switch");
    break;
  default:
    console.log("anyone else Switch");
}

switch (age) {
  case 15:
    console.log("Underage Switch");
    break;
  case 17:
    console.log("17 Switch");
    break;
  default:
    console.log("anyone other age Switch");
}
