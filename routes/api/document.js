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
            title: req.body.title,
          });

        newDocument.save().then(document => res.json(document));
    }
);

router.get('/:documentId', (req, res) => {
    Document.findById(req.params.documentId)
        .then(document => {
            res.json(document)
        })
});

router.patch('/:documentId', (req, res) =>{
    Document.findOneAndUpdate({id: req.params.documentId}, req.body)
        .then(document => {
            res.json(document)
        })
})

module.exports = router;