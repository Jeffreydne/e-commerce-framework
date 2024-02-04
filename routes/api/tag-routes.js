const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags, including its associated Product data
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`, including its associated Product data
   // XXXX ALSO  // ADD if statement see activity 28 travelerRoutes.js line 52 XXXXXXXXXXXXXXX
   try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: {model: Product, through: ProductTag, as: 'tag_for_product' },
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
   // XXXX ALSO  // ADD if statement see activity 28 travelerRoutes.js line 52 XXXXXXXXXXXXXXX
 
   try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id 
      },
   });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
   // XXXX ALSO  // ADD if statement see activity 28 travelerRoutes.js line 52 XXXXXXXXXXXXXXX
   try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
       },
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
