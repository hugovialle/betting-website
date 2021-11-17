/**
 * Controller for Events
 * @author Hugo Vialle
 * @date 16/11/2021
 */

const LocationModel = require('../models/location.model.js');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.getAllLocations = async (req, res) => {
    const locations = await LocationModel.find({});
    res.status(200).json(locations);
}

module.exports.getByActivityType = async (req, res) => {
    const locations = await LocationModel.find({ "fields.actlib": req.params.actlib});
    res.status(200).json(locations);
}

module.exports.getByArrondissement = async (req, res) => {
    const nb = parseInt(req.params.inscodepostal);
    const locations = await LocationModel.find({ "fields.inscodepostal": nb});
    res.status(200).json(locations);
}