// let main = document.getElementById("main");

// main.style.backgroundImage = "url('images/index1.jpeg')";
// main.style.backgroundSize = "cover";

let imageSection = document.getElementById("main");
let imagesArray = [];

let image1 = document.createElement("img");
image1.src = "images/index1.jpeg";
imageSection.appendChild(image1);
imagesArray.push(image1);

let image2 = document.createElement("img");
image2.src = "images/index2.jpeg";
imagesArray.push(image2);

let image3 = document.createElement("img");
image3.src = "images/index3.webp";
imagesArray.push(image3);

let count = 0;

function autoForward() {
  autoForwardInt = setInterval(manuallyForward, 4000);
}

function manuallyForward() {
  imageSection.removeChild(imagesArray[count]);
  count++;
  if (count >= imagesArray.length) {
    count = 0;
  }
  imageSection.appendChild(imagesArray[count]);
}
autoForward();
