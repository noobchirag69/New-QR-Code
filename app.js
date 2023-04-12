// Necessary Variables
let size = document.querySelector("#size"); // Size of the QR
let userInput = document.querySelector("#url"); // Data of the QR
let btn = document.querySelector("#btn"); // Submit Button
let imageBox = document.querySelector("#image-box"); // Image Container
let qrCode = document.querySelector("#qrCode"); // QR Code

// Function to generate QR Code
btn.addEventListener("click", (e) => {
  e.preventDefault(); // To prevent the form submission
  let apiURL = `https://api.qrserver.com/v1/create-qr-code/?size=${size.value}&data=${userInput.value}`; // QR Code API that takes 2 parameters - size and data
  qrCode.src = apiURL; // Setting the src of the image
  imageBox.style.display = "block"; // Making the image visible
  size.value = "100x100"; // Setting the size back to default
  userInput.value = ""; // Setting the data back to empty
});
