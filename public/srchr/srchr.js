// Load all of the plugin dependencies
steal(
	'srchr/search',
	'srchr/history',
	'srchr/search_result',
	'srchr/tabs',
	'srchr/disabler',
	'steal/less',
	'srchr/models/search.js', 
	'srchr/models/flickr.js',
	'srchr/models/upcoming.js',
	'srchr/models/twitter.js'
).then('srchr/srchr.less', function($){
	
	// This is the Srchr application.  It intergrates all of the Srchr modules.
	
	var typePrettyNames = {
		    "Srchr.Models.Flickr"   : "f",
		    "Srchr.Models.Upcoming" : "u",
		    "Srchr.Models.Twitter"  : "t"
			};
	    
	// Create a new Search controller on the #searchArea element
	$("#searchArea").srchr_search();
	
	// Instead of printing out the Model names in their entirety in the history list,
	// just print out the first letter
	
	
	// Create a new History controller on the #history element
	$("#history").srchr_history({
		titleHelper : function(search){
			var text =  search.query,
				types = [];
			for(var i=0; i < search.types.length; i++){
				types.push( typePrettyNames[search.types[i]] );
			}
			return  text+" "+types.join();
		}
	});
	// when a search happens, add to history
	$([Srchr.Models.Search]).bind("search", function(ev, search){
		$("#history").srchr_history("add", search);
	});
	// when a history item is selected, update search
	$("#history").bind("selected", function(ev, search){
		$("#searchArea").srchr_search("val", search);
	});
	
	// Create new Tabs and Disabler controllers on the #resultsTab element 
	$("#resultsTab").srchr_tabs().srchr_disabler();
	
	// Create new Search Results controller on the #flickr element 
	$("#flickr").srchr_search_result({
		modelType : Srchr.Models.Flickr,
		resultView : "//srchr/views/flickr.ejs"
	});
	
	// Create new Search Results controller on the #upcoming element
	$("#upcoming").srchr_search_result({
		modelType : Srchr.Models.Upcoming,
		resultView : "//srchr/views/upcoming.ejs"
	});

	
	$("#twitter").srchr_search_result({
		modelType : Srchr.Models.Twitter,
		resultView : "//srchr/views/twitter.ejs"
	});
	
	
});
