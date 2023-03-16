const {
  getContactsController,
  createContactController,
  deleteContactController,
} = require("./contact/contact.controller");

const routes = [
  {
    method: "GET",
    path: "/contacts",
    handler: getContactsController,
  },
  {
    method: "POST",
    path: "/contacts",
    handler: createContactController,
  },
  {
    method: "DELETE",
    path: "/contacts/{id}",
    handler: deleteContactController,
  },
];

module.exports = routes;
