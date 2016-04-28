# deviceDetecting

When deal with bug: SHAMP-11. 
Only :
    var isTouch = function(){
    	return !!(navigator.msMaxTouchPoints);
    };
    
return true on IE on touchscreen.

below is the details:

the result of pc & laptop:

'isTouchDevice:->', false
'isTouch:->'false
is_touch_device:->false
detect touch:->false

the result of apple pad:
'isTouchDevice:->', true
'isTouch:->'false
is_touch_device:->true
detect touch:->false

the result of touch screen :

-in IE;
'isTouchDevice:->', false
'isTouch:->'true
is_touch_device:->false
detect touch:->false

-in Chrome;
'isTouchDevice:->', true
'isTouch:->'false
is_touch_device:->true
detect touch:->false

-in FF:
'isTouchDevice:->', false
'isTouch:->'false
is_touch_device:->false
detect touch:->false


#events sequence:
1.
when detecting the sequence of events :
e.preventDefault() can block event bubbling after touch; so the 

2.
when preventDefault() of all times. the events can be fired are below:
//if only touch
EVENT (...): touchstart
EVENT (...): touchend
//if only mouse
EVENT (...): mouseover
EVENT (...): mousedown
EVENT (...): mouseup
EVENT (...): click

3.
the sequence of events fired :
EVENT (...): touchstart
EVENT (...): touchmove
EVENT (...): touchend
EVENT (...): mouseover
EVENT (...): mousemove
EVENT (...): mousedown
EVENT (...): mouseup
EVENT (...): click



