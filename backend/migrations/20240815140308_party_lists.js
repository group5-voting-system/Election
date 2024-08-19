/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("PARTY_LISTS", function (table) {
    table.increments("LIST_ID").primary(); // BIGINT primary key for list ID
    table.string("LIST_NAME", 100); // VARCHAR(100) for list name
    table.bigInteger("COUNT_OF_VOTES"); // BIGINT for count of votes
    table.boolean("IS_APROVED").defaultTo(false); // BOOLEAN with default value FALSE for approved status
    table.bigInteger("NATIONAL_ID"); // BIGINT for national ID

    // Optional: Add foreign key constraints if necessary
    table.foreign("NATIONAL_ID").references("NATIONAL_ID").inTable("USERS");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("PARTY_LISTS"); // Drop the PARTY_LISTS table if it exists
};