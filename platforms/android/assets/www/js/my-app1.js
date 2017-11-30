// Initialize your app
var myApp = new Framework7();



// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

//llama la funcion initapp por consola
$$(document).on('deviceready',initapp);

function initapp(){
    console.log("Dispositivo listo!!");
    $$('#iniciarS').on('click',click_btn);
}



function click_btn(){
  console.log("click");
  var numero_uno = $$('#numero_uno').val();
  var numero_dos = $$('#numero_dos').val();

  if(numero_uno.length >0 && numero_dos.length >0){

   $$.ajax({
    url: 'http://servicioswebmoviles.hol.es/index.php/SUMA',
    method: 'GET',
    dataType: 'json',
    data: {
    numero_uno: numero_uno,
    numero_dos: numero_dos
},
    success: function(data){
    if(data.resp){
        myApp.alert(data.msj);
    }else{
       myApp.alert(data.msj);
    }
},
    error: function(){
    console.log('error');
    }
})
  }else{
    myApp.alert("Debe llenar los campos", "Advertencia");
  }

}