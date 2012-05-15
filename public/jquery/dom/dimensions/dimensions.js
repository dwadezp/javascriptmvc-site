
steal('jquery/dom/styles').then(function($) {

var weird = /button|select/i, //margin is inside border
	getBoxes = {},
    checks = {
        width: ["Left", "Right"],
        height: ['Top', 'Bottom'],
        oldOuterHeight: $.fn.outerHeight,
        oldOuterWidth: $.fn.outerWidth,
        oldInnerWidth: $.fn.innerWidth,
        oldInnerHeight: $.fn.innerHeight
    };

$.each({ 

/**
 * @function jQuery.fn.outerWidth
 * @parent jQuery.dimensions
 *
 * Lets you set the outer width of an object where:
 *
 *      outerWidth = height + padding + border + (margin)
 *
 * And can be used like:
 *
 *      $("#foo").outerWidth(100); //sets outer width
 *      $("#foo").outerWidth(100, true); // uses margins
 *      $("#foo").outerWidth(); //returns outer width
 *      $("#foo").outerWidth(true); //returns outer width + margins
 *
 * When setting the outerWidth, it adjusts the width of the element.
 *
 * @param {Number} [height]
 * @param {Boolean} [includeMargin=false] Makes setting the outerWidth adjust
 * for margin. Defaults to false.
 * @return {jQuery|Number} If you are setting the value, returns the jQuery wrapped elements.
 */
width: 
/**
 * @function jQuery.fn.innerWidth
 * @parent jQuery.dimensions
 *
 * Lets you set the inner width of an element which includes padding.
 *
 *      $("#foo").innerWidth(100); //sets inner width
 *      $("#foo").outerWidth(); // returns inner width
 *
 * Setting inner width adjusts the width of the element.
 *
 * @param {Number} [height] 
 */
"Width", 
/**
 * @function jQuery.fn.outerHeight
 * @parent jQuery.dimensions
 *
 * Lets you set the outer height of an object where: <br/> 
 *
 *      outerHeight = height + padding + border + (margin)
 *
 * And can be used like:
 *
 *      $("#foo").outerHeight(100); //sets outer height
 *      $("#foo").outerHeight(100, true); //uses margins
 *      $("#foo").outerHeight(); //returns outer height
 *      $("#foo").outerHeight(true); //returns outer height + margins
 *
 * When setting the outerHeight, it adjusts the height of the element.
 *
 * @param {Number|Boolean} [height] If a number is provided -> sets the outer height of the object.<br/>
 * If true is given ->  returns the outer height and includes margins.<br/>
 * If no value is given -> returns the outer height without margin.
 * @param {Boolean} [includeMargin] Makes setting the outerHeight adjust for margin.
 * @return {jQuery|Number} If you are setting the value, returns the jQuery wrapped elements.
 * Otherwise, returns outerHeight in pixels.
 */
height: 
/**
 * @function jQuery.fn.innerHeight
 * @parent jQuery.dimensions
 *
 * Lets you read and set the inner height of an element which includes the padding.
 *
 *      $("#foo").innerHeight(100); //sets inner height
 *      $("#foo").outerHeight(); // returns inner height
 *
 * Setting inner width adjusts the height of the element.
 *
 * @param {Number} [height]
 */
"Height" }, function(lower, Upper) {

    //used to get the padding and border for an element in a given direction
    getBoxes[lower] = function(el, boxes) {
        var val = 0;
        if (!weird.test(el.nodeName)) {
            //make what to check for ....
            var myChecks = [];
            $.each(checks[lower], function() {
                var direction = this;
                $.each(boxes, function(name, val) {
                    if (val)
                        myChecks.push(name + direction+ (name == 'border' ? "Width" : "") );
                })
            })
            $.each($.styles(el, myChecks), function(name, value) {
                val += (parseFloat(value) || 0);
            })
        }
        return val;
    }

    //getter / setter
    $.fn["outer" + Upper] = function(v, margin) {
        var first = this[0];
		if (typeof v == 'number') {
            first && this[lower](v - getBoxes[lower](first, {padding: true, border: true, margin: margin}))
            return this;
        } else {
            return first ? checks["oldOuter" + Upper].call(this, v) : null;
        }
    }
    $.fn["inner" + Upper] = function(v) {
        var first = this[0];
		if (typeof v == 'number') {
            first&& this[lower](v - getBoxes[lower](first, { padding: true }))
            return this;
        } else {
            return first ? checks["oldInner" + Upper].call(this, v) : null;
        }
    }
    //provides animations
	var animate = function(boxes){
		return function(fx){
			if (fx.state == 0) {
	            fx.start = $(fx.elem)[lower]();
	            fx.end = fx.end - getBoxes[lower](fx.elem,boxes);
	        }
	        fx.elem.style[lower] = (fx.pos * (fx.end - fx.start) + fx.start) + "px"
		}
	}
    $.fx.step["outer" + Upper] = animate({padding: true, border: true})
	
	$.fx.step["outer" + Upper+"Margin"] =  animate({padding: true, border: true, margin: true})
	
	$.fx.step["inner" + Upper] = animate({padding: true})

})

})
