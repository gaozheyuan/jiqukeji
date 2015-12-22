// My SocketStream 0.4 app

var ss = require('socketstream');

// Define a single-page client called 'main'
ss.client.define('main', {
  view: 'app.html',
  css:  ['../node_modules/normalize.css/normalize.css', 'app.css'],
  code: ['../node_modules/es6-shim/es6-shim.js', 'libs/jquery.min.js', 'app/app.js','app/entry.js'],
  tmpl: 'chat'
});

/*ss.client.define('play', {
	view: 'test.html',
    code: ['app/entry.js','js/three.min.js','js/jquery-2.1.4.js','js/renderVideo.js']
});*/
// Serve this client on the root URL
//
ss.http.route('/', function(req, res){
  res.serveClient('main');
});

/*ss.http.route('/play', function(req, res){
  res.serveClient('play');
});
*/
// Use server-side compiled Hogan (Mustache) templates. Others engines available
ss.client.templateEngine.use(require('ss-hogan'));

// Minimize and pack assets if you type: SS_ENV=production node app.js
if (ss.env === 'production') ss.client.packAssets();

// Start SocketStream
ss.start();
