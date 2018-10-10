var router= require('express').Router()
var usermodel = require('../modules/userModule')
router.get('/users',function(req,res){
    usermodel.find({}),function (err,data) {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.send(data)
        }
        
    }
})


router.post('/users',function (req,res) {
    usermodel.create(req.body ,function (err , data) {
        if(err){
            res.status(500).send(err)
        }else{
            res.send(data)
        }
        
    })
    
})












module.exports = router; 