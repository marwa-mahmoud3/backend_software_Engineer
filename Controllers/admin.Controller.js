exports.getadmin = (req,res,next) =>{
    res.render("admin",{
        isUser : true,
        isAdmin: true,
    });
}
