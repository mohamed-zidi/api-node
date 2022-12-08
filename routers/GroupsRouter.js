let express = require('express');
const groupsController = require('../controllers/GroupsController');
const usersController = require('../controllers/UserController');

const router = express.Router();


router.get('/groups', groupsController.getGroupsName);


router.get('/groups/users/{id}', groupsController.getUsersGroups);


router.post('/groups', groupsController.addGroup);


router.put('/groups/{id}', groupsController.modifGroupAdmin);


router.delete('/groups/{id}', groupsController.deleteGroupAdmin);


router.put('groups/{id}/users', groupsController.modifUserInGroup);


module.exports = router;
