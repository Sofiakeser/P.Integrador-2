const db = require('../database/models')
const Usuario = db.Usuario 
const bcrypt = require("bcryptjs")

const profileController = {
    index: function(req, res){ 
        // req.params.id
      
            Usuario.findByPk(req.params.id, { //cambiamos
                include:[
                        {association: "comentarios", include: [{ association: "usuarios" }] },
                        {association: "productos", include: [{ association: "comentarios" }] }
            ]})
            .then(function(resultado){
                res.render("profile", {datos:resultado})
            })
            .catch(function(error){
                return res.send(error);
            })
        },
    }

module.exports = profileController

