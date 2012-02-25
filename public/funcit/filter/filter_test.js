steal.plugins('funcunit/qunit', 'funcunit/syn', 'funcit/filter').then(function(){
	
module('funcit/filter');

test('filtering items', function(){
	var called = [];
	Funcit.filter(function(cb){
		cb({val: 1});
		cb({val: 2});
		cb({val: 3})
	},
	function(ev){
		if(ev.val == 2){
			return false;
		}
	}, function(ev){
		called.push(ev.val)
	})
	
	same(called, [1,3], "filtering works")
});

test('async filtering items', function(){
	
	stop(5000);
	var called = [],
		times = 3;
	Funcit.filter(function(cb){
		setTimeout(function(){
			if(times > 0 ){
				cb({val: times});
				times--;
				setTimeout(arguments.callee, 50)
			}
		},30)
		
	},
	function(ev, cb){
		setTimeout(function(){
			if(ev.val == 2){
				cb(false);
			} else {
				cb();
			}
		},50)
		
		return true;
		
		
	}, function(ev){
		called.push(ev.val)
		if(called.length == 2){
			same(called, [3,1], "async filtering works")
			start();
		}
	})
	
	
	
});


test("collect and fire", function(){
	
	stop(5000);
	var called = [],
		times = 10,
		collect = [];
	Funcit.filter(function(cb){
		setTimeout(function(){
			if(times > 0 ){
				cb({val: times});
				times--;
				setTimeout(arguments.callee, 50)
			}
		},30)
		
	},
	function(ev, cb){
		if(ev.val ==5){
			cb(collect)
		} else if(ev.val > 5){
			collect.push(ev);
		}
		return true;
		
		
	}, function(ev){
		called.push(ev.val)
		if(called.length == 5){
			same(called, [10,9,8,7,6], "async filtering works")
			start();
		}
	})
	
	
	
});

test("dblclick", function(){
	var called = [];
	stop();
	
	Funcit.filter(function(cb){
		cb({type: "click"});
		cb({type: "foo"});
		cb({type: "bar"});
	},
	Funcit.filters.dblclick,
	function(ev){

	},
	function(ev){
		called.push(ev.type)
		if(called.length == 3){
			same(called, ["click","foo","bar"])
			start()
		}
	});
	
	
});


test("visible filter", function(){
	var calls = [];
	
	var div = $('<div>hello</div>').appendTo( $('#qunit-test-area') );
	
	
	div.funcit_filter( Funcit.filters.visible, function(ev){
		calls.push(ev);
	})
	div.attr("style","display:block; color:red")
		.attr("style","display:block; color:blue")
	
	equals(calls.length, 1);
	
	div.attr("style","display:none; color:red")
		.attr("style","display:none; color:blue");
		
	equals(calls.length, 2);
	
	
	
});

test("dblclick filter", function(){
	//FuncUnit._window = window;
	stop();
	var calls = [];
	
	$('#qunit-test-area').html('')
	
	var div = $('<div id="hellodiv">hello</div>').appendTo( $('#qunit-test-area') );
	
	div.funcit_filter( Funcit.filters.dblclick, function(ev){
		calls.push(ev);
		equals(calls.length, 1);
		start();
	})

	Syn.click(div[0]);
	
});

test("dblclick and lastmodified filter", 1, function(){
	stop();
	
	var div = $('<div id="hellodiv2">hello 2</div>').appendTo( $('#qunit-test-area') );
	
  div.click(function(){
		$(this).append('<div>New div</div>') // Comment this line and everything will pass
	})
	
	div.funcit_filter( Funcit.filters.dblclick, Funcit.filters.lastmodified, function(ev){
		ok(true)
		start();
	})

	Syn.click(div[0]);
	
});

});

