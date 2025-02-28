const express = require('express')

const { serverConfig } = require("./config")

const app = express();


app.listen(serverConfig.PORT, () => {
    console.log(`Successfully started the server on PORT: ${serverConfig.PORT}`);
   
});     