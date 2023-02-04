const router = require('express').Router();
const {
  goldView,
  silverView,
  sellGold,
  sellSilver,
  buyGold,
  buySilver
} = require('../controllers/macanismControl');
const { auth } = require('../middlewares/auth.middleware');
const validDetails = require('../middlewares/macanism.middleware');


router.get('/viewgold/:id', auth, validDetails, goldView);
router.get('/viewsilver/:id', auth, validDetails, silverView);

router.post('/sellgold/:id', auth, validDetails, sellGold);
router.post('/sellsilver/:id', auth, validDetails, sellSilver);

router.post('/buygold/:id', auth, validDetails, buyGold);
router.post('/buysilver/:id', auth, validDetails, buySilver);


module.exports = router;


// const express = require('express');
// const router = express.Router();
// const validateSellInput = require('../middlewares/auth.middleware');
// const Patch = require('../models/goldTrade_schema');

// router.post('/sell', (req, res) => {
//   const { errors, isValid } = validateSellInput(req.body);

//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   const newPatch = new Patch({
//     quantity: req.body.patchQuantity,
//     price: req.body.patchPrice,
//     trade_amount: req.body.patchAmount
//   });

//   newPatch
//     .save()
//     .then(patch => res.json(patch))
//     .catch(err => console.error(err));
// });

// module.exports = router;

