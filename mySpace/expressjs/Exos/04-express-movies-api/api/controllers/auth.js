const JWT = require('jsonwebtoken'),
      Passport = require('passport')
exports.auth = (req, res, next) => {
    Passport.authenticate('local' , {session : false},(err, use , info)=>{
        if(err || !user)
        {
            return res.status(400).json({
                message : 'Something is broken',
                user : user
            });
        }
        res.login(user, { session : false }, (err) => {
            if(err)
            {
                res.send(err)
            }
            const token = JWT.sign(user, process.env.SECRET);
            return res.json({
                user, token 
            })
        })
    })(req, res);
}