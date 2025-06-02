const db = require('../database/models')
const Producto = db.Producto 
let op = db.Sequelize.Op

const searchRController = {
    index: function(req, res) {

      Producto.findAll({
        include:[
              {association: "comentarios" },
              {association: "usuarios" } 
        ]})
        .then (function(resultados){
          res.render("searchR", {buscador: resultados});
      })
      .catch(function(error){
        return res.send(error);
      })
      },
      
    search: function(req, res){
        Producto.findAll({
            where: {
                nombre: {[op.like]: `%${req.query.search}%`}
              },
            include:[
              {association: "comentarios" },
              {association: "usuarios" } 
            ]
        })
        .then (function(resultados){
            res.render("searchR", {buscador: resultados});
        })
        .catch(function(error){
          return res.send(error);
        }) 
    },
    show: function(req, res){
        Producto.findByPk(req.params.id)
        .then (function(resultado){ //Preguntar este 
          res.render("searchR", {buscador: resultado})
        })
        .catch(function(error){
          return res.send(error);
        })    
    },  
}
module.exports = searchRController
