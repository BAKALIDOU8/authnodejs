const express = require('express')
const User = require('../model/model')

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
exports.inscription = (req, res) => {

    // ** Recuperer les données
    const {body} = req
    // ** Valider les données
    console.log(body)
    res.json(body)
}

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
exports.connexion = (req, res) => {
    res.send('Connexion')
}
