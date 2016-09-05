//Building an Address Book. From:https://www.codecademy.com/courses/building-an-address-book
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

//display all of the people
function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
function search(lastName) {
    var contactsLength = contacts.length;
    for(var i = 0; i < contactsLength; i++) {
        if(lastName === contacts[i].lastName) {
            printPerson(contacts[i]);
        }
    }
}

//creat a function and add our new friend to the address book.
function add(firstName, lastName, email, phoneNumber) {
    contacts[contacts.length] = {
        firstName:firstName,
        lastName:lastName,
        email:email,
        phoneNumber:phoneNumber
        };
}

add("wung", "sen", "ws@abc.com", "010-88888888");

list();
search("Jones");
