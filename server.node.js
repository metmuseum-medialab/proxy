console.log("loading it up !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

var HttpMaster = require("http-master");
var httpMaster = new HttpMaster();

var config = require("./config.ec2.json");

var env = "ec2";


httpMaster.init(config,
 function(err){
	// listening
	console.log("proxy running");
	if(err){
		console.log(err);
	}
    if(env == "local"){
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
    }else if (env=="metmuseum")
         try {
        	 console.log('Old User ID: ' + process.getuid() + ', Old Group ID: ' + process.getgid());
        	 process.setgid('metmuseum');
        	 process.setuid('metmuseum');
        	 console.log('New User ID: ' + process.getuid() + ', New Group ID: ' + process.getgid());
         } catch (err) {
        	 console.log('Cowardly refusing to keep the process alive as root.');
        	 process.exit(1);
         }
     }else {

     }
});

httpMaster.logNotice(function(msg){
    console.log("logging notice");
	console.log(msg);
});

httpMaster.logError(function(msg){
	if(msg){
		console.log(msg);
	}
});

