const db = require('./db/models');
const loginUser = (req, res, user) => {
    req.session.auth = {userId:user.id};
    req.session.save(()=>{res.redirect('/game-shelves')})
};

const logoutUser = (req, res, user) => {
    delete req.session.auth;
    req.session.save(()=>{res.redirect('/')})
};


// sends to / for logged in users
const requireAuth = (req, res, next) => {
    if(!res.locals.authenticated){
        return res.redirect('/')
    }
    return next();
}

const restoreUser = async (req, res, next) => {
    if(req.session.auth){
        const {
            userId
        } = req.session.auth
        try{
            const user = await db.User.findByPk(userId)
            res.locals.authenticated = true;
            next()
        } catch(err){
            res.locals.authenticated = false;
            next(err);
        }
    } else {
        res.locals.authenticated = false;
        next();
    }

}

module.exports = {
    loginUser,
    logoutUser,
    requireAuth,
    restoreUser
}
