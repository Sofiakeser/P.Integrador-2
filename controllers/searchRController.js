const db = require('../database/models')
const Producto = db.Producto 
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
        Producto.findAll({
            where: {
                title: {[op.like]: `%${req.query.search}%`}
              }
        })
        .then (function(resultados){
            res.render("searchR", {buscador: resultados});
        })
    },
    show: function(req, res){
        Producto.findByPk(req.params.id)
            .then (function(resultado){ //Preguntar este y el de ProductD
                res.render("searchR", {buscador: resultado})
        })      
    },  
}
module.exports = searchRController
