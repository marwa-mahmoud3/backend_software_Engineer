const authModel = require("../models/auth.model");
const validatorResult = require('express-validator').validationResult;

exports.getRegister = (req,res,next) =>{
    res.render("register",{
        isUser: false,
        isAdmin:false, 
        authError:req.flash('authError')[0],
        validationErrors:req.flash('validationErrors')
    });
}

exports.postRegister = (req,res,next) =>{
    if(validatorResult(req).isEmpty()){
        authModel
        .createNewUser(req.body.username,req.body.email,req.body.password)
        .then(()=> {
            res.redirect("/login");
        })
        .catch(err =>{
            req.flash("authError",err);
            res.redirect("/register");
        })
    }
    else{
        req.flash('validationErrors',validatorResult(req).array());
        res.redirect("/register");
    }
}

exports.getLogin = (req,res,next) =>{
    res.render("login",{
        isUser: false,
        isAdmin:false, 
        authError:req.flash('authError')[0],
        validationError:req.flash('validationError')
    });
}

exports.postLogin = (req,res,next)=>{
    if(validatorResult(req).isEmpty()){
        authModel
            .login(req.body.email ,req.body.password)
            .then((result)=> {
                req.session.userId = result.id;
                req.session.isAdmin = result.isAdmin;
                res.redirect("/");
            })
            .catch(err =>{
                req.flash('authError',err);
                res.redirect("/login");
            })
   }
    else{
        req.flash('validationError',validatorResult(req).array());
        res.redirect("/login");
    }
}

exports.logout = (req,res,next)=>{
    req.session.destroy(()=>{
        res.redirect("/");
    })
}

