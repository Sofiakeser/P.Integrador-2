const profile = require('../db/index')

const profileController = {index: function(req, res){ /*una ruta que envia los datos al navegador*/
    res.render("profile", {lista1: profile.lista1})},
    /*marca → Deberá implementar la función que envía un listado de autos por marca.*/
    nombre : function (req, res){
        let nombre = req.params.nombre
        
        }, 

    email: function (req, res){
            let email = req.params.email
           
            },
        }

module.exports = profileController