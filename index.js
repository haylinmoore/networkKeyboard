const express = require('express')
const app = express()
const port = 3000

var keyboard = {};
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/request', (req, res) => {
	for (let i = 0; i < 255; i++){
		if (keyboard[i.toString()] == undefined){
			res.send("The subnet X.X."+i.toString()+".X is ready for your requests");
		}
	}
})

app.get('/read', (req, res) => {
	let ip = req.socket.address().address.split(".");

	//console.log("Keyboard viewed on subnet "+ ip[2]);
	if (keyboard[ip[2]] == undefined){
		res.send("No keyboard activity on the subnet X.X."+ip[2]+".X");
	}
	res.send(keyboard[ip[2]]);
})

app.get('/type', (req, res) => {
	let ip = req.socket.address().address.split(".");
	//console.log("Key " + ip[3] + " placed on " + ip[2]);
	if (keyboard[ip[2]] == undefined){
		keyboard[ip[2]] = "";
	}

	let key = String.fromCharCode(ip[3]);
	keyboard[ip[2]]+=key;
	console.log(keyboard[ip[2]]);
	res.send("Key accepted");

})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
