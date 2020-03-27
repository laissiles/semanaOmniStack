
exports.up = function(knex) {

    return knex.schema.createTable('incidents', function(table){
        table.increments();// chave incrementalvel
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
       
        table.string('ong_id').notNullable();// coluna, campo da chave estrangeira

        table.foreign('ong_id').references('id').inTable('ongs'); //chave "estrangeira" em si

    });
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('incidents');
  
};
