const express = require('express')

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
exports.inscription = (req, res) => {
    res.send('Inscription')
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
exports.connexion = (req, res) => {
    res.send('Connexion')
}
