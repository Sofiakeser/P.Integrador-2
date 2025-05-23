const data = require('../db/index')

const indexController = {
    index: function(req, res) {
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