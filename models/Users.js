module.exports = function(sequelize, dataTypes){

    //Definir un alias.
    let alias = 'Users'; //Con este alias sequelize va a identificar internamente al archivo de modelo.

    //Describir la configuración de las columnas de la tabla
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        user_name:{
            type: dataTypes.STRING,
        },
        pass:{
            type: dataTypes.STRING,
        },
        birth_date:{
            type: dataTypes.DATE,
        },
    }

    let config = {
        tableName: 'users', 
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
    }

   const Users = sequelize.define(alias, cols, config);

    Users.associate = function(models){
        Users.hasMany(models.Products,{
           as:"products",
           foreignKey:"id_user"
        });
    } ;

   return Users;
}