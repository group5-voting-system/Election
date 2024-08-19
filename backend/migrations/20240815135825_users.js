/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("USERS", function (table) {
    table.bigInteger("NATIONAL_ID").primary(); // BIGINT IDENTITY COLUMN for national ID
    table.string("FULL_NAME", 255).notNullable(); // VARCHAR(255) for full name
    table.string("EMAIL", 255).notNullable(); // VARCHAR(255) for email
    table.integer("CIRCLE_ID").notNullable(); // INT for circle ID
    table.boolean("IS_LOCAL_VOTE").defaultTo(false); // BOOLEAN for local vote with default value FALSE
    table.boolean("IS_PARTY_VOTE").defaultTo(false); // BOOLEAN for party vote with default value FALSE
    table.string("PASSWORD", 255); // VARCHAR(255) for password
    table.string("GENDER", 255).notNullable(); // VARCHAR(255) for gender
    table.string("RELIGION", 255).notNullable(); // VARCHAR(255) for religion
    table.date("BIRTH_DATE").notNullable(); // DATE for birth date
    table.string("OTB", 255).defaultTo(""); // VARCHAR(255) for optional column
    table.string("Token", 255).defaultTo(""); // VARCHAR(255) for optional column
    

    // Foreign key constraint
    table.foreign("CIRCLE_ID").references("CIRCLE_ID").inTable("CIRCLES");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("USERS"); // Drop the USERS table if it exists
};