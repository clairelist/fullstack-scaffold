//TODOS:: BUILD GET USER BY FILTER ENDPOINT

const {restricted} = require('../auth/auth-middleware');
const router = require('express').Router();
const Users = require("./users-model");
 
  router.get("/", restricted ,(req, res, next) => {
    Users.find()
      .then(users => {
        res.status(200).json(users)
      })
      .catch(next)
  })
  
  //POST to '/delete_account', supply user id. Only accessable to logged in users !
  router.post('/delete_account', restricted, (req,res,next) => {
    const {user_id} = req.params.id; 
    Users.deleteById(user_id)
      .then(()=>{
        req.session.destroy((err)=>{ 
          if (err){
              res.json({message: 'bad request !', status: 500})
          } else {
              res.json({message: 'Your account was succesfully deleted!', status: 200})
          }
      }).catch(err=>{
        next(err);
      })
  })})

router.update('/update_info', restricted, (req,res,next) => {
    const {user_id} = req.params.id; //?? check this is the thing!
    Users.edit(user_id, userObj)
    .then(()=>{
      res.status(201).json(userObj); //this will have to be a NEW user object, returned by Users.edit()
    }).catch(err=>{
      next(err);
    })
  })

  module.exports = router;