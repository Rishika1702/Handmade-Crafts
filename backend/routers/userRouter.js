const express = require('express');
const Model=require('../models/userModel');

const router = express.Router();

router.post('/add', (req, res) => {
    //req.body is the formdata provided by client
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getall', (req, res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post("/authenticate", (req,res) => {
    Model.find(req.body)
    .then((result) => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(401).json({message: "invalide credentials"})
        }
    }).catch((err) => {
        res.status(500).json(err);
    });
});

//: denotes URL parameter

router.delete('/delete/:id',(req,res)=>
{
   Model.find
})

module.exports = router;