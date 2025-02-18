const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const TasksController = require('../controllers/TasksController');
const UserController = require('../controllers/UserController');
const verificarToken = require('../middleware/authMiddleware');
const TwoFaController = require ('../controllers/TwoFaController');
const processarPagamento = require ('../controllers/PaymentControllers');

router.post('/usuario/criar', UserController.cadastrarUsuario);

router.post('/usuario/autenticar', UserController.autenticarUsuario);

router.get('/usuarios', verificarToken, UserController.listarUsuarios);

router.get('/usuario/:id', verificarToken, UserController.listarUmUsuario);

router.put('usuario/atualizar/:id', verificarToken, UserController.atualizarUsuario);

router.delete('usuario/excluir/:id', verificarToken, UserController.removerUsuario);

router.put('/usuario/redefinirSenha/:id', UserController.redefinirSenha);


router.get('/2fa/gerar', TwoFaController.gerarToken);

router.post('/2fa/validar', TwoFaController.validarToken);



router.post('/tarefa/criar', TasksController.novaTarefa);

router.get('/tarefas', TasksController.listarTarefas);

router.get('/tarefa/:id', TasksController.listarUmaTarefa);

router.put('/tarefa/atualizar/:id', TasksController.atualizarTarefa);

router.delete('/tarefa/excluir/:id', verificarToken, TasksController.removerTarefa);



router.post('/pagamento', verificarToken, PaymentControllers.processarPagamento);


module.exports = router;