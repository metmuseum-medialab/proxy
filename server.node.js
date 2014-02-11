var HttpMaster = require("http-master");
var httpMaster = new HttpMaster();

httpMaster.init({
	// config here
	"logging" : {
		"accessLog" : "accesslog.log"
	},
	"ports" : {
		"8989" : {
			"proxy" : {
			//	'*/pathfinder/?action=getgraphlist' : "localhost:1337/?action=getgraphlist" ,
				'*/pathfinder/*' : "localhost:1337/[2]" ,
				"*" : "8080"
			}

		}
	}


}, function(err){
	// listening
	console.log(err);
});

httpMaster.logNotice(function(msg){
	console.log(msg);
});



httpMaster.logError(function(msg){
	console.log(msg);
});

