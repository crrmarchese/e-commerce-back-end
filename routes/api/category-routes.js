const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  })
    .then((categories) => {
      // Send the newly created row as a JSON object
      res.json(categories);
    })
    .catch((err) => {
      res.json(err);
    });
});


router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
    Category.findOne({
      include: [Product],
      where: {
        id: req.params.id
      }
    })
      .then((categoryId) => {
        // Send the newly created row as a JSON object
        res.json(categoryId);
      })
      .catch((err) => {
        res.json(err);
      });

});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((newCategory) => {
      // Send the newly created row as a JSON object
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

// PUT and DELETE must have a WHERE to limit action
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update (
    {
      // All the fields you can update and the data attached to the request body.
      category_name: req.body.category_name
    },
    {
      // Gets the id based on the id given in the request parameters
      where: {
       id: req.params.id,
      },
    }
  )
    .then((updatedCategory) => {
      // Sends the updated book as a json response
      res.json(updatedCategory);
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
    Category.destroy({
      where: {
       id: req.params.id,
      },
    })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
