/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("LOCAL_CANDIDATE", function (table) {
    table.increments("CANDIDATE_ID").primary(); // BIGINT primary key for candidate ID
    table.bigInteger("LIST_ID"); // BIGINT for list ID
    table.bigInteger("NATIONAL_ID"); // BIGINT for national ID
    table.boolean("IS_APROVED").defaultTo(false); // BOOLEAN with default value FALSE for approved status
    table.bigInteger("COUNT_OF_VOTES").defaultTo(0); // BIGINT with default value 0 for count of votes
    table.string("TYPE_OF_CHAIR", 100); // VARCHAR(100) for type of chair

    // Foreign key constraints
    table.foreign("NATIONAL_ID").references("NATIONAL_ID").inTable("USERS"); // Foreign key referencing NATIONAL_ID in USERS table
    table.foreign("LIST_ID").references("LIST_ID").inTable("LOCAL_LISTS"); // Foreign key referencing LIST_ID in LOCAL_LISTS table
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("LOCAL_CANDIDATE"); // Drop the LOCAL_CANDIDATE table if it exists
};