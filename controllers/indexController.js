const db = require('../database/models');
const Usuario = db.Usuario;
const Producto = db.Producto;
const Comentario = db.Comentario;
const bcrypt = require("bcryptjs");

const indexController = {
    index: function(req, res) {
        Producto.findAll({
            include: [
                { association: "comentarios" },
                { association: "usuarios" }
            ]
        })
        .then(function(resultado){
            res.render("index", { datos: resultado });
        })
        .catch(function(error){
            return res.send(error);
        });
    },

    productA: function(req, res) {
        if (req.session.userLoggeado != undefined) {
            Producto.findAll({
                include: [
                    { association: "comentarios" },
                    { association: "usuarios" }
                ]
            })
            .then(function(resultado){
                res.render("productA", { datos: resultado });
            })
            .catch(function(error){
                return res.send(error);
            });
        } else {
            return res.render("login");
        }
    },

    agregarP: function(req, res) {
        Producto.create({
            imagen_producto: req.body.Imagen,
            nombre: req.body.producto,
            descripcion: req.body.Descripcion,
            usuario_id: req.session.userLoggeado.id
        })
        .then(function(resultado){
            res.redirect("/product-add");
        })
        .catch(function(error){
            return res.send(error);
        });
    },

    productD: function(req, res) {
        Producto.findByPk(req.params.id, {
            include: [
                { association: "comentarios", include: [{ association: "usuarios" }] },
                { association: "usuarios" }
            ]
        })
        .then(function(resultado){
            res.render("product", { datos: resultado });
        })
        .catch(function(error){
            return res.send(error);
        });
    },

    addComment: function(req, res){
        if(req.session.userLoggeado != undefined){
            Comentario.create({
                comentario: req.body.comentar,
                usuario_id: req.session.userLoggeado.id,
                post_id: req.params.id})
    
            .then(function(resultado){
                return Producto.findByPk(req.params.id, {include: [
                { association: "comentarios", include: [{ association: "usuarios" }] },
                { association: "usuarios" }
            ]})}) 
            .then(function(resultado){
                res.render("product", { datos: resultado });
            })
            .catch(function(error){
                return res.send(error);
            })    
        } else{
            return res.redirect("/profile/login")
        }
    }
};

module.exports = indexController;