const searchR = require('../db/index')

const psearchRController = {index: function(req, res){ /*una ruta que envia los datos al navegador*/
    res.render("searchR", {lista2: searchR.lista2})},
    /*marca → Deberá implementar la función que envía un listado de autos por marca.*/
    nombre : function (req, res){
        let nombre = req.params.nombre
        
        }
    }

module.exports = searchRController