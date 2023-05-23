const express = require('express')
const cors = require('cors');

const {ROUTES} = require("./routes");

const {setupLogging} = require("./logging");
const {setupProxies} = require("./proxy");
const {setupAuth} = require("./auth");

const app = express()
const port = 8000;


setupLogging(app);
setupAuth(app, ROUTES);
setupProxies(app, ROUTES);

app.use(cors(
    {
        origin: "http://localhost:4200"
    }
));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


