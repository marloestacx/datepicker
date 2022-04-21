window.onload = () => {
  const display = document.getElementById("items");

  if (display !== null) {
    getValues();
  }
};

// fill input fields
const getValues = () => {
  const display = document.getElementById("items");

  var day = localStorage.getItem("day");
  var time = localStorage.getItem("time");
  var departure = localStorage.getItem("departure");
  var arrive = localStorage.getItem("arrive");
  display.innerHTML =
    day + " om " + time + " vanaf " + departure + " naar " + arrive;
};

// save to localstorage
const saveValues = () => {
  var days = document.getElementById("days");
  var departure = document.getElementById("departure");
  var arrive = document.getElementById("arrive");
  const inputs = document.querySelectorAll("input");
  console.log(inputs);

  // save text fields
  inputs.forEach((input) => {
    localStorage.setItem(input.name, input.value);
  });

  localStorage.setItem("day", days.value);
  localStorage.setItem("arrive", arrive.value);
  localStorage.setItem("departure", departure.value);
};
