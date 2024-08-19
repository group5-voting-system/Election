/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("ADMIN", function (table) {
    table.increments("ADMIN_ID"); // BIGINT IDENTITY column for admin ID with auto-increment
    table.string("NAME", 255).notNullable(); // VARCHAR(255) for name
    table.string("EMAIL", 255).notNullable(); // VARCHAR(255) for email
    table.string("PASSWORD", 255).notNullable(); // VARCHAR(255) for password
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("ADMIN"); // Drop the ADMIN table if it exists
};