//slideshow
let imageSection = document.getElementById("mainImg");
let imagesArray = [];

let image1 = document.createElement("img");
image1.src = "images/index1.jpeg";
imageSection.appendChild(image1);
imagesArray.push(image1);

let image2 = document.createElement("img");
image2.src = "images/index2.jpeg";
imagesArray.push(image2);

let image3 = document.createElement("img");
image3.src = "images/index3.jpeg";
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

//feedback
const feedbackArr = [
  // {
  //   name: "Leah",
  //   feedback:
  //     "I received a fantastic service from B.A BeautyAesthetic, she made me feel reassured and comfortable. She took her time to explain every step along the way and made sure I understood everything fully. I would highly recommend her. Thank you so much.",
  // },
  // {
  //   name: "Alisa",
  //   feedback:
  //     "Highly recommend B.A Aesthetic! I had previous work done somewhere else that I was not benefiting from, the shape altered and the filler was built too much on the borders. She had the amazing patience of explaining everything to me, putting down 3 options that I could choose from. I chose to correct them and trusted her with the process. She was very straightforward, professional and with an amazing eye for detail. I am now very happy with the results and how much she could fix the shape of my lips, creating symmetry and adding just a little volume. I would Highly recommend B.A Aesthetic to anyone ! Amazing service ! Thank you !",
  // },
  // {
  //   name: "Suzy J.",
  //   feedback:
  //     "On arrival at B.A. Beauty Lips, I was made to fill welcome and put at my ease by the calming atmosphere. I was most happy with the procedure.And care I received. I highly recommend Beatrice!! I shall be visiting again. Thank you for the amazing Lips. Suzy .J",
  // },
  // {
  //   name: "Cristina",
  //   feedback:
  //     "I highly recommend this wonderful woman with very fine hands!Although I was a more complicated case, I went to her for the first time yesterday and she managed to transform my lips into something WOW without bruising or swelling👄😍Thank you from the bottom of my heart Catalina Beatrice and I can not wait to see you again next time! Keep it up with the work you do!",
  // },
  // {
  //   name: "Andreea",
  //   feedback:
  //     "I would highly recommend Catalina’s services. She’s a great professional person. You will love the results and a very important aspect of her work is she helps you feel safe with all the procedures. You’ll know exactly what to expect. The best! ",
  // },
  // {
  //   name: "Alexandra",
  //   feedback:
  //     "Highly recommended! Catalina is a lovely person who delivers a very professional service. She explained all the process before the procedure and all the after care instructions. Really happy with the result! Will definitely come back!",
  // },
  // {
  //   name: "Carla",
  //   feedback:
  //     "Today I had an appointment with a excellent person , very warm and kind lady . It was my pleasure to be your client Catalina. Really impressive skills and very professional from the start till the end. I don’t have words to thank you , massively recommended !!",
  // },
  // {
  //   name: "Roxana",
  //   feedback:
  //     "The best ❤️❤️ she made me feel so comfortable. I ll go back for sure",
  // },
  {
    name: "Isabela",
    feedback:
      "The best ! I’m in love with my new lips ! I look forward to visiting again in the future and would most certainly recommend  ! ",
  },
  {
    name: "Ioana",
    feedback:
      "Would totally recommended. Absolutely love my results. Amazing service, nice and professional. Thank you!",
  },
  {
    name: "Elena",
    feedback:
      "She is definitely the best. Very professional and friendly. I have always been scared of needles but she was so patient with me and made me feel really comfortable.  I will definitely go back for more. Thank you so much",
  },
];
const feedbackContainer = document.querySelector(".feedbackContainer");
const button1 = document.createElement("button");
button1.className = "left";

const button2 = document.createElement("button");
button2.className = "right";

function createFeedbackCard(obj) {
  const divF = document.createElement("div");
  divF.className = "divF";

  const stars = document.createElement("p");
  stars.innerHTML = "⭐⭐⭐⭐⭐";

  const feedBack = document.createElement("p");
  feedBack.innerHTML = obj.feedback;

  const name = document.createElement("p");
  name.innerHTML = `-${obj.name}`;
  name.className = "feedBackName";

  divF.appendChild(stars);
  divF.appendChild(feedBack);
  divF.appendChild(name);
  return feedbackContainer.appendChild(divF);
}

feedbackContainer.appendChild(button1);
feedbackArr.map((el) => createFeedbackCard(el));
feedbackContainer.appendChild(button2);
