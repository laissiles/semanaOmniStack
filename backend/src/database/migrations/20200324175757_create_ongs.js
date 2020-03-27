//metodo up sempre responsavel pela criação de tabela
exports.up = function(knex) {
  return knex.schema.createTable('ongs',function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();



  });
};
//e se der merda e precisar voltar a tras da criação da tabela
exports.down = function(knex) {
 return knex.schema.dropTbale('ongs');
};
