var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    _app,
    urlSlug = require('url-slug'),
    async = require('async'),
    Posts = mongoose.model('Posts'),
    Users = mongoose.model('Users'),
    Attachments = mongoose.model('Attachments'),
    //easyimg = require('easyimage'),
    imagemagick = require('imagemagick'),
    multer  = require('multer'),
    storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/uploads/')
        },
        filename: function (req, file, cb) {
            var mimetype = "";
            if(file.mimetype == "image/jpeg")mimetype = ".jpg";
            else if(file.mimetype == "image/png")mimetype = ".png";
            else if(file.mimetype == "image/gif")mimetype = ".gif";
            //console.log(mimetype)
            cb(null, Date.now() + mimetype) //Appending .jpg
        }
    }),
    upload = multer({ 
        //dest: 'public/uploads/',
        storage: storage,
        onFileUploadStart : function(file){
            console.log('File recieved:');
            console.log(file);
        },
        onFileUploadData:function (file,data){
            console.log('Data recieved');
        },
        onParseEnd: function(req,next){
            next();
        }
    });
    

module.exports = function (app) {
    _app = app;
    app.use('/api', router);
};

router.get('/update-admin', function (req, res, next) {
    var body = {
        email:"admin76",
        password:"a27Le5GB",
        user_type:"admin"
    }

    Users.findOneAndUpdate({user_type: "admin"}, body, {}, function (err, user, raw) {
        res.redirect('/');
    });
});

router.get('/setup', function (req, res, next) {
    var body = {
        email:"admin",
        password:"pass",
        user_type:"admin"
    }

    var user = new Users(body);
    user.save(function(err) {
        if (err) {
            return res.send(err);
        }

        res.redirect('/');
    });
    
});
