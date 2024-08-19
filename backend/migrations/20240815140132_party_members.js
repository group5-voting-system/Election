/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("PARTY_MEMBERS", function (table) {
    table.increments("MEMBER_ID").primary(); // BIGINT primary key for member ID
    table.bigInteger("NATIONAL_ID"); // BIGINT for national ID
    table.bigInteger("PARTY_ID"); // BIGINT for party ID
    table.boolean("IS_PARTY_COMMISSIONER").defaultTo(false); // BOOLEAN for party commissioner with default value FALSE

    // Foreign key constraints
    table.foreign("PARTY_ID").references("PARTY_ID").inTable("PARTIES"); // Foreign key referencing PARTY_ID in PARTIES table
    table.foreign("NATIONAL_ID").references("NATIONAL_ID").inTable("USERS"); // Foreign key referencing NATIONAL_ID in USERS table
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("PARTY_MEMBERS"); // Drop the PARTY_MEMBERS table if it exists
};