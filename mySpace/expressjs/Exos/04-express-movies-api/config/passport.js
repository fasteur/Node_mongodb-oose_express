const Passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy, 
    User = require(`${process.cwd()}/api/models/user`),
    PassportJWT = require('passport-jwt'),
    JWTStrategy = PassportJWT.Strategy,
    ExtractJWT = PassportJWT.ExtractJwt;
//-------LocalStrategy----------------
    Passport.use(
        new LocalStrategy({
            usernameField :'email',
            passwordField : 'password',

        }),
        (email, password, cb) =>{
            User.findOne({
                email : email, 
                password : password
            })
            .then( (user) => {
                if(!user)
                {
                    return cb(null, false, { message : 'Incorrect email or password'})
                }
                return cb(null, user, { message : 'Logged in succesfully'})
            })
            .catch( err => cb(err) );
        }
    )

    //-----JWTStrategy----------
    Passport.use(
        new JWTStrategy({
            jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
            secretOrKey : process.env.SECRET
        }),
        (jwtPayload, cb ) => {
            return User.findOneById(jwtPayload.id)
            .then( (user) => {
                return cb (null, user);
            })
            .catch( err => cb(err) );
        }
    )