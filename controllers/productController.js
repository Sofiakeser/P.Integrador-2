const data = require('../db/index')
const productController = {
    index: function(req, res){ /*una ruta que envia los datos al navegador*/
    res.render("product", {productos: data.productos})},
    }

module.exports = productController