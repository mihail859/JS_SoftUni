class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title, author) {
        const bookThatIsINBooks = this.books.find(b => b.title === title && b.author === author);
        if (bookThatIsINBooks) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`;
        } else {
            this.books.push({ title, author });
            return `The book "${title}" by ${author} has been added to ${this.library} library.`;
        }
    }

    addMember(memberName) {
        if (this.members.includes(memberName)) {
            return `Member ${memberName} is already a part of the book club.`;
        } else {
            this.members.push(memberName);
            return `Member ${memberName} has been joined to the book club.`;
        }
    }

    assignBookToMember(memberName, bookTitle) {
        let memberIndex = this.members.indexOf(memberName);
        if (memberIndex === -1) {
            throw new Error(`Member ${memberName} not found.`);
        }

        let indexOfTheBook = this.books.findIndex(b => b.title === bookTitle);
        if (indexOfTheBook == -1) {
            throw new Error(`Book "${bookTitle}" not found.`);
        }

        let assignedBook = this.books[indexOfTheBook];
        this.books.splice(indexOfTheBook, 1);
        return `Member ${memberName} has been assigned the book "${assignedBook.title}" by ${assignedBook.author}.`;
    }

    generateReadingReport() {
        if (this.members.length === 0) {
            return "No members in the book club.";
        } else if (this.books.length === 0) {
            return `No available books in the ${this.library} library.`;
        } else {
            let reportArr = [`Available Books in ${this.library} library:`];
            this.books.forEach(book => {
                reportArr.push(`"${book.title}" by ${book.author}`);
            });
            return reportArr.join('\n');
        }
    }
}
const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
console.log(myBookClub.generateReadingReport());

