const mainController = {
    register: function(req, res){
        return res.render('register', { title: 'Crear Cuenta'});
    },

    login: function(req, res){
        return res.render('login', { title: "Perfil", error:''});
    },

    product: function(req, res){
        return res.render('products', { title: "Cargar Producto", error:''});
    },

}

module.exports = mainController;