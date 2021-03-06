$(document).on('ready', function(){
	
	/*
	--- Inicialización de Plugin de filtrado de elementos
		Plugin: MixItUp - Sitio Web: https://mixitup.kunkalabs.com/	
	*/
	$('#contenedor').mixItUp();


	/*
	--- Inicialización de Plugin de Efectos MouseOver sobre Imágenes
		Plugin: Adipoli - Sitio Web: https://cube3x.com/adipoli-jquery-image-hover-plugin/	
	*/
	$('article figure img').adipoli();


	/*
  	--- Inicialización de Plugin de Efecto Lupa
    	Plugin: MagnifyMe - Sitio Web: http://www.codepunker.com/blog/magnify-me-jquery-image-magnifier-plugin  
	*/
    jQuery('.base').magnifyMe('lupa');

    
    $('article').on('click', function(){
    	baseAttr = $(this).find('a').attr('base');
    	lupaAttr = $(this).find('a').attr('lupa');

    	modalInfo($(this),baseAttr);
    }); 

    var modalInfo = function(elemento,texto){
    	
    	//Variables para cargar las imágenes del MagnifyMe
    	
    	//Variables para el texto del párrafo en el modal
    	var dep1 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, veniam magni error voluptatem, rem magnam iste blanditiis aliquam explicabo consequatur eum ducimus doloremque dolores est, molestiae tempora, ratione facilis asperiores!";
    	var dep2 = "Porem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, veniam magni error voluptatem, rem magnam iste blanditiis aliquam explicabo consequatur eum ducimus doloremque dolores est, molestiae tempora, ratione facilis asperiores!";
    	var dep3 = "Morem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, veniam magni error voluptatem, rem magnam iste blanditiis aliquam explicabo consequatur eum ducimus doloremque dolores est, molestiae tempora, ratione facilis asperiores!";
    	var dep4 = "Rorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, veniam magni error voluptatem, rem magnam iste blanditiis aliquam explicabo consequatur eum ducimus doloremque dolores est, molestiae tempora, ratione facilis asperiores!";
    	var nat1 = "Oorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, veniam magni error voluptatem, rem magnam iste blanditiis aliquam explicabo consequatur eum ducimus doloremque dolores est, molestiae tempora, ratione facilis asperiores!";
    	var nat2 = "Qorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, veniam magni error voluptatem, rem magnam iste blanditiis aliquam explicabo consequatur eum ducimus doloremque dolores est, molestiae tempora, ratione facilis asperiores!";
    	var nat3 = "Worem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, veniam magni error voluptatem, rem magnam iste blanditiis aliquam explicabo consequatur eum ducimus doloremque dolores est, molestiae tempora, ratione facilis asperiores!";
    	var nat4 = "Eorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, veniam magni error voluptatem, rem magnam iste blanditiis aliquam explicabo consequatur eum ducimus doloremque dolores est, molestiae tempora, ratione facilis asperiores!";
    	var abs1 = "Sorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, veniam magni error voluptatem, rem magnam iste blanditiis aliquam explicabo consequatur eum ducimus doloremque dolores est, molestiae tempora, ratione facilis asperiores!";
    	var abs2 = "Vorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, veniam magni error voluptatem, rem magnam iste blanditiis aliquam explicabo consequatur eum ducimus doloremque dolores est, molestiae tempora, ratione facilis asperiores!";
    	var abs3 = "Xorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, veniam magni error voluptatem, rem magnam iste blanditiis aliquam explicabo consequatur eum ducimus doloremque dolores est, molestiae tempora, ratione facilis asperiores!";
    	var abs4 = "Zorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, veniam magni error voluptatem, rem magnam iste blanditiis aliquam explicabo consequatur eum ducimus doloremque dolores est, molestiae tempora, ratione facilis asperiores!";
    	
    	/*Selecciona todos los elementos con la clase
		"base", con attr(par1, par2) le asigna un id con
		la ruta "article>a"*/
		//$('.base').attr('id','dep1');
		$('.modal-header h1').text(elemento.find('img').attr('alt'));
    	$('.base').attr('id', baseAttr);
		$('.lupa').attr('id', lupaAttr);    	
		
		//Condicional para cargar textos en la ventana modal
		if(baseAttr == texto){	
			$('.modal-header p').text(eval(texto));
		} else {
			$('.modal-header p').text("");
		}
    };


});