module("srchr/models");

test("Flickr", function() {
	stop();
	Srchr.Models.Flickr.findAll({query: "cats"}, function(data){
		ok(data, "we got data from flickr");
		start();
	})
});

test("Twitter", function() {
	stop();
	Srchr.Models.Twitter.findAll({query: "cats"}, function(data){
		ok(data, "we got data from Twitter");
		start();
	})
});

test("Upcoming", function() {
	stop();
	Srchr.Models.Upcoming.findAll({query: "metal"}, function(data){
		ok(data, "we got data from Upcoming");
		start();
	})
});
