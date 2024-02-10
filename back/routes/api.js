const express = require('express');
const router = express.Router();
var panelModel = require('../models/panelModel');
var staffModel = require('../models/staffModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;

var nodemailer = require('nodemailer');

router.get('/panel' , async function (req, res, next){
    let productos = await panelModel.getProductos();
    productos = productos.map(productos =>{
        if (productos.img_id){
            const imagen1 = cloudinary.url(productos.img_id,{
                width:500,
                height:400,
                crop: 'fill'
            });
            return {
                ...productos,
                imagen1
            }
        } else {
            return{
                ...productos,
                imagen1:''
            }
        }
    })
    res.json(productos);
})
router.get('/staff' , async function (req, res, next){
    let staff = await staffModel.getStaff();
    staff = staff.map(staff =>{
        if (staff.img_id){
            const imagen1 = cloudinary.url(staff.img_id,{
                width:500,
                height:400,
                crop: 'fill'
            });
            return {
                ...staff,
                imagen1
            }
        } else {
            return{
                ...staff,
                imagen1:''
            }
        }
    })
    res.json(staff);
})

router.post('/contacto', async (req,res)=>{
    const mail = {
        to: 'leandro_miguel99@hotmail.com',
        subjet:'Contacto Web',
        html: `${req.body.nombre} se contacto para solicitar atencion personalizada al correo: ${req.body.email} <br> Ademas, dejo el comentario: ${req.body.mensaje} <br> Su telefono es: ${req.body.telefono}`
    }
    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth:{
            user:process.env.SMTP_USER,
            pass:process.env.SMTP_PASS
        }
    })
    await transport.sendMail(mail)
    res.status(201).json({
        error: false,
        message: 'Mensaje Enviado'
    })
})

module.exports = router;