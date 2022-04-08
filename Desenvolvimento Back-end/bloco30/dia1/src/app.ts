import express from "express";
import connection from "./models/connection";
import routesCountry from "./routes/TournamentRoute";

class App {
    public express: express.Application;

    public connection: Promise<typeof import('mongoose')>;

    constructor() {
        this.express = express()
        this.connection = connection();
        this.middlewares();
        this.routes();
    }

    private middlewares() {
        this.express.use(express.json());
    }

    private routes() {
        this.express.use('/tournaments', routesCountry)
    }
}

export default App;