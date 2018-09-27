// @@ create blogs
exports.up = function(knex, Promise) {

    return knex.schema.createTable('blog_users', function(table) {
        table.increments('id').primary();
        table.string('firstname');
        table.string( 'lastname');
        table.string('password');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExsist ('blog_users');
  
};