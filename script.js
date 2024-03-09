

const quotes = {
    Science: [
      "The science of today is the technology of tomorrow. - Edward Teller",
      "Science is a way of thinking much more than it is a body of knowledge. ",
      "The good thing about science is that it's true whether or not you believe in it. "
    ],
    Inspiration: [
      "The only way to do great work is to love what you do. ",
      "Believe you can and you're halfway there. ",
      "The future belongs to those who believe in the beauty of their dreams. "
    ],
    Technology: [
      "Technology is anything that wasn't around when you were born. ",
      "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past. ",
      "Any sufficiently advanced technology is indistinguishable from magic. "

    ],
    Nature: [
      "Look deep into nature, and then you will understand everything better. ",
      "In every walk with nature one receives far more than he seeks. ",
      "The earth has music for those who listen. "


    ],
    Wisdom: [
      "The only true wisdom is in knowing you know nothing. ",
      "Do not go where the path may lead, go instead where there is no path and leave a trail. ",
      "It is the mark of an educated mind to be able to entertain a thought without accepting it. "

    ]
   
  };
  let currCategory="Science";
  let index=0;
 
  function generateQuote(){
    document.querySelector("#quote").innerHTML= quotes[currCategory][index]
  }
  function nextQuote(){
    index = (index + 1) % quotes[currCategory].length;
    generateQuote()
  }
  function previousQuote() {
    index = (index - 1 + quotes[currCategory].length) % quotes[currCategory].length;
    generateQuote();
}
  // function previousQuote(){
  //   index = (index - 1) % quotes[currCategory].length;
  //   generateQuote()
  // }
  function randomQuote(){

  
  index = Math.floor(Math.random() * quotes[currCategory].length);
  generateQuote();
  }
  function updateCategory(){
    currCategory = document.getElementById('category').value;
    // category = "Inspiration";
    index = 0;
    generateQuote();

  }
//   var btn = document.getElementById("toggle");

// function togglebtn() {
//   btn.classList.toggle(".active");
// }
 const body=document.querySelector("body");
 const toggle=document.getElementById("toggle");
 const slider=document.getElementById("toggle-slider")
 const container=document.getElementById("container");


 toggle.onclick = function(){
  toggle.classList.toggle("active");
  body.classList.toggle("active");
  
  container.classList.toggle("active");

  
  console.log("hi")
 }
 slider.onclick = function(){
  toggle.classList.toggle("active");
  body.classList.toggle("active");
  
  container.classList.toggle("active");
  
  console.log("hi")
 }
 function helloWorld(){
  console.log("helloworld")
 }

//  const quoteText=document.getElementById("quote");
//  quoteText.onclick = function(){
//   quoteText.classList.toggle("font-2xl");
  
  
 
 function setFont10px(){
  document.getElementById("quote").style.fontSize = "16px";
  console.log("hey")
 }
 function setFont20px(){
  document.getElementById("quote").style.fontSize = "20px"
 }
 function setFont30px(){
  document.getElementById("quote").style.fontSize = "30px"
 }
 
//  const container=document.getElementById("container");

