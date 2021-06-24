import express, {Request, Response, NextFunction} from 'express';
import "express-async-errors";
import 'reflect-metadata';
import './database';
import { router } from './routes';


const app = express();
// Middleware
app.use(express.json());
app.use(router);


// MiddleWARE de erro - 4 parametros
app.use((err: Error,request: Request,response: Response,next: NextFunction) => {
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message
        })
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

/**
 * GET     -> Buscar uma informacao 
 * POST    -> Inserir uma informacao (Criar usuario etc)
 * PUT     -> Alterar uma informacao
 * DELETE  -> Remover um dado   
 * PATCH   -> Alterar uma informacao especifica
 */

/**
 * Tipos de parametros:
 * Routes Params => parametro de rota ex; localhost:4000/produtos/4857569 - explicito na rota
 * Query Params => http://localhost:4000/produtos?name=teclado&description=tecladobom& ...  Parametro de Query -> opcional na url
 * 
 * Body Params => vem no corpo da requisicao, utiliza-se em PUT, POST, PATCH
 * {
 *  "name": "teclado",
 *  "description": "teclado bom"
 * }
 */





// Porta que vai executar o projeto
// localhost:4000
app.listen(4000,() => console.log("Server is running YOORAY"));