/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("LOCAL_LISTS", function (table) {
    table.increments("LIST_ID"); // يعين مفتاح أساسي تلقائي
    table.string("LIST_NAME");
    table.integer("NATIONAL_ID");
    table.integer("CIRCLE_ID").references("CIRCLE_ID").inTable("CIRCLES");
    table.integer("COUNT_OF_VOTES");
    table.boolean("IS_APROVED");
    table.string("TYPE_OF_CHAIR");

    table.foreign("NATIONAL_ID").references("NATIONAL_ID").inTable("USERS");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("LOCAL_LISTS");
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("LOCAL_LISTS");
};
