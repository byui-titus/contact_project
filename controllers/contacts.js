const mongodb = require('../data/database');
 const ObjectId = require('mongodb').ObjectId;


 const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('contacts').find();
    result.toArray().than((contacts) => {
        res.setHeader('content-Type', 'application/json');
        res.status(200).json(contacts);
    });

 }

 const getSingle = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('contacts').find({_id: contactId});
    result.toArray().then((contacts) =>{
        res.setHeader('cotent-type', 'applicatioon/json');
        res.staus(200).json(contacts[0]);
    });
 }

 module.exports = {
  initDb,
  getDatabase,
};