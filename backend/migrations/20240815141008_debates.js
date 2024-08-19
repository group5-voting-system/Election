/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("DEBATES", function (table) {
    table.increments("ID").primary(); // INT IDENTITY(1,1) primary key for ID
    table.date("DATE_OF_DEBATE"); // DATE for the date of the debate
    table.string("TOPIC", 255); // VARCHAR(255) for the topic of the debate
    table.string("FIRST_CANDIDATE", 255); // VARCHAR(255) for the first candidate
    table.string("FIRST_CANDIDATE_LIST", 255); // VARCHAR(255) for the first candidate's list
    table.string("SECOND_CANDIDATE", 255); // VARCHAR(255) for the second candidate
    table.string("SECOND_CANDIDATE_LIST", 255); // VARCHAR(255) for the second candidate's list
    table.string("STATUS", 255); // VARCHAR(255) for the status of the debate
    table.text("ZOOM_LINK"); // TEXT for the Zoom link

    // Add any additional constraints or indices if necessary
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("DEBATES"); // Drop the DEBATES table if it exists
};