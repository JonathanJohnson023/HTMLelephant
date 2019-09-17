const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Document = require("../../models/Document")

router.post('/',
    passport.authenticate('jwt', {
        session: false
    }),
    (req, res) => {
        const newDocument = new Document({
            tags: req.body.tags,
            title: req.body.title,
          });

        newDocument.save().then(document => res.json(document));
    }
);


module.exports = router;