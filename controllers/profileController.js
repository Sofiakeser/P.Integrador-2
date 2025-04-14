const data = require('../db/index')

const profileController = {
    index: function(req, res){ 
    res.render("profile", {usuario: data.usuario, productos: data.productos})},
    }

module.exports = profileController