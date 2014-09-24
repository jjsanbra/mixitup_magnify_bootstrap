$(document).ready(function () {

	var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	
	$(".submit").click(function (){
		$(".error").remove();		
		if( $(".nombre").val() == "" ){
			$(".nombre").focus().after("<span class='error'>Ingrese su nombre</span>");
			return false;
		}else if( $(".apellido1").val() == "" ){
			$(".apellido1").focus().after("<span class='error'>Ingrese su apellidos</span>");
			return false;
		}else if( $(".nif").val() == "" ){
			$(".nif").focus().after("<span class='error'>Ingrese su número de identificación</span>");
			return false;
		}else if( $(".telefono_fijo1").val().length < 1 || isNaN($(".telefono_fijo1").val()) ||  $(".telefono_fijo1").val().length < 9){
			$(".telefono_fijo1").focus().after("<span class='error'>Ingrese un teléfono fijo</span>");
			return false;
		}else if( $(".telefono_movil1").val().length < 1 || isNaN($(".telefono_movil1").val()) ||  $(".telefono_movil1").val().length < 9){
			$(".telefono_movil1").focus().after("<span class='error'>Ingrese un teléfono móvil</span>");
			return false;
		}else if( $(".email").val() == "" || !emailreg.test($(".email").val()) ){
			$(".email").focus().after("<span class='error'>Ingrese un email correcto</span>");
			return false;
		/*}else if( $(".codigo_establecimiento").val() == "" ){
			$(".codigo_establecimiento").focus().after("<span class='error'>Ingrese el código de establecimiento</span>");
			return false;*/
		} else if($("#checkbox").is(':checked')) {  
             
        } else {  
            alert("Por favor acepte nuestra Política de Privacidad");
            return false;  
        }
	});
	$(".nombre, .apellidos, .nif, .telefono_fijo1, .telefono_movil1").keyup(function(){
		if( $(this).val() != "" ){
			$(".error").fadeOut();			
			return false;
		}		
	});
	$(".email").keyup(function(){
		if( $(this).val() != "" && emailreg.test($(this).val())){
			$(".error").fadeOut();			
			return false;
		}		
	});
});

/*function limpiarformulario(formulario){
   // Se encarga de leer todas las etiquetas input del formulario
   $(formulario).find('input').each(function() {
      switch(this.type) {
         case 'password':
         case 'text':
         case 'hidden':
              $(this).val('');
              break;
         case 'checkbox':
         case 'radio':
              this.checked = false;
      }
   });
 
   // Se encarga de leer todas las etiquetas select del formulario
   $(formulario).find('select').each(function() {
       $("#"+this.id + " option[value=0]").attr("selected",true);
   });
   // Se encarga de leer todas las etiquetas textarea del formulario
   $(formulario).find('textarea').each(function(){
      $(this).val('');
   });
}

$("#reset").click(function(){
	confirm('¿Desea borrar el formulario?')
	limpiarformulario("#htmlform");
});
*/