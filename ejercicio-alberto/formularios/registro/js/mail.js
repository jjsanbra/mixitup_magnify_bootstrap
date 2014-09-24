$(document).ready(function () {
	var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	$(".submit").click(function (){
		$(".error").remove();		
		if( $(".name").val() == "" ){
			$(".name").focus().after("<span class='error'>Ingrese su nombre</span>");
			return false;
		}else if( $(".email").val() == "" || !emailreg.test($(".email").val()) ){
			$(".email").focus().after("<span class='error'>Ingrese un email correcto</span>");
			return false;
		}else if( $(".telephone").val().length < 1 || isNaN($(".telephone").val()) ||  $(".telephone").val().length < 9){
			$(".telephone").focus().after("<span class='error'>Ingrese un teléfono</span>");
			return false;
		} else if($("#checkbox").is(':checked')) {  
             
        } else {  
            alert("Por favor acepte nuestra Política de Privacidad");
            return false;  
        }
	});
	$(".name, .telephone, .message").keyup(function(){
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