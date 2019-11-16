var express = require('express');
var _ = require('lodash');
var router = express.Router();

function getRemotes(lircNode) {
  if (!lircNode || !lircNode.remotes) {
    return [];
  }
  return _.map(lircNode.remotes, (value, key) => ({
    name: key,
    commands: value || []
  }));
}

function getRemoteByName(lircNode, remoteName) {
  return _.find(getRemotes(lircNode), { 'name': remoteName });
}

function commandExist(remoteObj, cmd) {
  return (remoteObj && remoteObj.commands && Array.isArray(remoteObj.commands) && remoteObj.commands.indexOf(cmd) !== -1);
}

function sendLircCommand(req, remoteName) {
  var lircNode = req.lircNode;
  var cmd = req.params.command;
  var method = req.body.method;
  const remote = getRemoteByName(lircNode, remoteName);

  if (commandExist(remote, cmd)) {
    switch (method) {
      case 'send_start':
        lircNode.irsend.send_start(remoteName, cmd, function() {});
        break;
      case 'send_stop':
        lircNode.irsend.send_stop(remoteName, cmd, function() {});
        break;
      default:
        lircNode.irsend.send_once(remoteName, cmd, function() {});
        break;
    }
    return true;
  } else {
    return false;
  }
}

// POST refresh
router.post('/refresh', function(req, res) {
  if (req.lircNode) {
    req.lircNode.init();
    res.setHeader('Cache-Control', 'no-cache');
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

// GET remotes
router.get('/remotes', function(req, res) {
  res.json(getRemotes(req.lircNode));
});

router.get('/remotes/:remote', function(req, res) {
  var remote = getRemoteByName(req.lircNode, req.params.remote);
  return (remote) ? res.json(remote) : res.status(404).send({ error: { code: 404, message: `Remote '${req.params.remote}' not found.` } });
});

// POST remote command
router.post('/remotes/:remote/:command', function(req, res) {
  if (sendLircCommand(req, req.params.remote)) {
    res.setHeader('Cache-Control', 'no-cache');
    res.sendStatus(200);
  } else {
    res.status(404).send({ error: { code: 404, message: `Remote '${req.params.remote}': Unknown command '${req.params.command}'.` } });
  }
});

// GET default remote commands
router.get('/remote', function(req, res) {
  var remote = getRemoteByName(req.lircNode, req.lircNode.defaultRemoteName);
  return (remote) ? res.json(remote) : res.status(404).send({ error: { code: 404, message: `Remote '${req.params.remote}' not found.` } });
});

// POST default remote command
router.post('/remote/:command', function(req, res) {
  var remoteName = req.lircNode.defaultRemoteName;
  if (sendLircCommand(req, remoteName)) {
    res.setHeader('Cache-Control', 'no-cache');
    res.sendStatus(200);
  } else {
    res.status(404).send({ error: { code: 404, message: `Remote '${remoteName}': Unknown command '${req.params.command}'.` } });
  }
});


module.exports = router;