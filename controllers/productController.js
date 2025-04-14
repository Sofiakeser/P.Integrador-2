const data = require('../db/index')
const productController = {
    index: function(req, res){ /*una ruta que envia los datos al navegador*/
    res.render("product", {productos: data.productos[0]})},

    comentarios: function(req, res){
        let comentarios = req.params.comentarios
        let arrayComentarios = []

        for (let i=0; i< data.productos.comentarios.length; i++) {
            arrayComentarios.push(data.productos.comentarios[i])
        }
        res.send(arrayComentarios)
    }
    }


module.exports = productController