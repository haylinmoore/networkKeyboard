var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var keyboard = {};

router.get('/request', (req, res) => {
	for (let i = 0; i < 255; i++){
		if (keyboard[i.toString()] == undefined){
			res.send("The subnet X.X."+i.toString()+".X is ready for your requests");
		}
	}
})

router.get('/read', (req, res) => {
	let ip = req.socket.address().address.split(".");
	if (keyboard[ip[2]] == undefined){
		res.send("No keyboard activity on the subnet X.X."+ip[2]+".X");
	}
	res.send(keyboard[ip[2]]);
})

router.get('/type', (req, res) => {
	let ip = req.socket.address().address.split(".");
	if (keyboard[ip[2]] == undefined){
		keyboard[ip[2]] = "";
	}

	let key = String.fromCharCode(ip[3]);
	keyboard[ip[2]]+=key;
	console.log(keyboard[ip[2]]);
	res.send("Key accepted");

})

module.exports = router;
