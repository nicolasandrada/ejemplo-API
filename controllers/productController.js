const db = require('../models'); 
const op = db.Sequelize.Op

const userController = {
    getByID: function(req, res){
        let id = req.params.id;

        db.Products.findOne({
            include: [{
                model: db.Users,
                as: 'user',
            }],
            where: {
                id: id,
            }, 
        })
        .then(data =>{
            //console.log(data);
            return res.render('detail', { product: data , title: data.name});
        })
        .catch(error =>{
            console.log(error);
        })
    },
       
    getAll: function(req, res){
        db.Products.findAll()
        .then( data => {
            return res.render('index', {products: data , title: "Express"});
        })
        .catch(error => {
            console.log(error);
        })
    },

    store: function(req, res){
        if(req.session.user==undefined ){
            return res.redirect('/')
        }

        let data = req.body;
        let product = {
            id_user: req.session.user.id,  
            name: data.name,
            description: data.description,
            price: data.price,
            stock: data.stock,
        }
           
        db.Products.create(product)
        .then( () => {
            return res.redirect('/users/profile/'+req.session.user.id);
        })
        .catch(error => {
            console.log(error);
        })
    },

    delete: function(req, res){
        let user_delete = req.params.id;
            
        db.Users.destroy({
            where: [
                {id : user_delete}
            ]
        })
        .then( () => {
            return res.redirect('/users');
        })
        .catch( error => { 
            console.log(error);
        })
    },
    
}

module.exports = userController;