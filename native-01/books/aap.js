

const invokeAction =  async ({action, id, name, email, phone, title, author}) => {
    switch(action) {

    case 'readContacts' :
        const allContacts = await contacts.listContacts()    
        return console.log(allContacts)
    case 'getById' :   
        const contact = await contacts.getContactById(id)
        return console.log(contact) 
    case 'remove':    
        const removedContact = await contacts.removeContact(id);
         return console.log(removedContact);
    case 'add':     
         const addContact = await contacts.addContact({ name, email, phone })
         return console.log(addContact);


    case 'getByName' :   
         const contactByName = await contacts.getContactByName(name)
         return console.log(contactByName) 
    case 'getByEmail' :   
         const contactByEmail = await contacts.getContactByEmail(email)
         return console.log(contactByEmail) 
    case 'getByPhone' :   
         const contactByPhone = await contacts.getContactByPhone(phone)
         return console.log(contactByPhone) 
         

        case 'readBooks' :
        const allBooks = await books.getAll()    
       return console.log(allBooks)
    case 'getBookById' :
        
        const book1 = await books.getById(id)
        return console.log(book1)
    case 'addBook' :
         const newBook = await books.add({title, author}) 
         return  console.log(newBook) 
    case 'updateBook' :
        const updatedBook = await books.update(id, {title, author})  
        return console.log(updatedBook)  
    case 'deleteBook':
         const deletebook = await books.del(id)
         return console.log(deletebook, 'removed')

    case 'readBook2' :
        const somebook = await books.getAll()    
       return console.log(somebook[0].author)
    case 'wait':
        const termp = await books.prom
        console.log(termp)

    default :     
        console.log('No such action')
    }
} 


// const arr = hideBin(process.argv)
// const {argv} = yargs(arr)
// console.log (argv)
// invokeAction(argv)



// const actionIndex = process.argv.indexOf('--action')


// if (actionIndex !== - 1) {
//     const action = process.argv[actionIndex +1]
//     console.log(action)
//     invokeAction({action})
// }

// console.log(books)
// invokeAction({action: 'readContacts'})
// invokeAction({action: 'remove', id: 'AeHIrLTr6JkxGE6SN-0Rw'})
// invokeAction({action: 'read2'})
// invokeAction({action: 'wait'})

// invokeAction({action: 'getById', id: 'AeHIrLTr6JkxGE6SN-0Rw'})
// invokeAction({action: 'add', title: 'Maintain Eye contact', author: 'Yurik'})
// invokeAction({action: 'add',  name: 'Me' , email: '@mail' , phone: '099 555 8741'})

// invokeAction({action: 'delete' , id: 'dkJSszfrRVtLVR_MfRqcu'})
// console.log(__dirname)

// const date = new Date()

// const logger = require('./main.js');
// import { info, log } from "./main.js";

// console.log(info)

// info('info function');
// logger.log('log function');
