const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const signIn = require('./routes/signIn');



mongoose.connect(keys.dbURI);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3005;
}

// No need for CORS accepting all (*) now that index.html and api is served from the SAME server and port!
// But if you need to allow CORS disable the below.
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });





//Endpoints for Login 
signIn(app);

//if (process.env.NODE_ENV === 'production') {
// Static assets, every file under specified directories will be served. (css, html, js)
const rootDirForBuild = '../client/build/';
app.use('/', express.static(path.join(__dirname, rootDirForBuild)));
console.log('Serving directory:', path.join(__dirname, rootDirForBuild));

// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, rootDirForBuild, 'index.html'));
});
//}

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
