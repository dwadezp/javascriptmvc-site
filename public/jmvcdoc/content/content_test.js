steal('funcunit').then(function(){

module("Jmvcdoc.Content", { 
	setup: function(){
		S.open("//jmvcdoc/content/content.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Jmvcdoc.Content Demo","demo text");
});


});