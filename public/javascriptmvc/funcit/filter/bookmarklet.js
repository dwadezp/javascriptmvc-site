(function(){
	var newWin = window.open("", "blank");
	var html = [
	"<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.01//EN'",
    "        'http://www.w3.org/TR/html4/strict.dtd'>",
	"<html lang='en'>",
	"<head>",
	"<title>",
	document.title,
	"</title><style>iframe {width: 900px; height: 600px;}</style>",
	"</head>",
	"<body>",
	"<iframe id='record' src='"+location.pathname+"'></iframe>",
	"	<script language='javascript' type='text/javascript'>",
	"		Funcit = {url: location.pathname};",
	"	</script>",
	"	<script language='javascript' type='text/javascript'", 
	"		src='http://localhost:3002/javascriptmvc/steal/steal.js'>",
	"	</script><script type='text/javascript'>steal('funcit/filter').then(function(){",
	"           $('#record').funcit_filter();",
	"		});</script>",
	"</body>",
	"</html>"
	];
  newWin.document.write(html.join(''));
	newWin.document.close();
})()