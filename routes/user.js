var express = require("express"),
    router = express.Router(),
    userModel = require("../schemas/user_schema.js");
    
//crud api

//################################################ROUTES#####################################
//CREATE
router.post('/user',function(req,res) {
    let userData = req.body.userData,
        newUser = new userModel(userData);
        
    newUser.save(function(err) {
        if(err)
            res.redirect('/register');
        else
            res.render('../views/index.ejs',{userName: userData.name});
    });
})
router.route('/user/:username')
//READ
.get(function(req,res) {
    res.write("read");
    res.end();
})
//UPDATE
.put(function(req,res) {
    let userData = req.body.userData;
    userModel.findByIdAndUpdate(userData.id,userData,function(err, user) {
        console.log(user);
        if(err)
            res.redirect('/');
        else
            res.render('../views/index.ejs' , user);
    });
    
})
//DELETE
.delete(function(req,res) {
    let userData = req.body.userData;
    userModel.findOneAndRemove(userData,function(err, user) {
        if(err)
            res.redirect('/');
        else
            res.render('../views/login.ejs',{error: 'user have been deleted'});
    });
});

router.get('/update/user/:username',function(req,res) {
    let userData = req.body.userData;
    userModel.findOne(userData,function(err,user) {
        if(err)
            res.redirect('/login');
        else {
            res.render('../views/update.ejs', user);
        }
    });
});


//################################EXPORT##################################
module.exports = router;