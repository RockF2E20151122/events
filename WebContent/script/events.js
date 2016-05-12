$(function() {
	var log = function(eventObj) {
		var pre = $("pre");
		var html = pre.html();
		pre.append( "EVENT (" + new Date().getTime() + "): " + eventObj.type + "\n");
		eventObj.preventDefault();
		/*
		 * if (e.type == "touchmove") e.preventDefault();
		 */
		pre.scrollTop = pre.offsetHeight;
	};
	/**
	 * 1. mouse events
	 */
	var $node = $('#nodeId');
	$node.on("touchstart", log );
			
//			function(){
//		var argu = arguments[0];
//		if(arguments.callee.caller.arguments.touches && arguments.callee.caller.arguments.touches.length>1){
//			alert('fuck')
//		}
//		
//	});
	
	$node.on("touchcancel", log);
	$node.on("touchmove", log);
	$node.on("touchleave", log);
	$node.on("touchend", log);

	$node.on("mouseover", log);
	$node.on("mousemove", log);
	$node.on("mousedown", log);
	$node.on("mouseup", log);
	$node.on("click", log);
	$node.on("dblclick", log);
	$node.on("context", log);

	/**
	 * 2. touch events
	 */

	/**
	 * 3. touch screen
	 */

});