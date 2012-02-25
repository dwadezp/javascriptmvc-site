steal('jquery', function(){
		var getWindow = function( element ) {
			return element.defaultView || element.ownerDocument.defaultView || element.ownerDocument.parentWindow
		},
		// is an id value something that is unlikely to change
		idOk = function(id){
			return (parseInt(id.match(/[0-9]+/)) < 100 && id.length < 15)
		},
		cur = function(selector){
			var selPath = selector.id || selector.parent;
			return trim(selPath +" "+(selector.className || selector.nodeName)+(selector.contains || ""));
			return trim((selector.id || "")+" "+(selector.className || selector.nodeName)+(selector.contains || ""));
		},
		clean = function(part){
			return part.replace(/\./g,"\\.").replace(/\:/,"\\:")
		},
		trim = function(string){
			return string.replace(/^\s*/, "").replace(/\s*$/, "");
		},
		classOrNodeName = function(elem){
			if(elem.className) return "."+clean(elem.className.split(" ")[0]);
			return elem.nodeName.toLowerCase();
		};
		$.fn.prettySelector= function(useText) {
			var target = this[0];
			if(!target){
				return null
			}
			var selector = {
				nodeName : target.nodeName.toLowerCase()
			};
			
			if(selector.nodeName == '#document'){ // For some reason (document).nodeName returns #document
				return 'document';
			}
			//always try to get an id
			if(!useText && target.id && idOk(target.id)){
				return "#"+clean(target.id);
			}
			
			var parent = target.parentNode;
			while(parent){
				if(parent.id && idOk(parent.id)){
					selector.id = "#"+clean(parent.id)
					break;
				}else{
					if(typeof selector.parent == 'undefined'){
						selector.parent = "";
					}
					if(parent.nodeName.toLowerCase() == 'body'){
						break;
					} else {
						selector.parent = classOrNodeName(parent) + " " + selector.parent;
					}
					parent = parent.parentNode
				}
			}
			
			if(useText){
				selector.contains = ":contains("+useText+")";
			}
			if(target.className){
				selector.className = "."+clean(target.className.split(" ")[0]);
			}
			var current = cur(selector)
				others = $(current, getWindow(target).document); //jquery should take care of the #foo if there
			
			if(others.length > 1){
				
				var index = others.index($(target));
				if(index !== -1){
					return (current+":eq("+index+")");
				}

			} 
			return current;
		};
	})
