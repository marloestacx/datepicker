window.onload = () => {
  const display = document.getElementById("items");

  if (display !== null) {
    getValues();
  }
};

//time +1 hour
let now = new Date(Date.now() + 1 * (60 * 60 * 1000));

if (
  window.location.pathname === "/train" ||
  window.location.pathname === "/trainwork"
) {
  document.getElementById("time").value = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

// fill input fields
const getValues = () => {
  const display = document.getElementById("items");

  var day = localStorage.getItem("day");
  var time = localStorage.getItem("time");
  var departure = localStorage.getItem("departure");
  var arrive = localStorage.getItem("arrive");
  display.innerHTML =
    "<h2>" +
    day +
    " om " +
    time +
    " vanaf " +
    departure +
    " naar " +
    arrive +
    "</h2>";
};

// save to localstorage
const saveValues = () => {
  var days = document.getElementById("days");
  var departure = document.getElementById("departure");
  var arrive = document.getElementById("arrive");
  const inputs = document.querySelectorAll("input");

  // save text fields
  inputs.forEach((input) => {
    localStorage.setItem(input.name, input.value);
  });

  localStorage.setItem("day", days.value);
  localStorage.setItem("arrive", arrive.value);
  localStorage.setItem("departure", departure.value);
};

if (
  window.location.pathname === "/trainwork" ||
  window.location.pathname === "/train"
) {
  //keys
  document.onkeydown = function keyPress(event) {
    if (event.key == "j") {
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
    } else if (event.key == "k") {
      const focused = document.querySelector(":focus");
      if (!focused) {
        document.querySelector("select:first-of-type").focus();
      } else {
        if (focused.id == "departure") {
          document.getElementById("save").focus();
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
}

if (window.location.pathname === "/") {
  console.log("test");
  //keys
  document.onkeydown = function keyPress(event) {
    if (event.key == "j") {
      const focused = document.querySelector(":focus");
      if (!focused) {
        document.querySelector("a:first-of-type").focus();
      } else {
        if (focused.id == "trainWork") {
          document.getElementById("train").focus();
        } else if (focused.id == "train") {
          document.getElementById("books").focus();
        } else if (focused.id == "books") {
          document.getElementById("trainWork").focus();
        }
      }
    } else if (event.key == "k") {
      const focused = document.querySelector(":focus");
      if (!focused) {
        document.querySelector("a:first-of-type").focus();
      } else {
        if (focused.id == "trainWork") {
          document.getElementById("books").focus();
        } else if (focused.id == "books") {
          document.getElementById("train").focus();
        } else if (focused.id == "train") {
          document.getElementById("trainWork").focus();
        }
      }
    }
  };
}

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
