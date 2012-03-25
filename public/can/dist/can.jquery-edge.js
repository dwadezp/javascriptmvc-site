(function(c,t,k){$.extend(c,jQuery,{trigger:function(a,b,d){a.trigger?a.trigger(b,d):$.event.trigger(b,d,a,!0)},addEvent:function(a,b){$([this]).bind(a,b);return this},removeEvent:function(a,b){$([this]).unbind(a,b);return this},$:jQuery,prototype:jQuery.fn});$.each(["bind","unbind","undelegate","delegate"],function(a,b){c[b]=function(){var a=this[b]?this:$([this]);a[b].apply(a,arguments);return this}});$.each("append,filter,addClass,remove,data,get".split(","),function(a,b){c[b]=function(a){return a[b].apply(a,
c.makeArray(arguments).slice(1))}});var na=$.cleanData;$.cleanData=function(a){$.each(a,function(a,d){c.trigger(d,"destroyed",[],!1)});na(a)};var oa=/==/,pa=/([A-Z]+)([A-Z][a-z])/g,qa=/([a-z\d])([A-Z])/g,ra=/([a-z\d])([A-Z])/g,R=/\{([^\}]+)\}/g,q=/"/g,sa=/'/g,S;c.extend(c,{esc:function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(q,"&#34;").replace(sa,"&#39;")},getObject:S=function(a,b,d){var a=a?a.split("."):[],e=a.length,f,g,h,i=0,b=c.isArray(b)?b:[b||
t];if(0==e)return b[0];for(;f=b[i++];){for(h=0;h<e-1&&/^f|^o/.test(typeof f);h++)f=a[h]in f?f[a[h]]:d&&(f[a[h]]={});if(/^f|^o/.test(typeof f)&&(g=a[h]in f?f[a[h]]:d&&(f[a[h]]={}),g!==k))return!1===d&&delete f[a[h]],g}},capitalize:function(a){return a.charAt(0).toUpperCase()+a.slice(1)},underscore:function(a){return a.replace(oa,"/").replace(pa,"$1_$2").replace(qa,"$1_$2").replace(ra,"_").toLowerCase()},sub:function(a,b,d){var e=[],d="boolean"==typeof d?!d:d;e.push(a.replace(R,function(a,c){var h=
S(c,b,d);return/^f|^o/.test(typeof h)?(e.push(h),""):""+h}));return 1>=e.length?e[0]:e},replacer:R,undHash:/_|-/});var F=0;c.Construct=function(){if(arguments.length)return c.Construct.extend.apply(c.Construct,arguments)};c.extend(c.Construct,{newInstance:function(){var a=this.instance(),b;a.setup&&(b=a.setup.apply(a,arguments));a.init&&a.init.apply(a,b||arguments);return a},_inherit:function(a,b,d){c.extend(d||a,a||{})},setup:function(a){this.defaults=c.extend(!0,{},a.defaults,this.defaults)},instance:function(){F=
1;var a=new this;F=0;return a},extend:function(a,b,d){function e(){if(!F)return this.constructor!==e&&arguments.length?arguments.callee.extend.apply(arguments.callee,arguments):this.constructor.newInstance.apply(this.constructor,arguments)}"string"!=typeof a&&(d=b,b=a,a=null);d||(d=b,b=null);var d=d||{},f=this.prototype,g,h,i,l;l=this.instance();this._inherit(d,f,l);for(g in this)this.hasOwnProperty(g)&&(e[g]=this[g]);this._inherit(b,this,e);if(a){i=a.split(".");h=i.pop();i=f=c.getObject(i.join("."),
t,!0);var G=c.underscore(a.replace(/\./g,"_")),B=c.underscore(h);f[h]=e}c.extend(e,{prototype:l,namespace:i,shortName:h,_shortName:B,_fullName:G,constructor:e,fullName:a});e.prototype.constructor=e;h=[this].concat(c.makeArray(arguments));l=e.setup.apply(e,h);e.init&&e.init.apply(e,l||h);return e}});var r=function(a){return a&&"object"===typeof a&&!(a instanceof Date)},H=function(a,b){return c.each(a,function(a,e){e&&e.unbind&&e.unbind("change"+b)})},I=function(a,b,d){a instanceof u?H([a],d._namespace):
a=c.isArray(a)?new u.List(a):new u(a);a.bind("change"+d._namespace,function(e,f){var g=c.makeArray(arguments),e=g.shift();g[0]="*"===b?d.indexOf(a)+"."+g[0]:b+"."+g[0];c.trigger(d,e,g)});return a},T=0,v=k,U=function(){if(!v)return v=[],!0},m=function(a,b,d){if(!a._init)if(v)v.push([a,{type:b,batchNum:V},d]);else return c.trigger(a,b,d)},V=1,W=function(){var a=v.slice(0);v=k;V++;c.each(a,function(a,d){c.trigger.apply(c,d)})},C=function(a,b,d){a.each(function(a,f){d[a]=r(f)&&c.isFunction(f[b])?f[b]():
f});return d},y=function(a){return function(){return c[a].apply(this,arguments)}},z=y("addEvent"),y=y("removeEvent"),J=function(a){return c.isArray(a)?a:(""+a).split(".")},u=c.Construct("can.Observe",{setup:function(){c.Construct.setup.apply(this,arguments)},bind:z,unbind:y,id:"id"},{setup:function(a){this._data={};this._namespace=".observe"+ ++T;this._init=1;this.attr(a);delete this._init},attr:function(a,b){if(~"ns".indexOf((typeof a).charAt(0))){if(b===k)return u.__reading&&u.__reading(this,a),
this._get(a);this._set(a,b);return this}return this._attrs(a,b)},each:function(){return c.each.apply(k,[this.__get()].concat(c.makeArray(arguments)))},removeAttr:function(a){var a=J(a),b=a.shift(),d=this._data[b];if(a.length)return d.removeAttr(a);delete this._data[b];b in this.constructor.prototype||delete this[b];m(this,"change",[b,"remove",k,d]);m(this,b,k,d);return d},_get:function(a){var a=J(a),b=this.__get(a.shift());return a.length?b?b._get(a):k:b},__get:function(a){return a?this._data[a]:
this._data},_set:function(a,b){var d=J(a),e=d.shift(),c=this.__get(e);if(r(c)&&d.length)c._set(d,b);else{if(d.length)throw"can.Observe: Object does not exist";this.__convert&&(b=this.__convert(e,b));this.__set(e,b,c)}},__set:function(a,b,d){if(b!==d){var e=this.__get().hasOwnProperty(a)?"set":"add";this.___set(a,r(b)?I(b,a,this):b);m(this,"change",[a,e,b,d]);m(this,a,b,d);d&&H([d],this._namespace)}},___set:function(a,b){this._data[a]=b;a in this.constructor.prototype||(this[a]=b)},bind:z,unbind:y,
serialize:function(){return C(this,"serialize",{})},_attrs:function(a,b){if(a===k)return C(this,"attr",{});var a=c.extend(!0,{},a),d,e=U(),f=this,g;this.each(function(d,e){g=a[d];g===k?b&&f.removeAttr(d):(r(e)&&r(g)?e.attr(g,b):e!=g&&f._set(d,g),delete a[d])});for(d in a)g=a[d],this._set(d,g);e&&W();return this}}),ta=[].splice,K=u("can.Observe.List",{setup:function(a,b){this.length=0;this._namespace=".observe"+ ++T;this._init=1;this.bind("change",c.proxy(this._changes,this));this.push.apply(this,
c.makeArray(a||[]));c.extend(this,b);delete this._init},_changes:function(a,b,d,e,c){~b.indexOf(".")||("add"===d?(m(this,d,[e,+b]),m(this,"length",[this.length])):"remove"===d?(m(this,d,[c,+b]),m(this,"length",[this.length])):m(this,d,[e,+b]))},__get:function(a){return a?this[a]:this},___set:function(a,b){this[a]=b},serialize:function(){return C(this,"serialize",[])},splice:function(a,b){var d=c.makeArray(arguments),e;for(e=2;e<d.length;e++){var f=d[e];r(f)&&(d[e]=I(f,"*",this))}b===k&&(b=d[1]=this.length-
a);e=ta.apply(this,d);0<b&&(m(this,"change",[""+a,"remove",k,e]),H(e,this._namespace));2<d.length&&m(this,"change",[""+a,"add",d.slice(2),e]);return e},_attrs:function(a,b){if(a===k)return C(this,"attr",[]);var a=a.slice(0),d=Math.min(a.length,this.length),e=U(),c;for(c=0;c<d;c++){var g=this[c],h=a[c];r(g)&&r(h)?g.attr(h,b):g!=h&&this._set(c,h)}a.length>this.length?this.push(a.slice(this.length)):a.length<this.length&&b&&this.splice(a.length);e&&W()}});c.each({push:"length",unshift:0},function(a,
b){K.prototype[a]=function(){for(var d=arguments[0]&&c.isArray(arguments[0])?arguments[0]:c.makeArray(arguments),e=b?this.length:0,f=0;f<d.length;f++){var g=d[f];r(g)&&(d[f]=I(g,"*",this))}if(1==d.length&&this.comparator)return this.splice(this.sortedIndex(d[0]),0,d[0]),this.length;f=[][a].apply(this,d);this.comparator&&1<d.length?(this.sort(null,!0),m(this,"reset",[d])):m(this,"change",[""+e,"add",d,k]);return f}});c.each({pop:"length",shift:0},function(a,b){K.prototype[a]=function(){var d=arguments[0]&&
c.isArray(arguments[0])?arguments[0]:c.makeArray(arguments),e=b&&this.length?this.length-1:0,d=[][a].apply(this,d);m(this,"change",[""+e,"remove",k,[d]]);d&&d.unbind&&d.unbind("change"+this._namespace);return d}});K.prototype.indexOf=[].indexOf||function(a){return c.inArray(a,this)};var ua=function(a,b,d){var e=new c.Deferred;a.then(function(){arguments[0]=b[d](arguments[0]);e.resolve.apply(e,arguments)},function(){e.resolveWith.apply(this,arguments)});return e},va=0,X=/change.observe\d+/,Y=function(a,
b,d,c,f){var g;g=[a.serialize()];var h=a.constructor,i;"destroy"==b&&g.shift();"create"!==b&&g.unshift(a[a.constructor.id]);i=h[b].apply(h,g);g=i.pipe(function(d){a[f||b+"d"](d,i);return a});i.abort&&(g.abort=function(){i.abort()});return g.then(d,c)},wa={create:{url:"_shortName",type:"post"},update:{data:function(a,b){var b=b||{},d=this.id;b[d]&&b[d]!==a&&(b["new"+c.capitalize(a)]=b[d],delete b[d]);b[d]=a;return b},type:"put"},destroy:{type:"delete",data:function(a){return{}[this.id]=a}},findAll:{url:"_shortName"},
findOne:{}},xa=function(a,b){return function(d){var d=a.data?a.data.apply(this,arguments):d,e=b||this[a.url||"_url"],f=d,g=a.type||"get";if("string"==typeof e){var h=e.split(" "),e={url:h.pop()};h.length&&(e.type=h.pop())}e.data="object"==typeof f&&!c.isArray(f)?c.extend(e.data||{},f):f;e.url=c.sub(e.url,e.data,!0);return c.ajax(c.extend({type:g||"post",dataType:"json",success:void 0,error:void 0},e))}};c.Observe("can.Model",{setup:function(){c.Observe.apply(this,arguments);if(this!==c.Model){var a=
this;c.each(wa,function(b,d){c.isFunction(a[b])||(a[b]=xa(d,a[b]))});var b=c.proxy(this._clean,a);c.each({findAll:"models",findOne:"model"},function(d,c){var e=a[d];a[d]=function(d,f,G){a._reqs++;return ua(e.call(a,d),a,c).then(f,G).then(b,b)}});"can.Model"==a.fullName&&(a.fullName="Model"+ ++va);if(t.jQuery){var d={},e="* "+a.fullName+".model";d[e+"s"]=c.proxy(a.models,a);d[e]=c.proxy(a.model,a);$.ajaxSetup({converters:d})}this.store={};this._reqs=0;this._url=this._shortName+"/{"+this.id+"}"}},_clean:function(){this._reqs--;
if(!this._reqs)for(var a in this.store)this.store[a]._bindings||delete this.store[a]},models:function(a){if(a){var b=this,d=new (b.List||Z),e=c.isArray(a),f=a instanceof Z,f=e?a:f?a.serialize():a.data;c.each(f,function(a,c){d.push(b.model(c))});e||c.each(a,function(a,b){"data"!==a&&(d[a]=b)});return d}},model:function(a){if(a){a instanceof this&&(a=a.serialize());var b=this.store[a.id]||new this(a);this._reqs&&(this.store[a.id]=b);return b}}},{isNew:function(){var a=this[this.constructor.id];return!(a||
0===a)},save:function(a,b){return Y(this,this.isNew()?"create":"update",a,b)},destroy:function(a,b){return Y(this,"destroy",a,b,"destroyed")},bind:function(a){X.test(a)||(this._bindings||(this.constructor.store[this[this.constructor.id]]=this,this._bindings=0),this._bindings++);return c.Observe.prototype.bind.apply(this,arguments)},unbind:function(a){X.test(a)||(this._bindings--,this._bindings||delete this.constructor.store[this[this.constructor.id]]);return c.Observe.prototype.unbind.apply(this,
arguments)},___set:function(a,b){c.Observe.prototype.___set.call(this,a,b);a===this.constructor.id&&this._bindings&&(this.constructor.store[this[this.constructor.id]]=this)}});c.each(["created","updated","destroyed"],function(a,b){c.Model.prototype[b]=function(a){var e=this.constructor;a&&"object"==typeof a&&this.attr(a.attr?a.attr():a);c.trigger(this,b);c.trigger(this,"change",b);c.trigger(e,b,this)}});var Z=c.Observe.List("can.Model.List",{setup:function(){c.Observe.List.prototype.setup.apply(this,
arguments);var a=this;this.bind("change",function(b,d){/\w+\.destroyed/.test(d)&&a.splice(a.indexOf(b.target),1)})}}),ya=/^\d+$/,za=/([^\[\]]+)|(\[\])/g,Aa=/([^?#]*)(#.*)?$/,aa=function(a){return decodeURIComponent(a.replace(/\+/g," "))};c.extend(c,{deparam:function(a){var b={};a&&Aa.test(a)&&(a=a.split("&"),c.each(a,function(a,c){var f=c.split("="),g=aa(f.shift()),h=aa(f.join("="));current=b;for(var f=g.match(za),g=0,i=f.length-1;g<i;g++)current[f[g]]||(current[f[g]]=ya.test(f[g+1])||"[]"==f[g+1]?
[]:{}),current=current[f[g]];lastPart=f.pop();"[]"==lastPart?current.push(h):current[lastPart]=h}));return b}});var ba=/\:([\w\.]+)/g,ca=/^(?:&[^=]+=[^&]*)+/,Ba=function(a){return c.map(a,function(a,d){return("className"===d?"class":d)+'="'+c.esc(a)+'"'}).join(" ")},da=!0,L=t.location,s=c.each,o=c.extend;c.route=function(a,b){var d=[],e=a.replace(ba,function(a,b){d.push(b);return"([^\\/\\&]*)"});c.route.routes[a]={test:RegExp("^"+e+"($|&)"),route:a,names:d,defaults:b||{},length:a.split("/").length};
return c.route};o(c.route,{param:function(a){delete a.route;var b,d=0,e,f=a.route;(!f||!(b=c.route.routes[f]))&&s(c.route.routes,function(c,f){a:{for(var g=0,h=0;h<f.names.length;h++){if(!a.hasOwnProperty(f.names[h])){e=-1;break a}g++}e=g}e>d&&(b=f,d=e)});if(b){var g=o({},a),f=b.route.replace(ba,function(d,c){delete g[c];return a[c]===b.defaults[c]?"":encodeURIComponent(a[c])}),h;s(b.defaults,function(a,b){g[a]===b&&delete g[a]});h=c.param(g);return f+(h?"&"+h:"")}return c.isEmptyObject(a)?"":"&"+
c.param(a)},deparam:function(a){var b={length:-1};s(c.route.routes,function(d,c){c.test.test(a)&&c.length>b.length&&(b=c)});if(-1<b.length){var d=a.match(b.test),e=d.shift(),f=(e=a.substr(e.length-("&"===d[d.length-1]?1:0)))&&ca.test(e)?c.deparam(e.slice(1)):{},f=o(!0,{},b.defaults,f);s(d,function(a,d){d&&"&"!==d&&(f[b.names[a]]=decodeURIComponent(d))});f.route=b.route;return f}"&"!==a.charAt(0)&&(a="&"+a);return ca.test(a)?c.deparam(a.slice(1)):{}},data:new c.Observe({}),routes:{},ready:function(a){!1===
a&&(da=a);(!0===a||!0===da)&&ea();return c.route},url:function(a,b){b&&(a=o({},M,a));return"#!"+c.route.param(a)},link:function(a,b,d,e){return"<a "+Ba(o({href:c.route.url(b,e)},d))+">"+a+"</a>"},current:function(a){return L.hash=="#!"+c.route.param(a)}});s("bind,unbind,delegate,undelegate,attr,removeAttr".split(","),function(a,b){c.route[b]=function(){return c.route.data[b].apply(c.route.data,arguments)}});var fa,M,ea=function(){M=c.route.deparam(L.hash.split(/#!?/).pop());c.route.attr(M,!0)};c.bind.call(t,
"hashchange",ea);c.route.bind("change",function(){clearTimeout(fa);fa=setTimeout(function(){L.hash="#!"+c.route.param(c.route.data.serialize())},1)});c.bind.call(document,"ready",c.route.ready);var z=function(a,b,d){c.bind.call(a,b,d);return function(){c.unbind.call(a,b,d)}},w=c.isFunction,o=c.extend,s=c.each,Ca=[].slice,Da=c.getObject("$.event.special")||{},ga=function(a,b,d,e){c.delegate.call(a,b,d,e);return function(){c.undelegate.call(a,b,d,e)}},N=function(a,b){var d="string"==typeof b?a[b]:b;
return function(){a.called=b;return d.apply(a,[this.nodeName?c.$(this):this].concat(Ca.call(arguments,0)))}},O;c.Construct("can.Control",{setup:function(){c.Construct.setup.apply(this,arguments);if(this!==c.Control){var a;this.actions={};for(a in this.prototype)"constructor"!=a&&w(this.prototype[a])&&this._isAction(a)&&(this.actions[a]=this._action(a))}},_isAction:function(a){return Da[a]||P[a]||/[^\w]/.test(a)},_action:function(a,b){if(b||!/\{([^\}]+)\}/g.test(a)){var d=b?c.sub(a,[b,t]):a,e=c.isArray(d),
f=(e?d[1]:d).match(/^(?:(.*?)\s)?([\w\.\:>]+)$/);return{processor:P[f[2]]||O,parts:f,delegate:e?d[0]:k}}},processors:{},defaults:{}},{setup:function(a,b){var d=this.constructor,e=d.pluginName||d._fullName;this.element=c.$(a);e&&"can_control"!==e&&this.element.addClass(e);c.data(this.element,"controls")||c.data(this.element,"controls",[this]);this.options=o({},d.defaults,b);this.on();return[this.element,this.options]},on:function(a,b,d,e){if(!a){this.off();var a=this.constructor,b=this._bindings,d=
a.actions,e=this.element,f=N(this,"destroy");for(funcName in d)d.hasOwnProperty(funcName)&&(ready=d[funcName]||a._action(funcName,this.options),b.push(ready.processor(ready.delegate||e,ready.parts[2],ready.parts[1],funcName,this)));c.bind.call(e,"destroyed",f);b.push(function(a){c.unbind.call(a,"destroyed",f)});return b.length}"string"==typeof a&&(e=d,d=b,b=a,a=this.element);"string"==typeof e&&(e=N(this,e));this._bindings.push(b?ga(a,c.trim(b),d,e):z(a,d,e));return this._bindings.length},off:function(){var a=
this.element[0];s(this._bindings||[],function(b,d){d(a)});this._bindings=[]},destroy:function(){var a=this.constructor,a=a.pluginName||a._fullName;this.off();a&&"can_control"!==a&&this.element.removeClass(a);a=c.data(this.element,"controls");a.splice(c.inArray(this,a),1);c.trigger(this,"destroyed");this.element=null}});var P=c.Control.processors;O=function(a,b,d,e,f){e=N(f,e);return d?ga(a,c.trim(d),b,e):z(a,b,e)};s("change,click,contextmenu,dblclick,keydown,keyup,keypress,mousedown,mousemove,mouseout,mouseover,mouseup,reset,resize,scroll,select,submit,focusin,focusout,mouseenter,mouseleave".split(","),
function(a,b){P[b]=O});c.Control.processors.route=function(a,b,d,e,f){c.route(d||"");var g,h=function(a){if(c.route.attr("route")===(d||"")&&(a.batchNum===k||a.batchNum!==g))g=a.batchNum,a=c.route.attr(),delete a.route,f[e](a)};c.route.bind("change",h);return function(){c.route.unbind("change",h)}};var w=c.isFunction,Ea=c.makeArray,ha=1,j=c.view=function(a,b,d,e){a=j.render(a,b,d,e);return c.isDeferred(a)?a.pipe(function(a){return j.frag(a)}):j.frag(a)};c.extend(j,{frag:function(a){a=c.buildFragment([a],
[document.body]).fragment;a.childNodes.length||a.appendChild(document.createTextNode(""));return j.hookup(a)},hookup:function(a){var b=[],d,e,f,g=0;for(c.each(a.childNodes?c.makeArray(a.childNodes):a,function(a,d){1===d.nodeType&&(b.push(d),b.push.apply(b,c.makeArray(d.getElementsByTagName("*"))))});f=b[g++];)if(f.getAttribute&&(d=f.getAttribute("data-view-id"))&&(e=j.hookups[d]))e(f,d),delete j.hookups[d],f.removeAttribute("data-view-id");return a},hookups:{},hook:function(a){j.hookups[++ha]=a;return" data-view-id='"+
ha+"'"},cached:{},cache:!0,register:function(a){this.types["."+a.suffix]=a},types:{},ext:".ejs",registerScript:function(){},preload:function(){},render:function(a,b,d,e){w(d)&&(e=d,d=k);var f=Fa(b);if(f.length){var g=new c.Deferred;f.push(ia(a,!0));c.when.apply(c,f).then(function(a){var f=Ea(arguments),h=f.pop();if(c.isDeferred(b))b=ja(a);else for(var B in b)c.isDeferred(b[B])&&(b[B]=ja(f.shift()));f=h(b,d);g.resolve(f);e&&e(f)});return g}var h,f=w(e),g=ia(a,f);f?(h=g,g.then(function(a){e(a(b,d))})):
g.then(function(a){h=a(b,d)});return h}});c.isDeferred=function(a){return a&&w(a.then)&&w(a.pipe)};var ka=function(a,b){if(!a.length)throw"can.view: No template or empty template:"+b;},ia=function(a,b){var d=a.match(/\.[\w\d]+$/),e,f,g,h=function(a){var a=e.renderer(g,a),b=new c.Deferred;b.resolve(a);j.cache&&(j.cached[g]=b);return b};if(f=document.getElementById(a))d="."+f.type.match(/\/(x\-)?(.+)/)[2];d||(a+=d=j.ext);c.isArray(d)&&(d=d[0]);g=a.split(/\/|\./g).join("_");if(a.match(/^\/\//))var i=
a.substr(2),a=!t.steal?"/"+i:steal.root.mapJoin(i);e=j.types[d];if(j.cached[g])return j.cached[g];if(f)return h(f.innerHTML);var l=new c.Deferred;c.ajax({async:b,url:a,dataType:"text",error:function(b){ka("",a);l.reject(b)},success:function(b){ka(b,a);l.resolve(e.renderer(g,b));j.cache&&(j.cached[g]=l)}});return l},Fa=function(a){var b=[];if(c.isDeferred(a))return[a];for(var d in a)c.isDeferred(a[d])&&b.push(a[d]);return b},ja=function(a){return c.isArray(a)&&"success"===a[1]?a[0]:a},Ga=function(a){eval(a)},
o=c.extend,la=/\s*\(([\$\w]+)\)\s*->([^\n]*)/,ma=/([^\s]+)=$/,Ha=/__!!__/g,Ia={"":"span",table:"tr",tr:"td",ol:"li",ul:"li",tbody:"tr",thead:"tr",tfoot:"tr"},D=function(a,b,d){c.each(a,function(a,b){b.obj.bind(b.attr,d)});c.bind.call(b,"destroyed",function(){c.each(a,function(a,b){b.obj.unbind(b.attr,d)})})},Ja=function(a){return"string"==typeof a||"number"==typeof a?c.esc(a):Q(a)},Q=function(a){if("string"==typeof a)return a;if(!a&&0!=a)return"";var b=a.hookup&&function(b,c){a.hookup.call(a,b,c)}||
"function"==typeof a&&a;return b?c.view.hook(b):""+a},p=function(a){if(this.constructor!=p){var b=new p(a);return function(a,c){return b.render(a,c)}}"function"==typeof a?this.template={fn:a}:(o(this,a),this.template=Ka(this.text,this.name))};c.EJS=p;p.prototype.render=function(a,b){a=a||{};return this.template.fn.call(a,a,new p.Helpers(a,b||{}))};o(p,{txt:function(a,b,d,e,f){c.Observe&&(c.Observe.__reading=function(a,b){g.push({obj:a,attr:b})});var g=[],h=e.call(d),a=Ia[a]||"span";c.Observe&&delete c.Observe.__reading;
if(!g.length)return(f||0!==b?Ja:Q)(h);if(0==b)return"<"+a+c.view.hook(f?function(a){var b=a.parentNode,c=document.createTextNode(h);b.insertBefore(c,a);b.removeChild(a);D(g,b,function(){c.nodeValue=e.call(d)})}:function(a){var b=function(a,b){var d=c.view.frag(a),e=c.$(c.map(d.childNodes,function(a){return a})),f=b[b.length-1];f.nextSibling?f.parentNode.insertBefore(d,f.nextSibling):f.parentNode.appendChild(d);c.remove(c.$(b));return e},f=b(h,[a]);D(g,a.parentNode,function(){f=b(e.call(d),f)})})+
"></"+a+">";if(1===b){var i=e.call(d).replace(/['"]/g,"").split("=")[0];A.push(function(a){D(g,a,function(){var b=(e.call(d)||"").replace(/['"]/g,"").split("="),c=b[0];c!=i&&i&&a.removeAttribute(i);c&&a.setAttribute(c,b[1])})});return h}A.push(function(a){var f=c.$(a),i;(i=c.data(f,"hooks"))||c.data(f,"hooks",i={});var j=a.getAttribute(b),f=j.split("__!!__"),n;i[b]?i[b].funcs.push(e):i[b]={render:function(){var a=0;return j.replace(Ha,function(){return Q(n.funcs[a++].call(d))})},funcs:[e],batchNum:k};
n=i[b];f.splice(1,0,h);a.setAttribute(b,f.join(""));D(g,a,function(d){if(d.batchNum===k||d.batchNum!==n.batchNum){n.batchNum=d.batchNum;a.setAttribute(b,n.render())}})});return"__!!__"},esc:function(a,b,d,c){return p.txt(a,b,d,c,!0)},pending:function(){if(A.length){var a=A.slice(0);A=[];return c.view.hook(function(b){c.each(a,function(a,c){c(b)})})}return""}});var La=/(<%%|%%>|<%==|<%=|<%#|<%|%>|<|>|"|')/,x=null,E=q=null,A=[],Ka=function(a,b){var d=a.replace(/(\r|\n)+/g,"\n").split(La),c="",f=["var ___v1ew = [];"],
g=function(a,b){f.push("___v1ew.push(",'"',a.split("\\").join("\\\\").split("\n").join("\\n").split('"').join('\\"').split("\t").join("\\t"),'"'+(b||"")+");")},h=[],i,l=null,j=!1,m="",o=0,n;for(x=q=E=null;(n=d[o++])!==k;){if(null===l)switch(n){case "<%":case "<%=":case "<%==":j=1;case "<%#":l=n;0<c.length&&g(c);c="";break;case "<%%":c+="<%";break;case "<":0!==d[o].indexOf("!--")&&(x=1,j=0);c+=n;break;case ">":x=0;j?(g(c,',can.EJS.pending(),">"'),c=""):c+=n;break;case "'":case '"':x&&(q&&q===n?q=null:
null===q&&(q=n,E=i));default:"<"===i&&(m=n.split(" ")[0]),c+=n}else switch(n){case "%>":switch(l){case "<%":i=--c.split("{").length- --c.split("}").length;1==i?(f.push("___v1ew.push(","can.EJS.txt('"+m+"',"+(q?"'"+E.match(ma)[1]+"'":x?1:0)+",this,function(){","var ___v1ew = [];",c),h.push({before:"",after:"return ___v1ew.join('')}));"})):(l=h.length&&-1==i?h.pop():{after:";"},l.before&&f.push(l.before),f.push(c,";",l.after));break;case "<%=":case "<%==":(i=--c.split("{").length- --c.split("}").length)&&
h.push({before:"return ___v1ew.join('')",after:"}));"}),la.test(c)&&(c=c.match(la),c="function(__){var "+c[1]+"=can.$(__);"+c[2]+"}"),f.push("___v1ew.push(","can.EJS."+("<%="===l?"esc":"txt")+"('"+m+"',"+(q?"'"+E.match(ma)[1]+"'":x?1:0)+",this,function(){ return ",c,i?"var ___v1ew = [];":"}));")}l=null;c="";break;case "<%%":c+="<%";break;default:c+=n}i=n}0<c.length&&g(c);f.push(";");d={out:"with(_VIEW) { with (_CONTEXT) {"+f.join("")+" return ___v1ew.join('')}}"};Ga.call(d,"this.fn = (function(_CONTEXT,_VIEW){"+
d.out+"});\r\n//@ sourceURL="+b+".js");return d};p.Helpers=function(a,b){this._data=a;this._extras=b;o(this,b)};p.Helpers.prototype={view:function(a,b,c){return $View(a,b||this._data,c||this._extras)},list:function(a,b){a.attr("length");for(var c=0,e=a.length;c<e;c++)b(a[c],c,a)}};c.view.register({suffix:"ejs",script:function(a,b){return"can.EJS(function(_CONTEXT,_VIEW) { "+(new p({text:b,name:a})).template.out+" })"},renderer:function(a,b){return p({text:b,name:a})}})})(can={},this);
