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

        Usuario.findAll({
            include:[
                    {association: "comentarios" },
                    {association: "productos" }
            ]})
            .then(function(resultado){
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

        Usuario.findAll({
            include:[
                    {association: "comentarios" },
                    {association: "productos" }
            ]});

        res.render("productA")
    },

    productD: function(req, res){ 
        Producto.findAll({ //esto lo deberiamos borrar, porque estas buscando todos los productos y dentro de products vos estas buscando solo el pedido
            include:[ //aca deberia ir findByPk? en vez de findAll
                  {association: "comentarios" },
                  {association: "usuarios" } 
            ]})
        
        Comentario.findAll({ //preguntar si teine que ir esto
            include:[
                    {association: "productos" },
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