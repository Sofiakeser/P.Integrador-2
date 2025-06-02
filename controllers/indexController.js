const db = require('../database/models')
const Usuario = db.Usuario
const Producto = db.Producto
const Comentario = db.Comentario
const bcrypt = require("bcryptjs")


const indexController = {
    index: function(req, res) {

        Producto.findAll({
            include:[
                  {association: "comentarios" },
                  {association: "usuarios" } 
            ]})
            .then(function(resultado){
                res.render("index", {datos:resultado})
            })
            .catch(function(error){
                return res.send(error);
            })
          },
        
    productA: function(req, res){
        Producto.findAll({
            include:[
                  {association: "comentarios" },
                  {association: "usuarios" } 
            ]})
            .then(function(resultado){
                res.render("ProductA", {datos:resultado})
            })
            .catch(function(error){
                return res.send(error);
            })
    },

    productD: function(req, res){ 
        Producto.findByPk(req.params.id,{ 
            include:[ 
                  {association: "comentarios", include: [{ association: "usuarios" }]}, //CHECKEAR !!!!!
                  {association: "usuarios" } 
            ]})
            .then(function(resultado){
                res.render("product", {datos:resultado})
            })
            .catch(function(error){
                return res.send(error);
            })
    }}


module.exports = indexController
