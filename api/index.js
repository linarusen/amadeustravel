import express, { json } from 'express'

import cors from 'cors'

const app = express();

app.use(cors())

app.use(express.json())

app.get("/airports", async (req, res) => {
    let data = await fetch("https://www.flypgs.com/tr/s/d").then(t => t.json())
    res.send(data.Countries.map(m => m.Ports).reduce((a, b) => [...a, ...b], []));
})

import fs from 'fs'
const Dummy = JSON.parse(fs.readFileSync("./dummy.json").toString())
// import Dummy from './dummy.json'

app.post("/flights", async (req, res) => {

    let data = Dummy.flights.filter(
        f => 1 && 
        // f.departure_airport == req.body.fromAirport &&
        // f.arrival_airport == req.body.toAirport &&
        new Date(f.departure_time).toDateString() == new Date(req.body.goDate.date).toDateString()
        )
    res.send(data);
})

app.listen(3005);