//Show and hide Sections
function showContent() {
    var element = document.getElementById("concod");
    var element2 = document.getElementById("sincod");
    var check = document.getElementById("checkconcod");
    if (check.checked) {
        element.style.display='block';
        element2.style.display='none';
    }
    else {
        element.style.display='none';
        element2.style.display='block';
    }
}


//Check Box Validation
function checkvalidate(checks) {
    for (i = 0; lcheck = checks[i]; i++) {
        if (lcheck.checked) {
            return true;
        }
    }
    return false;
}


$(function() { 
	email = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	codpos = /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/;
	tel = /^[0-9]{2,3}-? ?[0-9]{7,8}$/;
	var boxes = document.getElementsByClassName("checkboxing");

	$(".submit").click(function(){  
		$(".error").fadeOut().remove();
		
        if ($(".nombre").val() == "") {  
			$(".nombre").focus().after('<span class="error">Indique el nombre</span>');  
			return false;  
		}
		if ($(".apellidos").val() == "") {  
			$(".apellidos").focus().after('<span class="error">Indique los apellidos</span>');  
			return false;  
		}
		if ($(".fnac").val() == "") {  
			$(".input-prepend").focus().after('<span class="error">Indique una fecha</span>');  
			return false;  
		}
		if ($("#sexo").val() == "") {  
			$("#sexo").focus().after('<span class="error">Indique el sexo</span>');  
			return false;  
		}
		if ($("#docide").val() == "") {  
			$("#docide").focus().after('<span class="error">Indique el documento de identidad</span>');  
			return false;  
		}
		if ($(".numide").val() == "") {  
			$(".numide").focus().after('<span class="error">Indique número del documento de identidad</span>');  
			return false;  
		}
		if ($(".direccion").val() == "") {  
			$(".direccion").focus().after('<span class="error">Indique la dirección</span>');  
			return false;  
		}
		if ($(".cp").val() == "" || !codpos.test($(".cp").val())) {  
			$(".cp").focus().after('<span class="error">Indique el código postal</span>');  
			return false;  
		}
		if ($(".localidad").val() == "") {  
			$(".localidad").focus().after('<span class="error">Indique la localidad</span>');  
			return false;  
		}
		if ($(".provincia").val() == "") {  
			$(".provincia").focus().after('<span class="error">Indique la provincia</span>');  
			return false;  
		}
		if ($(".movil").val() == "" || !tel.test($(".movil").val())) {
			$(".movil").focus().after('<span class="error">Indique el móvil</span>');  
			return false;  
		}
		if ($(".fijo").val() != "" && !tel.test($(".fijo").val())) {
			$(".fijo").focus().after('<span class="error">Indique un teléfono fijo válido</span>');  
			return false;  
		}
		if (!email.test($(".email").val())) {
			$(".email").focus().after('<span class="error">Ingrese un formato de email válido</span>');  
			return false;  
		}
		if ($('#checkconcod').is(":checked")) {
		    if ($(".codpromo").val() == "" || !codpos.test($(".codpromo").val())) {
		        $(".codpromo").focus().after('<span class="error">Indique el código de usuario</span>');
		        return false;
		    } else {
		    	return true;
		    }
		}
		if (checkvalidate(boxes)) {
			return true;
		} else {
		    $(".message").focus().after('<span class="error">Indique al menos un producto</span>');
		    return false;
		}
	});  
	$(".nombre, .apellidos, .input-prepend, #sexo, #docide, .numide, .direccion, .localidad, .provincia, .movil, .codpromo").bind('blur keyup', function(){  
        if ($(this).val() != "") {  			
			$('.error').fadeOut();
			return false;  
		}  
	});	
	$(".cp").bind('blur keyup', function(){  
        if ($(".cp").val() != "" && codpos.test($(".cp").val())) {	
			$('.error').fadeOut();  
			return false;  
		}  
	});
	$(".movil").bind('blur keyup', function(){  
        if ($(".movil").val() != "" && tel.test($(".movil").val())) {	
			$('.error').fadeOut();  
			return false;  
		}  
	});
	$(".email").bind('blur keyup', function(){  
        if ($(".email").val() != "" && email.test($(".email").val())) {	
			$('.error').fadeOut();  
			return false;  
		}  
	});
});