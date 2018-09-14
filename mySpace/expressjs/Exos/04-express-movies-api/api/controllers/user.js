const User = require('../models/user')
//~~~~~~~IDUser return~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-
/**
 * 
 * @param {*} res 
 * @param {*} res 
 */
exports.edit = async (req, res) =>{
    let ID = req.params.id
    let data = req.body; 

    let users = await User.findOneAndUpdate(
        {_id: ID},data,{ new : true }).catch( (err) =>{
            console.log(err);
        })
    console.log(users);
     res.json(users)
 }
//~~~~~~~IDUser DELETE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-
/**
 * 
 * @param {*} res 
 * @param {*} res 
 */
exports.delete = async (req, res) =>{
    let ID = req.params.id
   

    let users = await User.findOneAndRemove(
        {_id: ID}).catch( (err) =>{
            console.log(err);
        })
    console.log(users);
     res.json(users)
 }
//~~~~~~~LIST~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-
/**
 * 
 * @param {*} res 
 * @param {*} res 
 */
exports.list = async (req, res) =>{
    //attaquer la db pour récupérer les users 
    // retourner un json avec les users 
    let users = await User.find({},{username : 1 }).catch( (err) =>{
        console.log(err);
    })
    console.log(users);
    res.json(users)
}
//~~~~~~~IDUser return~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-
/**
 * 
 * @param {*} res 
 * @param {*} res 
 */
exports.returnUser = async (req, res) =>{
   let ID = req.params.id
   console.log(ID);

    let users = await User.findById(ID,{username : 1 })
    console.log(users);
    res.json(users)
}
//~~~~~~~VALIDATE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-
/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.validate = (req, res, next) =>{
   
    // --- Subscription validation 

    req.sanitizeBody('username');
    req.sanitizeBody('email');
    req.checkBody('username', 'Vous devez entrer un nom').notEmpty(); 
    req.checkBody('email', 'Vous devez indiquer un email valide').isEmail();
    req.checkBody('password', 'Vous devez entrer un mot de passe valide').notEmpty();
    req.checkBody('password-confirm', 'Vous devez confirmer votre mot de passe').notEmpty();
    req.checkBody('password-confirm', 'Les deux mots de passe doivent correspondre').equals(req.body.password);
    const errors = req.validationErrors()
    if(errors)
    {   
        return res.status(500).json({
            errors : errors, 
            user : req.body
        })
        
    }else{
       next() 
    }
    
    
}

 //~~~~~~~CREATE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 /**
  * 
  * @param {*} req 
  * @param {*} res 
  */
 exports.create = (req , res )=> {
    User.register( 
    new User(
        { 
            username : req.body.username,
            email : req.body.email
        }
    ),
    req.body.password, 
    function(err, user) { 
        if(err) { 
            return res.status(500).json({
                user, err
            })
        }
        return res.json({user})
    });

}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
