const updateContacts = require("./updateContacts");


const listContacts = require("./listContacts");

const addContact = async(data) => {
    const contacts = await listContacts();
    const newId = contacts[contacts.length - 1].id + 1;
    const newContact = {id: newId, ...data};    
    contacts.push(newContact);
    await updateContacts(contacts);
    // await fs.writeFile(contactsPath, JSON.stringify(contacts));
    return newContact;
}


module.exports = addContact;