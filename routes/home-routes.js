const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// TODO: router for homepage? and to verify auth