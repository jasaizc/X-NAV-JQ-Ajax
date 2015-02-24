jQuery(document).ready(function() {

  $.ajax({
    type: 'GET', // método HTTP
    url: 'text.txt',
    success: function(data){
     $("#res").html(data);
    }, // función a la que llamar cuando
                          // llegue la respuesta
    error: function(){
     alert("Fallo al leer el fichero");
    
    }
}); 
  $("#boton").click(function(){
    $.ajax({
    type: 'GET', // método HTTP
    url: 'text2.txt',
    cache: false,
    error: function(){
     alert("Fallo al leer el fichero");
    
    }
}).done(function(data){
 $("#res2").html(data);
    }
    )
  }); 
  });
