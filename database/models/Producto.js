module.exports = function (sequelize, dataTypes) {
    let alias = "Producto"; //va en singular
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED
        },
        usuario_id: {
            type: dataTypes.INTEGER.UNSIGNED //ver lo de not null
        },
        imagen_producto:{ 
            type: dataTypes.TEXT //chequear
        },
        nombre: {
            type: dataTypes.STRING(50)
        },
        descripcion: {
            type: dataTypes.STRING(500)
        },

    };
    let config = {
        tableName: "productos", //nombre de la tabla en la base de datos
        timestamps: true,
        underscored: false //intento de arreglo
    }

    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models) {
       
        Producto.belongsTo(models.Usuario, {
            as: "usuarios",
            foreignKey: "usuario_id", 
        });

        Producto.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "post_id", 
        })
    }

    return Producto;
}