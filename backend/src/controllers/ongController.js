const connection = require('../database/connection');//conexão com o banco
const crypto = require('crypto');


module.exports = {

    //metodo de contagem, listagem de dados de uma tabela
    async index (request, response) {
        const ongs = await connection('ongs').select('*')
        
           return response.json(ongs);
        
        },

async create(request, response){

    const { name,email,whatsapp,city,uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX') // gerar uma sequencia de 4 caracteres de letras e numeros
    //conexção com o BD

   await connection('ongs').insert({
     id,
     name,
     email,
     whatsapp,
     city,
     uf,

    })
//await, primeiro o codigo de inser é executado, depois é dada a resposta

 return response.json({ id});


}

}