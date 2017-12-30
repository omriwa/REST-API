var express = require("express"),
    router = express.Router();
//########################ROUTES#######################
router.route('/register')

.get(
    function(req,res) {
        res.render('../views/register.ejs');  
    }
);

//###########################EXPORT####################
module.exports= router;