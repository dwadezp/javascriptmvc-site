steal()
.then(function() { TODOLIB = 'jquery'; })
.then('test.js?jquery')
.then(function() { TODOLIB = 'dojo'; })
.then('test.js?dojo')
.then(function() { TODOLIB = 'dojo-widget'; })
.then('test_dojo-widget.js')
.then(function() { TODOLIB = 'mootools'; })
.then('test.js?mootools')
.then(function() { TODOLIB = 'yui'; })
.then('test.js?yui')
.then(function() { TODOLIB = 'yui-widget'; })
.then('test_yui-widget.js')
.then(function() { TODOLIB = 'zepto'; })
.then('test.js?zepto')