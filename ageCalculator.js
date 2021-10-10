const birthYear = 1986;
let futureYear = 2030;
let ageCalculator = futureYear - birthYear;

function age() {
  let birthYear = prompt("What is your birth year?");
  if (birthYear < futureYear) {
    //alert(`${ageCalculator}`);
    alert("You can calculate  your age");
  } else if (ageCalculator < 0) {
    alert("Future year must be bigger than birth year");
  }
  //console.log(ageCalculator);
  else {
    return `You are ${ageCalculator} years old.`;
  }
  console.log(ageCalculator);
}
age();
