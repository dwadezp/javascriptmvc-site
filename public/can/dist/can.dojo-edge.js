(function(d,q,i){define("can/dojo",["dojo/query","dojo/NodeList-dom","dojo/NodeList-traverse"],function(){function I(a,b){var c=a[m],c=c&&o[c];return b===i?c||w(a):c&&c[b]}function w(a,b,c){a=a[m]||(a[m]=++x);a=o[a]||(o[a]={});b!==i&&(a[b]=c);return a}function I(a,b){var c=a[m],c=c&&o[c];return b===i?c||w(a):c&&c[b]}function w(a,b,c){a=a[m]||(a[m]=++x);a=o[a]||(o[a]={});b!==i&&(a[b]=c);return a}function I(a,b){var c=a[m],c=c&&o[c];return b===i?c||w(a):c&&c[b]}function w(a,b,c){a=a[m]||(a[m]=++x);
a=o[a]||(o[a]={});b!==i&&(a[b]=c);return a}d.addEvent=function(a,b){this.__bindEvents||(this.__bindEvents={});var c=a.split(".")[0];this.__bindEvents[c]||(this.__bindEvents[c]=[]);this.__bindEvents[c].push({handler:b,name:a});return this};d.removeEvent=function(a,b){if(this.__bindEvents){for(var c=0,d=this.__bindEvents[a.split(".")[0]],e;c<d.length;)e=d[c],b&&e.handler===b||!b&&e.name===a?d.splice(c,1):c++;return this}};d.dispatch=function(a){if(this.__bindEvents){var b=this.__bindEvents[a.type.split(".")[0]]||
[],c=this,f=[a].concat(a.data||[]);d.each(b,function(b,d){a.data=f.slice(1);d.handler.apply(c,f)})}};require(["dojo","dojo/query","plugd/trigger","dojo/NodeList-dom"]);d.trim=function(a){return a&&dojo.trim(a)};d.makeArray=function(a){array=[];dojo.forEach(a,function(a){array.push(a)});return array};d.isArray=dojo.isArray;d.inArray=function(a,b){return dojo.indexOf(b,a)};d.map=function(a,b){return dojo.map(d.makeArray(a||[]),b)};d.each=function(a,b){var c;if("number"==typeof a.length&&a.pop)for(c=
0;c<a.length&&!1!==b(c,a[c]);c++);else for(c in a)if(!1===b(c,a[c]))break;return a};d.extend=function(a){if(!0===a){var b=d.makeArray(arguments);b.shift();return dojo.mixin.apply(dojo,b)}return dojo.mixin.apply(dojo,arguments)};d.param=function(a){return dojo.objectToQuery(a)};d.isEmptyObject=function(a){for(var b in a)break;return b===i};d.proxy=function(a,b){return dojo.hitch(b,a)};d.isFunction=function(a){return dojo.isFunction(a)};var J=0,y=function(a,b,c){a.forEach(function(a){var a=new dojo.NodeList(a),
e=d.data(a,"events");e||d.data(a,"events",e={});e[b]||(e[b]={});c.__bindingsIds===i&&(c.__bindingsIds=J++);e[b][c.__bindingsIds]=a.on(b,c)[0]})},z=function(a,b,c){a.forEach(function(a){var a=new dojo.NodeList(a),a=d.data(a,"events"),e=a[b];dojo.disconnect(e[c.__bindingsIds]);delete e[c.__bindingsIds];d.isEmptyObject(e)&&delete a[b];d.isEmptyObject(a)})};d.bind=function(a,b){this.bind&&this.bind!==d.bind?this.bind(a,b):this.on||this.nodeType?y(new dojo.NodeList(this),a,b):this.addEvent?this.addEvent(a,
b):d.addEvent.call(this,a,b);return this};d.unbind=function(a,b){this.unbind&&this.unbind!==d.unbind?this.unbind(a,b):this.on||this.nodeType?z(new dojo.NodeList(this),a,b):d.removeEvent.call(this,a,b);return this};d.trigger=function(a,b,c,f){if(a.trigger){if(!1===f)var e=a.on(b,function(a){a.stopPropagation();dojo.disconnect(e)});a.trigger(b,c)}else"string"===typeof b&&(b={type:b}),b.data=c,d.dispatch.call(a,b)};d.delegate=function(a,b,c){this.on||this.nodeType?y(new dojo.NodeList(this),a+":"+b,c):
this.delegate&&this.delegate(a,b,c);return this};d.undelegate=function(a,b,c){this.on||this.nodeType?z(new dojo.NodeList(this),a+":"+b,c):this.undelegate&&this.undelegate(a,b,c);return this};var r=function(a,b){for(var c in a)b[c]="function"==typeof b[c]?function(){a[c].apply(a,arguments)}:c[a]};d.ajax=function(a){var b=d.capitalize((a.type||"get").toLowerCase()),b=dojo["xhr"+b],c=a.success,f=a.error,e=new d.Deferred,a=b({url:a.url,handleAs:a.dataType,sync:!a.async,headers:a.headers,content:a.data});
a.then(function(a){r(g,e);e.resolve(a,"success",g);c&&c(a,"success",g)},function(){r(g,e);e.reject(g,"error");f(g,"error")});var g=a.ioArgs.xhr;r(g,e);return e};d.$=function(a){return a===q?q:"string"===typeof a?dojo.query(a):new dojo.NodeList(a)};d.buildFragment=function(a,b){var c=dojo.toDom(a[0],b.length&&b[0].ownerDocument);if(11!==c.nodeType){var d=document.createDocumentFragment();d.appendChild(c);c=d}return{fragment:c}};d.append=function(a,b){return a.forEach(function(a){dojo.place(b,a)})};
var o={},x=d.uuid=+new Date,m=d.expando="can"+x,A=function(a){d.trigger(new dojo.NodeList(a),"destroyed",[],!1);for(var b=0,c;(c=a[b])!==i;b++)delete o[c[m]]};d.data=function(a,b,c){return c===i?0==a.length?i:I(a[0],b):a.forEach(function(a){w(a,b,c)})};dojo.empty=function(){for(var a;a=node.lastChild;)dojo.destroy(a)};var K=dojo.destroy;dojo.destroy=function(a){a=dojo.byId(a);A([a]);a.getElementsByTagName&&A(a.getElementsByTagName("*"));return K.apply(dojo,arguments)};d.addClass=function(a,b){return a.addClass(b)};
d.remove=function(a){a.forEach(function(a){dojo.destroy(a)})};d.get=function(a,b){return a[b]};define("plugd/trigger",["dojo"],function(a){var b=a.isFunction,c=/mouse(enter|leave)/,d=function(a,b){return"mouse"+("enter"==b?"over":"out")},e=a._mixin,g=a.doc.createEvent?function(b,g,l){var Q=a.doc.createEvent("HTMLEvents"),g=g.replace(c,d);Q.initEvent(g,"destroyed"===g?!1:!0,!0);l&&e(Q,l);b.dispatchEvent(Q)}:function(c,d,f){var g="on"+d,i=!1;d.toLowerCase();try{c.fireEvent(g)}catch(k){d=e({type:d,target:c,
faux:!0,_stopper:function(){i=this.cancelBubble}},f);for(b(c[g])&&c[g](d);!i&&c!==a.doc&&c.parentNode;)c=c.parentNode,b(c[g])&&c[g](d)}};a._trigger=function(b,c,d){b=a.byId(b);c=c&&"on"==c.slice(0,2)?c.slice(2):c;g(b,c,d)};a.trigger=function(c,d,f){return b(c)||b(d)||b(c[d])?a.hitch.apply(a,arguments)():a._trigger.apply(a,arguments)};a.NodeList.prototype.trigger=a.NodeList._adaptAsForEach(a._trigger);a._Node&&!a._Node.prototype.trigger&&a.extend(a._Node,{trigger:function(b,c){a._trigger(this,b,c);
return this}});return a.trigger});require(["dojo","dojo/query","plugd/trigger","dojo/NodeList-dom"]);d.trim=function(a){return a&&dojo.trim(a)};d.makeArray=function(a){array=[];dojo.forEach(a,function(a){array.push(a)});return array};d.isArray=dojo.isArray;d.inArray=function(a,b){return dojo.indexOf(b,a)};d.map=function(a,b){return dojo.map(d.makeArray(a||[]),b)};d.each=function(a,b){var c;if("number"==typeof a.length&&a.pop)for(c=0;c<a.length&&!1!==b(c,a[c]);c++);else for(c in a)if(!1===b(c,a[c]))break;
return a};d.extend=function(a){if(!0===a){var b=d.makeArray(arguments);b.shift();return dojo.mixin.apply(dojo,b)}return dojo.mixin.apply(dojo,arguments)};d.param=function(a){return dojo.objectToQuery(a)};d.isEmptyObject=function(a){for(var b in a)break;return b===i};d.proxy=function(a,b){return dojo.hitch(b,a)};d.isFunction=function(a){return dojo.isFunction(a)};J=0;y=function(a,b,c){a.forEach(function(a){var a=new dojo.NodeList(a),e=d.data(a,"events");e||d.data(a,"events",e={});e[b]||(e[b]={});c.__bindingsIds===
i&&(c.__bindingsIds=J++);e[b][c.__bindingsIds]=a.on(b,c)[0]})};z=function(a,b,c){a.forEach(function(a){var a=new dojo.NodeList(a),a=d.data(a,"events"),e=a[b];dojo.disconnect(e[c.__bindingsIds]);delete e[c.__bindingsIds];d.isEmptyObject(e)&&delete a[b];d.isEmptyObject(a)})};d.bind=function(a,b){this.bind&&this.bind!==d.bind?this.bind(a,b):this.on||this.nodeType?y(new dojo.NodeList(this),a,b):this.addEvent?this.addEvent(a,b):d.addEvent.call(this,a,b);return this};d.unbind=function(a,b){this.unbind&&
this.unbind!==d.unbind?this.unbind(a,b):this.on||this.nodeType?z(new dojo.NodeList(this),a,b):d.removeEvent.call(this,a,b);return this};d.trigger=function(a,b,c,f){if(a.trigger){if(!1===f)var e=a.on(b,function(a){a.stopPropagation();dojo.disconnect(e)});a.trigger(b,c)}else"string"===typeof b&&(b={type:b}),b.data=c,d.dispatch.call(a,b)};d.delegate=function(a,b,c){this.on||this.nodeType?y(new dojo.NodeList(this),a+":"+b,c):this.delegate&&this.delegate(a,b,c);return this};d.undelegate=function(a,b,c){this.on||
this.nodeType?z(new dojo.NodeList(this),a+":"+b,c):this.undelegate&&this.undelegate(a,b,c);return this};r=function(a,b){for(var c in a)b[c]="function"==typeof b[c]?function(){a[c].apply(a,arguments)}:c[a]};d.ajax=function(a){var b=d.capitalize((a.type||"get").toLowerCase()),b=dojo["xhr"+b],c=a.success,f=a.error,e=new d.Deferred,a=b({url:a.url,handleAs:a.dataType,sync:!a.async,headers:a.headers,content:a.data});a.then(function(a){r(g,e);e.resolve(a,"success",g);c&&c(a,"success",g)},function(){r(g,
e);e.reject(g,"error");f(g,"error")});var g=a.ioArgs.xhr;r(g,e);return e};d.$=function(a){return a===q?q:"string"===typeof a?dojo.query(a):new dojo.NodeList(a)};d.buildFragment=function(a,b){var c=dojo.toDom(a[0],b.length&&b[0].ownerDocument);if(11!==c.nodeType){var d=document.createDocumentFragment();d.appendChild(c);c=d}return{fragment:c}};d.append=function(a,b){return a.forEach(function(a){dojo.place(b,a)})};o={};x=d.uuid=+new Date;m=d.expando="can"+x;A=function(a){d.trigger(new dojo.NodeList(a),
"destroyed",[],!1);for(var b=0,c;(c=a[b])!==i;b++)delete o[c[m]]};d.data=function(a,b,c){return c===i?0==a.length?i:I(a[0],b):a.forEach(function(a){w(a,b,c)})};dojo.empty=function(){for(var a;a=node.lastChild;)dojo.destroy(a)};K=dojo.destroy;dojo.destroy=function(a){a=dojo.byId(a);A([a]);a.getElementsByTagName&&A(a.getElementsByTagName("*"));return K.apply(dojo,arguments)};d.addClass=function(a,b){return a.addClass(b)};d.remove=function(a){a.forEach(function(a){dojo.destroy(a)})};d.get=function(a,
b){return a[b]};require(["dojo","dojo/query","plugd/trigger","dojo/NodeList-dom"]);d.trim=function(a){return a&&dojo.trim(a)};d.makeArray=function(a){array=[];dojo.forEach(a,function(a){array.push(a)});return array};d.isArray=dojo.isArray;d.inArray=function(a,b){return dojo.indexOf(b,a)};d.map=function(a,b){return dojo.map(d.makeArray(a||[]),b)};d.each=function(a,b){var c;if("number"==typeof a.length&&a.pop)for(c=0;c<a.length&&!1!==b(c,a[c]);c++);else for(c in a)if(!1===b(c,a[c]))break;return a};
d.extend=function(a){if(!0===a){var b=d.makeArray(arguments);b.shift();return dojo.mixin.apply(dojo,b)}return dojo.mixin.apply(dojo,arguments)};d.param=function(a){return dojo.objectToQuery(a)};d.isEmptyObject=function(a){for(var b in a)break;return b===i};d.proxy=function(a,b){return dojo.hitch(b,a)};d.isFunction=function(a){return dojo.isFunction(a)};J=0;y=function(a,b,c){a.forEach(function(a){var a=new dojo.NodeList(a),e=d.data(a,"events");e||d.data(a,"events",e={});e[b]||(e[b]={});c.__bindingsIds===
i&&(c.__bindingsIds=J++);e[b][c.__bindingsIds]=a.on(b,c)[0]})};z=function(a,b,c){a.forEach(function(a){var a=new dojo.NodeList(a),a=d.data(a,"events"),e=a[b];dojo.disconnect(e[c.__bindingsIds]);delete e[c.__bindingsIds];d.isEmptyObject(e)&&delete a[b];d.isEmptyObject(a)})};d.bind=function(a,b){this.bind&&this.bind!==d.bind?this.bind(a,b):this.on||this.nodeType?y(new dojo.NodeList(this),a,b):this.addEvent?this.addEvent(a,b):d.addEvent.call(this,a,b);return this};d.unbind=function(a,b){this.unbind&&
this.unbind!==d.unbind?this.unbind(a,b):this.on||this.nodeType?z(new dojo.NodeList(this),a,b):d.removeEvent.call(this,a,b);return this};d.trigger=function(a,b,c,f){if(a.trigger){if(!1===f)var e=a.on(b,function(a){a.stopPropagation();dojo.disconnect(e)});a.trigger(b,c)}else"string"===typeof b&&(b={type:b}),b.data=c,d.dispatch.call(a,b)};d.delegate=function(a,b,c){this.on||this.nodeType?y(new dojo.NodeList(this),a+":"+b,c):this.delegate&&this.delegate(a,b,c);return this};d.undelegate=function(a,b,c){this.on||
this.nodeType?z(new dojo.NodeList(this),a+":"+b,c):this.undelegate&&this.undelegate(a,b,c);return this};r=function(a,b){for(var c in a)b[c]="function"==typeof b[c]?function(){a[c].apply(a,arguments)}:c[a]};d.ajax=function(a){var b=d.capitalize((a.type||"get").toLowerCase()),b=dojo["xhr"+b],c=a.success,f=a.error,e=new d.Deferred,a=b({url:a.url,handleAs:a.dataType,sync:!a.async,headers:a.headers,content:a.data});a.then(function(a){r(g,e);e.resolve(a,"success",g);c&&c(a,"success",g)},function(){r(g,
e);e.reject(g,"error");f(g,"error")});var g=a.ioArgs.xhr;r(g,e);return e};d.$=function(a){return a===q?q:"string"===typeof a?dojo.query(a):new dojo.NodeList(a)};d.buildFragment=function(a,b){var c=dojo.toDom(a[0],b.length&&b[0].ownerDocument);if(11!==c.nodeType){var d=document.createDocumentFragment();d.appendChild(c);c=d}return{fragment:c}};d.append=function(a,b){return a.forEach(function(a){dojo.place(b,a)})};o={};x=d.uuid=+new Date;m=d.expando="can"+x;A=function(a){d.trigger(new dojo.NodeList(a),
"destroyed",[],!1);for(var b=0,c;(c=a[b])!==i;b++)delete o[c[m]]};d.data=function(a,b,c){return c===i?0==a.length?i:I(a[0],b):a.forEach(function(a){w(a,b,c)})};dojo.empty=function(){for(var a;a=node.lastChild;)dojo.destroy(a)};K=dojo.destroy;dojo.destroy=function(a){a=dojo.byId(a);A([a]);a.getElementsByTagName&&A(a.getElementsByTagName("*"));return K.apply(dojo,arguments)};d.addClass=function(a,b){return a.addClass(b)};d.remove=function(a){a.forEach(function(a){dojo.destroy(a)})};d.get=function(a,
b){return a[b]};var D=function(a){if(!(this instanceof D))return new D;this._doneFuncs=[];this._failFuncs=[];this._resultArgs=null;this._status="";a&&a.call(this,this)};d.Deferred=D;d.when=D.when=function(){var a=d.makeArray(arguments);if(2>a.length){var b=a[0];return b&&d.isFunction(b.isResolved)&&d.isFunction(b.isRejected)?b:D().resolve(b)}var c=D(),f=0,e=[];d.each(a,function(b,d){d.done(function(){e[b]=2>arguments.length?arguments[0]:arguments;++f==a.length&&c.resolve.apply(c,e)}).fail(function(){c.reject(arguments)})});
return c};var B=function(a,b){return function(c){var d=this._resultArgs=1<arguments.length?arguments[1]:[];return this.exec(c,this[a],d,b)}},ba=function(a,b){return function(){var c=this;d.each(arguments,function(d,e,g){e&&(e.constructor===Array?g.callee.apply(c,e):(c._status===b&&e.apply(c,c._resultArgs||[]),c[a].push(e)))});return this}};d.extend(D.prototype,{pipe:function(a,b){var c=d.Deferred();this.done(function(){c.resolve(a.apply(this,arguments))});this.fail(function(){b?c.reject(b.apply(this,
arguments)):c.reject.apply(c,arguments)});return c},resolveWith:B("_doneFuncs","rs"),rejectWith:B("_failFuncs","rj"),done:ba("_doneFuncs","rs"),fail:ba("_failFuncs","rj"),always:function(){var a=d.makeArray(arguments);a.length&&a[0]&&this.done(a[0]).fail(a[0]);return this},then:function(){var a=d.makeArray(arguments);1<a.length&&a[1]&&this.fail(a[1]);a.length&&a[0]&&this.done(a[0]);return this},isResolved:function(){return"rs"===this._status},isRejected:function(){return"rj"===this._status},reject:function(){return this.rejectWith(this,
arguments)},resolve:function(){return this.resolveWith(this,arguments)},exec:function(a,b,c,f){if(""!==this._status)return this;this._status=f;d.each(b,function(b,d){d.apply(a,c)});return this}});var ya=/==/,za=/([A-Z]+)([A-Z][a-z])/g,Aa=/([a-z\d])([A-Z])/g,Ba=/([a-z\d])([A-Z])/g,ca=/\{([^\}]+)\}/g,u=/"/g,Ca=/'/g;d.extend(d,{esc:function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(u,"&#34;").replace(Ca,"&#39;")},getObject:function(a,b,c){var a=a?a.split("."):
[],f=a.length,e,g=0,h,j,b=d.isArray(b)?b:[b||q];if(!f)return b[0];for(;e=b[g++];){for(j=0;j<f-1&&/^f|^o/.test(typeof e);j++)e=a[j]in e?e[a[j]]:c&&(e[a[j]]={});if(/^f|^o/.test(typeof e)&&(h=a[j]in e?e[a[j]]:c&&(e[a[j]]={}),h!==i))return!1===c&&delete e[a[j]],h}},capitalize:function(a){return a.charAt(0).toUpperCase()+a.slice(1)},underscore:function(a){return a.replace(ya,"/").replace(za,"$1_$2").replace(Aa,"$1_$2").replace(Ba,"_").toLowerCase()},sub:function(a,b,c){var f=[];f.push(a.replace(ca,function(a,
g){var h=d.getObject(g,b,c);return/^f|^o/.test(typeof h)?(f.push(h),""):""+h}));return 1>=f.length?f[0]:f},replacer:ca,undHash:/_|-/});var R=0;d.Construct=function(){if(arguments.length)return d.Construct.extend.apply(d.Construct,arguments)};d.extend(d.Construct,{newInstance:function(){var a=this.instance(),b;a.setup&&(b=a.setup.apply(a,arguments));a.init&&a.init.apply(a,b||arguments);return a},_inherit:function(a,b,c){d.extend(c||a,a||{})},setup:function(a){this.defaults=d.extend(!0,{},a.defaults,
this.defaults)},instance:function(){R=1;var a=new this;R=0;return a},extend:function(a,b,c){function f(){if(!R)return this.constructor!==f&&arguments.length?arguments.callee.extend.apply(arguments.callee,arguments):this.constructor.newInstance.apply(this.constructor,arguments)}"string"!=typeof a&&(c=b,b=a,a=null);c||(c=b,b=null);var c=c||{},e=this.prototype,g,h,j,l;l=this.instance();this._inherit(c,e,l);for(g in this)this.hasOwnProperty(g)&&(f[g]=this[g]);this._inherit(b,this,f);if(a){j=a.split(".");
h=j.pop();j=e=d.getObject(j.join("."),q,!0);var i=d.underscore(a.replace(/\./g,"_")),xa=d.underscore(h);e[h]=f}d.extend(f,{prototype:l,namespace:j,shortName:h,_shortName:xa,_fullName:i,constructor:f,fullName:a});f.prototype.constructor=f;h=[this].concat(d.makeArray(arguments));l=f.setup.apply(f,h);f.init&&f.init.apply(f,l||h);return f}});var v=function(a){return a&&"object"===typeof a&&!(a instanceof Date)},S=function(a,b){return d.each(a,function(a,d){d&&d.unbind&&d.unbind("change"+b)})},T=function(a,
b,c){a instanceof E?S([a],c._namespace):a=d.isArray(a)?new E.List(a):new E(a);a.bind("change"+c._namespace,function(f,e){var g=d.makeArray(arguments),f=g.shift();g[0]="*"===b?c.indexOf(a)+"."+g[0]:b+"."+g[0];d.trigger(c,f,g)});return a},da=0,F=i,ea=function(){if(!F)return F=[],!0},p=function(a,b,c){if(!a._init)if(F)F.push([a,{type:b,batchNum:fa},c]);else return d.trigger(a,b,c)},fa=1,ga=function(){var a=F.slice(0);F=i;fa++;d.each(a,function(a,c){d.trigger.apply(d,c)})},N=function(a,b,c){a.each(function(a,
e){c[a]=v(e)&&d.isFunction(e[b])?e[b]():e});return c},B=function(a){return function(){return d[a].apply(this,arguments)}},L=B("addEvent"),B=B("removeEvent"),U=function(a){return d.isArray(a)?a:(""+a).split(".")},E=d.Construct("can.Observe",{setup:function(){d.Construct.setup.apply(this,arguments)},bind:L,unbind:B,id:"id"},{setup:function(a){this._data={};this._namespace=".observe"+ ++da;this._init=1;this.attr(a);delete this._init},attr:function(a,b){if(~"ns".indexOf((typeof a).charAt(0))){if(b===
i)return E.__reading&&E.__reading(this,a),this._get(a);this._set(a,b);return this}return this._attrs(a,b)},each:function(){return d.each.apply(i,[this.__get()].concat(d.makeArray(arguments)))},removeAttr:function(a){var a=U(a),b=a.shift(),c=this._data[b];if(a.length)return c.removeAttr(a);delete this._data[b];b in this.constructor.prototype||delete this[b];p(this,"change",[b,"remove",i,c]);p(this,b,i,c);return c},_get:function(a){var a=U(a),b=this.__get(a.shift());return a.length?b?b._get(a):i:b},
__get:function(a){return a?this._data[a]:this._data},_set:function(a,b){var c=U(a),d=c.shift(),e=this.__get(d);if(v(e)&&c.length)e._set(c,b);else{if(c.length)throw"can.Observe: Object does not exist";this.__convert&&(b=this.__convert(d,b));this.__set(d,b,e)}},__set:function(a,b,c){if(b!==c){var d=this.__get().hasOwnProperty(a)?"set":"add";this.___set(a,v(b)?T(b,a,this):b);p(this,"change",[a,d,b,c]);p(this,a,b,c);c&&S([c],this._namespace)}},___set:function(a,b){this._data[a]=b;a in this.constructor.prototype||
(this[a]=b)},bind:L,unbind:B,serialize:function(){return N(this,"serialize",{})},_attrs:function(a,b){if(a===i)return N(this,"attr",{});var a=d.extend(!0,{},a),c,f=ea(),e=this,g;this.each(function(c,d){g=a[c];g===i?b&&e.removeAttr(c):(v(d)&&v(g)?d.attr(g,b):d!=g&&e._set(c,g),delete a[c])});for(c in a)g=a[c],this._set(c,g);f&&ga();return this}}),Da=[].splice,V=E("can.Observe.List",{setup:function(a,b){this.length=0;this._namespace=".observe"+ ++da;this._init=1;this.bind("change",d.proxy(this._changes,
this));this.push.apply(this,d.makeArray(a||[]));d.extend(this,b);delete this._init},_changes:function(a,b,c,d,e){~b.indexOf(".")||("add"===c?(p(this,c,[d,+b]),p(this,"length",[this.length])):"remove"===c?(p(this,c,[e,+b]),p(this,"length",[this.length])):p(this,c,[d,+b]))},__get:function(a){return a?this[a]:this},___set:function(a,b){this[a]=b;+a>=this.length&&(this.length=+a+1)},serialize:function(){return N(this,"serialize",[])},splice:function(a,b){var c=d.makeArray(arguments),f;for(f=2;f<c.length;f++){var e=
c[f];v(e)&&(c[f]=T(e,"*",this))}b===i&&(b=c[1]=this.length-a);f=Da.apply(this,c);0<b&&(p(this,"change",[""+a,"remove",i,f]),S(f,this._namespace));2<c.length&&p(this,"change",[""+a,"add",c.slice(2),f]);return f},_attrs:function(a,b){if(a===i)return N(this,"attr",[]);var a=a.slice(0),c=Math.min(a.length,this.length),d=ea(),e;for(e=0;e<c;e++){var g=this[e],h=a[e];v(g)&&v(h)?g.attr(h,b):g!=h&&this._set(e,h)}a.length>this.length?this.push(a.slice(this.length)):a.length<this.length&&b&&this.splice(a.length);
d&&ga()}});d.each({push:"length",unshift:0},function(a,b){V.prototype[a]=function(){for(var c=arguments[0]&&d.isArray(arguments[0])?arguments[0]:d.makeArray(arguments),f=b?this.length:0,e=0;e<c.length;e++){var g=c[e];v(g)&&(c[e]=T(g,"*",this))}e=[][a].apply(this,c);(!this.comparator||!c.length)&&p(this,"change",[""+f,"add",c,i]);return e}});d.each({pop:"length",shift:0},function(a,b){V.prototype[a]=function(){var c=arguments[0]&&d.isArray(arguments[0])?arguments[0]:d.makeArray(arguments),f=b&&this.length?
this.length-1:0,c=[][a].apply(this,c);p(this,"change",[""+f,"remove",i,[c]]);c&&c.unbind&&c.unbind("change"+this._namespace);return c}});V.prototype.indexOf=[].indexOf||function(a){return d.inArray(a,this)};var Ea=function(a,b,c){var f=new d.Deferred;a.then(function(){arguments[0]=b[c](arguments[0]);f.resolve.apply(f,arguments)},function(){f.resolveWith.apply(this,arguments)});return f},Fa=0,ha=/change.observe\d+/,ia=function(a,b,c,d,e){var g;g=[a.serialize()];var h=a.constructor,j;"destroy"==b&&
g.shift();"create"!==b&&g.unshift(a[a.constructor.id]);j=h[b].apply(h,g);g=j.pipe(function(c){a[e||b+"d"](c,j);return a});j.abort&&(g.abort=function(){j.abort()});return g.then(c,d)},Ga={create:{url:"_shortName",type:"post"},update:{data:function(a,b){var b=b||{},c=this.id;b[c]&&b[c]!==a&&(b["new"+d.capitalize(a)]=b[c],delete b[c]);b[c]=a;return b},type:"put"},destroy:{type:"delete",data:function(a){return{}[this.id]=a}},findAll:{url:"_shortName"},findOne:{}},Ha=function(a,b){return function(c){var c=
a.data?a.data.apply(this,arguments):c,f=b||this[a.url||"_url"],e=c,g=a.type||"get";if("string"==typeof f){var h=f.split(" "),f={url:h.pop()};h.length&&(f.type=h.pop())}f.data="object"==typeof e&&!d.isArray(e)?d.extend(f.data||{},e):e;f.url=d.sub(f.url,f.data,!0);return d.ajax(d.extend({type:g||"post",dataType:"json",success:void 0,error:void 0},f))}};d.Observe("can.Model",{setup:function(){d.Observe.apply(this,arguments);if(this!==d.Model){var a=this;d.each(Ga,function(b,f){d.isFunction(a[b])||(a[b]=
Ha(f,a[b]))});var b=d.proxy(this._clean,a);d.each({findAll:"models",findOne:"model"},function(c,d){var e=a[c];a[c]=function(c,h,j){a._reqs++;return Ea(e.call(a,c),a,d).then(h,j).then(b,b)}});"can.Model"==a.fullName&&(a.fullName="Model"+ ++Fa);this.store={};this._reqs=0;this._url=this._shortName+"/{"+this.id+"}"}},_clean:function(){this._reqs--;if(!this._reqs)for(var a in this.store)this.store[a]._bindings||delete this.store[a]},models:function(a){if(a){var b=this,c=new (b.List||ja),f=d.isArray(a),
e=a instanceof ja,e=f?a:e?a.serialize():a.data;d.each(e,function(a,d){c.push(b.model(d))});f||d.each(a,function(a,b){"data"!==a&&(c[a]=b)});return c}},model:function(a){if(a){a instanceof this&&(a=a.serialize());var b=this.store[a.id]||new this(a);this._reqs&&(this.store[a.id]=b);return b}}},{isNew:function(){var a=this[this.constructor.id];return!(a||0===a)},save:function(a,b){return ia(this,this.isNew()?"create":"update",a,b)},destroy:function(a,b){return ia(this,"destroy",a,b,"destroyed")},bind:function(a){ha.test(a)||
(this._bindings||(this.constructor.store[this[this.constructor.id]]=this,this._bindings=0),this._bindings++);return d.Observe.prototype.bind.apply(this,arguments)},unbind:function(a){ha.test(a)||(this._bindings--,this._bindings||delete this.constructor.store[this[this.constructor.id]]);return d.Observe.prototype.unbind.apply(this,arguments)},___set:function(a,b){d.Observe.prototype.___set.call(this,a,b);a===this.constructor.id&&this._bindings&&(this.constructor.store[this[this.constructor.id]]=this)}});
d.each(["created","updated","destroyed"],function(a,b){d.Model.prototype[b]=function(a){var f=this.constructor;a&&"object"==typeof a&&this.attr(a.attr?a.attr():a);d.trigger(this,b);d.trigger(this,"change",b);d.trigger(f,b,this)}});var ja=d.Observe.List("can.Model.List",{setup:function(){d.Observe.List.prototype.setup.apply(this,arguments);var a=this;this.bind("change",function(b,c){/\w+\.destroyed/.test(c)&&a.splice(a.indexOf(b.target),1)})}}),Ia=/^\d+$/,Ja=/([^\[\]]+)|(\[\])/g,Ka=/([^?#]*)(#.*)?$/,
ka=function(a){return decodeURIComponent(a.replace(/\+/g," "))};d.extend(d,{deparam:function(a){var b={};a&&Ka.test(a)&&(a=a.split("&"),d.each(a,function(a,d){var e=d.split("="),g=ka(e.shift()),h=ka(e.join("="));current=b;for(var e=g.match(Ja),g=0,j=e.length-1;g<j;g++)current[e[g]]||(current[e[g]]=Ia.test(e[g+1])||"[]"==e[g+1]?[]:{}),current=current[e[g]];lastPart=e.pop();"[]"==lastPart?current.push(h):current[lastPart]=h}));return b}});var la=/\:([\w\.]+)/g,ma=/^(?:&[^=]+=[^&]*)+/,La=function(a){return d.map(a,
function(a,c){return("className"===c?"class":c)+'="'+d.esc(a)+'"'}).join(" ")},na=!0,W=q.location,C=d.each,s=d.extend;d.route=function(a,b){var c=[],f=a.replace(la,function(a,b){c.push(b);return"([^\\/\\&]*)"});d.route.routes[a]={test:RegExp("^"+f+"($|&)"),route:a,names:c,defaults:b||{},length:a.split("/").length};return d.route};s(d.route,{param:function(a){delete a.route;var b,c=0,f,e=a.route;(!e||!(b=d.route.routes[e]))&&C(d.route.routes,function(d,e){a:{for(var g=0,h=0;h<e.names.length;h++){if(!a.hasOwnProperty(e.names[h])){f=
-1;break a}g++}f=g}f>c&&(b=e,c=f)});if(b){var g=s({},a),e=b.route.replace(la,function(c,d){delete g[d];return a[d]===b.defaults[d]?"":encodeURIComponent(a[d])}),h;C(b.defaults,function(a,b){g[a]===b&&delete g[a]});h=d.param(g);return e+(h?"&"+h:"")}return d.isEmptyObject(a)?"":"&"+d.param(a)},deparam:function(a){var b={length:-1};C(d.route.routes,function(c,d){d.test.test(a)&&d.length>b.length&&(b=d)});if(-1<b.length){var c=a.match(b.test),f=c.shift(),e=(f=a.substr(f.length-("&"===c[c.length-1]?1:
0)))&&ma.test(f)?d.deparam(f.slice(1)):{},e=s(!0,{},b.defaults,e);C(c,function(a,c){c&&"&"!==c&&(e[b.names[a]]=decodeURIComponent(c))});e.route=b.route;return e}"&"!==a.charAt(0)&&(a="&"+a);return ma.test(a)?d.deparam(a.slice(1)):{}},data:new d.Observe({}),routes:{},ready:function(a){!1===a&&(na=a);(!0===a||!0===na)&&oa();return d.route},url:function(a,b){b&&(a=s({},X,a));return"#!"+d.route.param(a)},link:function(a,b,c,f){return"<a "+La(s({href:d.route.url(b,f)},c))+">"+a+"</a>"},current:function(a){return W.hash==
"#!"+d.route.param(a)}});C("bind,unbind,delegate,undelegate,attr,removeAttr".split(","),function(a,b){d.route[b]=function(){return d.route.data[b].apply(d.route.data,arguments)}});var pa,X,oa=function(){X=d.route.deparam(W.hash.split(/#!?/).pop());d.route.attr(X,!0)};d.bind.call(q,"hashchange",oa);d.route.bind("change",function(){clearTimeout(pa);pa=setTimeout(function(){W.hash="#!"+d.route.param(d.route.data.serialize())},1)});d.bind.call(document,"ready",d.route.ready);var L=function(a,b,c){d.bind.call(a,
b,c);return function(){d.unbind.call(a,b,c)}},G=d.isFunction,s=d.extend,C=d.each,Ma=[].slice,Na=d.getObject("$.event.special")||{},qa=function(a,b,c,f){d.delegate.call(a,b,c,f);return function(){d.undelegate.call(a,b,c,f)}},Y=function(a,b){var c="string"==typeof b?a[b]:b;return function(){a.called=b;return c.apply(a,[this.nodeName?d.$(this):this].concat(Ma.call(arguments,0)))}},Z;d.Construct("can.Control",{setup:function(){d.Construct.setup.apply(this,arguments);if(this!==d.Control){var a;this.actions=
{};for(a in this.prototype)"constructor"!=a&&G(this.prototype[a])&&this._isAction(a)&&(this.actions[a]=this._action(a))}},_isAction:function(a){return Na[a]||$[a]||/[^\w]/.test(a)},_action:function(a,b){if(b||!/\{([^\}]+)\}/g.test(a)){var c=b?d.sub(a,[b,q]):a,f=d.isArray(c),e=(f?c[1]:c).match(/^(?:(.*?)\s)?([\w\.\:>]+)$/);return{processor:$[e[2]]||Z,parts:e,delegate:f?c[0]:i}}},processors:{},defaults:{}},{setup:function(a,b){var c=this.constructor,f=c.pluginName||c._fullName;this.element=d.$(a);f&&
"can_control"!==f&&this.element.addClass(f);d.data(this.element,"controls")||d.data(this.element,"controls",[this]);this.options=s({},c.defaults,b);this.on();return[this.element,this.options]},on:function(a,b,c,f){if(!a){this.off();var a=this.constructor,b=this._bindings,c=a.actions,f=this.element,e=Y(this,"destroy");for(funcName in c)c.hasOwnProperty(funcName)&&(ready=c[funcName]||a._action(funcName,this.options),b.push(ready.processor(ready.delegate||f,ready.parts[2],ready.parts[1],funcName,this)));
d.bind.call(f,"destroyed",e);b.push(function(a){d.unbind.call(a,"destroyed",e)});return b.length}"string"==typeof a&&(f=c,c=b,b=a,a=this.element);"string"==typeof f&&(f=Y(this,f));this._bindings.push(b?qa(a,d.trim(b),c,f):L(a,c,f));return this._bindings.length},off:function(){var a=this.element[0];C(this._bindings||[],function(b,c){c(a)});this._bindings=[]},destroy:function(){var a=this.constructor,a=a.pluginName||a._fullName;this.off();a&&"can_control"!==a&&this.element.removeClass(a);a=d.data(this.element,
"controls");a.splice(d.inArray(this,a),1);d.trigger(this,"destroyed");this.element=null}});var $=d.Control.processors;Z=function(a,b,c,f,e){f=Y(e,f);return c?qa(a,d.trim(c),b,f):L(a,b,f)};C("change,click,contextmenu,dblclick,keydown,keyup,keypress,mousedown,mousemove,mouseout,mouseover,mouseup,reset,resize,scroll,select,submit,focusin,focusout,mouseenter,mouseleave".split(","),function(a,b){$[b]=Z});d.Control.processors.route=function(a,b,c,f,e){d.route(c||"");var g,h=function(a){if(d.route.attr("route")===
(c||"")&&(a.batchNum===i||a.batchNum!==g))g=a.batchNum,a=d.route.attr(),delete a.route,e[f](a)};d.route.bind("change",h);return function(){d.route.unbind("change",h)}};var G=d.isFunction,Oa=d.makeArray,ra=1,k=d.view=function(a,b,c,f){a=k.render(a,b,c,f);return d.isDeferred(a)?a.pipe(function(a){return k.frag(a)}):k.frag(a)};d.extend(k,{frag:function(a){a=d.buildFragment([a],[document.body]).fragment;a.childNodes.length||a.appendChild(document.createTextNode(""));return k.hookup(a)},hookup:function(a){var b=
[],c,f,e,g=0;for(d.each(a.childNodes?d.makeArray(a.childNodes):a,function(a,c){1===c.nodeType&&(b.push(c),b.push.apply(b,d.makeArray(c.getElementsByTagName("*"))))});e=b[g++];)if(e.getAttribute&&(c=e.getAttribute("data-view-id"))&&(f=k.hookups[c]))f(e,c),delete k.hookups[c],e.removeAttribute("data-view-id");return a},hookups:{},hook:function(a){k.hookups[++ra]=a;return" data-view-id='"+ra+"'"},cached:{},cache:!0,register:function(a){this.types["."+a.suffix]=a},types:{},ext:".ejs",registerScript:function(){},
preload:function(){},render:function(a,b,c,f){G(c)&&(f=c,c=i);var e=Pa(b);if(e.length){var g=new d.Deferred;e.push(sa(a,!0));d.when.apply(d,e).then(function(a){var e=Oa(arguments),h=e.pop();if(d.isDeferred(b))b=ta(a);else for(var i in b)d.isDeferred(b[i])&&(b[i]=ta(e.shift()));e=h(b,c);g.resolve(e);f&&f(e)});return g}var h,e=G(f),g=sa(a,e);e?(h=g,g.then(function(a){f(a(b,c))})):g.then(function(a){h=a(b,c)});return h}});d.isDeferred=function(a){return a&&G(a.then)&&G(a.pipe)};var ua=function(a,b){if(!a.length)throw"can.view: No template or empty template:"+
b;},sa=function(a,b){var c=a.match(/\.[\w\d]+$/),f,e,g,h=function(a){var a=f.renderer(g,a),b=new d.Deferred;b.resolve(a);k.cache&&(k.cached[g]=b);return b};if(e=document.getElementById(a))c="."+e.type.match(/\/(x\-)?(.+)/)[2];c||(a+=c=k.ext);d.isArray(c)&&(c=c[0]);g=a.split(/\/|\./g).join("_");if(a.match(/^\/\//))var i=a.substr(2),a=!q.steal?"/"+i:steal.root.mapJoin(i);f=k.types[c];if(k.cached[g])return k.cached[g];if(e)return h(e.innerHTML);var l=new d.Deferred;d.ajax({async:b,url:a,dataType:"text",
error:function(b){ua("",a);l.reject(b)},success:function(b){ua(b,a);l.resolve(f.renderer(g,b));k.cache&&(k.cached[g]=l)}});return l},Pa=function(a){var b=[];if(d.isDeferred(a))return[a];for(var c in a)d.isDeferred(a[c])&&b.push(a[c]);return b},ta=function(a){return d.isArray(a)&&"success"===a[1]?a[0]:a},Qa=function(a){eval(a)},s=d.extend,va=/\s*\(([\$\w]+)\)\s*->([^\n]*)/,wa=/([^\s]+)=$/,Ra=/__!!__/g,Sa={"":"span",table:"tr",tr:"td",ol:"li",ul:"li",tbody:"tr",thead:"tr",tfoot:"tr"},O=function(a,b,
c){d.each(a,function(a,b){b.obj.bind(b.attr,c)});d.bind.call(b,"destroyed",function(){d.each(a,function(a,b){b.obj.unbind(b.attr,c)})})},Ta=function(a){return"string"==typeof a||"number"==typeof a?d.esc(a):aa(a)},aa=function(a){if("string"==typeof a)return a;if(!a&&0!=a)return"";var b=a.hookup&&function(b,d){a.hookup.call(a,b,d)}||"function"==typeof a&&a;return b?d.view.hook(b):""+a},t=function(a){if(this.constructor!=t){var b=new t(a);return function(a,d){return b.render(a,d)}}"function"==typeof a?
this.template={fn:a}:(s(this,a),this.template=Ua(this.text,this.name))};d.EJS=t;t.prototype.render=function(a,b){a=a||{};return this.template.fn.call(a,a,new t.Helpers(a,b||{}))};s(t,{txt:function(a,b,c,f,e){d.Observe&&(d.Observe.__reading=function(a,b){g.push({obj:a,attr:b})});var g=[],h=f.call(c),a=Sa[a]||"span";d.Observe&&delete d.Observe.__reading;if(!g.length)return(e||0!==b?Ta:aa)(h);if(0==b)return"<"+a+d.view.hook(e?function(a){var b=a.parentNode,d=document.createTextNode(h);b.insertBefore(d,
a);b.removeChild(a);O(g,b,function(){d.nodeValue=f.call(c)})}:function(a){var b=function(a,b){var c=d.view.frag(a),e=d.$(d.map(c.childNodes,function(a){return a})),f=b[b.length-1];f.nextSibling?f.parentNode.insertBefore(c,f.nextSibling):f.parentNode.appendChild(c);d.remove(d.$(b));return e},e=b(h,[a]);O(g,a.parentNode,function(){e=b(f.call(c),e)})})+"></"+a+">";if(1===b){var j=f.call(c).replace(/['"]/g,"").split("=")[0];M.push(function(a){O(g,a,function(){var b=(f.call(c)||"").replace(/['"]/g,"").split("="),
d=b[0];d!=j&&j&&a.removeAttribute(j);d&&a.setAttribute(d,b[1])})});return h}M.push(function(a){var e=d.$(a),j;(j=d.data(e,"hooks"))||d.data(e,"hooks",j={});var k=a.getAttribute(b),e=k.split("__!!__"),n;j[b]?j[b].funcs.push(f):j[b]={render:function(){var a=0;return k.replace(Ra,function(){return aa(n.funcs[a++].call(c))})},funcs:[f],batchNum:i};n=j[b];e.splice(1,0,h);a.setAttribute(b,e.join(""));O(g,a,function(c){if(c.batchNum===i||c.batchNum!==n.batchNum){n.batchNum=c.batchNum;a.setAttribute(b,n.render())}})});
return"__!!__"},esc:function(a,b,c,d){return t.txt(a,b,c,d,!0)},pending:function(){if(M.length){var a=M.slice(0);M=[];return d.view.hook(function(b){d.each(a,function(a,d){d(b)})})}return""}});var Va=/(<%%|%%>|<%==|<%=|<%#|<%|%>|<|>|"|')/,H=null,P=u=null,M=[],Ua=function(a,b){var c=a.replace(/(\r|\n)+/g,"\n").split(Va),d="",e=["var ___v1ew = [];"],g=function(a,b){e.push("___v1ew.push(",'"',a.split("\\").join("\\\\").split("\n").join("\\n").split('"').join('\\"').split("\t").join("\\t"),'"'+(b||"")+
");")},h=[],j,l=null,k=!1,m="",o=0,n;for(H=u=P=null;(n=c[o++])!==i;){if(null===l)switch(n){case "<%":case "<%=":case "<%==":k=1;case "<%#":l=n;0<d.length&&g(d);d="";break;case "<%%":d+="<%";break;case "<":0!==c[o].indexOf("!--")&&(H=1,k=0);d+=n;break;case ">":H=0;k?(g(d,',can.EJS.pending(),">"'),d=""):d+=n;break;case "'":case '"':H&&(u&&u===n?u=null:null===u&&(u=n,P=j));default:"<"===j&&(m=n.split(" ")[0]),d+=n}else switch(n){case "%>":switch(l){case "<%":j=--d.split("{").length- --d.split("}").length;
1==j?(e.push("___v1ew.push(","can.EJS.txt('"+m+"',"+(u?"'"+P.match(wa)[1]+"'":H?1:0)+",this,function(){","var ___v1ew = [];",d),h.push({before:"",after:"return ___v1ew.join('')}));"})):(l=h.length&&-1==j?h.pop():{after:";"},l.before&&e.push(l.before),e.push(d,";",l.after));break;case "<%=":case "<%==":(j=--d.split("{").length- --d.split("}").length)&&h.push({before:"return ___v1ew.join('')",after:"}));"}),va.test(d)&&(d=d.match(va),d="function(__){var "+d[1]+"=can.$(__);"+d[2]+"}"),e.push("___v1ew.push(",
"can.EJS."+("<%="===l?"esc":"txt")+"('"+m+"',"+(u?"'"+P.match(wa)[1]+"'":H?1:0)+",this,function(){ return ",d,j?"var ___v1ew = [];":"}));")}l=null;d="";break;case "<%%":d+="<%";break;default:d+=n}j=n}0<d.length&&g(d);e.push(";");c={out:"with(_VIEW) { with (_CONTEXT) {"+e.join("")+" return ___v1ew.join('')}}"};Qa.call(c,"this.fn = (function(_CONTEXT,_VIEW){"+c.out+"});\r\n//@ sourceURL="+b+".js");return c};t.Helpers=function(a,b){this._data=a;this._extras=b;s(this,b)};t.Helpers.prototype={view:function(a,
b,c){return $View(a,b||this._data,c||this._extras)},list:function(a,b){a.attr("length");for(var c=0,d=a.length;c<d;c++)b(a[c],c,a)}};d.view.register({suffix:"ejs",script:function(a,b){return"can.EJS(function(_CONTEXT,_VIEW) { "+(new t({text:b,name:a})).template.out+" })"},renderer:function(a,b){return t({text:b,name:a})}});return d})})(can={},this);
