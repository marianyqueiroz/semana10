const app2 = require("./src/app2");
const port = 8001;

app2.listen(port, () => {
    console.log(`App está rodando na porta ${port}`);
});