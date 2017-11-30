// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});


$$(document).on('deviceready',initapp);

function initapp(){
  console.log("dispositivo listo!!!");
  
  $$("#SUMA").on("click", click_btn);
  $$("#RESTA").on("click", click_btn1);
  $$("#MULTIPLICACION").on("click", click_btn2);
  $$("#DIVISION").on("click", click_btn3);
  
}

function click_btn(){
  console.log("click");
  document.location="SUMA.html";
}
function click_btn1(){
  console.log("click");
  document.location="RESTA.html";
}

function click_btn2(){
  console.log("click");
  document.location="MULTIPLICACION.html";

}
function click_btn3(){
  console.log("click");
  document.location="DIVISION.html";
  
}


