/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('payments', (table) => {
      table.increments('id').primary();
      table.string('stripe_payment_id').notNullable();
      table.decimal('amount', 10, 2).notNullable();
      table.string('currency').notNullable();
      table.string('status').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('payments');
  };
