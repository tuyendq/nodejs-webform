// contact.js
'use strict';

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('contact', { 
        data: {}, 
        errors: {}
    });
});

router.post('/', (req, res) => {
    res.render('contact', {
        data: req.body,
        errors: {
            message: {
                msg: 'A message is required.'
            },
            email: {
                msg: 'That email address does not look right.'
            }
        }
    });
});


module.exports = router;