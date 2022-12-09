let usersController = {};
const { restart } = require('nodemon');
const userDb = require('../models/userSchema');
const bcrypt = require('bcrypt');

usersController.makeUser = (req,res) => {
    bcrypt.hash(req.body.password,10)
        .then(hash => {

            const newUser = new userDb({
    
                firstname:req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: hash,
                createdAt: req.body.createdAt

        })

        newUser.save()
            .then(() => res.status(201).json({
                message: 'Utilisateur enregistré'
            }))
            .catch(error => res.status(400).json({ error }));
})
        .catch(error => res.status(500).json({error}))
    


}


usersController.findAll =  (req,res) => {


    userDb.find({},"lastname firstname")
        .then(users => res.status(200).json({users}))
        .catch(error => res.status(400).json({error}));
}


usersController.UserToGroup = (req,res) => {
    
    res.status(200)
    res.send('authenticated: Une route qui permet aux utilisateur de s’ajouter à un groupe')
}


usersController.deleteUser = (req,res) => {

    res.status(204)
    res.send('admin: route qui permet de supprimer un user')
}


usersController.login = (req,res) => {

    res.status(200)
    res.send('login')
}



usersController.findOne = (req,res) => {

    res.status(200)
    res.send('authenticated: Une route qui permet d’avoir les détails d’un user (nom prenom email groupe)')
}


usersController.modifUserAdmin = (req,res) => {

    res.status(204)
    res.send('admin :route qui permet de modifier un user')
}


usersController.modifProfil = (req,res) => {

    res.send('authenticated: Une route qui permet de modifier ses informations (uniquement celles de l’utilisateur connecté)')
}


module.exports = usersController;

