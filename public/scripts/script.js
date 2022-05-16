window.onload = () => {
  const display = document.getElementById("items");

  if (display !== null) {
    getValues();
  }

  if (
    window.location.pathname === "/train" ||
    window.location.pathname === "/trainwork"
  ) {
    getInput();
  }
};

//time +1 hour
let now = new Date(Date.now() + 1 * (60 * 60 * 1000));

// round minutes up to 15 minute increments
if (now.getMinutes() >= 15 && now.getMinutes() < 30) {
  now.setMinutes(15, 0, 0);
} else if (now.getMinutes() >= 30 && now.getMinutes() < 45) {
  now.setMinutes(30, 0, 0);
} else if (now.getMinutes() >= 45 && now.getMinutes() < 60) {
  now.setMinutes(45, 0, 0);
} else {
  now.setMinutes(0, 0, 0);
}

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

// fill end screen
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

// get input train
function getInput() {
  var departure = localStorage.getItem("departure");
  var arrive = localStorage.getItem("arrive");
  var departureInput = document.getElementById("departure");
  var arriveInput = document.getElementById("arrive");

  if (window.location.pathname === "/trainwork") {
    if (departure == "Eindhoven Centraal") {
      departureInput.value = "Amsterdam Centraal";
    } else if (departure == "Amsterdam Centraal") {
      departureInput.value = "Eindhoven Centraal";
    }
  } else if (window.location.pathname === "/train") {
    departureInput.value = arrive;

    if (arriveInput.value == departureInput.value) {
      arriveInput.value = departure;
    }
  }
}

// save to localstorage
const saveValues = () => {
  var days = document.getElementById("days");
  var arrive = document.getElementById("arrive");
  var departure = document.getElementById("departure");
  const inputs = document.querySelectorAll("input");

  // save text fields
  inputs.forEach((input) => {
    localStorage.setItem(input.name, input.value);
  });

  localStorage.setItem("day", days.value);
  localStorage.setItem("departure", departure.value);

  if (window.location.pathname === "/trainwork") {
    if (document.getElementById("departure").value == "Eindhoven Centraal") {
      localStorage.setItem("arrive", "Amsterdam Centraal");
    } else if (
      document.getElementById("departure").value == "Amsterdam Centraal"
    ) {
      localStorage.setItem("arrive", "Eindhoven Centraal");
    }
  } else {
    localStorage.setItem("arrive", arrive.value);
  }
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

if (window.location.pathname === "/books") {
  //keys books
  document.onkeydown = function keyPress(event) {
    if (event.key == "j") {
      const focused = document.querySelector(":focus");
      if (!focused) {
        document.querySelector("a:first-of-type").focus();
      } else {
        if (focused == document.querySelector("a:first-of-type")) {
          document.querySelector("a:nth-of-type(2)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(2)")) {
          document.querySelector("a:nth-of-type(3)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(3)")) {
          document.querySelector("a:nth-of-type(4)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(4)")) {
          document.querySelector("a:nth-of-type(5)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(5)")) {
          document.querySelector("a:nth-of-type(6)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(6)")) {
          document.querySelector("a:nth-of-type(7)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(7)")) {
          document.querySelector("a:nth-of-type(8)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(8)")) {
          document.querySelector("a:nth-of-type(9)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(9)")) {
          document.querySelector("a:nth-of-type(10)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(10)")) {
          document.querySelector("a:nth-of-type(11)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(11)")) {
          document.querySelector("a:nth-of-type(12)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(12)")) {
          document.querySelector("a:nth-of-type(13)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(13)")) {
          document.querySelector("a:nth-of-type(14)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(14)")) {
          document.querySelector("a:nth-of-type(15)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(15)")) {
          document.querySelector("a:nth-of-type(1)").focus();
        }
      }
    } else if (event.key == "k") {
      const focused = document.querySelector(":focus");
      if (!focused) {
        document.querySelector("a:first-of-type").focus();
      } else {
        if (focused == document.querySelector("a:first-of-type")) {
          document.querySelector("a:nth-of-type(15)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(15)")) {
          document.querySelector("a:nth-of-type(14)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(14)")) {
          document.querySelector("a:nth-of-type(13)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(13)")) {
          document.querySelector("a:nth-of-type(12)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(12)")) {
          document.querySelector("a:nth-of-type(11)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(11)")) {
          document.querySelector("a:nth-of-type(10)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(10)")) {
          document.querySelector("a:nth-of-type(9)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(9)")) {
          document.querySelector("a:nth-of-type(8)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(8)")) {
          document.querySelector("a:nth-of-type(7)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(7)")) {
          document.querySelector("a:nth-of-type(6)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(6)")) {
          document.querySelector("a:nth-of-type(5)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(5)")) {
          document.querySelector("a:nth-of-type(4)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(4)")) {
          document.querySelector("a:nth-of-type(3)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(3)")) {
          document.querySelector("a:nth-of-type(2)").focus();
        } else if (focused == document.querySelector("a:nth-of-type(2)")) {
          document.querySelector("a:nth-of-type(1)").focus();
        }
      }
    }
  };
}
