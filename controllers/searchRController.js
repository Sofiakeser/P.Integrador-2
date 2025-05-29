const db = require('../database/models')
const Producto = db.Producto //Preguntar si hace falta en cada uno que este
let op = db.sequelize.Op

const searchRController = {
    index: function(req, res) {

      Producto.findAll({
        include:[
              {association: "comentarios" },
              {association: "usuarios" } //chequear
        ]})
        .then (function(resultados){
          res.render("searchR", {buscador: resultados});
      })
      .catch(function(error){
        return res.send(error);
      })

        res.render('searchR');
      },
      
      search: function(req, res){
        //Mostrar los datos de una película las pleículas en la vista movies.ejs. Modificá el código para conseguir el objetivo.
        Producto.findAll({
            where: {
                title: {
                  [op.like]: `%${req.query.search}%`
                }
              }
        })
            .then (function(resultados){
                res.render("searchR", {buscador: resultados});
            })
    },
    
    
}
module.exports = searchRController
