var express = require('express');
var lircNode = require('lirc_node');
var router = express.Router();

function geniusRemoteExist() {
  return lircNode.remotes.hasOwnProperty('genius');
}

function geniusRemoteCmdExist(cmd) {
  return geniusRemoteExist() && (lircNode.remotes['genius'].indexOf(cmd) !== -1);
}

/* GET REST API specifications page. */
router.get('/', function(req, res, next) {
  res.render('api', { title: 'REST API for Genius SW-HF5.1 3000', navBarTitle: "Genius SW-HF5.1 3000 - Speaker System", hideHeader: false, hideFooter: false });
});

// GET remote
// List all commands
router.get('/remote', function(req, res) {
  if (geniusRemoteExist()) {
    res.json(lircNode.remotes['genius']);
  } else {
    res.sendStatus(404);
  }
});

// POST remote command
router.post('/remote/cmd/:command', function(req, res) {
  if (geniusRemoteCmdExist(req.params.command)) {
    lircNode.irsend.send_once('genius', req.params.command, function() {});
    res.setHeader('Cache-Control', 'no-cache');
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

// Start sending :remote/:command repeatedly
router.post('/remote/cmd/:command/send_start', function(req, res) {
  if (geniusRemoteCmdExist(req.params.command)) {
    lircNode.irsend.send_start('genius', req.params.command, function() {});
    res.setHeader('Cache-Control', 'no-cache');
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

// Stop sending :remote/:command repeatedly
router.post('/remote/cmd/:command/send_stop', function(req, res) {
  if (geniusRemoteCmdExist(req.params.command)) {
    lircNode.irsend.send_stop('genius', req.params.command, function() {});
    res.setHeader('Cache-Control', 'no-cache');
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;