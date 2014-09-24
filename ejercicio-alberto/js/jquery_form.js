$(document).on('ready', function(){

	var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

	$('#submit').on('click', function(){

		$(".error").remove();

		if( $('#nombre').val() == "" ){
			$('#nombre').focus().after("<span class='error'>Olvidaste colocar tu nombre</span>");
			return false;
		} else if( $('#edad').val().length < 1 || isNaN( $('#edad').val()) || $('#edad').val().length > 2){
			$('#edad').focus().after("<span class='error'>Ingrese una edad</span>");
			return false;
		} else if( $('#telefono').val().length != 9 || isNaN( $('#telefono').val() )){
			$('#telefono').focus().after("<span class='error'>Ingrese un teléfono</span>");
			return false;
		} else if( $('#email').val() == "" || !emailreg.test( $('#email').val() ) ){
			$('#email').focus().after("<span class='error'>Ingrese un email válido</span>");
			return false;
		} else {
			alert("Sus datos han sido enviados correctamente");
		}
	});

	$('#nombre').keyup(function(){
		if( $(this).val() != "" ){
			$('.error').fadeOut();			
			return false;
		}		
	});

	$('#edad').keyup(function(){
		if( !isNaN( $(this).val() ) && $(this).val().length > 0 ){
			$('.error').fadeOut();			
			return false;
		}		
	});

	$('#telefono').keyup(function(){
		if( !isNaN( $(this).val() ) && $(this).val().length == 9 ){
			$('.error').fadeOut();			
			return false;
		}		
	});

	$('#email').keyup(function(){
		if( $(this).val() != "" && emailreg.test($(this).val())){
			$('.error').fadeOut();			
			return false;
		}		
	});





});