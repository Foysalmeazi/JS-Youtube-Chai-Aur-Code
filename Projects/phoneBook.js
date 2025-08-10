// Phonebook object
        const phoneBook = {
            'Foysal': '0480583548',
            'Hasib': '0478658976'
        };

        // Add a new contact
        function addNewContact(name, phone) {
            if (phoneBook[name]) {
                console.log(`${name} already exists in the phoneBook.`);
            } else {
                phoneBook[name] = phone;
                console.log(`Contact Added: ${name}: ${phone}`);
            }
        }

        // Search for a contact
        function searchContact(name) {
            if (phoneBook[name]) {
                console.log(`${name} has been found in the contact list.`);
                console.log(`The number is: ${phoneBook[name]}`);
            } else {
                console.log(`${name} has not been found in the contact list.`);
            }
        }

        // Update a contact's number
        function updateContact(name, newPhone) {
            if (phoneBook[name]) {
                console.log(`The ${name} exists.`);
                console.log('Previous contact number:', phoneBook[name]);
                phoneBook[name] = newPhone;
                console.log('After Update:', phoneBook[name]);
            } else {
                console.log(`The ${name} does not exist.`);
            }
        }

        // Delete a contact
        function deleteContact(name) {
            if (phoneBook[name]) {
                delete phoneBook[name];
                console.log(`Deleted ${name} from phoneBook.`);
            } else {
                console.log(`${name} does not exist.`);
            }
        }

        // Show recent contact list
        function recentContactList() {
            console.log("Contact List:");
            for (let name in phoneBook) {
                console.log(`${name}: ${phoneBook[name]}`);
            }
        }

        // Example usage
        addNewContact("Rony", "046789907865");
        searchContact("Rony");
        updateContact("Hasib", "0450786689");
        deleteContact("Foysal");
        recentContactList();