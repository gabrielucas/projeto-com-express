const fs = require('fs'),
    path = require('path'),
    usuariosPlaceholder = require('../data/usuariosPlaceholder.json')

// let usuarios = fs.readFileSync(path.join(__dirname, '..', 'date', 'usuariosPlaceholder.json'), 'utf8');


const controller = {

    auth: (req, res, next) => {
        const { email, senha } = req.body;

        const usuarioLogado = usuariosPlaceholder.filter(usuario => {

            if (usuario.email === email) {
                // return true
                console.log('Esse usuário existe!')
                if (usuario.senha === senha) {
                    console.log('Esse cara sabe a senha mesmo!')
                    return usuario
                }
            }

        });

        if (!usuarioLogado.length) {
            res.render('usuarios', {
                titulo: 'Usuários',
                subtitulo: `Molhou pra você! Já chamamos o FBI!`,
                usuarios: usuariosPlaceholder,
                bannerTopo: '/images/banner-topo-usuario-1564x472.png'
            });
        }

        const usuario = usuarioLogado[0]
        console.log(usuario);

        res.render('usuario', {
            titulo: 'Usuário',
            subtitulo: `Parabéns! Você logou com sucesso!`,
            usuario: usuario,
            bannerTopo: '/images/banner-topo-usuario-1564x472.png'
        });

    }
}

module.exports = controller