const express = require('express');
const router = express.Router();

// Poem Model
const Poem = require('../../models/Poem');

// Route GET api/poems

router.get('/', (req,res) => {
  Poem.find() 
    .sort({ date: -1})
    .then(poems => res.json(poems))
});

// Route POST api/poems

router.post('/', (req,res) => {
  const newPoem = new Poem({
    name: req.body.name,
    body: req.body.body,
    handle: req.body.handle,
  });
  newPoem.save()
    .then(poem => res.json(poem));
});

// Route Delete api/poems

router.delete('/:id', (req,res) => {
  Poem.findById(req.params.id)
    .then(poem => item.remove().then(() => res.json({success:true})))
    .catch(err => res.status(404).json({success:false}))
  })


module.exports = router;