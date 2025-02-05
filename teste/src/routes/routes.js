const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const TasksController = require('../controllers/TasksController');
const UserController = require('../controllers/UserController');
const verificarToken = require('../middleware/authMiddleware');

router.post('/usuario/criar', UserController.cadastrarUsuario);

router.post('/usuario/autenticar', UserController.autenticarUsuario);

router.get('/usuarios', verificarToken, UserController.listarUsuarios);

router.get('/usuario/:id', verificarToken, UserController.listarUmUsuario);

router.put('usuario/atualizar/:id', verificarToken, UserController.atualizarUsuario);

router.delete('usuario/excluir/:id', verificarToken, UserController.removerUsuario);


router.post('/tarefa/criar', TasksController.novaTarefa);

router.get('/tarefas', TasksController.listarTarefas);

router.get('/tarefa/:id', TasksController.listarUmaTarefa);

router.put('/tarefa/atualizar/:id', TasksController.atualizarTarefa);

router.delete('/tarefa/excluir/:id', verificarToken, TasksController.removerTarefa);

module.exports = router;