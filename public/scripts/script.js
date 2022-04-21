window.onload = () => {
  const display = document.getElementById("items");

  if (display !== null) {
    getValues();
  }
};

// fill input fields
const getValues = () => {
  const display = document.getElementById("items");

  var day = localStorage.getItem("days");
  var time = localStorage.getItem("time");
  display.innerHTML = day + " om " + time;
};

// save to localstorage
const saveValues = () => {
  var days = document.getElementById("days");
  const inputs = document.querySelectorAll("input");
  console.log(inputs);

  // save text fields
  inputs.forEach((input) => {
    localStorage.setItem(input.name, input.value);
  });

  localStorage.setItem("days", days.value);
};
