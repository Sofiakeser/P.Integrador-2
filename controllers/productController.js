const producto = require('../db/index')

const productController = {index: function(req, res){ /*una ruta que envia los datos al navegador*/
    res.render("producto", {lista2: producto.lista2})},
    /*marca → Deberá implementar la función que envía un listado de autos por marca.*/
    nombre : function (req, res){
        let nombre = req.params.nombre
        
        }
 }

module.exports = productController