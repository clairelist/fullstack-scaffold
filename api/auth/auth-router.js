const {
  checkUsernameFree,
  checkPasswordLength,
  checkUsernameExists
} = require('./auth-middleware');
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require("../users/users-model");

router.post('/register',checkUsernameFree, checkPasswordLength, async (req,res,next)=>{
  try {
    //pull creds from req body
    const {username, password} = req.body;

    //hash the passwordr! 
    const hash = bcrypt.hashSync(password, 8); //pass the thing being hashed, then the number of passes

    //store in database !
    const newUser = {username, password: hash};
    const inserted = await User.add(newUser);

    //then, we respond
    res.status(200).json(inserted)
  } catch(err) {
    next(err)
  }
})

router.post('/login',checkUsernameExists,async(req,res,next)=>{
  try{
    //pull u & p from req body
    const {username, password} = req.body;

    //pull user from db by that usernahme
    const [user] = await User.findBy({username}); 
    if (user && bcrypt.compareSync(password, user.password)) {
        //password 1, we initialize a session !

        req.session.user = user; //this is the magic line.

        res.status(200).json({message: `Welcome ${username}!`});
    } else {
        next({status:401, message: 'invalid credentials!'}); //the reason we don't specify which is because we don't want potential attackers to know they guessed a correct password or username !
    }

} catch(err){
    next(err);
}
})

  router.get('/logout',(req,res)=>{
    if (req.session.user){
        req.session.destroy((err)=>{ 
            if (err){
                res.json({message: 'bad request !', status: 500})
            } else {
                res.json({message: 'logged out', status: 200})
            }
        })
    } else {
        res.json({message: 'no session',status:200})
    }
})

module.exports = router;