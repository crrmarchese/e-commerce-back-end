const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [{ model: Product, through: ProductTag }]
  })
    .then((allTags) => {
      // Send the newly created row as a JSON object
      res.json(allTags);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    include:  [{ model: Product, through: ProductTag }],
    where: {
      id: req.params.id
    }
  })
    .then((tagById) => {
      // Send the newly created row as a JSON object
      res.json(tagById);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((newTag) => {
    // Send the newly created row as a JSON object
    res.json(newTag);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update (
    {
      // All the fields you can update and the data attached to the request body.
      tag_name: req.body.tag_name
    },
    {
      // Gets the id based on the id given in the request parameters
      where: {
       id: req.params.id,
      },
    }
  )
    .then((updatedTag) => {
      // Sends the updated item as a json response
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
     id: req.params.id,
    },
  })
  .then((deletedTag) => {
    res.json(deletedTag);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
