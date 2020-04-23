
exports.up = function(knex) {
    return knex.schema
        .createTable('users', (table) => {
            table.increments('id');
            table.string('username').unique().notNullable();
            table.string('password').notNullable();
            table.integer('age');
            table.timestamp('updated_at');
            table.timestamp('created_at').defaultTo(knex.fn.now());
        });
};
// // todo ROLE

exports.down = function(knex) {
 // rollback
};
