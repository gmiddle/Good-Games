const db = require('./db/models');
const loginUser = (req, res, user) => {
    req.session.auth = {userId:user.id};
    //TODO: User id (key name to be checked later)???
};

const logoutUser = (req, res, user) => {
    delete req.session.auth;
};

const requireAuth = (req, res, next) => {
    if(!res.locals.authenticated){
        return res.redirect('/')
    }
    return next();
}

const restoreUser = (req, res, next) => {
    if(req.session.auth){
        const {
            userId
        } = req.session.auth
        try{
            const user = await db.User.findByPk(userId)
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