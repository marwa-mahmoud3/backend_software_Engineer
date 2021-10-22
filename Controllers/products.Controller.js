exports.getproducts = (req,res,next) =>{
    res.render("products",{
        isUser : req.session.userId,
        isAdmin :req.session.isAdmin
    });
}
