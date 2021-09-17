const mainController = {
    register: function(req, res){
        return res.render('register', { title: "Crear Cuenta"});
    },

    login: function(req, res){
        return res.render('login', { title: "Perfil"});
    },

}

module.exports = mainController;