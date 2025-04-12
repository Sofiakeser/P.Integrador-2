const data = require('../db/index')

const profileController = {
    index: function(req, res){ /*una ruta que envia los datos al navegador*/
    res.render("profile", {usuario: data.usuario, productos: data.productos})},
    }

module.exports = profileController