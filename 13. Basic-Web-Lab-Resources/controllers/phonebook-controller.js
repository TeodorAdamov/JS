const phonebook = require('../phonebook');
const Contact = require('../models/Contact')
const { addContact, getPhonebook, deletePhonebook,} = require('../phonebook')



module.exports = {
  index: (req, res) => {
    res.render('index', {
      contacts: phonebook.getPhonebook()
    });

    // TODO: load index page
  },
  addPhonebookPost: (req, res) => {
    // TODO: add a phonebook object to the array
    try {
      addContact(req.body);
    } catch (error) {
      console.log(error);
    }
    res.redirect('/');
  },
  delete: (req, res) => {
    deletePhonebook()
    res.redirect('/')
  }
}