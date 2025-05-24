const data = require('../database/models')
const Producto = db.Producto //Preguntar si hace falta en cada uno que este

const searchRController = {
    index: function(req, res) {

      Producto.findAll({
            include:[
                    {association: "comentarios" },
                    {association: "usuarios" } //chequear
        ]})

        res.render('searchR', {productos: data.productos});
      },
    
}
module.exports = searchRController