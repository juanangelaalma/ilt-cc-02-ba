const {
  getContacts,
  createContact,
  deleteContact,
  findContactById,
} = require("./contact.service");

const getContactsController = (request, response) => {
  const contacts = getContacts();
  return response.end(JSON.stringify(contacts));
};

const createContactController = (request, response) => {
  let body = "";

  request.on("data", (chunk) => {
    body += chunk.toString();
  });

  request.on("end", () => {
    const { name, email, phone } = JSON.parse(body);
    const contact = createContact({ name, email, phone });
    response.statusCode = 201;
    return response.end(
      JSON.stringify({ message: "create contact successfully", contact })
    );
  });
};

const deleteContactController = (request, response) => {
  const id = request.url.split("/")[2];
  const contact = findContactById(id);

  if (contact) {
    deleteContact(contact);
    response.statusCode = 200;
    return response.end(
      JSON.stringify({ message: "delete contact successfully" })
    );
  }

  response.statusCode = 404;
  return response.end(JSON.stringify({ message: "contact not found" }));
};

module.exports = {
  getContactsController,
  createContactController,
  deleteContactController,
};
