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

//keys
document.onkeydown = function keyPress(event) {
  if (event.key == "j" || event.key == "ArrowDown") {
    const focused = document.querySelector(":focus");
    if (!focused) {
      document.querySelector("select:first-of-type").focus();
    } else {
      if (focused.id == "departure") {
        document.getElementById("arrive").focus();
      } else if (focused.id == "arrive") {
        document.getElementById("days").focus();
      } else if (focused.id == "days") {
        document.getElementById("time").focus();
      } else if (focused.id == "time") {
        document.getElementById("save").focus();
      }
    }
  } else if (event.key == "k" || event.key == "ArrowUp") {
    const focused = document.querySelector(":focus");
    if (!focused) {
      document.querySelector("select:first-of-type").focus();
    } else {
      if (focused.id == "departure") {
        console.log("test2");
        document.getElementById("time").focus();
      } else if (focused.id == "arrive") {
        document.getElementById("departure").focus();
      } else if (focused.id == "days") {
        document.getElementById("arrive").focus();
      } else if (focused.id == "time") {
        {
          document.getElementById("days").focus();
        }
      } else if (focused.id == "save") {
        document.getElementById("time").focus();
      }
    }
  }
};

// dropdown
function changePlaceA() {
  if (document.getElementById("departure").value == "Amsterdam")
    document.getElementById("arrive").value = "Eindhoven";
  else if (document.getElementById("departure").value == "Eindhoven")
    document.getElementById("arrive").value = "Amsterdam";
}

function changePlaceB() {
  if (document.getElementById("arrive").value == "Eindhoven")
    document.getElementById("departure").value = "Amsterdam";
  else if (document.getElementById("arrive").value == "Amsterdam")
    document.getElementById("departure").value = "Eindhoven";
}
