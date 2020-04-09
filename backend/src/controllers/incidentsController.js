const connection  = require('../database/connection')

module.exports = {

    //metodo de contagem, listagem de dados de uma tabela
    async index (request, response) {
        const {page=1} = request.query; // criando paginação no sistema

        const [count] = await connection('incidents').count();//mostrar o total de casos

           
        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')//juntando dados da tabela ong com a incidents
        .limit(5)
        .offset((page-1)*5)// para pegar 5 registros por páginas
        .select([
            'incidents.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp', 
            'ongs.city', 
            'ongs.uf'
        ]);

        response.header('total-casos', count['count(*)']-1)// não usar espaços 
        
           return response.json(incidents);
    },

async create(request, response){
const {title, description, value} = request.body;
const ong_id = request.headers.authorization; // guarda informações referentes ao contexto da requisição, dados de autenticacao do usuario, idioma( o Authorization é vindo do insomia)


const [id] = await connection('incidents').insert({
title,
description,
value,
ong_id //FK 

});

return response.json({id});
},

async delete(request, response)
{
const {id} = request.params; // pegando o id da rota
console.log(id)
const ong_id = request.headers.authorization;// pegando o id da ong que o caso esta cadastrado ´/ ver se o indicende a ser deletado é o da ong q quer deletar


const incidents =  await connection('incidents').where('id', id).select('ong_id').first();

console.log(ong_id);
console.log(incidents);

//if pra verificar se o id do caso q quero deletar é igual ao cadastrado pela ong
if(incidents.ong_id!=ong_id){


    return response.status(401).json({ error: 'Operação não permitida'}) // código 410 http =  não autorizado

}

await connection('incidents').where('id', id).delete();


    return response.status(204).send();

}



}