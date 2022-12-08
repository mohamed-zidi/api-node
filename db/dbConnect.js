const mongoose = require('mongoose');

    mongoose.connect('mongodb+srv://mohamedzidi:mongodb@nodeapi.ut3wouf.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
        .then(() => console.log('Connexion à MongoDB réussie !'))
        .catch(() => console.log('Connexion à MongoDB échouée !'));

