const db = require('../database/models')
const Usuario = db.Usuario
const Producto = db.Producto
const bcrypt = require("bcryptjs")


const indexController = {
    index: function(req, res) {

        Producto.findAll({
            include:[
                  {association: "comentarios" },
                  {association: "usuarios" } //chequear
            ]})
            .then(function(resultado){
                res.render("index", {datos:resultado})
            })

        res.render('register');
      },
    
    login: function(req, res) { 
        res.render("login")
    },

    register: function(req, res) { 

        res.render("register")
    },

    create: function (req, res) {
        
        if(req.body.contrasena.length < 3){
            return res.send("La contrasena debe tener mas de tres caracteres")
        };

        let passEncriptada = bcrypt.hashSync(req.body.password, 10);

        Usuario.create({
            usuario: req.body.usuario,
            email: req.body.email,
            contrasena: passEncriptada,
            fecha: req.body.fecha
        })
        .then(function(resultado){
            
            return res.redirect("/profile");
        })
        .catch(function(error){
            return res.send(error);
        })

        res.render('login')
    },

    productA: function(req, res){
        Producto.findAll({
            include:[
                  {association: "comentarios" },
                  {association: "usuarios" } 
            ]})

        Usuario.findAll({
            include:[
                    {association: "comentarios" },
                    {association: "productos" }
            ]});

        res.render("productA")
    },

    product: function(req, res){ 
        Producto.findAll({
            include:[
                  {association: "comentarios" },
                  {association: "usuarios" } 
            ]})
        
        Comentario.findAll({
            include:[
                    {association: "productos" },
                    {association: "usuarios" } 
                ]})

        res.render("product");
    }
}

module.exports = indexController