exports.gethome = (req,res,next) =>{
    res.render("home",{
        isUser : req.session.userId,
        isAdmin :req.session.isAdmin
    });
}
