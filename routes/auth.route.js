const router = require("express").Router();
const express = require("express");
const check = require('express-validator').check;
const authGuard = require('./guards/auth.guard');

const authController = require("../Controllers/auth.Controller") 

router.get("/register",authGuard.notAuth,authController.getRegister);

router.post(
    "/register",authGuard.notAuth,
    express.urlencoded({extended : true}),
    check('username').not().isEmpty().withMessage('User Name is required'),
    check('email').not().isEmpty().withMessage('Email is required'),
    check('password').isLength({min:6}).withMessage('Minimum Length must be 6'),
    check('confirmpassword').custom((value,{req})=>{
        if(value === req.body.password){
            return true;
        }
        else{
            throw 'Password and Confirm Password Not Match';
        }
    }),
    authController.postRegister
);

router.get("/login",authGuard.notAuth,authController.getLogin);

router.post(
    "/login",authGuard.notAuth,
    express.urlencoded({extended : true}),
    check('email').not().isEmpty().withMessage('Email is required'),
    check('password').not().isEmpty().withMessage('Password is required'),
    authController.postLogin
);

router.all("/logout",authGuard.isAuth, authController.logout);

module.exports = router;