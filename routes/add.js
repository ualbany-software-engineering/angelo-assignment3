var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:firstNumber/and/:secondNumber', function(req, res, next) {
  const firstNo = parseInt(req.params.firstNumber);
  const secondNo = parseInt(req.params.secondNumber);

  res.render('result', { result: firstNo + secondNo });
});

module.exports = router;
