const {connect} = require('mongoose')

function dbConnexion() {
    connect("mongodb://localhost:27017/authentication")
    .then(() => console.log("Connexion base de données ok"))
    .catch(error => console.log(error))
}

module.exports = dbConnexion