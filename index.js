const { program } = require('commander');

const contactsFunctions = require("./contactsFunctions");

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');
  
program.parse(process.argv);

const argv = program.opts();


(async () => {
    const { action, id, name, email, phone} = argv;
    switch (action) {
        case "list":
            const contacts = await contactsFunctions.listContacts();
            console.table(contacts);
            break;
        
        case "get":
            const contactsById = await contactsFunctions.getContactById(id);
            if (!contactsById) {
                throw new Error(`Contact with id:${id} not found`);
                break;
            }
            console.log(contactsById);
            break;
            
        
        case "add":
            if (!name || !email || !phone) {
                console.log("To record a new contact, you need to specify name, email and phone ")
                break;
            }            
            const newContacts = await contactsFunctions.addContact(name, email, phone);
            
            console.log(newContacts);
            break;
        
        case "remove":
            const removeContact = await contactsFunctions.removeContact(id);
            if (!removeContact) {
            throw new Error(`Contact with id:${id} not found`);
            }
            else {
                console.log("Remove was successful");
            }            
            break;
        
        default:
            console.warn('\x1B[31m Unknown action type!');
    }
})();