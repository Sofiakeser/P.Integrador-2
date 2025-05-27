module.exports = function (sequelize, dataTypes) {
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED
        },
        email: {
            type: dataTypes.STRING(50) //ver lo de not null
        },
        contra:{ 
            type: dataTypes.STRING(20)
        },
        fecha: {
            type: dataTypes.DATE //chequear
        },
        dni: {
            type: dataTypes.INTEGER.UNSIGNED 
        },
        foto_perfil: {
            type: dataTypes.TEXT //chequear
        },

    };
    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false //intento de arreglo
    }

    let Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models) {
       
        Usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "usuario_id", 
        });

        Usuario.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "usuario_id", 
        })
    }

    return Usuario;

}