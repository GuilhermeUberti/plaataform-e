'use strict'

const repository = require('../repositories/usuario-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base');
const _repo = new repository();
const md5 = require('md5');

function usuarioController() {

}
usuarioController.prototype.post = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.nome, 'Informe seu Nome');
    _validationContract.isRequired(req.body.email, 'Informe seu E-mail');
    _validationContract.isEmail(req.body.email, 'E-mail informado inválido');
    _validationContract.isRequired(req.body.senha, 'Senha é obrigatória');
    _validationContract.isRequired(req.body.senhaConfirmacao, 'Senha de confirmação é obrigatória');
    _validationContract.isTrue(req.body.senha != req.body.senhaConfirmacao, 'Senhas diferem da outra');

    let usuarioEmailExistente = await _repo.emailExistente(req.body.email);
    if (usuarioEmailExistente) {
        _validationContract.isTrue((usuarioEmailExistente != undefined),
            `${req.body.email} já cadastrado no banco`);
    }
    req.body.senha = md5(req.body.senha);   //criptografa senha do usuário

    ctrlBase.post(_repo, _validationContract, req, res);
};

usuarioController.prototype.put = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.nome, 'Informe seu Nome');
    _validationContract.isRequired(req.body.email, 'Informe seu E-mail');
    _validationContract.isEmail(req.body.email, 'E-mail informado inválido');
    _validationContract.isEmail(req.params.id, 'Informe o ID do usuário que será alterado');

    let usuarioEmailExistente = await _repo.emailExistente(req.body.email);
    if (usuarioEmailExistente) {
        _validationContract.isTrue((usuarioEmailExistente != undefined)
            && (usuarioEmailExistente._id != req.params.id), `${req.body.email} já cadastrado no banco`);
    }

    ctrlBase.put(_repo, _validationContract, req, res);
};

usuarioController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

usuarioController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

usuarioController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = usuarioController;
