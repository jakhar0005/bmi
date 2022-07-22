function selectOption() {
  var e = document.getElementById("option");
  var strUser = e.options[e.selectedIndex].text;
  var height = document.getElementById("heighth");
  var weight = document.getElementById("weighth");

  if (strUser == "Metric") {
    weight.innerHTML = "Weight in kilograms.";
    height.innerHTML = "Height in centimeters. ";
  } else if (strUser == "Imperial") {
    weight.innerHTML = "Weight in lbs. ";
    height.innerHTML = "Height in inches.";
  }
}
function bmi() {
  var e = document.getElementById("option");
  var strUser = e.options[e.selectedIndex].text;
  if (strUser == "Metric") {
    var h = document.getElementById("theight").value;
    var w = document.getElementById("tweight").value;
    if (h == "" || w == "") {
      alert("Weight and height can't be empty and should be number only");
      return false;
    }
    if (h < 20 || h > 260) {
      alert("Height must be in between 20-260 cm");
      return false;
    }
    if (w < 1 || w > 500) {
      alert("Weight must be in between 1-500 kg");
      return false;
    }

    var bmi = w / (((h / 100) * h) / 100);
    var total = bmi.toFixed(2);
    document.getElementById("result").innerHTML = "Your BMI is " + total;
  } else if (strUser == "Imperial") {
    var h = document.getElementById("theight").value;
    var w = document.getElementById("tweight").value;
    if (h == "" || w == "") {
      alert("Weight and height can't be empty and should be number only");
      return false;
    }
    if (h < 10 || h > 105) {
      alert("Height must be in between 10-105 inches");
      return false;
    }
    if (w < 1 || w > 1400) {
      alert("Weight must be in between 1-1400 pounds");
      return false;
    }

    var bmi = (w * 703) / (h * h);
    var total = bmi.toFixed(2);
    document.getElementById("result").innerHTML = "Your BMI is " + total;
  }
}
