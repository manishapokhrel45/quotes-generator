

const quotes = {
    Science: [
      "The science of today is the technology of tomorrow. - Edward Teller",
      "Science is a way of thinking much more than it is a body of knowledge. - Carl Sagan",
      "The good thing about science is that it's true whether or not you believe in it. - Neil deGrasse Tyson"
    ],
    Inspiration: [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
    ]
   
  };
  let category="Science";
  let index=0;
 
  function generateQuote(){
    document.querySelector("#quote").innerHTML= quotes[category][index]
  }
  function nextQuote(){
    index = (index + 1) % quotes[category].length;
    generateQuote()
  }
  function previousQuote(){
    index = (index - 1) % quotes[category].length;
    generateQuote()
  }
  function randomQuote(){

  
  index = Math.floor(Math.random() * quotes[category].length);
  generateQuote();
  }
  function updateCategory(){
    category = "Inspiration";
    index = 0;
    generateQuote();

  }
//   var btn = document.getElementById("toggle");

// function togglebtn() {
//   btn.classList.toggle(".active");
// }
 const body=document.querySelector("body");
 const toggle=document.getElementById("toggle");
 toggle.onclick = function(){
  toggle.classList.toggle("active");
  body.classList.toggle("active");
 }
