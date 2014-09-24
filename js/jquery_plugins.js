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


    /*                */
    $('article a').on('click', function(){
    	$('.base').attr('id',$(this).attr('base'));
		$('.lupa').attr('id',$(this).attr('lupa'));    	
    });


});