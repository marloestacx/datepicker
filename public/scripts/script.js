// // fill input fields
// const getValues = () => {
//   const inputs = document.querySelectorAll("input");
//   const inputNumber = document.querySelectorAll('input[type="number"]');
//   const inputRadio = document.querySelectorAll("input[type=radio]");

//   //text fields
//   inputs.forEach((input) => {
//     const item = localStorage.getItem(input.name);
//     if (item) input.value = item;
//   });

//   // text fields
//   inputNumber.forEach((input) => {
//     const item = localStorage.getItem(input.name);
//     if (item) input.value = item;
//   });

//   // radio buttons
//   inputRadio.forEach((input) => {
//     const item = localStorage.getItem(input.name);
//     if (item) input.value = item;
//     document.getElementById(item).checked = true;
//   });

//   localStorage.clear();
// };

// save to localstorage
const saveValues = () => {
  const inputs = document.querySelectorAll("input");

  console.log("test");

  // save text fields
  inputs.forEach((input) => {
    localStorage.setItem(input.name, input.value);
  });
};
