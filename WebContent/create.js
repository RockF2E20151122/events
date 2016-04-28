
window.onload = function(){
	
	var isMouseDevice = function(){
    	return !!('onmousedown' in window);
    };
    
    var isTouchDevice = function() {
        return !!('ontouchstart' in window);
    };
    
    var isTouch = function(){
    	return !!(navigator.msMaxTouchPoints);
    };
    
    function is_touch_device() {
    	try {
    		document.createEvent("TouchEvent");  
    	    return true;  
	    } catch (e) {  
    	    return false;  
	    }
    }
    
    var a = !!'ontouchstart' in document.documentElement;
    var fuck = function( argu ){
    	document.getElementById(argu.id).innerHTML = argu.html ;
    };
    fuck({
    	id: 'id01',
    	html: "'isMouseDevice:->',"+ isMouseDevice()
    });
    fuck({
    	id: 'id02',
    	html: " 'isTouchDevice:->', "+ isTouchDevice()
    });
    fuck({
    	id: 'id03',
    	html: " 'isTouch:->'"+ isTouch()
    });
    fuck({
    	id: 'id04',
    	html: "is_touch_device:->"+ is_touch_device()
    });
    fuck({
    	id: 'id05',
    	html: "detect touch:->"+ a
    });
}