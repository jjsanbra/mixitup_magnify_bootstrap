$(document).on('ready', function(){

	var btns = $('#btn1, #btn2, #btn3');
	btns.text("Ver más");


	$('#btn1').on('click', function(){
		//$('#art1 hgroup, #art1 p').addClass('ocultar');

		$('#art1 hgroup, #art1 p').toggleClass('ocultar');

		//$('#art1').removeClass('col-xs-4');

	});


	$('#btn2').on('click', function(){
		$('#art2').toggleClass('fondo');
	});


	$('#btn3').on('click', function(){
		$('#art3 p').toggleClass('color');
		$(this).toggleClass('btn-danger');
		$(this).removeClass('btn-primary');
	});


	$('#btn4').on('click', function(){
		$('h1').toggleClass('tituloh1');
		$('h3').toggleClass('tituloh3');
	});




});