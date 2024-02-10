var express = require('express');
var router = express.Router();

router.get('/' , async function (req, res, next){
    if (req.session && req.session.nombre){
         res.render('admin/orders', {
             layout: 'admin/layoutLogued',
             nombre: req.session.nombre
        });
    } else {
        res.redirect('/admin/login');
    }
});

module.exports = router;