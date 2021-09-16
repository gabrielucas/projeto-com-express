const usuariosPlaceholder = require('../data/usuariosPlaceholder.json')

const controller = {
    index: (req, res, next) => {

        if (admin == true) {
            res.render('usuarios', {
                titulo: 'Usuários',
                subtitulo: `Administração de Usuários`,
                usuarios: usuariosPlaceholder,
                bannerTopo: '/images/banner-topo-usuario-1564x472.png'
            });
        }

        else {
            res.render('usuarios', {
                titulo: 'Usuários',
                subtitulo: `Visualização de Usuários`,
                usuarios: usuariosPlaceholder,
                bannerTopo: '/images/banner-topo-usuario-1564x472.png'
            });
        }
    }
}

module.exports = controller;