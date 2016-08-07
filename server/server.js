var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectString = 'postgres://spencerkekauoha@localhost/sean_stack';
var port = 8000;

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + './../public'));

var massiveInstance = massive.connectSync({connectionString : connectString});

app.set('db', massiveInstance);
var imageCtrl = require('./controllers/imageCtrl');

//endpoints
app.get('/api/images', imageCtrl.readImages);
app.post('/api/images', imageCtrl.createImages);
app.put('/api/images/:id', imageCtrl.updateImages);
app.delete('/api/images/:id', imageCtrl.deleteImage);

app.listen(port, function(){
  console.log('Successfully listening on port:' + port);
});
