import express from 'express';
const app = express();

/**
 * GET     -> Buscar uma informacao 
 * POST    -> Inserir uma informacao (Criar usuario etc)
 * PUT     -> Alterar uma informacao
 * DELETE  -> Remover um dado   
 * PATCH   -> Alterar uma informacao especifica
 */
app.get('/test',(req,res)=>{
    // req -> Request => Entrando
    // res -> Response => Saindo
    return res.send("Ola NLW")
});

app.post('/post-test',(req,res)=>{
    return res.send("Hello this is the post method.")
})
// Porta que vai executar o projeto
// localhost:4000
app.listen(4000,() => console.log("Server is running YOORAY"));