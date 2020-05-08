var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var keyboard = [];

router.get('/read', (req, res) => {
    if(keyboard.length == 0)
        res.send("");
    else
        res.send(keyboard.shift());
	return
});

router.get('/internal/type', (req, res) => {
    key = String.fromCharCode(
            parseInt(
                (req.header('PortKeyboard-Forwarded-For'))));
    keyboard.push(key);
	res.send(key+" accepted");
});

module.exports = router;
