// load('can/util/make.js')

/**
 * How this all works:
 * 
 * There are 4 scenarios to account for with canjs library loading: 
 * development, building with env.js, using the standalone canjs scripts, 
 * and using a fully built production.js file.
 * 
 * 1) development mode - the libaries will be loaded by their corresponding util plugin 
 * 		(the _skip option is ignored in dev mode)
 * 2) while building with env.js - skipCallbacks is set in steal and _skip option causes env.js 
 * 		not load the libary files (because isBuilding is set in open.js).  All this is to avoid loading 
 * 		the libraries in env.js, because env throws errors while loading them.  skipCallbacks allows no 
 * 		steal callbacks to be called, so the build finishes without error.  This is mainly for use in this 
 * 		make.js script. The libs other than jQuery can't be used yet in a full production.js build because 
 * 		of this env weakness.
 * 3) using the standalone canjs scripts - these scripts are build with pluginify, so they don't include any 
 * 		reference to steal.  They require the user to load the actual libarary file first, then the corresponding 
 * 		canjs script.
 * 4) using a fully built production.js file - This is only really relevant for jQuery until the env build 
 * 		problem is fixed. The libs are built into the production.js file.
 * 
 */

load("steal/rhino/rhino.js");
steal('steal/build/pluginify', function() {
	
	steal.File("can/dist").mkdirs();

	steal.build.pluginify("can/util/make/jquery.js",{
		out : "can/dist/can.jquery-edge.js",
		global : "can = {}",
		onefunc : true,
		compress: true,
		skipCallbacks: true,
		exclude : "can/util/jquery/jquery.1.7.1.js"
	});
	
	steal.build.pluginify("can/util/make/mootools.js",{
		out : "can/dist/can.mootools-edge.js",
		global : "can = {}",
		onefunc : true,
		compress: true,
		skipCallbacks: true
	});
	
	steal.build.pluginify("can/util/make/zepto.js",{
		out : "can/dist/can.zepto-edge.js",
		global : "can = {}",
		onefunc : true,
		compress: true,
		skipCallbacks: true
	});
	
	steal.build.pluginify("can/util/make/dojo.js",{
		out : "can/dist/can.dojo-edge.js",
		global : "can = {}",
		onefunc : true,
		compress: true,
		wrapInner: ['\ndefine("can/dojo", ["dojo/query", "dojo/NodeList-dom", "dojo/NodeList-traverse"], function(){\n', '\nreturn can;\n});\n'],
		skipCallbacks: true
	});
	
	steal.build.pluginify("can/util/make/yui.js",{
		out : "can/dist/can.yui-edge.js",
		global : "can = {}",
		onefunc : true,
		compress: true,
		skipCallbacks: true
	});

});
