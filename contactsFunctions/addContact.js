const updateContacts = require("./updateContacts");


const listContacts = require("./listContacts");

const addContact = async(name, email, phone) => {
    const contacts = await listContacts();
    const newId = contacts[contacts.length - 1].id + 1;
    const newContact = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      phone,
    };   
    contacts.push(newContact);
    await updateContacts(contacts);
    // await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact;
}


module.exports = addContact;