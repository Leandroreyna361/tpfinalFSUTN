var express = require('express');
var router = express.Router();
var panelModel = require('../../models/panelModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/' , async function (req, res, next){
    if (req.session && req.session.nombre){
         var productos = await panelModel.getProductos();
         productos = productos.map(producto =>{
            if (producto.img_id){
                const imagen1 = cloudinary.image(producto.img_id,{
                    width: 100,
                    height: 100,
                    crop: 'fill'
                });
                return{
                    ...producto,
                    imagen1
                }
            } else{
                return{
                    ...producto,
                    imagen1:''
                };
            };
         })

         res.render('admin/panel', {
             layout: 'admin/layoutLogued',
             nombre: req.session.nombre,
             productos
        });
    } else {
        res.redirect('/admin/login');
    }
});
router.get('/agregarProducto' , async function (req, res, next){
    if (req.session && req.session.nombre){
         res.render('admin/agregarProducto', {
             layout: 'admin/layoutLogued',
             nombre: req.session.nombre,
        });
    } else {
        res.redirect('/admin/login');
    }
});
router.post('/agregarProducto', async (req,res,next)=>{
    try {
        console.log('Body:', req.body);
        var img_id = '';
        if (req.files && Object.keys(req.files).length>0){
            console.log('Files:', req.files);
            imagen1 = req.files.imagen1;
            img_id = (await uploader(imagen1.tempFilePath)).public_id;
        }

        if (req.body.imagen !="" && req.body.titulo !="" && req.body.descripcion != "" && req.body.precio !="" && req.body.stock !=""){
            await panelModel.insertProducto({
                ...req.body,
                img_id
            });
            res.redirect('/admin/panel')
        } else {
            res.render('admin/agregarProducto',{
                layout: 'admin/layoutLogued',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error){
        console.log(error)
        res.render('admin/agregarProducto',{
            layout: 'admin/layoutLogued',
            error: true,
            message: 'No se cargo el producto'
        })
    }
});
router.get('/eliminarProducto/:id',async(req,res,next)=>{
    var id = req.params.id;

    let producto = await panelModel.getProductoById(id);
    if (producto.img_id){
        await (destroy(producto.img_id))
    }

    await panelModel.deleteProductoById(id);
    res.redirect('/admin/panel')
}); 
router.get('/modificarProducto/:id', async(req,res,next)=>{
    var id = req.params.id;
    var producto = await panelModel.getProductoById(id);
    res.render('admin/modificarProducto',{
        layout: 'admin/layoutLogued',
        producto
    });
});
router.post('/modificarProducto', async(req, res, next) => {
    try {
       // console.log('Datos del formulario:', req.body);
        let img_id = req.body.img_original;
        let borrar_img_vieja = false;

        if (req.files && Object.keys(req.files).length > 0 && req.files.imagen1) {
            //console.log('Archivos recibidos:', req.files);
            const imagen1 = req.files.imagen1;
            img_id = (await uploader(imagen1.tempFilePath)).public_id;
            borrar_img_vieja = true;
        } else {
            if (req.body.img_delete === "1") {
                img_id = null;
                borrar_img_vieja = true;
            }
        }

        //console.log('Imagen ID:', img_id);
        //console.log('Borrar imagen vieja:', borrar_img_vieja);

        if (borrar_img_vieja && req.body.img_original) {
            //console.log('Se borrará la imagen original:', req.body.img_original);
            await destroy(req.body.img_original);
        }

        var obj = {
            imagen: req.body.imagen,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            stock: req.body.stock,
            img_id
        };

       // console.log('Objeto para modificar:', obj);

        await panelModel.modificarProductoById(obj, req.body.id);

        res.redirect('/admin/panel');
    } catch (error) {
        console.error('Error al modificar el producto:', error);
        res.render('admin/modificarProducto', {
            layout: 'admin/layoutLogued',
            error: true,
            message: 'No se modificó el producto'
        });
    }
});
module.exports = router;