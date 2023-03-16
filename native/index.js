const http = require("http");
const {
  getContactsController,
  createContactController,
  deleteContactController,
} = require("./contact/contact.controller");

const HOST = "localhost";
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (req.url === "/contacts") {
    if (req.method === "GET") {
      const response = getContactsController(req, res);
      return response;
    } else if (req.method === "POST") {
      const response = createContactController(req, res);
      return response;
    }
  }

  if (req.url.startsWith("/contacts/")) {
    if (req.method === "DELETE") {
      const response = deleteContactController(req, res);
      return response;
    }
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
