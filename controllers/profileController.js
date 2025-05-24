const data = require('../database/models')
const Usuario = db.Usuario //Preguntar si hace falta en cada uno que este

const profileController = {
    index: function(req, res){ 

        Usuario.findAll({
            include:[
                    {association: "comentarios" },
                    {association: "productos" }
        ]})
        
    res.render("profile", {usuario: data.usuario, productos: data.productos})},
    }

module.exports = profileController