const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended : false
}))

app.use(cors());
app.use(cookieParser());

// routes
const userRoute = require('./routes/authRouter');
const contactRoute = require('./routes/contactRoutes')
const tradeapiRoute = require('./routes/trade.api.router')
const macanismRoute = require('./routes/macanismRout')


app.use('/api/user', userRoute);
app.use('/api/trade', tradeapiRoute);
app.use('/api/contact', contactRoute)
app.use('/api/macanism', macanismRoute)

app.get('/',(req,res)=>{
    res.json('route tesing')
})

module.exports = app;