const data = require('../database/models')
const Usuario = db.Usuario
const Producto = db.Producto

const indexController = {
    index: function(req, res) {
        
        Usuario.findAll({
            include:[
                    {association: "comentarios" },
                    {association: "productos" }
        ]}),

        Producto.findAll({
            include:[
                    {association: "comentarios" },
                    {association: "usuarios" } //chequear
        ]})

        res.render('index', {productos: data.productos});
      },
    
    login: function(req, res) { 
        res.render("login")
    },

    register: function(req, res) { 
        res.render("register")
    },

    productA: function(req, res){
        res.render("productA", {productos: data.productos, usuario: data.usuario})
    },

    product: function(req, res){ 
        let idproducto = req.params.id;
        res.render("product", {productos: data.productos[8]});
    }
}

module.exports = indexController