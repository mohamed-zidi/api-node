let express = require('express');
const usersController = require('../controllers/UserController');

const router = express.Router();


router.post('/register', usersController.makeUser);


router.post('/login', usersController.login);


router.get('/', usersController.findAll);


router.get('/{id}', usersController.findOne);


router.patch('/{id_groupe}', usersController.UserToGroup);


router.put('/{id}', usersController.modifProfil);


router.delete('/{id}', usersController.deleteUser);


router.put('/{id}', usersController.modifUserAdmin);


module.exports = router;