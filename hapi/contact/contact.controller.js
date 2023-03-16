const {
  getContacts,
  createContact,
  deleteContact,
  findContactById,
} = require("./contact.service");

const getContactsController = async (request, h) => {
  try {
    const contacts = getContacts();
    return h.response(contacts).code(200);
  } catch (err) {
    return h.response(err).code(500);
  }
};

const createContactController = async (request, h) => {
  try {
    const newContact = request.payload;
    const contact = createContact(newContact);
    return h
      .response({
        message: "create contact successfully",
        contact,
      })
      .code(201);
  } catch (err) {
    return h.response(err).code(500);
  }
};

const deleteContactController = async (request, h) => {
  try {
    const id = request.params.id;
    const contact = findContactById(id);
    if (!contact) {
      return h.response({ message: "contact not found" }).code(404);
    }
    deleteContact(contact);
    return h.response({ message: "delete contact successfully" }).code(200);
  } catch (err) {
    return h.response(err).code(500);
  }
};

module.exports = {
  getContactsController,
  createContactController,
  deleteContactController,
};
