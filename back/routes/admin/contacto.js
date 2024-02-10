var express = require('express');
var router = express.Router();
var contactoModel = require('../../models/contactoModel');

router.get('/' , async function (req, res, next){
    var contacto = await contactoModel.getContacto();
    if (req.session && req.session.nombre){
         res.render('admin/contacto', {
             layout: 'admin/layoutLogued',
             nombre: req.session.nombre,
             contacto
        });
    } else {
        res.redirect('/admin/login');
    }
});
router.get('/agregarContacto' , async function (req, res, next){
    if (req.session && req.session.nombre){
         res.render('admin/agregarContacto', {
             layout: 'admin/layoutLogued',
             nombre: req.session.nombre,
        });
    } else {
        res.redirect('/admin/login');
    }
});
router.post('/agregarContacto', async (req,res,next)=>{
    try {
        if (req.body.nombre !="" && req.body.email !="" && req.body.telefono != "" && req.body.mensaje !=""){
            await contactoModel.insertContacto(req.body);
            res.redirect('/admin/contacto')
        } else {
            res.render('admin/agregarContacto',{
                layout: 'admin/layoutLogued',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error){
        console.log(error)
        res.render('admin/agregarContatco',{
            layout: 'admin/layoutLogued',
            error: true,
            message: 'No se cargo el contacto'
        })
    }
});
router.get('/eliminarContacto/:id', async(req,res,next)=>{
    var id = req.params.id;
    await contactoModel.deleteContactoById(id);
    res.redirect('/admin/contacto');
});


router.get('/cambiarEstado/:id', async function(req, res, next) {
    var id = req.params.id;
    try {
        var contacto = await contactoModel.getContactoById(id);
        //console.log('Contacto antes de actualiar estado:',contacto)
        var nuevoEstado = contacto.estado === 0 ? 1 : 0;
        await contactoModel.updateEstadoContacto(id, nuevoEstado);
        //console.log('estado actualizado:',nuevoEstado);
        res.redirect('/admin/contacto');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al cambiar el estado del contacto');
    }
});


module.exports = router;