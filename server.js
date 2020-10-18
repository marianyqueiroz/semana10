const app = require("./src/app");
const port = 8001;

app.listen(port, () => {
    console.log(`App está rodando na porta ${port}`);
});