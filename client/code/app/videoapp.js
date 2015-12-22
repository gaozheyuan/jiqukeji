'use strict';
/* QUICK CHAT DEMO */

// Delete this file once you've seen how the demo works

// Listen out for newMessage events coming from the server
ss.event.on('newMessage', function(message) {
	window.alert(message);
});

// Demonstrates sharing code between modules by exporting function
exports.send = function(text, cb) {
  if (valid(text)) {
    return ss.rpc('demo.sendMessage', text, cb);
  } else {
    return cb(false);
  }
};

function timestamp() {
  var d = new Date();
  return d.getHours() + ':' + pad2(d.getMinutes()) + ':' + pad2(d.getSeconds());
}

function pad2(number) {
  return (number < 10 ? '0' : '') + number;
}

function valid(text) {
  return text && text.length > 0;
}
