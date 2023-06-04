const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
dotenv.config({ path: ".env"});

const port = process.env.PORT || 3000

const app = express();

const dbURI = process.env.MONGODB_URL;
mongoose.set('strictQuery', true);
mongoose.connect(dbURI, {
}).then(() => {
    console.log("DB connection established");
}).catch((e) => {
    console.log(e);
})

app.get("/", (req,res) => {
    res.send("Official Music Club Of NIT Durgapur");
})
app.use(authRoutes);

app.listen(port, () => {
    console.log(`connection is set up at port ${ port }`);
})
