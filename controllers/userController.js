const db = require('../models'); 
const op = db.Sequelize.Op

const userController = {
    login: function(req, res){
        // Buscar el usuario que se quiere loguear.
        db.Users.findOne({
            where: [{
                user_name: req.body.user_name,
                pass: req.body.pass
            }]
        })
        .then( user => {
            if(user==undefined){
                return res.render('login', {title: "Perfil", error:'El usuario y/o contraseña son invalidos'})
            }
            req.session.user = user;

            //Si tildó recordame => creamos la cookie.
            if(req.body.remember_me != undefined){
                res.cookie('userId', user.id, { maxAge: 1000 * 60 * 5})
            }
            return res.redirect('/');
        })
        .catch( e => {console.log(e)})
    },

    logout: function(req,res){
        req.session.destroy();
        res.clearCookie('userId');
        return res.redirect('/')
    },

    getByID: function(req, res){
        let id = req.params.id;

        db.Users.findByPk(id)
        .then(data =>{
            console.log(data);
            return res.render('profile', { user: data , title: "Perfil"});
        })
        .catch(error =>{
            console.log(error);
        })
    },
       
    getAll: function(req, res){
        if(req.session.user==undefined){
            return res.redirect('/')
        }
        
        db.Users.findAll()
        .then( data => {
            return res.render('users', {users: data , title: "Perfiles"});
        })
        .catch(error => {
            console.log(error);
        })
    },

    store: function(req, res){
        let data = req.body;
        let user = {
            id: null,      
            user_name: data.user_name,
            pass: data.pass,
            birth_date: data.birth_date
        }
           
        db.Users.create(user)
        .then( () => {
            return res.redirect('/');
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
    }
    
}

module.exports = userController;