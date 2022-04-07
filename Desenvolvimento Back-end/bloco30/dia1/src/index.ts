import App from "./app";

const app = new App().express;

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo na porta ${PORT}`)
})