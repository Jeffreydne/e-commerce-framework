const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories, include associated products for each category
  try {
    const catData = await Category.findAll({
      include: { model: Product },
    });
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value & include its associated Products
   // XXXX ALSO  // ADD if statement see activity 28 travelerRoutes.js line 52 XXXXXXXXXXXXXXX
  try {
    const catData = await Category.findByPk(req.params.id, {
      include: { model: Product },
    });
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
   try {
    const catData = await Category.create(req.body);
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  //XXXXXXX DOES THIS PUT WORK????? XXXXXXXXX
   // ALSO DO I NEED TO ADD CASCADE-probably not???????
    // XXXX ALSO  // ADD if statement see activity 28 travelerRoutes.js line 52 XXXXXXXXXXXXXXX
   try {
    const catData = await Category.update(
      { category_name: req.params.id}, 
      { where: req.params.id },
    );
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  // DO I NEED TO ADD CASCADE ?????????????????????
   // XXXX ALSO  // ADD if statement see activity 28 travelerRoutes.js line 52 XXXXXXXXXXXXXXX
   try {
    const catData = await Category.destroy({
      where: {
        id: req.params.id
       },
    });
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
