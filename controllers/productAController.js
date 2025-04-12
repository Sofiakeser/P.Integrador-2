const productA = require('../db/index')

const productAController = {index: function(req, res){ /*una ruta que envia los datos al navegador*/
    res.render("productA", {lista2: productA.lista2})},
    /*marca → Deberá implementar la función que envía un listado de autos por marca.*/
    nombre : function (req, res){
        let nombre = req.params.nombre
        
        }
 }

module.exports = productAController