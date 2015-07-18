var HttpMaster = require("http-master");
var httpMaster = new HttpMaster();

var config = require("./config.ec2.json");

httpMaster.init(config,
 function(err){
	// listening
	console.log("proxy running");
	if(err){
		console.log(err);
	}
    try {
        console.log('Old User ID: ' + process.getuid() + ', Old Group ID: ' + process.getgid());
        process.setgid('staff');
        process.setuid('donundeen');
        console.log('New User ID: ' + process.getuid() + ', New Group ID: ' + process.getgid());
    } catch (err) {
        console.log('Cowardly refusing to keep the process alive as root.');
        console.log(err);
        process.exit(1);
    }

});

httpMaster.logNotice(function(msg){
    console.log("logging notice");
	console.log(msg);
});

httpMaster.logError(function(msg){
    console.log("logging error");
	if(msg){
		console.log(msg);
	}
});

