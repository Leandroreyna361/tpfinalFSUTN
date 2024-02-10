var express = require('express');
var router = express.Router();
var staffModel = require('../../models/staffModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


router.get('/' , async function (req, res, next){
    if (req.session && req.session.nombre){
        var staff = await staffModel.getStaff();
        staff = staff.map(staff=>{
            if (staff.img_id){
                const imagen1 = cloudinary.image(staff.img_id,{
                    width:100,
                    height:100,
                    crop:'fill'
                });
                return{
                    ...staff,
                    imagen1
                }
            } else{
                return{
                    ...staff,
                    imagen1: ''
                }
            }
        });
           

         res.render('admin/staff', {
             layout: 'admin/layoutLogued',
             nombre: req.session.nombre,
             staff
        });
    } else {
        res.redirect('/admin/login');
    }
});
router.get('/agregarStaff' , async function (req, res, next){
    if (req.session && req.session.nombre){
         res.render('admin/agregarStaff', {
             layout: 'admin/layoutLogued',
             nombre: req.session.nombre,
        });
    } else {
        res.redirect('/admin/login');
    }
});

router.post('/agregarStaff', async (req, res, next)=>{
     try{

        var img_id = '';
        if (req.files && Object.keys(req.files).length>0){
            imagen1 = req.files.imagen1;
            img_id = (await uploader(imagen1.tempFilePath)).public_id;
        }

        if(req.body.imagen !="" && req.body.nombre !="" && req.body.puesto !="" && req.body.descripcion !=""){
           await staffModel.insertStaff({
            ...req.body,
            img_id
        });
           res.redirect('/admin/staff')
        } else {
            res.render('admin/agregarStaff',{
                layout:'admin/layoutLogued',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
     } catch (error){
        console.log(error)
        res.render('admin/agregarStaff',{
            layout: 'admin/layoutLogued',
            error: true,
            message: 'No se cargo el staff'
        })
     }
});
router.get('/eliminarStaff/:id', async(req,res,next)=>{
    var id = req.params.id;
    let staff = await staffModel.getStaffById(id);
    if (staff.img_id){
        await (destroy(staff.img_id))
    }
    await staffModel.deleteStaffById(id);
    res.redirect('/admin/staff');
});
router.get('/modificarStaff/:id', async(req,res,next)=>{
    var id = req.params.id;
    //console.log(req.params.id);
    var staff = await staffModel.getStaffById(id);

    res.render('admin/modificarStaff',{
        layout: 'admin/layoutLogued',
        staff
    })
})
router.post('/modificarStaff', async (req, res, next) => {
    try {
        let img_id = req.body.img_original; 
        let borrar_img_vieja = false; 

        if (req.body.img_delete === "1") {
            img_id = null; 
            borrar_img_vieja = true; 
        } else {
            if (req.files && Object.keys(req.files).length > 0 && req.files.imagen1) {
                const imagen1 = req.files.imagen1; 
                img_id = (await uploader(imagen1.tempFilePath)).public_id;
                borrar_img_vieja = true; 
            }
        }

        if (borrar_img_vieja && req.body.img_original) {
            await destroy(req.body.img_original);
        }

        var obj = {
            imagen: req.body.imagen,
            nombre: req.body.nombre,
            puesto: req.body.puesto,
            descripcion: req.body.descripcion,
            img_id 
        }

        await staffModel.modificarStaffById(obj, req.body.id);

        res.redirect('/admin/staff');
    } catch (error) {
        console.error('Error al modificar el personal:', error);
        res.render('admin/modificarStaff', {
            layout: 'admin/layoutLogued',
            error: true,
            message: 'No se modificó el personal'
        });
    }
});

module.exports = router;