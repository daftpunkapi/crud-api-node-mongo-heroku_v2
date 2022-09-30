const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const companyroute = require('./routes/directory');

const PORT = process.env.PORT

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api/company', companyroute);


//connect to mongoDB Atlas 
mongoose.connect(
    process.env.MONGO_URL,
    {useNewUrlParser:true}
    )
    .then(() => {
        console.log("Connected to Mongoooooose");
    })
    .catch((error) => {
    console.log("Something wrong happened",error);
});



// start server
app.listen(PORT,() => {
    console.log(`Server started at PORT ${PORT}`);
})