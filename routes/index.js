const express = require('express');
const router = express.Router();
const Url = require('../models/Url');
const path = require('path');

router.get('/:urlId', async (req, res) => {
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });
    if (url) {
      url.clicks++;
      url.save();
      return res.redirect(url.origUrl);
    } else res.status(404).json('Not found');
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
});
router.get("/", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
});
router.get('/index',function(req,res){
  res.sendFile(path.join(__dirname,'../views/index.html'));
  //__dirname : It will resolve to your project folder.
});
module.exports = router;
