const db = require('../database/models')
const Usuario = db.Usuario //Preguntar si hace falta en cada uno que este
const bcrypt = require("bcryptjs")

const profileController = {
    index: function(req, res){ 

        Usuario.findAll({
            include:[
                    {association: "comentarios" },
                    {association: "productos" }
        ]})
        .then(function(resultado){
                res.render("profile", {datos:resultado})
        })
        .catch(function(error){
            return res.send(error);
        })},

    login: function(req, res){
        if(req.session.userLoggeado != undefined){
            return res.redirect("/profile");
        }else{
            return res.render("login", {title: "Login"})}; 
    },

    processLogin: function(req,res){
        //Procesar el login. 
        //Usando el dato del email del formulario busca si existe un registro en la base de datos. 
        Usuario.findOne({
            where: {
                email: req.body.email
            } 
        })
        .then(function(resultado){
            if(resultado != null){
            //Si existe el usuario en la db chequeá que la contraseña sea la que tenemos registrada en la db. Deberás comparar lo que se recibe por el form vs lo que está en base de datos. Revisá los métodos de bcrypt. Hay uno que hace todo y retorna un booleano.
           
            let check = bcrypt.compareSync(req.body.contra, resultado.contra);
                if(check){
                    //Si todo sale bien poné los datos del usuario en session.
                    req.session.userLoggeado = resultado;
                    
                    //Si además el usuario tildó "recordame" entonces también creamos una cookie con los datos del usuario.
                    if(req.body.recordame != undefined){
                        res.cookie("recordame", resultado, {maxAge: 1000 * 60 * 60});
                    }
                    return res.redirect("/"); 
                }
            }  
            else{
                return res.send("Usuario no encontrado");
            }
        
        })
        .catch(function(error){
            return res.send(error);
        }) 
    
    },

    register: function(req, res) { 
        if(req.session.userLoggeado != undefined){
            return res.redirect("/profile")
        }
        res.render("register")
    },

    create: function (req, res) {
        
        if(req.body.password.length < 3){
            return res.send("La contraseña debe tener mas de tres caracteres")
        };

        let passEncriptada = bcrypt.hashSync(req.body.password, 10);

        Usuario.create({
            usuario: req.body.usuario,
            email: req.body.email,
            contra: passEncriptada,
            fecha: req.body.fecha
        })
        .then(function(resultado){
            
            return res.redirect("/profile/login");
        })
        .catch(function(error){
            return res.send(error);
        })
    },

    logout: function(req, res){
        req.session.destroy();
        res.clearCookie("recordame");
        return res.redirect("/")
    }
    }

module.exports = profileController