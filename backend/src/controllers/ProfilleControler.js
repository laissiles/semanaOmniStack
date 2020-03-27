const connection  = require('../database/connection')// exportação do bd
module.exports={
 
    async index (request, response){
        const ong_id = request.headers.authorization;//pegando a "rota da ong que quero listar"

        const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*')

        return response.json(incidents)
    },


}