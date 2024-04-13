var submit = document.getElementById("button");
var result = document.getElementById("cnt-two");
var close = document.getElementById("close");
var grossIncome = document.getElementById("gross");
var extraIncome = document.getElementById("Extra");
var ageInput = document.getElementById("age");
var deductionAmount = document.getElementById("deduction");
var GIerr = document.getElementById("GI-err");
var GItt = document.getElementById("GI-tt");
var EIerr = document.getElementById("EI-err");
var EItt = document.getElementById("EI-tt");
var DIerr = document.getElementById("d-err");
var DItt = document.getElementById("d-tt");
var AGEerr = document.getElementById("age-err");
// var error = document.getElementById("note");
var NoTax = document.querySelector(".small");

var FinalResult = document.getElementById("medium");

function calculate() {
  let correct = "false";
  let gross = (grossIncome.value);
  var extra = (extraIncome.value);
  var age = ageInput.options[ageInput.selectedIndex].text;
  var deduction = (deductionAmount.value);

  let tax;
  let OverallIncome;
  console.log(gross);
  var GIvalue = parseInt(gross);
  var EIvalue = parseInt(extra);
  var DIvalue = parseInt(deduction);

  console.log(gross);
  //validating Gross Income
  if (gross == "") {
    GIerr.style.visibility = "visible";
    GItt.innerHTML = "Input field is mandatory";
  }
  else if (!Number.isInteger(Number(gross)) || GIvalue < 0) {
    GIerr.style.visibility = "visible";
    GItt.innerHTML = "Please enter positive numbers only";
  }
  else {
    GIerr.style.visibility = "hidden";

    //Validating Extra Income
    if (extra == "") {
      EIerr.style.visibility = "visible";
      EItt.innerHTML = "Input field is mandatory";
    }
    else if (!Number.isInteger(Number(extra)) || EIvalue < 0) {
      EIerr.style.visibility = "visible";
      EItt.innerHTML = "Please enter positive numbers only";
    }
    else {
      EIerr.style.visibility = "hidden";

      // validating Age
      if (age == "") {
        AGEerr.style.visibility = "visible";
      }
      else {
        AGEerr.style.visibility = "hidden";

        // validating Deductions
        if (deduction == "") {
          DIerr.style.visibility = "visible";
          DItt.innerHTML = "Input field is mandatory";
        }
        else if (!Number.isInteger(Number(deduction)) || DIvalue < 0) {
          DIerr.style.visibility = "visible";
          DItt.innerHTML = "Please enter positive numbers only";
        }
        else {
          DIerr.style.visibility = "hidden";


          //handling deduction amount more than gross annual Income error
          if (GIvalue < DIvalue) {
            DIerr.style.visibility = "visible";
            DItt.innerHTML = "Error:- Deduction can't be more than annual income";
          }
          else {
            DIerr.style.visibility = "hidden";


            // once all are correct , Display the final Result
            correct = "true";
          }
        }
      }
    }
  }

  switch (age) {
    case "<40":
      tax = 0.3;
      break;
    case "≥ 60":
      tax = 0.1;
      break;
    case "≥ 40 & < 60":
      tax = 0.4;
      break;

    default:
      break;
  }


  // calculation of the final amount after deduction
  OverallIncome = GIvalue + EIvalue - DIvalue;
  if (OverallIncome <= 800000) {
    NoTax.innerHTML = "No Tax is applied."
    FinalResult.innerHTML = OverallIncome;
  }
  else {
    FinalResult.innerHTML = OverallIncome - (OverallIncome - 800000) * tax;
    NoTax.innerHTML = "after tax deduction"
  }

  if (correct == "true") {
    result.style.visibility = "visible";
  }
}


function back() {
  result.style.visibility = "hidden";
}


submit.addEventListener("click", calculate);
close.addEventListener("click", back);
