const express = require('express');
const router = express.Router();

const GitHubController = require('../controllers/gitHub');

router.get('/repos/:owner/:repo/issues', GitHubController.issues);

module.exports = router;

