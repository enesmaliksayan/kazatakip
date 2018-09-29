const express = require('express');
const DB = require('../models/db');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  DB.getNamazlar((err, namaz) => {
    if (!err) res.render('index', { title: 'Namazlar', namaz });
    else res.render('error');
  })
});

router.get('/kildim/:id/:kalan', (req,res,next) => {
  DB.updateNamazById(req.params.id,{'kalan':req.params.kalan}, (err, namaz) => {
    if(err) {
      res.json({ok:false,err});
    }
    else {
      res.json({ok:true,namaz});
    }
  })
});

router.get('/namaz/:id', (req,res,next) => {
  DB.getNamazById(req.params.id, (err, namaz) => {
    if(!err) res.render('index', {title: namaz['vakit']+' Namazı', namaz});
    else res.render('error');
  })
})

module.exports = router;
