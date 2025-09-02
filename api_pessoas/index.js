const express = require("express");

const app = express();

app.use(express.json());


const pessoas = [
    { id : 1, nome: "Hawks", telefone: "1234-5678"}];
//CONSULTAR PESSOA
app.get("/pessoas",(request,response)=>{
    return response.send(pessoas)
});

//CADASTRAR PESSOA
app.post("/pessoas", (request, response) => {
    const nome = request.body.nome;
    const telefone = request.body.telefone;
    const status = request.body.status;

    pessoas.push({
        nome,
        telefone,
        status 
    });
    return response.send(pessoas)
});

app.get("/pessoas/:nome"), (request, response) => {
   const nome = request.params.nome;
   
    pessoas.filter((item) => {
        if(item.nome === nome){
            return item
        } 
});

if (pessoas.length <= 0) {
    return response.send({"message": "Pessoa não encontrada"});
}




    app.listen(8080, () => {
    console.log("SERVIDOR RODANDO NA PORTA 8080");
});
