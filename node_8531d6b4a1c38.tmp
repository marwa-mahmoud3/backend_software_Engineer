const express = require('express');
const app = express();

const authRouter = require("./routes/auth.route");
const homeRouter = require('./routes/home.route');
const productsRouter = require('./routes/products.route');
const adminRouter = require('./routes/admin.route');

const session = require('express-session');
const SessionStore = require('connect-mongodb-session')(session);
const flash = require('connect-flash');

app.use(express.static('assets'))
app.use(flash());

const Store = new SessionStore({
    uri: 'mongodb://localhost:27017/DB',
    collection : 'sessions',
})

app.use(session({
    secret: 'this is my secrt to hash express session and stor in mongodb ..',
    saveUninitialized : false,
    resave:true,
    store:Store
}))

app.set('view engine','ejs');

app.use("/",homeRouter);
app.use("/",authRouter);
app.use("/",productsRouter);
app.use("/",adminRouter);

app.listen(3000);

