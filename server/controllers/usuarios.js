const usuariosPlaceHolder = require('../data/usuariosPlaceholder.json')

const controller = {
    index: function (req, res, next) {
        res.render('usuarios', {
            titulo: 'Usuários',
            subtitulo: 'Você está na página de Usuários!',
            usuarios: usuariosPlaceHolder
        });
    }
}

module.exports = controller