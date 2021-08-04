const toNotionPageCommand = require("./toNotionPageCommand");
const invalidCommand = require("./invalidCommand");
const helpCommand = require("./helpCommand");

module.exports = [helpCommand, toNotionPageCommand, invalidCommand];
