const router = require('express').Router();
let Optin = require('../models/optin.model');

router.route('/').get((req, res) => {
  Optin.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const assetId = Number(req.body.assetId);
  const account = req.body.account;

  const newRequest = new Optin({
    name,
    email,
    assetId,
    account,
  });

  newRequest.save()
  .then(() => res.json('Request added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/').get((req, res) => {
    Optin.find()
      .then(requests => res.json(requests))
      .catch(err => res.status(400).json('Error: ' + err));
  });

// router.route('/:id').get((req, res) => {
//   Exercise.findById(req.params.id)
//     .then(exercise => res.json(exercise))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/:id').delete((req, res) => {
//   Exercise.findByIdAndDelete(req.params.id)
//     .then(() => res.json('Exercise deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').post((req, res) => {
//   Exercise.findById(req.params.id)
//     .then(exercise => {
//       exercise.username = req.body.username;
//       exercise.description = req.body.description;
//       exercise.duration = Number(req.body.duration);
//       exercise.date = Date.parse(req.body.date);

//       exercise.save()
//         .then(() => res.json('Exercise updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;