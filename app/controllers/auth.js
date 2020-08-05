const express = require('express');

const models = require('../models');
const config = require('../../config');
const GitHub = require('../services/github');

const router = express.Router();

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

router.get('/login/github', (req, res) => {
  const github = new GitHub({ client_id: config.githubClientId, client_secret: config.githubClientSecret });
  res.redirect(github.authorization_url('public_repo'));
});

router.get('/callback/github', async (req, res) => {
  if (!req.query.code) {
    return res.render('500');
  }

  // Fetch user from GitHub OAuth and store in session
  const github = new GitHub({ client_id: config.githubClientId, client_secret: config.githubClientSecret });
  const accessToken = await github.get_token(req.query.code);

  if (!accessToken) {
    return res.render('404');
  }

  const user = await models.User.find_or_create_from_token(accessToken);

  req.session.access_token = accessToken;
  req.session.user = user;

  return res.redirect('/');
});

module.exports = router;
