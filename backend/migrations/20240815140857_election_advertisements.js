/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("ELECTION_ADVERTISEMENTS", function (table) {
    table.bigIncrements("ID"); // BIGINT IDENTITY(1,1) primary key for ID
    table.bigInteger("NATIONAL_ID").notNullable(); // BIGINT for national ID
    table.bigInteger("LIST_ID"); // BIGINT for list ID
    table.integer("CIRCLE_ID"); // INT for circle ID
    table.string("TITLE", 255); // VARCHAR(255) for title
    table.string("DESCRIPTION", 4000).notNullable(); // VARCHAR(4000) for description
    table.text("URL").defaultTo("DUMMY DATA"); // TEXT with default value 'DUMMY DATA'
    table.string("STATUS", 255).defaultTo("PENDING"); // VARCHAR(255) with default value 'PENDING'
    table.date("START_DATE"); // DATE for start date
    table.date("END_DATE"); // DATE for end date
    table.timestamp("CREATION_DATE").defaultTo(knex.fn.now()); // DATETIME with default value CURRENT_TIMESTAMP()
    table.integer("PAYMENT_ID"); // INT for payment ID
    table.bigInteger("LIKE_COUNT").defaultTo(0); // BIGINT with default value 0

    // Foreign key constraints
    table
      .foreign("PAYMENT_ID")
      .references("PAYMENT_ID")
      .inTable("PAYPAL_PAYMENTS"); // Foreign key referencing PAYMENT_ID in PAYPAL_PAYMENTS table
    table.foreign("NATIONAL_ID").references("NATIONAL_ID").inTable("USERS"); // Foreign key referencing NATIONAL_ID in USERS table
    table.foreign("CIRCLE_ID").references("CIRCLE_ID").inTable("CIRCLES"); // Foreign key referencing CIRCLE_ID in CIRCLES table
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("ELECTION_ADVERTISEMENTS"); // Drop the ELECTION_ADVERTISEMENTS table if it exists
};