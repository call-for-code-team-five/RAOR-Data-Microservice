require("dotenv").config();

// const cors = require("cors");
const cors = require('./middleware/corsfilters')
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const app = express();
const routes = require("./routes");
const port = process.env.PORT || 8001;
const COS = require("ibm-cos-sdk");
const WebAppStrategy = require("ibmcloud-appid").WebAppStrategy;
const APIStrategy = require("ibmcloud-appid").APIStrategy;
const CALLBACK_URL = "/ibm/cloud/appid/callback";
const helmet = require("helmet")

// app.use(cors());
console.log("STRATEGY_NAME", WebAppStrategy.STRATEGY_NAME)
app.use(cors.corsfilters);
app.use(helmet())

if (process.env.ENVIRONMENT != "LOCAL") {

    console.log("deployed")

    app.use(passport.initialize());
    
    passport.use(new APIStrategy({
        oauthServerUrl: "https://eu-gb.appid.cloud.ibm.com/oauth/v4/44516919-34fa-4e47-a1de-9e0462e11af4"
    }));

    app.use("/api", passport.authenticate(APIStrategy.STRATEGY_NAME, { session: false}), routes);
    

} else {

    console.log("local")
    app.get("/", (req, res) => {
        res.send("Main Data Microservice is running");
    });
    app.use("/api", routes);
}

app.listen(port, () => {
    console.log("Main Data Microservice is running in", port);
});
