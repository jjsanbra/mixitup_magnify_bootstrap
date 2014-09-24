/*
https://cube3x.com/adipoli-jquery-image-hover-plugin/

https://mixitup.kunkalabs.com/
*/



$(document).on('ready',function(){

	$('#contenedor').mixItUp();

	$('article figure img').adipoli({
    'startEffect' : 'normal',
    'hoverEffect' : 'popout'
	});

	//jQuery('.magnifyMe').magnifyMe('iamMagnified');


	$('section figure').on('click',function(){
		//$('#myModal').show();
			
		var tituloAlt = $(this).find("img").attr("alt");
		var rutaFichero = $(this).find("img").attr("src");	
		var textoImagen = "";
		
		// Titulo mostrar en ventana Modal (se obtiene de la etiqueta ALT
		$('#myModalLabel').html(tituloAlt);		
		// Ruta del fichero que se carga en la ventana modal
		// Si tuvieramos una imagen en la ventana modal
		//$('#imagenCargar').attr('src',rutaFichero);	
		//console.log(rutaFichero);		

		// Efecto lupa, le tenemos que indicar la imagen y la imagen ampliada.
		$('.magnifyMe').css( "background", "url("+rutaFichero+")");  

		rutaFichero = rutaFichero.replace("200", "400");
		$('.iamMagnified').css( "background", "url("+rutaFichero+")");  
		
		// Para que funcione el plugin de lupa cuando se pasa el ratón
		jQuery('.magnifyMe').magnifyMe('iamMagnified');



		switch (tituloAlt)
		{
			case "Deporte 1": 
		    	textoImagen = "Texto Deporte 1 Texto Deporte 1 Texto Deporte 1 Texto Deporte 1 Deporte 1";
		    	break;
		    case "Deporte 2":
		  		textoImagen = "Texto Deporte 2 Texto Deporte 2 Texto Deporte 2 Texto Deporte 2 Deporte 2";
		  		break;
			case "Deporte 3":
		  		textoImagen = "Texto Deporte 3 Texto Deporte 3 Texto Deporte 3 Texto Deporte 3 Deporte 3";
		  		break;
		  	case "Naturaleza 1": 
		    	textoImagen = "Texto Naturaleza 1 Texto Naturaleza 1 Texto Naturaleza 1 Texto Naturaleza 1 Texto Naturaleza 1";
		    	break;
		    case "Naturaleza 2":
		  		textoImagen = "Texto Naturaleza 2 Texto Naturaleza 2 Texto Naturaleza 2 Texto Naturaleza 2 Texto Naturaleza 2";
		  		break;
			case "Naturaleza 3":
		  		textoImagen = "Texto Naturaleza 3 Texto Naturaleza 3 Texto Naturaleza 3 Texto Naturaleza 3 Texto Naturaleza 3";
		  		break;
		  	case "Abstracto 1": 
		    	textoImagen = "Texto Abstracto 1 Texto Abstracto 1 Texto Abstracto 1 Texto Abstracto 1 Texto Abstracto 1";
		    	break;
		    case "Abstracto 2":
		  		textoImagen = "Texto Abstracto 2 Texto Abstracto 2 Texto Abstracto 2 Texto Abstracto 2 Texto Abstracto 2";
		  		break;
			case "Abstracto 3":
		  		textoImagen = "Texto Abstracto 3 Texto Abstracto 3 Texto Abstracto 3 Texto Abstracto 3 Texto Abstracto 3";
		  		break;
			default:
		  		textoImagen = "Texto de imagen no encontrado";
		}

		$('#textoImagen').html(textoImagen);	
		
	});	

});




