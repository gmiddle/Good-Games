const db = require('./db/models');
const loginUser = (req, res, user) => {
    req.session.auth = {userId:user.id};
    req.session.save(()=>{res.redirect('/games')})

    //TODO: User id (key name to be checked later)???
};

const logoutUser = (req, res, user) => {
    delete req.session.auth;
    req.session.save(()=>{res.redirect('/')})
};

// TODO this might not be working yet
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
