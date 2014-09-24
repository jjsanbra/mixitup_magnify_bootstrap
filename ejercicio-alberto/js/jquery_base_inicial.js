$(document).on('ready', function(){

	// Selectores de jQuery
	// Etiquetas html = $('etiqueta') = $('h1')
	// Id's de HTML = $('#nombredelid') = $('#principal')
	// Clases de CSS = $('.nombredeclase') = $('.cuerpo')

	// Creamos variables de elementos a repetir
	var btns = $('#btn1, #btn3');

	//Agregamos el texto a los botones de los artículos
	btns.text("Ver Más");
	$('#btn2').text("Ocultar");

	//Cambiar el color de fondo del primer artículo al
	//pulsar sobre su botón.
	$('#btn1').on('click', function(){
		//agrego una clase al elemento art1
		//$('#art1').addClass('fondo');

		//Activo y desactivo una clase al elemento art1
		$('#art1').toggleClass('fondo');

		//remuevo una clase al elemento art1
		//$('#art1').removeClass('col-xs-4');
	});

	//Ocultar el artículo 02
	//al pulsar sobre su botón.
	$('#btn2').on('click', function(){
		$('#art2 hgroup, #art2 p').toggleClass('ocultar');
		$(this).text("Ver Más");
		$(this).toggleClass('btn-success');
	});

	//Cambio color del texto <p></p> del artículo 03
	//al pulsar sobre su botón.
	$('#btn3').on('click', function(){
		$('#art3 p').toggleClass('color');
	});


	//Cambio formato y estilos en los titulares
	//al pulsar sobre su botón Cambio.
	$('#btn4').on('click', function(){
		$('h1').toggleClass('tituloh1');
		$('h3').toggleClass('tituloh3');
	});




});