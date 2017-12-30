var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser")(),
    methodOverride = require("method-override");
    
//OVVERIDE
app.use(methodOverride('_method'));
//BODY-PARSER SETUP
app.use(bodyParser);
    
//VIEW ENGINE SETUP
app.set('view-engine','ejs');
    
//ROUTES SETUP
var userRoute = require("./routes/user.js"),
    indexRoute = require("./routes/index.js"),
    loginRoute = require("./routes/login.js"),
    registerRoute = require("./routes/register.js");
    
app.use(indexRoute);
app.use(userRoute);
app.use(loginRoute);
app.use(registerRoute);
//DB SETUP
var dbUrl = "mongodb://" + process.env.IP + "/data";
mongoose.connect(dbUrl,{
    useMongoClient: true
});
//check for db error connection
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
    
    
app.listen(process.env.PORT);
console.log('the server is working');