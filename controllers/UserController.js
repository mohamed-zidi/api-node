let usersController = {};
const { now } = require('mongoose');
const Thing = require('../db/thing');


usersController.makeUser = (req,res) => {
    
    console.log(req.body);
    
    const newUser = new Thing({
    // ...req.body
    firstname:req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    // createdAt: req.body.createdAt
  });
  newUser.save()
    .then(() => res.status(201).json({ message: 'Utilisateur enregistré'}))
    .catch(error => res.status(400).json({ error }));
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


usersController.findAll = (req,res) => {

    res.status(200)
    res.send('Une route qui retourne tous les utilisateurs dans une liste contenant les champs prenom et nom.')
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

