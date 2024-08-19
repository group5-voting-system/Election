/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("PARTIES", function (table) {
    table.increments("PARTY_ID").primary(); // BIGINT primary key for party ID
    table.string("PARTY_NAME", 100); // VARCHAR(100) for party name
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("PARTIES"); // Drop the PARTIES table if it exists
};