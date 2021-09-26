// const argv = require('yargs').argv;

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const arr = hideBin(process.argv);
// console.log(arr);
const {argv} = yargs(arr);
console.log(argv);


// const fs = require("fs");

// const contactsFunctions = require("./contactsFunctions");

// const id = 19;
// const newContact = {
//     "name": "Helen Iks",
//     "email": "heleiks@egetlacus.ca",
//     "phone": "(048) 312-4585"
// };
// const delId = 11;

// (async () => {
//     try {
//         // const contacts = await contactsFunctions.listContacts();
//         // console.log(contacts);

//         // const contactsById = await contactsFunctions.getContactById(id);
//         // if (!contactsById) {
//         //     throw new Error(`Contact with id:${id} not found`);
//         // }
//         // console.log(contactsById);

//         // const newContacts = await contactsFunctions.addContact(newContact);
//         // console.log(newContacts);

//         const removeContact = await await contactsFunctions.removeContact(delId);
//         if (!removeContact) {
//             throw new Error(`Contact with id:${delId} not found`);
//         }
//         console.log("Remove was successful");
//     }
//     catch (error) {
//         console.log(error.message);
//     }
// })();
   


// const contacts = require("./contacts");


// const fs = require("fs/promises");


// // fs.readFile("files/read.txt", "utf-8")
// //     .then(data => console.log(data))
// //     .catch(error => console.log(error.message)

// const readFile = async (filePath) => {
//     try {
//         const data = await fs.readFile(filePath, "utf-8");
//         console.log(data);
//     }
//     catch (error) {
//         console.log(error.message);
//     }
// };

// readFile("contacts.json"); 

// index.js
// const argv = require('yargs').argv;

// // TODO: рефакторить
// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case 'list':
//       // ...
//       break;

//     case 'get':
//       // ... id
//       break;

//     case 'add':
//       // ... name email phone
//       break;

//     case 'remove':
//       // ... id
//       break;

//     default:
//       console.warn('\x1B[31m Unknown action type!');
//   }
// }

// invokeAction(argv);



// const users = require("./users");
// console.log(users);

