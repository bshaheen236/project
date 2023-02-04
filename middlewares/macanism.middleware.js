const validate = require('../middlewares/validation.middleware');
const { body } = require('express-validator');

module.exports = validate([
    body('quantity').isNumeric().withMessage('quantity should be numeric'),
    body('price').isNumeric().withMessage('price should be numeric'),
    body('trade_amount').isNumeric().withMessage('trade_amountshould be numeric')
]);