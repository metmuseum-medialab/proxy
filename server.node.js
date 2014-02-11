var HttpMaster = require("http-master");
var httpMaster = new HttpMaster();

var config = require("./config.json");

httpMaster.init(config,
 function(err){
	// listening
	console.log("proxy running");
	if(err){
		console.log(err);
	}
});

httpMaster.logNotice(function(msg){
	console.log(msg);
});

httpMaster.logError(function(msg){
	if(msg){
		console.log(msg);
	}
});

