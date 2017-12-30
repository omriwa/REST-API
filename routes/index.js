var express = require("express"),
    router = express.Router();
//######################ROUTES########################
//index route
router.get('/',function(req,res) {
    res.render('../views/index.ejs',{
        username: undefined,
        pass: undefined
    });
});

//#######################EXPORT######################
module.exports = router;