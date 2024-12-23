const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes/index');


const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
// app.use(cors());


app.use(express.json({limit: "10mb"}));

app.use(cookieParser());

app.use("/api", router);

const PORT = 8090 || process.env.PORT;

connectDB().then(()=> {
    app.listen(PORT, ()=>{
        console.log("Server is running")
    })
})

