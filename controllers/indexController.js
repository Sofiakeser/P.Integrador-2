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
            .then(function(resultado){
                res.render("product", {datos:resultado})
            })
            .catch(function(error){
                return res.send(error);
            })
    }
}

module.exports = indexController