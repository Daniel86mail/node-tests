const db = require('./db');

module.exports.handleSignup = (email,password) =>{
    //check email exists
    //save the user in db
    db.saveUser({
        email,
        password
    });
    //send welcome email
}