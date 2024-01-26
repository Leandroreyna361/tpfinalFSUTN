var express = require('express');
var router = express.Router();

router.get('/' , async function (req, res, next){
    res.render('admin/panel', {
        layout: 'admin/layout',
        nombre: req.session.nombre
    });
});

module.exports = router;