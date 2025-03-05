const express = require('express')

const { serverConfig } = require("./config")
const apiRoutes = require('./routes')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', apiRoutes)


app.listen(serverConfig.PORT, async() => {
    console.log(`Successfully started the server on PORT: ${serverConfig.PORT}`);
   const {City, Airport} = require('./models')
   const bangalaru = await City.findByPk(1);
    // const dbpairport = await bangalaru.createAirport({name: 'Huballi Airport', code: 'HBL'})
    
    // const airportsInBlr = await bangalaru.getAirports();
    // console.log(airportsInBlr);
    
    // const hbairport = await Airport.findByPk(2);
    // console.log(hbairport);
    
    // await bangalaru.removeAirport(hbairport)
    // await City.destroy({
    //     where: {
    //         id: 1
    //     }
    // });

});     