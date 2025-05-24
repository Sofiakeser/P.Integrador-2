module.exports = function (sequelize, dataTypes) {
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER(10).UNSIGNED
        },
        post_id: {
            type: dataTypes.INTEGER(10).NOTNULL //ver lo de not null
        },
        usuario_id:{ 
            type: dataTypes.INTEGER(10).NOTNULL
        },
        comentario: {
            type: dataTypes.STRING(500).NOTNULL
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