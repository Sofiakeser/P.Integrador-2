module.exports = function (sequelize, dataTypes) {
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED
        },
        post_id: {
            type: dataTypes.INTEGER.UNSIGNED //ver lo de not null
        },
        usuario_id:{ 
            type: dataTypes.INTEGER.UNSIGNED,
        },
        comentario: {
            type: dataTypes.STRING(500),
   
        },

    };
    let config = {
        tableName: "comentarios", //nombre de la tabla en la base de datos
        timestamps: true,
        underscored: true
    }

    let Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function(models) {
       
        Comentario.belongsTo(models.Usuario, {
            as: "usuarios",
            foreignKey: "usuario_id", 
        }) 

        Comentario.belongsTo(models.Producto, {
            as: "productos",
            foreignKey: "post_id",
        }) 
    }

    return Comentario;

}