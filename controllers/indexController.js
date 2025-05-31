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
                  {association: "usuarios" } //chequear
            ]})
            .then(function(resultado){
                console.log(resultado[1].usuarios.email)
                res.render("index", {datos:resultado})
            })
            .catch(function(error){
                return res.send(error);
            })
          },
        //Preguntar ESTOOO
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
        Producto.findByPk(req.params.id,{ //esto lo deberiamos borrar, porque estas buscando todos los productos y dentro de products vos estas buscando solo el pedido
            include:[ //aca deberia ir findByPk? en vez de findAll
                  {association: "comentarios", include: [{ association: "usuarios" }]}, //CHECKEAR
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
