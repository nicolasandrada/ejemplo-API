module.exports = function(sequelize, dataTypes){

    //Definir un alias.
    let alias = 'Products'; //Con este alias sequelize va a identificar internamente al archivo de modelo.

    //Describir la configuración de las columnas de la tabla
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        id_user:{
            type: dataTypes.INTEGER
        },
        name:{
            type: dataTypes.STRING,
        },
        description:{
            type: dataTypes.STRING,
        },
        price:{
            type: dataTypes.DECIMAL,
        },
        stock:{
            type: dataTypes.INTEGER,
        }
    }

    let config = {
        tableName: 'products', 
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
    }

    const Products = sequelize.define(alias, cols, config);

    Products.associate = function(models){
        Products.belongsTo(models.Users,{
           as:"user",
           foreignKey:"id_user"
        });
    }; 

   return Products;
}