let groupsController = {};


groupsController.getGroupsName = (req,res) => {

    res.status(200)
    res.send('Une route qui retourne uniquement les noms des groupes (groupe 1, groupe 2, ...)')
}


groupsController.getUsersGroups = (req,res) => {

    res.status(200)
    res.send('Une route qui retourne les groupes ainsi que les users qui y sont rattachés (uniquement prenom et nom)')
}

groupsController.addGroup = (req,res) => {

    res.status(201)
    res.send('admin: route qui permet d’ajouter un groupe')
}


groupsController.modifGroupAdmin = (req,res) => {

    res.status(201)
    res.send('admin: route qui permet de modifier un groupe')
}


groupsController.deleteGroupAdmin = (req,res) => {

    res.status(204)
    res.send('admin: route qui permet de supprimer un groupe')
}


groupsController.modifUserInGroup = (req,res) => {

    res.status(201)
    res.send('admin: Une route qui permet de modifier les utilisateurs présents dans un groupe')
}


module.exports = groupsController;