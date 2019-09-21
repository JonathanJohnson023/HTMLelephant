const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Tag = require("../../models/Tag")

// router.get('/', (req, res) => {
//     Tag.find()
//         .sort({date: -1})
//         .then(tags => res.json(tags))
//         .catch(err => res.status(404).json({notagsfound: 'No tags found'}));
// });

router.get('/document/:document_id', (req, res) => {
    Tag.find({
        documentId: req.params.document_id
        })
        .sort({date: -1})
        .then(tags => { 
          return (
            res.json(tags)
          )
      })
        .catch(err => res.status(404).json({notagsfound: 'No tags found'}));
});

router.get('/:id', (req, res) => {
    Tab.findById(req.params.id)
        .then(tag => res.json(tag))
        .catch(err => res.status(404).json({notagsfound: 'No tag found with that ID'}));
});

router.post('/',
    passport.authenticate('jwt', {
        session: false
    }),
    (req, res) => {
        const newTag = new Tag({
            type: req.body.type,
            styles: req.body.styles,
            body: req.body.body,
            document: req.body.documentId
          });

        newTag.save().then(tag => res.json(tag));
    }
);

  router.post('/collection',
    passport.authenticate('jwt', {
        session: false
    }),
      (req, res) => {
        Tag.collection.insertMany(req.body)
          .then(tag => res.json(tag.ops))
          .catch(err => {
            res.status(404).json(err)
          })
      }
  );


module.exports = router;