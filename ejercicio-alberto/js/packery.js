$(document).on('ready', function() {

	$container.packery( 'on', 'dragItemPositioned',
  function( pckryInstance, draggedItem ) {
    notify( 'Packery positioned dragged ' + draggedItem.element.nodeName );
  }
);
	

});