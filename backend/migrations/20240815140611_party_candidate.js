/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("PARTY_CANDIDATE", function (table) {
    table.increments("CANDIDATE_ID").primary(); // BIGINT primary key for candidate ID
    table.bigInteger("NATIONAL_ID"); // BIGINT for national ID
    table.bigInteger("LIST_ID"); // BIGINT for list ID
    table.boolean("IS_APROVED").defaultTo(false); // BOOLEAN with default value FALSE for approved status

    // Foreign key constraints
    table.foreign("NATIONAL_ID").references("NATIONAL_ID").inTable("USERS"); // Foreign key referencing NATIONAL_ID in USERS table
    table.foreign("LIST_ID").references("LIST_ID").inTable("PARTY_LISTS"); // Foreign key referencing LIST_ID in PARTY_LISTS table
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("PARTY_CANDIDATE"); // Drop the PARTY_CANDIDATE table if it exists
};