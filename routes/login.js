var express = require("express"),
    router = express.Router(),
    userModel = require("../schemas/user_schema.js");
//###########################ROUTES#########################
//login route
router.route('/login')

.get(
    function(req,res) {
        res.render('../views/login.ejs',{error: undefined});
    }
)

.post(function(req,res) {
    let userData = req.body.userData;
    userModel.find(userData,'username',function(err,user){
        if(user.length == 0 || err)
            res.render('../views/login.ejs',{error: 'username or password are incorrect'});
        else
            res.render('../views/index.ejs', userData);
    });
    
});
//####################EXPORTS##########################
module.exports = router;