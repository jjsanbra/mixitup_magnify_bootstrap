$(document).on('ready', function(){
	$('#image1, #image2, #image3').adipoli({
	    'startEffect' : 'transparent',
	    'hoverEffect' : 'boxRandom'
	});
	$('#image4, #image5, #image6').adipoli({
	    'startEffect' : 'normal',
	    'hoverEffect' : 'popout'
	});
});