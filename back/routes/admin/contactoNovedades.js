var express = require('express');
var router = express.Router();
var contactoNovedadesModel = require ('../../models/contactoNovedadesModel');

router.get('/' , async function (req, res, next){
    if (req.session && req.session.nombre){
        var novedades = await contactoNovedadesModel.getNovedades();
         res.render('admin/contactoNovedades', {
             layout: 'admin/layoutLogued',
             nombre: req.session.nombre,
             novedades
        });
    } else {
        res.redirect('/admin/login');
    }
});
router.get('/agregarNovedades' , async function (req, res, next){
    if (req.session && req.session.nombre){
         res.render('admin/agregarNovedades', {
             layout: 'admin/layoutLogued',
             nombre: req.session.nombre,
        });
    } else {
        res.redirect('/admin/login');
    }
});
router.post('/agregarNovedades', async (req,res,next)=>{
    try {
        if (req.body.titulo !="" && req.body.subtitulo !="" && req.body.cuerpo != ""){
            await contactoNovedadesModel.insertNovedad(req.body);
            res.redirect('/admin/contactoNovedades')
        } else {
            res.render('admin/agregarNovedades',{
                layout: 'admin/layoutLogued',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error){
        console.log(error)
        res.render('admin/agregarNovedades',{
            layout: 'admin/layoutLogued',
            error: true,
            message: 'No se cargo la novedad'
        })
    }
});
router.get('/eliminarNovedad/:id', async(req,res,next)=>{
    var id = req.params.id;
    await contactoNovedadesModel.deleteNovedadesById(id);
    res.redirect('/admin/contactoNovedades');
});
router.get('/modificarNovedad/:id', async(req,res,next)=>{
    var id = req.params.id;
    //console.log(req.params.id);
    var novedad = await contactoNovedadesModel.getNovedadById(id);

    res.render('admin/modificarNovedad',{
        layout: 'admin/layoutLogued',
        novedad
    })
})
router.post('/modificarNovedad', async(req,res,next)=>{
    try{
        var obj={
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo
        }
        //console.log(obj)
        await contactoNovedadesModel.modificarNovedadById(obj, req.body.id);
        res.redirect('/admin/contactoNovedades');
    } catch(error){
        //console.log(error)
        res.render('admin/modificarNovedad',{
            layout: 'admin/layoutLogued',
            error: true,
            massage: 'No se modifico la novedad'
        })
    }
})


module.exports = router;