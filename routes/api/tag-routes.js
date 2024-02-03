const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags, including its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`, including its associated Product data
   // XXXX ALSO  // ADD if statement see activity 28 travelerRoutes.js line 52 XXXXXXXXXXXXXXX
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
   // XXXX ALSO  // ADD if statement see activity 28 travelerRoutes.js line 52 XXXXXXXXXXXXXXX
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
   // XXXX ALSO  // ADD if statement see activity 28 travelerRoutes.js line 52 XXXXXXXXXXXXXXX
});

module.exports = router;
