const contacts = require("./contact.data");

const getContacts = () => {
  return contacts;
};

const findContactById = (id) => {
  const contact = contacts.find((contact) => contact.id === parseInt(id));
  return contact;
};

const createContact = (newContact) => {
  const id = contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1;
  const contact = { id, ...newContact };
  contacts.push(contact);
  return contact;
};

const deleteContact = (contact) => {
  const index = contacts.indexOf(contact);
  contacts.splice(index, 1);
};

module.exports = {
  getContacts,
  createContact,
  deleteContact,
  findContactById,
};
